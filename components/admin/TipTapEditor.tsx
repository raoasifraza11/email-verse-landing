'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table';
import {
    Bold, Italic, Strikethrough, Heading2, Heading3,
    List, ListOrdered, Quote, Link as LinkIcon, Image as ImageIcon,
    Undo, Redo, Check, X, Table as TableIcon,
    Plus, Trash2, Columns, Rows
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface TipTapEditorProps {
    content: string;
    onChange: (html: string) => void;
    authToken: string;
}

const MenuBar = ({ editor, authToken }: { editor: any; authToken: string }) => {
    const [urlDialog, setUrlDialog] = useState<{ isOpen: boolean; type: 'link' | 'image'; url: string }>({
        isOpen: false,
        type: 'link',
        url: ''
    });
    const [isUploading, setIsUploading] = useState(false);

    if (!editor) {
        return null;
    }

    const handleOpenDialog = (type: 'link' | 'image') => {
        let currentUrl = '';
        if (type === 'link') {
            currentUrl = editor.getAttributes('link').href || '';
        }
        setUrlDialog({ isOpen: true, type, url: currentUrl });
    };

    const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json().catch(() => null);
                throw new Error(error?.error || 'Image upload failed');
            }

            const data = await response.json();
            if (data?.url) {
                editor.chain().focus().setImage({ src: data.url }).run();
            }
        } catch (error) {
            console.error('Error uploading image for editor:', error);
            alert('Error uploading image. Please try again.');
        } finally {
            setIsUploading(false);
            // Reset the input so the same file can be selected again if needed
            e.target.value = '';
        }
    };

    const handleSubmitUrl = () => {
        const { type, url } = urlDialog;

        if (type === 'link') {
            if (url === '') {
                editor.chain().focus().extendMarkRange('link').unsetLink().run();
            } else {
                editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
            }
        } else if (type === 'image' && url) {
            editor.chain().focus().setImage({ src: url }).run();
        }

        setUrlDialog({ isOpen: false, type: 'link', url: '' });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmitUrl();
        } else if (e.key === 'Escape') {
            setUrlDialog({ isOpen: false, type: 'link', url: '' });
        }
    };

    const ToolbarButton = ({
        onClick,
        isActive = false,
        disabled = false,
        children,
        title
    }: {
        onClick: () => void,
        isActive?: boolean,
        disabled?: boolean,
        children: React.ReactNode,
        title: string
    }) => (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`p-2 rounded-md transition-colors flex items-center justify-center ${isActive
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-600 hover:bg-gray-100'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </button>
    );

    return (
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                title="Bold"
            >
                <Bold className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                title="Italic"
            >
                <Italic className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                isActive={editor.isActive('strike')}
                title="Strikethrough"
            >
                <Strikethrough className="w-4 h-4" />
            </ToolbarButton>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
                title="Heading 2"
            >
                <Heading2 className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
                title="Heading 3"
            >
                <Heading3 className="w-4 h-4" />
            </ToolbarButton>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                title="Bullet List"
            >
                <List className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                title="Numbered List"
            >
                <ListOrdered className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                title="Quote"
            >
                <Quote className="w-4 h-4" />
            </ToolbarButton>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <ToolbarButton
                onClick={() => handleOpenDialog('link')}
                isActive={editor.isActive('link')}
                title="Link"
            >
                <LinkIcon className="w-4 h-4" />
            </ToolbarButton>
            <div className="flex items-center gap-1">
                <ToolbarButton
                    onClick={() => handleOpenDialog('image')}
                    title="Insert Image from URL"
                >
                    <ImageIcon className="w-4 h-4" />
                </ToolbarButton>
                <label className="p-2 rounded-md transition-colors flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer text-xs font-medium border border-dashed border-gray-300">
                    {isUploading ? 'Uploading…' : 'Upload'}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageFileChange}
                        disabled={isUploading}
                    />
                </label>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Table controls */}
            <ToolbarButton
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                title="Insert Table (3×3)"
            >
                <TableIcon className="w-4 h-4" />
            </ToolbarButton>
            {editor.isActive('table') && (
                <>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().addColumnAfter().run()}
                        title="Add Column After"
                    >
                        <Columns className="w-4 h-4" />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().addRowAfter().run()}
                        title="Add Row After"
                    >
                        <Rows className="w-4 h-4" />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().deleteColumn().run()}
                        title="Delete Column"
                    >
                        <span className="text-[10px] font-bold leading-none">-Col</span>
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().deleteRow().run()}
                        title="Delete Row"
                    >
                        <span className="text-[10px] font-bold leading-none">-Row</span>
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().deleteTable().run()}
                        title="Delete Table"
                    >
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </ToolbarButton>
                </>
            )}

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <ToolbarButton
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                title="Undo"
            >
                <Undo className="w-4 h-4" />
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                title="Redo"
            >
                <Redo className="w-4 h-4" />
            </ToolbarButton>

            {/* Inline URL Input Dialog */}
            {urlDialog.isOpen && (
                <div className="flex items-center w-full mt-2 px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm">
                    <span className="text-xs font-semibold text-gray-500 mr-2 uppercase tracking-wide">
                        {urlDialog.type}:
                    </span>
                    <input
                        type="url"
                        placeholder="https://..."
                        value={urlDialog.url}
                        onChange={(e) => setUrlDialog({ ...urlDialog, url: e.target.value })}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="flex-1 min-w-0 text-sm focus:outline-none bg-transparent"
                    />
                    <button
                        onClick={handleSubmitUrl}
                        className="p-1.5 ml-1 text-green-600 hover:bg-green-50 rounded"
                        title="Submit"
                    >
                        <Check className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setUrlDialog({ isOpen: false, type: 'link', url: '' })}
                        className="p-1.5 ml-1 text-gray-400 hover:bg-gray-100 rounded"
                        title="Cancel"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
    const editor = useEditor({
        // `content` here is the *initial* value only — TipTap ignores prop changes after mount.
        // The useEffect below keeps the editor in sync when editing an existing post.
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                // Disable heading levels we rarely use to keep HTML clean
                heading: {
                    levels: [1, 2, 3, 4],
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-primary-600 underline cursor-pointer',
                },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'rounded-lg max-w-full h-auto',
                },
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'w-full border-collapse border border-gray-300 my-4',
                },
            }),
            TableRow.configure({
                HTMLAttributes: {
                    class: 'border border-gray-300',
                },
            }),
            TableHeader.configure({
                HTMLAttributes: {
                    class: 'bg-gray-100 font-semibold border border-gray-300 px-3 py-2 text-left text-sm',
                },
            }),
            TableCell.configure({
                HTMLAttributes: {
                    class: 'border border-gray-300 px-3 py-2 text-sm align-top',
                },
            }),
        ],
        content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base max-w-none focus:outline-none min-h-[400px] p-4 bg-white rounded-b-lg border-x border-b border-gray-200 text-gray-800',
            },
            // Normalize pasted HTML: strip <br> tags inside paragraphs so that content
            // copied from websites or PDFs with hard column-wraps doesn't embed
            // line-break characters at mid-word positions in the saved HTML.
            transformPastedHTML(html: string): string {
                return html
                    // Replace <br> inside <p>...</p> blocks with a single space
                    .replace(/<p([^>]*)>([\s\S]*?)<\/p>/gi, (_match: string, attrs: string, inner: string) =>
                        `<p${attrs}>${inner.replace(/<br\s*\/?>/gi, ' ').replace(/ {2,}/g, ' ').trim()}</p>`
                    );
            },
            // Normalize pasted plain text: collapse hard newlines to spaces.
            transformPastedText(text: string): string {
                return text.replace(/\r?\n/g, ' ').replace(/ {2,}/g, ' ').trim();
            },
        },
        onUpdate: ({ editor }) => {
            // Get the pure HTML state of the editor on every change
            const html = editor.getHTML();
            onChange(html);
        },
    });

    // Sync editor content when editing an existing post.
    // BlogPostForm loads post data via useEffect *after* this editor mounts, so the
    // editor's initial content is always an empty string for existing posts.
    // When `content` prop changes (post data arrives) and the editor is ready,
    // programmatically set the content — but only if it actually differs to avoid
    // resetting the cursor position while the user is actively typing.
    useEffect(() => {
        if (!editor || !content) return;
        if (editor.getHTML() !== content) {
            editor.commands.setContent(content, false /* don't emit update */);
        }
    }, [editor, content]);

    return (
        <div className="w-full relative shadow-sm rounded-lg flex flex-col focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />

            {/* Required CSS to stop TipTap from inheriting global strange prose behaviors inside the editor view */}
            <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: 'Write something amazing...';
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror {
          word-wrap: break-word;
          white-space: pre-wrap;
          outline: none;
        }
        .ProseMirror p {
          margin-bottom: 1em;
          margin-top: 1em;
        }
        .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 1rem 0;
          table-layout: fixed;
          overflow: hidden;
        }
        .ProseMirror td,
        .ProseMirror th {
          min-width: 80px;
          border: 1px solid #d1d5db;
          padding: 6px 10px;
          vertical-align: top;
          position: relative;
          box-sizing: border-box;
          word-break: break-word;
        }
        .ProseMirror th {
          background-color: #f3f4f6;
          font-weight: 600;
          text-align: left;
        }
        .ProseMirror .selectedCell::after {
          z-index: 2;
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(99, 102, 241, 0.15);
          pointer-events: none;
        }
        .ProseMirror .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: -2px;
          width: 4px;
          background-color: #6366f1;
          pointer-events: none;
          cursor: col-resize;
        }
        .tableWrapper {
          overflow-x: auto;
          margin: 1rem 0;
        }
      `}</style>
        </div>
    );
}
