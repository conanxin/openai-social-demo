/**
 * Mock data for the OpenAI Social Demo
 * All data is synthetic — no real API calls are made.
 */

export interface FeedPost {
  id: string;
  author: string;
  avatar: string;
  type: 'Sora' | 'Codex' | 'Agent' | 'ChatGPT';
  title: string;
  description: string;
  tags: string[];
  stats: { remixes: number; forks: number; likes: number };
  timestamp: string;
}

export interface SoraCard {
  id: string;
  title: string;
  prompt: string;
  style: string;
  duration: string;
  thumbnail: string;
}

export interface CodexProject {
  id: string;
  name: string;
  status: 'Building' | 'Preview Ready' | 'Deployed';
  filesChanged: number;
  deployTarget: string;
  description: string;
  tech: string[];
}

export interface AgentCard {
  id: string;
  name: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  installed: boolean;
}

export interface PulseItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  action: string;
}

export const feedPosts: FeedPost[] = [
  {
    id: 'f1',
    author: 'Maya Chen',
    avatar: 'M',
    type: 'Sora',
    title: 'Tokyo Night Market — AI Short Film',
    description: 'A 48-second cinematic walk through a neon-lit alley generated from a single text prompt.',
    tags: ['cinematic', 'night', 'japan'],
    stats: { remixes: 124, forks: 34, likes: 892 },
    timestamp: '2h ago',
  },
  {
    id: 'f2',
    author: 'Alex Rivera',
    avatar: 'A',
    type: 'Codex',
    title: 'Auto-Deploy GitHub Pages from Markdown',
    description: 'A CLI tool that watches a markdown file and publishes a styled reading page on every save.',
    tags: ['cli', 'github-pages', 'automation'],
    stats: { remixes: 45, forks: 89, likes: 312 },
    timestamp: '4h ago',
  },
  {
    id: 'f3',
    author: 'Sam Park',
    avatar: 'S',
    type: 'Agent',
    title: 'Daily Research Briefing Agent',
    description: 'An agent that reads arXiv, Hacker News, and your RSS feeds, then writes a 3-minute audio briefing.',
    tags: ['agent', 'research', 'audio'],
    stats: { remixes: 67, forks: 156, likes: 445 },
    timestamp: '6h ago',
  },
  {
    id: 'f4',
    author: 'Conan',
    avatar: 'C',
    type: 'ChatGPT',
    title: 'Longform Translation Pipeline',
    description: 'A workflow that turns any English article into a Chinese reading page with edge-tts audio and inline glossary.',
    tags: ['translation', 'tts', 'workflow'],
    stats: { remixes: 23, forks: 78, likes: 203 },
    timestamp: '8h ago',
  },
  {
    id: 'f5',
    author: 'Jordan Lee',
    avatar: 'J',
    type: 'Sora',
    title: 'Product Concept — Minimalist Lamp',
    description: 'A rotating 360° product video for a sunset ambient wall lamp. Generated in under 3 minutes.',
    tags: ['product', 'minimal', 'lighting'],
    stats: { remixes: 89, forks: 12, likes: 567 },
    timestamp: '12h ago',
  },
  {
    id: 'f6',
    author: 'Riley Kim',
    avatar: 'R',
    type: 'Codex',
    title: 'Personal Knowledge Dashboard',
    description: 'A Next.js dashboard that visualizes your reading history, agent outputs, and project milestones.',
    tags: ['dashboard', 'nextjs', 'visualization'],
    stats: { remixes: 34, forks: 67, likes: 289 },
    timestamp: '1d ago',
  },
];

export const soraCards: SoraCard[] = [
  {
    id: 's1',
    title: 'AI Short Film',
    prompt: 'A quiet street in Kyoto at dawn, cherry blossoms falling, soft morning light, cinematic 35mm film grain',
    style: 'Cinematic',
    duration: '0:48',
    thumbnail: 'bg-gradient-to-br from-rose-100 to-amber-50',
  },
  {
    id: 's2',
    title: 'Product Concept Video',
    prompt: 'A minimalist desk lamp rotating on a white surface, soft shadows, studio lighting, product photography',
    style: 'Product',
    duration: '0:12',
    thumbnail: 'bg-gradient-to-br from-stone-100 to-neutral-50',
  },
  {
    id: 's3',
    title: 'Travel Memory Remix',
    prompt: 'First-person view walking through a Moroccan bazaar, spices, textiles, warm golden hour light',
    style: 'Documentary',
    duration: '0:36',
    thumbnail: 'bg-gradient-to-br from-amber-100 to-orange-50',
  },
  {
    id: 's4',
    title: 'Character Scene',
    prompt: 'A young inventor in a cozy workshop, surrounded by sketches and prototypes, soft window light',
    style: 'Narrative',
    duration: '0:24',
    thumbnail: 'bg-gradient-to-br from-slate-100 to-stone-50',
  },
];

