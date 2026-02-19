/**
 * AI Sales Tools – Pros & Cons
 * Sourced from: https://www.salescaptain.io/ai-sales-tools
 */

export interface ToolProsCons {
  name: string
  bestFor?: string
  pros: string[]
  cons: string[]
}

export const aiToolsProsCons: Record<string, ToolProsCons> = {
  // Data and Prospecting
  Clay: {
    name: 'Clay',
    bestFor: 'Teams that treat outbound like a data pipeline and want dynamic lists that refresh as the market shifts.',
    pros: [
      'High control over fields, logic, and scoring',
      'Easy to blend multiple data sources into one clean record',
      'Routing rules that send only the best contacts to sequences'
    ],
    cons: [
      'Power comes with a learning curve',
      'Works best when someone owns data hygiene and QA'
    ]
  },
  'Seamless.ai': {
    name: 'Seamless.ai',
    bestFor: 'Sellers who want speed inside LinkedIn and the open web.',
    pros: [
      'Fast contact capture from profiles and search results',
      'Simple verification reduces bounce pain',
      'Very low learning curve for new reps'
    ],
    cons: [
      'Thinner coverage in older industries outside tech',
      'Lighter on deep firmographic context'
    ]
  },
  Cognism: {
    name: 'Cognism',
    bestFor: 'Teams selling into Europe that care about clean mobile numbers and documented consent.',
    pros: [
      'Reliable phone data and do-not-call compliance for regulated regions',
      'Intent filters and job change alerts that surface real timing',
      'Support and onboarding that help multi-region teams move faster'
    ],
    cons: [
      'Email accuracy trails its phone strength in some segments',
      'Contracts and pricing can feel heavy for very small teams'
    ]
  },
  Prospeo: {
    name: 'Prospeo',
    bestFor: 'Outbound teams that already have a sequencer and need fresh, accurate contact data.',
    pros: [
      'High deliverability accuracy for verified contact data',
      'Includes mobile numbers; Chrome extension, bulk upload, and API support',
      'Clean data pipe without paying for a bloated database'
    ],
    cons: [
      'Not a full engagement platform—you need other tools for sequencing',
      'Bulk processing and enrichment depth are lighter than enterprise providers'
    ]
  },
  Apollo: {
    name: 'Apollo',
    bestFor: 'Lean teams that want data and sending in the same place.',
    pros: [
      'Smooth flow from saved search to sequence to report',
      'Affordable entry point for startups',
      'Useful intent and technology filters'
    ],
    cons: [
      'Deliverability requires careful domain warmup at higher volumes',
      'Analytics depth trails enterprise engagement tools'
    ]
  },
  Crunchbase: {
    name: 'Crunchbase',
    bestFor: 'Teams that want early visibility into fast-growing companies and funding activity.',
    pros: [
      'Strong visibility into funding, hiring, and industry shifts',
      'Useful for building targeted lists based on growth stage',
      'Reliable trigger source for outbound timing'
    ],
    cons: [
      'Some records can lag behind real market activity',
      'No sequencing, enrichment, or engagement stack'
    ]
  },
  Bombora: {
    name: 'Bombora',
    bestFor: 'ABM and outbound teams that score accounts on fit and intent.',
    pros: [
      'Surge signals surface accounts researching relevant topics',
      'Integrates into CRM and MAP systems for scoring and routing',
      'Helps move from static ICP lists to dynamic prioritization'
    ],
    cons: [
      'Intent behavior can be noisy and needs validation',
      'Requires structured workflows to turn signals into action'
    ]
  },
  Pitchbook: {
    name: 'Pitchbook',
    bestFor: 'Enterprise or mid-market motions where deal size justifies research depth.',
    pros: [
      'Deep data across capital markets and private companies',
      'Strong filtering for late-stage or financially complex targets',
      'Helps create highly specific messaging based on financial context'
    ],
    cons: [
      'Expensive and heavy if your motion is high-volume SMB outbound',
      'Learning curve requires a research mindset'
    ]
  },
  FullEnrich: {
    name: 'FullEnrich',
    bestFor: 'Teams who already know who they want to target and need clean contact data fast.',
    pros: [
      'High match rates due to multi-source enrichment',
      'Works well with CSVs, automation tools, and APIs',
      'Helps reduce bounce rate when running volume'
    ],
    cons: [
      'Output quality still depends on input quality',
      'Not a sequencing or routing system'
    ]
  },
  Zoominfo: {
    name: 'Zoominfo',
    bestFor: 'Account planning and multi-thread mapping in mid-market and enterprise.',
    pros: [
      'Rich company context and verified org views',
      'Scoops that flag expansion, leadership moves, and tech changes',
      'Wide integration ecosystem for RevOps'
    ],
    cons: [
      'Can feel complex for small teams that want speed',
      'Costs rise quickly as you add seats and credit packs'
    ]
  },
  // Outreach and Sequencing
  'Reply.io': {
    name: 'Reply.io',
    bestFor: 'SMB and mid-market teams that want blended sequences (email, calls, social).',
    pros: [
      'Smooth task queues that keep reps moving',
      'Contact-level engagement views for quick triage',
      'Solid native and third-party integrations'
    ],
    cons: [
      'Deliverability depends on careful list management',
      'UI can feel busy until you pick a routine'
    ]
  },
  Instantly: {
    name: 'Instantly',
    bestFor: 'Teams that rely on cold email and want healthy sending domains.',
    pros: [
      'Domain warmup, health checks, and simple throttling',
      'Clean shared inbox experience for reply handling',
      'Straightforward seat-based pricing'
    ],
    cons: [
      'Limited native support for call and social steps',
      'Reporting is lighter than enterprise platforms'
    ]
  },
  HeyReach: {
    name: 'HeyReach',
    bestFor: 'Agencies and growth teams managing multiple LinkedIn accounts and campaigns.',
    pros: [
      'Multi-sender LinkedIn account support to scale beyond per-account limits',
      'Unified inbox and campaign management make reply tracking easier',
      'Agency-focused features: multiple campaigns, account rotation, whitelabel'
    ],
    cons: [
      'Largely LinkedIn-focused; email or other channels need separate tools',
      'Managing multiple accounts introduces operational complexity'
    ]
  },
  Salesloft: {
    name: 'Salesloft',
    bestFor: 'Teams that blend phone, email, and guided tasks each day.',
    pros: [
      'Solid dialer with recording and click-to-call',
      'Coachable metrics by cadence step and persona',
      'Intuitive dashboards for day-to-day management'
    ],
    cons: [
      'Email experimentation is slower than lightweight tools',
      'Setup takes time if you want clean governance'
    ]
  },
  Overloop: {
    name: 'Overloop',
    bestFor: 'Scrappy teams testing new markets or offers.',
    pros: [
      'Easy to learn and quick to launch',
      'Good support for LinkedIn steps and manual touches',
      'Clear, predictable cost structure'
    ],
    cons: [
      'Fewer enterprise features for large orgs',
      'Limited analytics depth for complex reporting'
    ]
  },
  Expandi: {
    name: 'Expandi',
    bestFor: 'Teams focused on LinkedIn outreach who want to scale connection and message flows safely.',
    pros: [
      'Cloud-based LinkedIn automation, fewer local system dependencies',
      'Sequence management: connection request → message → follow-up',
      'Simpler than full multichannel stacks if the primary channel is LinkedIn'
    ],
    cons: [
      'Outside LinkedIn you need additional tools',
      'LinkedIn automation always carries platform risk'
    ]
  },
  Lemlist: {
    name: 'Lemlist',
    bestFor: 'Teams focused on email-driven outbound who want LinkedIn follow-ups and personalization.',
    pros: [
      'Rich personalization options that customize messages at scale',
      'Multichannel sequences combine email and LinkedIn',
      'Built-in warm-up and deliverability utilities'
    ],
    cons: [
      'UI and workflow become complex when scaling beyond basic sequences',
      'Cost increases significantly with multichannel or higher-tier seats'
    ]
  },
  Salesrobot: {
    name: 'Salesrobot',
    bestFor: 'Agencies and growth teams running email + LinkedIn in parallel.',
    pros: [
      'Supports both email and LinkedIn outreach for hybrid campaigns',
      'Strong personalization and targeting features',
      'Designed for agencies; easier entry cost than enterprise tools'
    ],
    cons: [
      'Feature set may be lighter than top-tier enterprise platforms',
      'Automation risk on LinkedIn—sender hygiene is still critical'
    ]
  },
  Smartlead: {
    name: 'Smartlead',
    bestFor: 'Lean outbound teams scaling email campaigns and needing strong deliverability controls.',
    pros: [
      'Strong focus on deliverability through domain hygiene and verification',
      'Unified campaign management and inbox handling',
      'Better reporting on key email metrics than basic tools'
    ],
    cons: [
      'Primarily email-centric; multichannel requires other tools',
      'Very dependent on list hygiene and sequence discipline'
    ]
  },
  'Outreach.io': {
    name: 'Outreach.io',
    bestFor: 'Larger teams that need roles, permissions, and deep analytics.',
    pros: [
      'Robust admin controls that match complex orgs',
      'Clear task queues across channels at the rep level',
      'Reply reason tagging that feeds real message testing'
    ],
    cons: [
      'Requires process discipline to shine',
      'Higher total cost of ownership and setup effort'
    ]
  },
  // Scheduling & Automation
  LaGrowthMachine: {
    name: 'LaGrowthMachine',
    bestFor: 'Teams running coordinated outreach across email, LinkedIn, Twitter, and voice.',
    pros: [
      'True multichannel support (LinkedIn + email + Twitter + voice)',
      'Unified inbox for managing replies across channels',
      'Workflow builder with drag-and-drop sequencing and condition logic'
    ],
    cons: [
      'Setup and operations are more complex',
      'Higher cost; if you only use one channel, investment may under-deliver'
    ]
  },
  'Chili Piper': {
    name: 'Chili Piper',
    bestFor: 'Teams that want to turn demo requests into meetings without back-and-forth.',
    pros: [
      'Instant routing by territory, ownership, and account status',
      'Holdable links that reduce no-shows',
      'Reliable Salesforce sync for reporting'
    ],
    cons: [
      'Pricey for very small teams',
      'Territory setup needs careful planning'
    ]
  },
  'Calendly with AI Routing': {
    name: 'Calendly with AI Routing',
    bestFor: 'Small teams that want simple booking with smart routes.',
    pros: [
      'Fast to deploy across the team',
      'Many integrations with email and CRM',
      'Clean experience for the buyer'
    ],
    cons: [
      'Routing depth is lighter than enterprise tools',
      'Admin controls are basic for large orgs'
    ]
  },
  'Zapier AI Agents for Sales': {
    name: 'Zapier AI Agents for Sales',
    bestFor: 'Teams without engineers who still want automation.',
    pros: [
      'Huge app directory that covers most SaaS',
      'Quick wins for alerts, enrichment, and updates',
      'New agent features for simple decision-making'
    ],
    cons: [
      'Can become a web of zaps without documentation',
      'Not ideal for heavy data transformation at scale'
    ]
  },
  'My AI Front Desk': {
    name: 'My AI Front Desk',
    bestFor: 'Service-heavy teams that field many inbound calls.',
    pros: [
      'Friendly voice with natural flows',
      'Call summaries that push to your CRM',
      'Instant scheduling to reduce friction'
    ],
    cons: [
      'Needs careful scripting to avoid odd responses',
      'Not designed for complex discovery or qualification'
    ]
  },
  'Common Room': {
    name: 'Common Room',
    bestFor: 'ABM and outbound teams that rely on timing and want to catch buyers earlier.',
    pros: [
      'Unifies signals from multiple sources into one actionable view',
      'Connects accounts to real people for targeted outreach',
      'Enables playbooks triggered by behavior'
    ],
    cons: [
      'Needs strong CRM and process adoption to drive pipeline',
      'Can create noise if filters and alert rules are sloppy'
    ]
  },
  Postaga: {
    name: 'Postaga',
    bestFor: 'Teams that invest in content and want pipeline from backlinks and co-marketing.',
    pros: [
      'Campaign templates for different outreach plays',
      'Personalization helpers so messages do not feel generic',
      'Reporting on placements and replies'
    ],
    cons: [
      'Focuses on outreach, not deep sales engagement',
      'Works best when your offer is specific and valuable'
    ]
  },
  RB2B: {
    name: 'RB2B',
    bestFor: 'Teams with real traffic that want to turn anonymous website visits into pipeline triggers.',
    pros: [
      'Surfaces companies and individuals behind site visits',
      'Easy integrations with CRMs and messaging tools',
      'Fast setup and quick visibility into high-intent visitors'
    ],
    cons: [
      'Identification quality still requires filtering and validation',
      'Only valuable if you have a system to act quickly on leads'
    ]
  },
  Unify: {
    name: 'Unify',
    bestFor: 'Teams who treat outbound like a system and want signals, data, and outreach under one roof.',
    pros: [
      'Combines intent, enrichment, and outreach—fewer moving parts',
      'Helps run fast campaigns based on real-time buyer signals',
      'Good fit for teams avoiding tool sprawl'
    ],
    cons: [
      'Broad platform—requires clear process and ownership',
      'If you only use one feature, you may overpay'
    ]
  },
  Factors: {
    name: 'Factors',
    bestFor: 'Growth-stage companies that need one view of account behavior.',
    pros: [
      'Unifies signals across ads, web, CRM, and product usage',
      'Automates alerts and workflows based on real engagement',
      'Helps allocate ad and sales spend toward high-intent accounts'
    ],
    cons: [
      'Requires thoughtful onboarding and attribution setup',
      'Designed for growth-stage or enterprise; early-stage may outpace benefit'
    ]
  },
  // Conversation Intelligence
  'Gong.io': {
    name: 'Gong.io',
    bestFor: 'Revenue leaders who want visibility into risk and repeatable moments that win.',
    pros: [
      'Strong pattern detection and topic tracking across calls',
      'Deal boards with risk flags and activity heat',
      'Playlists for sharing best moments across the team'
    ],
    cons: [
      'Premium price point that requires clear ROI',
      'Change management needed to tag, coach, and follow through'
    ]
  },
  'Chorus.ai': {
    name: 'Chorus.ai',
    bestFor: 'Enablement teams that want structured feedback loops.',
    pros: [
      'Clear scorecards for discovery, next steps, and objection handling',
      'Content engagement tracking inside the call timeline',
      'Snippets and playlists for training and onboarding'
    ],
    cons: [
      'Reporting can feel less intuitive without training',
      'Implementation needs planning for the best results'
    ]
  },
  Avoma: {
    name: 'Avoma',
    bestFor: 'Teams that want post-call automation without a heavy footprint.',
    pros: [
      'Helpful summaries and highlight reels',
      'Easy push to CRM and project tools for handoffs',
      'Friendly pricing for smaller teams'
    ],
    cons: [
      'Analytics depth is lighter than Gong or Chorus',
      'Live coaching features are basic'
    ]
  },
  'Fireflies.ai': {
    name: 'Fireflies.ai',
    bestFor: 'Teams that want every call captured and searchable.',
    pros: [
      'Quick setup across major meeting apps',
      'Strong search that cuts across calls and speakers',
      'Affordable for broad deployment'
    ],
    cons: [
      'Accuracy varies with audio quality and accents',
      'Coaching features are limited'
    ]
  },
  'Dialpad AI': {
    name: 'Dialpad AI',
    bestFor: 'Call-heavy teams that live on voice.',
    pros: [
      'Live prompts for objections and talk tracks in the moment',
      'Unified voice and messaging under one roof',
      'Fast call summaries that reduce note-taking'
    ],
    cons: [
      'Less flexible if you already have a dialer you love',
      'Admin panels can feel dense at first'
    ]
  },
  // CRM and Pipeline Management
  'Salesforce Einstein': {
    name: 'Salesforce Einstein',
    bestFor: 'Large orgs already invested in Salesforce.',
    pros: [
      'Native experience that fits existing workflows',
      'Flexible models for leads, opportunities, and actions',
      'Massive ecosystem for extensions'
    ],
    cons: [
      'Requires clean fields and process discipline',
      'Configuration can sprawl without ownership'
    ]
  },
  'HubSpot Sales Hub': {
    name: 'HubSpot Sales Hub',
    bestFor: 'Teams that want an easy-to-run go-to-market stack.',
    pros: [
      'Simple UX that reps actually use',
      'Strong marketing-to-sales handoff and attribution',
      'Useful automation without code'
    ],
    cons: [
      'Customization hits limits at very large scale',
      'Forecasting depth trails tools like Clari'
    ]
  },
  'Microsoft Dynamics 365': {
    name: 'Microsoft Dynamics 365',
    bestFor: 'Companies deep in the Microsoft ecosystem.',
    pros: [
      'Email summaries and suggested next steps inside Outlook',
      'Teams integration for quick collaboration on deals',
      'Enterprise-grade security and permissions'
    ],
    cons: [
      'Plugins and community are less vibrant than Salesforce',
      'UI can feel complex for new admins'
    ]
  },
  'Pipedrive AI': {
    name: 'Pipedrive AI',
    bestFor: 'Small to mid teams that want clarity without bloat.',
    pros: [
      'Easy stage management and visual boards',
      'Helpful nudges on next best actions',
      'Friendly pricing and fast onboarding'
    ],
    cons: [
      'Limited governance for complex orgs',
      'Fewer native analytics for leadership'
    ]
  },
  Clari: {
    name: 'Clari',
    bestFor: 'Orgs with multi-segment pipelines and longer cycles.',
    pros: [
      'Risk views by segment, rep, and time in stage',
      'Coverage analysis that ties pipeline to target',
      'Hygiene rituals that improve data quality'
    ],
    cons: [
      'Requires CRM discipline to shine',
      'Premium cost that needs executive sponsorship'
    ]
  },
  // Content & Messaging Assistants
  Lavender: {
    name: 'Lavender',
    bestFor: 'Teams that want higher reply rates without hiring a copywriter.',
    pros: [
      'Short, specific advice at the line level',
      'Reading level and tone checks that prevent fluff',
      'Fast learning curve with visible score improvement'
    ],
    cons: [
      'Works best when reps follow the guidance',
      'Focused on email, not full enablement'
    ]
  },
  'Regie.ai': {
    name: 'Regie.ai',
    bestFor: 'Teams that want templates tied to personas and stages.',
    pros: [
      'Consistent voice across reps and channels',
      'Reusable libraries for scale',
      'Collaboration features for managers and enablement'
    ],
    cons: [
      'Can create sameness if you never edit the output',
      'Needs real signals to avoid generic language'
    ]
  },
  Crystal: {
    name: 'Crystal',
    bestFor: 'Tailoring outreach to the person behind the inbox.',
    pros: [
      'Quick tone recommendations that are easy to apply',
      'Helpful for call prep and meeting notes',
      'Simple plugins for common workflows'
    ],
    cons: [
      'Not always accurate for low-profile contacts',
      'Works best as a hint, not a script'
    ]
  },
  jasper: {
    name: 'Jasper',
    bestFor: 'Teams that need emails, pages, and collateral in the same voice.',
    pros: [
      'Reusable style guides and tone rules',
      'Strong template system for common assets',
      'Good for enablement content beyond email'
    ],
    cons: [
      'Can feel heavy for quick outbound tests',
      'Requires time to build and maintain a voice library'
    ]
  },
  'Copy.ai': {
    name: 'Copy.ai',
    bestFor: 'Teams that run weekly tests on subject lines and openers.',
    pros: [
      'Fast generation of multiple variants',
      'Helpful for subject lines and call-to-action phrasing',
      'Easy to use for new reps'
    ],
    cons: [
      'Quality depends on your prompts',
      'Needs human editing to remove generic phrasing'
    ]
  }
}

/** Get pros/cons for a tool by name (case-insensitive, handles minor variations). */
export function getToolProsCons(toolName: string): ToolProsCons | null {
  const normalized = toolName.trim()
  if (aiToolsProsCons[normalized]) return aiToolsProsCons[normalized]
  const lower = normalized.toLowerCase()
  const key = Object.keys(aiToolsProsCons).find((k) => k.toLowerCase() === lower)
  return key ? aiToolsProsCons[key] : null
}
