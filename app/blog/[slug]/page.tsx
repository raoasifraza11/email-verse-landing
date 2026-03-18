import { notFound } from 'next/navigation';
import { Clock, User, Calendar } from 'lucide-react';
import { BlogPost, getFirestore, BLOG_POSTS_COLLECTION, docToBlogPost } from '@/lib/firestore';
import { marked } from 'marked';
import parse, { DOMNode, Element as HtmlElement, attributesToProps, domToReact, HTMLReactParserOptions } from 'html-react-parser';

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const firestore = getFirestore();

    // Try to get by ID first
    const docRef = firestore.collection(BLOG_POSTS_COLLECTION).doc(slug);
    const doc = await docRef.get();

    if (doc.exists) {
      return docToBlogPost(doc);
    }

    // If not found by ID, try to find by slug
    const slugQuery = await firestore
      .collection(BLOG_POSTS_COLLECTION)
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (!slugQuery.empty) {
      return docToBlogPost(slugQuery.docs[0]);
    }

    return null;
  } catch (error) {
    console.error('Error fetching blog post directly:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - EmailVerse Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const preview = resolvedSearchParams.preview;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // If post is not published, only allow viewing if preview parameter is true
  if (!post.published && preview !== 'true') {
    notFound();
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-accent-500 to-accent-700 text-white rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5">
                  ★ Featured
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <img
            src={post.imageUrl}
            alt={(post as any).imageAlt || post.title}
            className="w-full h-96 object-cover rounded-xl shadow-xl"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8 pb-32 overflow-hidden">
        <div className="font-sans text-[20px] text-gray-800 leading-[32px] break-words whitespace-normal">
          {(() => {
            // Check if it's markdown or HTML
            const isHtml = post.content.includes('<') && post.content.includes('>');
            const rawContent = isHtml ? post.content : marked.parse(post.content) as string;

            // Pre-process the HTML string BEFORE parsing.
            //
            // WHY: html-react-parser only calls the replace function for nodes it visits
            // during its own traversal. When the replace function returns a DOM node
            // directly (e.g. for <p>), the parser renders that node's children WITHOUT
            // re-running replace on them — so any <br> or whitespace fixes inside the
            // replace function are silently skipped for nested children.
            //
            // The only 100% reliable approach is to fix the HTML string up-front:
            //
            //  1. Strip <br> tags — content pasted from websites/PDFs embeds <br> at the
            //     exact pixel-column where each source line wrapped, splitting words
            //     mid-character (e.g. "j<br>ob", "heat-<br>emitting", "pla<br>in").
            //     Removing <br> rejoins fragments: adjacent source spaces cover word gaps.
            //
            //  2. Collapse literal \n inside paragraph text — some rich-text pipelines
            //     store hard newlines inside <p> tags; collapse them to spaces.
            const contentToParse = rawContent
              // Remove every <br> / <br/> / <br /> tag
              .replace(/<br\s*\/?>/gi, '')
              // Collapse literal newlines that may appear inside tag content
              .replace(/(\S)\n(\S)/g, '$1 $2')   // mid-word newline  → space
              .replace(/\n\s+/g, ' ')             // newline + spaces  → single space
              .replace(/\s+\n/g, ' ');            // spaces + newline  → single space

            // Use a named options object so the table case can pass it back into
            // domToReact — without this, thead/tbody/tr/th/td children never receive
            // their Tailwind classes (no cell borders, no header shading, nothing).
            const parseOptions: HTMLReactParserOptions = {
              replace: (domNode) => {
                const node = domNode as HtmlElement;
                if (node.type !== 'tag') return domNode;

                // Strip paragraphs that contain only whitespace or &nbsp;
                if (node.name === 'p' && node.children &&
                  node.children.every((c: any) =>
                    (c.type === 'text' && /^\s*$/.test(c.data)) ||
                    (c.type === 'tag' && c.name === 'br')
                  )) {
                  return <></>;
                }

                switch (node.name) {
                  case 'h1':
                  case 'h2':
                    node.attribs.className = `${node.attribs.className || ''} text-[32px] font-bold text-gray-900 mt-12 mb-6 leading-tight tracking-tight`.trim();
                    return node;
                  case 'h3':
                  case 'h4':
                    node.attribs.className = `${node.attribs.className || ''} text-[24px] font-bold text-gray-900 mt-10 mb-4 leading-snug tracking-tight`.trim();
                    return node;
                  case 'p':
                    node.attribs.className = `${node.attribs.className || ''} text-gray-800 my-7 text-[20px] leading-[32px]`.trim();
                    return node;
                  case 'a':
                    node.attribs.className = `${node.attribs.className || ''} text-primary-600 font-medium hover:text-primary-700 underline break-all`.trim();
                    return node;
                  case 'ul':
                    node.attribs.className = `${node.attribs.className || ''} list-disc pl-8 my-7 text-gray-800 text-[20px] leading-[32px] space-y-3 marker:text-gray-400`.trim();
                    return node;
                  case 'ol':
                    node.attribs.className = `${node.attribs.className || ''} list-decimal pl-8 my-7 text-gray-800 text-[20px] leading-[32px] space-y-3 marker:text-gray-400 marker:font-medium`.trim();
                    return node;
                  case 'li':
                    node.attribs.className = `${node.attribs.className || ''} pl-2 pb-1`.trim();
                    return node;
                  case 'blockquote':
                    node.attribs.className = `${node.attribs.className || ''} border-l-[3px] border-gray-900 pl-6 py-1 my-10 italic text-gray-600 text-[22px] leading-[35px] font-serif bg-transparent`.trim();
                    return node;
                  case 'img':
                    node.attribs.className = `${node.attribs.className || ''} rounded-lg shadow-md my-8 w-full h-auto object-contain max-h-[600px]`.trim();
                    return node;
                  case 'table': {
                    const props = attributesToProps(node.attribs);
                    // border-collapse + explicit border on the table draws a solid outer frame;
                    // each cell also gets border-gray-300 so every grid line is visible.
                    props.className = `${props.className || ''} w-full text-left border-collapse mt-8 mb-10 bg-white`.trim();
                    return (
                      // The wrapper div supplies the outer border (border-2) and rounds the corners.
                      // overflow-hidden clips cell backgrounds to the rounded corners.
                      <div className="w-full overflow-x-auto my-8 rounded-lg border-2 border-gray-300 shadow-sm overflow-hidden">
                        <table {...props}>
                          {node.children && domToReact(node.children as DOMNode[], parseOptions)}
                        </table>
                      </div>
                    );
                  }
                  case 'thead':
                    node.attribs.className = `${node.attribs.className || ''} bg-gray-50 border-b-2 border-gray-300`.trim();
                    return node;
                  case 'tbody':
                    node.attribs.className = `${node.attribs.className || ''} divide-y divide-gray-200`.trim();
                    return node;
                  case 'tr':
                    node.attribs.className = `${node.attribs.className || ''} even:bg-gray-50/40`.trim();
                    return node;
                  case 'th':
                    // No font-weight override — browser default makes <th> bold, which is
                    // correct for header rows. If the user didn't want bold they'd use <td>.
                    node.attribs.className = `${node.attribs.className || ''} px-5 py-3 text-left text-[15px] text-gray-800 border-r border-gray-300 last:border-r-0`.trim();
                    return node;
                  case 'td':
                    // No font-weight override — respects whatever the user set in the editor
                    // (plain text stays normal, <strong> wrapped text stays bold).
                    node.attribs.className = `${node.attribs.className || ''} px-5 py-3 text-[15px] text-gray-700 border-r border-gray-200 last:border-r-0`.trim();
                    return node;
                  default:
                    return domNode;
                }
              }
            };
            return parse(contentToParse, parseOptions);
          })()}
        </div>
      </div>
    </article>
  );
}