export const codexProjects: CodexProject[] = [
  {
    id: 'c1',
    name: 'AI Reading Page Generator',
    status: 'Preview Ready',
    filesChanged: 12,
    deployTarget: 'GitHub Pages',
    description: 'Converts markdown articles into styled HTML reading pages with dark mode, typography scaling, and audio player.',
    tech: ['Next.js', 'Tailwind', 'Edge TTS'],
  },
  {
    id: 'c2',
    name: 'Personal Briefing Agent Dashboard',
    status: 'Building',
    filesChanged: 8,
    deployTarget: 'Vercel',
    description: 'A dashboard that aggregates agent outputs, cron job logs, and project health metrics into a single view.',
    tech: ['React', 'Recharts', 'SQLite'],
  },
  {
    id: 'c3',
    name: 'GitHub Pages Auto Publisher',
    status: 'Deployed',
    filesChanged: 5,
    deployTarget: 'GitHub Pages',
    description: 'A GitHub Action that automatically publishes a static site when a markdown file is updated in the repo.',
    tech: ['GitHub Actions', 'Python', 'Jinja2'],
  },
];

export const agentCards: AgentCard[] = [
  {
    id: 'a1',
    name: 'Daily Research Agent',
    purpose: 'Scans arXiv, HN, and RSS feeds every morning and writes a structured briefing.',
    inputs: ['RSS feeds', 'arXiv keywords', 'HN threshold'],
    outputs: ['Markdown brief', 'Audio summary', 'Trend graph'],
    installed: false,
  },
  {
    id: 'a2',
    name: 'Longform Translation Agent',
    purpose: 'Turns any English article into a polished Chinese reading page with glossary and audio.',
    inputs: ['Article URL', 'Target tone', 'Voice preference'],
    outputs: ['HTML page', 'Edge TTS audio', 'Glossary JSON'],
    installed: true,
  },
  {
    id: 'a3',
    name: 'Sora Storyboard Agent',
    purpose: 'Takes a script and generates shot-by-shot Sora prompts with style consistency.',
    inputs: ['Script text', 'Visual style', 'Duration target'],
    outputs: ['Prompt list', 'Storyboard grid', 'Style guide'],
    installed: false,
  },
  {
    id: 'a4',
    name: 'Personal Knowledge Agent',
    purpose: 'Indexes your notes, projects, and reading history into a queryable knowledge graph.',
    inputs: ['Markdown notes', 'Project repos', 'Reading logs'],
    outputs: ['Search index', 'Topic clusters', 'Connection map'],
    installed: false,
  },
  {
    id: 'a5',
    name: 'Vercel Deploy Agent',
    purpose: 'Watches your repo and deploys preview builds on every push with instant shareable URLs.',
    inputs: ['GitHub repo', 'Build command', 'Env variables'],
    outputs: ['Preview URL', 'Build log', 'Performance score'],
    installed: true,
  },
];

export const pulseItems: PulseItem[] = [
  {
    id: 'p1',
    category: "Today's Best Remixes",
    title: 'Kyoto Dawn → Night Market Remix',
    summary: 'Maya Chen remixed her dawn scene into a bustling night market with neon reflections. 124 remixes in 2 hours.',
    action: 'View Remix',
  },
  {
    id: 'p2',
    category: 'Projects Worth Forking',
    title: 'Auto-Deploy GitHub Pages',
    summary: 'Alex Rivera\'s CLI tool now supports custom themes and dark mode. 89 forks this week.',
    action: 'Fork Project',
  },
  {
    id: 'p3',
    category: 'Agents Trending',
    title: 'Daily Research Agent v2.1',
    summary: 'New audio pipeline with 6 voices and automatic topic clustering. 234 installs today.',
    action: 'Install Agent',
  },
  {
    id: 'p4',
    category: 'Suggested Collaboration',
    title: 'Sora + Codex: Product Demo Pipeline',
    summary: 'A workflow that generates a product video and auto-deploys a landing page from the same prompt.',
    action: 'Start Collaboration',
  },
];

export const profileQA = [
  {
    q: '最近在研究什么？',
    a: '最近在做一个 AI 原生社交产品的概念 Demo，同时也在优化几个个人 agent：长文翻译、每日简报、和自动部署流水线。',
  },
  {
    q: '有哪些可复用 agent？',
    a: '目前比较稳定的有三个：\n1. 长文翻译 Agent（英文 → 中文阅读页 + Edge TTS）\n2. 每日简报 Agent（arXiv + HN + RSS → 音频摘要）\n3. 自动部署 Agent（GitHub push → Vercel preview）',
  },
  {
    q: '如何把文章变成中文阅读页？',
    a: '用 Longform Translation Agent：输入文章 URL，选择语气和语音偏好，它会生成一个带排版、暗色模式、音频播放器和术语表的静态 HTML 页面，可以直接部署到 GitHub Pages。',
  },
];
