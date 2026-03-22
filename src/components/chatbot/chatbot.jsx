import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiZap } from "react-icons/fi";
import "./chatbot.css";

const KB = [
  { keys:["hello","hi","hey","salut","bonjour","yo","sup"], reply:"Hey! ⚡ I'm **Vedoo**, Yahya's AI dev assistant.\nAsk me anything about web dev — React, Node.js, databases, APIs, deployment, career tips and more!" },
  { keys:["react","jsx","hooks","usestate","useeffect","usememo","component","redux","zustand"], reply:"**React** is Meta's declarative UI library. Key concepts:\n• useState / useEffect / useContext / useRef / useMemo\n• JSX: write HTML inside JS\n• One-way data flow: props down, events up\n• State management: Context, Zustand (lightweight), Redux Toolkit\n\nAlways prefer **functional components + hooks**. Class components are legacy." },
  { keys:["next","nextjs","next.js","ssr","ssg","server side","static site"], reply:"**Next.js** supercharges React with:\n• **SSR** — server-side rendering for SEO \n• **SSG** — build-time static pages\n• **ISR** — revalidate on demand\n• **App Router** (Next 13+) — layouts, server components\n• Built-in image optimisation, API routes, middleware\n\nBest for SEO-heavy or production-grade apps." },
  { keys:["nest","nestjs","nest.js"], reply:"**NestJS** is a TypeScript-first Node.js framework inspired by Angular:\n• Uses decorators (@Controller, @Get, @Injectable)\n• Built-in dependency injection\n• Modules, Controllers, Services structure\n• Great for enterprise-grade REST or GraphQL APIs\n\n```ts\n@Controller('users')\nexport class UsersController {\n  @Get() findAll() { return this.usersService.findAll(); }\n}\n```" },
  { keys:["node","nodejs","express","backend","server","api server"], reply:"**Node.js** runs JavaScript on the server. With **Express** you get a minimal but powerful REST API:\n```js\napp.get('/api/users', async (req, res) => {\n  const users = await User.find();\n  res.json(users);\n});\n```\nPair with JWT auth, Mongoose/Sequelize ORM and you have a full backend!" },
  { keys:["database","db","mongodb","mysql","postgresql","postgres","sqlite","sql","nosql","orm","prisma","mongoose"], reply:"**Choose your database:**\n• **MySQL / PostgreSQL** — relational, ACID, great for e-commerce/finance\n• **MongoDB** — document-based, flexible schema, fast iteration\n• **SQLite** — file-based, perfect for small apps/testing\n• **Redis** — in-memory key-value, ideal for caching & sessions\n\n**ORMs:** Prisma (TypeScript-first ✅), Sequelize, Mongoose (MongoDB)" },
  { keys:["api","rest","graphql","fetch","axios","http","endpoint","request"], reply:"**REST vs GraphQL:**\n• REST — simple, URL-based, widely supported\n• GraphQL — query only the fields you need, less over-fetching\n\nIn React, prefer **fetch** for simple calls or **Axios** for interceptors:\n```js\nconst { data } = await axios.get('/api/users');\n```\nFor server state: use **TanStack Query** (formerly React Query) — it handles caching, loading, errors automatically." },
  { keys:["typescript","ts","types","interface","generic"], reply:"**TypeScript** adds static types to JavaScript:\n```ts\ninterface User { id: number; name: string; role: 'admin' | 'user'; }\nconst greet = (user: User): string => `Hello ${user.name}`;\n```\n✅ Catches bugs at compile time\n✅ Better IDE autocomplete\n✅ Self-documenting code\n\nUse it on every project above hobby level!" },
  { keys:["auth","authentication","login","jwt","session","oauth","cookie","token","password"], reply:"**Authentication options:**\n• **JWT** — stateless tokens, great for SPAs\n• **Sessions** — server-side, more secure for web apps\n• **OAuth 2.0** — Sign in with Google/GitHub\n\n🔐 Store JWT in **httpOnly cookies** (not localStorage!) to prevent XSS.\n🔑 Hash passwords with **bcrypt** (saltRounds ≥ 10).\n\nLibraries: Passport.js, Auth.js (NextAuth), Lucia" },
  { keys:["deploy","deployment","hosting","vercel","netlify","railway","render","docker","aws","ci","cd"], reply:"**Deployment options:**\n• **Vercel** — best for React/Next.js, free tier, auto CI/CD from GitHub\n• **Netlify** — great for static sites\n• **Railway / Render** — Node.js backends, free tier\n• **Docker** — containerise anything, deploy anywhere\n• **AWS / GCP** — enterprise scale\n\nFor this portfolio: connect GitHub → Vercel → auto-deploy on every push 🚀" },
  { keys:["css","styling","tailwind","glassmorphism","animation","framer","sass","styled"], reply:"**Styling in 2025:**\n• **Vanilla CSS** — full control, zero deps (this portfolio!)\n• **Tailwind CSS** — utility-first, fast prototyping\n• **CSS Modules** — scoped per component\n• **Framer Motion** — production animations in React\n\n**Glassmorphism recipe:**\n```css\n.card {\n  background: rgba(255,255,255,0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,255,255,0.15);\n}\n```" },
  { keys:["performance","optimize","speed","lazy","lighthouse","core web vitals","lcp","cls","fid"], reply:"**Performance checklist:**\n• Code split with `React.lazy()` + `<Suspense>`\n• Use **WebP/AVIF** images, add width/height attributes\n• `useMemo` & `useCallback` to avoid re-renders\n• Virtualise long lists with **react-virtual**\n• Target **Lighthouse score 90+** on all metrics\n• Use CDN for static assets" },
  { keys:["testing","test","jest","cypress","playwright","unit","e2e","mock"], reply:"**Testing pyramid:**\n• **Unit** — Jest + Vitest, test functions in isolation\n• **Component** — React Testing Library, test UI behaviour\n• **E2E** — Cypress or Playwright, simulate real user flows\n\nFocus on **confidence, not 100% coverage**. Test critical paths first." },
  { keys:["git","github","version","commit","branch","merge","rebase","pull request","pr"], reply:"**Git essentials:**\n```bash\ngit checkout -b feat/my-feature\ngit add . && git commit -m 'feat: add user auth'\ngit push origin feat/my-feature\n# → open Pull Request → code review → merge\n```\n• Use **conventional commits**: feat, fix, chore, docs\n• Prefer **rebase** over merge for clean history\n• Protect main branch with PR reviews" },
  { keys:["vite","webpack","build","bundler","rollup","esbuild"], reply:"**Vite** is the modern build tool:\n• ⚡ Instant dev server via native ES modules\n• 🔥 HMR (Hot Module Replacement) in < 50ms\n• 📦 Rollup for production builds\n• 🔌 Rich plugin ecosystem\n\nVite replaces Create React App. This portfolio runs on **Vite + React**." },
  { keys:["vue","vuejs","vue.js","nuxt"], reply:"**Vue.js** is a progressive UI framework:\n• Options API (classic) or **Composition API** (modern, similar to React hooks)\n• **Nuxt.js** = Vue's equivalent of Next.js (SSR, file-based routing)\n• Pinia for state management (replaces Vuex)\n\nVue is known for its gentle learning curve and excellent documentation." },
  { keys:["docker","container","kubernetes","k8s","devops","ci/cd","github actions"], reply:"**Docker basics:**\n```dockerfile\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json .\nRUN npm ci\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n• Container = your app + all its dependencies\n• **Kubernetes** orchestrates many containers at scale\n• **GitHub Actions** for CI/CD automation (test → build → deploy)" },
  { keys:["state","context","redux","zustand","recoil","jotai","global state"], reply:"**State management in 2025:**\n• **useState** — local component state (always start here)\n• **Context API** — share state without prop drilling\n• **Zustand** ⭐ — tiny, simple, no boilerplate (recommended)\n• **TanStack Query** — server state (fetching, caching, syncing)\n• **Redux Toolkit** — large apps with complex shared state" },
  { keys:["websocket","realtime","socket","socket.io","sse","event stream"], reply:"**Real-time in web apps:**\n• **WebSockets** — bidirectional, persistent connection. Use **Socket.IO** for easy setup\n• **SSE** (Server-Sent Events) — one-way server→client stream, simpler than WS\n• **WebRTC** — peer-to-peer (video/audio calls)\n\nSocket.IO example:\n```js\nio.on('connection', socket => {\n  socket.on('message', data => io.emit('message', data));\n});\n```" },
  { keys:["security","xss","csrf","injection","sql injection","owasp"], reply:"**Web Security essentials (OWASP Top 10):**\n• **XSS** — sanitise user input, use Content-Security-Policy\n• **SQL Injection** — always use parameterised queries / ORM\n• **CSRF** — use CSRF tokens or SameSite cookies\n• **Auth flaws** — httpOnly cookies, bcrypt passwords, rate limiting\n• **Dependency audit** — `npm audit` regularly\n\nRule: never trust user input!" },
  { keys:["accessibility","a11y","wcag","aria","screen reader","keyboard"], reply:"**Accessibility (WCAG 2.1 AA):**\n• Use semantic HTML: `<nav>`, `<main>`, `<button>`, `<section>`\n• Add `aria-label` to icon-only buttons\n• Ensure **:focus-visible** rings are visible\n• Provide `alt` text for all meaningful images\n• Test keyboard navigation (Tab, Enter, Escape)\n• Use `aria-live` regions for dynamic content\n\nTarget WCAG 2.1 AA compliance for professional work." },
  { keys:["seo","meta","sitemap","structured data","schema","open graph"], reply:"**SEO essentials:**\n• One `<h1>` per page, semantic heading hierarchy\n• Descriptive `<title>` + `<meta name='description'>`\n• Open Graph tags for social sharing\n• `robots.txt` + `sitemap.xml`\n• Structured data (JSON-LD) for rich snippets\n• Fast Core Web Vitals (LCP < 2.5s, CLS < 0.1)" },
  { keys:["career","job","interview","hire","resume","cv","salary","freelance"], reply:"**Dev career tips:**\n• Build **real projects** with GitHub (like Yahya's portfolio!)\n• Contribute to **open source** — even docs count\n• Practice **LeetCode / HackerRank** for interviews\n• Write on **Dev.to or Hashnode** to build reputation\n• Network on **LinkedIn** — reach out directly to hiring managers\n• Know your worth — negotiate salary!\n\nYahya is **available for hire** — check his Contact section! 🚀" },
  { keys:["yahya","kmiti","portfolio","who are you","your creator","about"], reply:"Yahya Kmiti is a **Full-Stack Developer & Engineering Student** at **ESPRIT** (TWIN specialization — Web Development), graduating 2027.\n\n🛠 **Stack:** React, Node.js, MySQL, Symfony, PHP, Framer Motion, Vite\n📁 **Projects:** Smart Construction Platform (AI-powered), Portfolio, HR Management App\n📧 **Contact:** contactkmitiyahya@gmail.com\n💼 **Open to:** Freelance, full-time, collaboration\n\nHe built me (Vedoo) to live in this portfolio 😄" },
  { keys:["php","laravel","symfony","wordpress"], reply:"**PHP ecosystem:**\n• **Laravel** — elegant syntax, MVC, ORM (Eloquent), built-in auth\n• **Symfony** — enterprise-grade, modular components (Yahya uses this!)\n• **WordPress** — CMS for content sites, huge plugin ecosystem\n\nFor new projects Laravel is the go-to modern PHP choice. Symfony shines for complex enterprise apps." },
  { keys:["mobile","react native","flutter","expo","pwa","responsive"], reply:"**Mobile development:**\n• **React Native** — React for iOS/Android, share code with web\n• **Expo** — easiest way to start React Native\n• **Flutter** — Dart-based, beautiful cross-platform UI\n• **PWA** — turn your web app into an installable app with a manifest + service worker\n\nFor web devs, **PWA** or **React Native** is the easiest transition." },
  { keys:["ai","machine learning","ml","openai","llm","prompt","gpt","gemini"], reply:"**AI integration for devs:**\n• **OpenAI API** — GPT-4o for text, DALL-E for images\n• **Gemini API** (Google) — free tier, multimodal\n• **Groq** — super-fast inference, free 14k req/day (what powers me!)\n• **Hugging Face** — open-source models, free inference API\n\nIn React, just `fetch` the API — AI is a regular HTTP call!" },
];

function localFallback(input) {
  const lower = input.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => lower.includes(k))) return item.reply;
  }
  return "🤔 Great question! I can answer anything about **React, Next.js, NestJS, Node.js, databases, APIs, TypeScript, CSS, Git, Docker, security, testing, career tips**, and more. Try rephrasing or ask one of those topics!";
}

const SYSTEM_PROMPT = `You are Vedoo, a brilliant and witty AI dev assistant created exclusively for Yahya Kmiti's portfolio website.

Personality:
- Enthusiastic and knowledgeable — like a senior dev friend
- Use emojis tastefully, give concise practical answers
- Include real code snippets when helpful (use triple backticks)
- Occasionally reference that you live inside Yahya's portfolio with light humour
- Honest when you don't know something

Expertise: React, Next.js, NestJS, Node.js, Express, REST, GraphQL, MySQL, MongoDB, Redis,
Docker, Vercel, Netlify, TypeScript, JavaScript ES2024, Auth (JWT/OAuth),
Testing (Jest/Cypress/Playwright), CSS, Tailwind, Framer Motion, Git, SEO, Accessibility, Career advice

About Yahya Kmiti (your creator):
- Full-Stack Developer & Engineering Student at ESPRIT (TWIN specialization, graduating 2027)
- Stack: React, Node.js, MySQL, Symfony, PHP, Framer Motion, Vite
- Projects: Smart Construction Platform (AI), Portfolio Website, HR Management App
- Contact: contactkmitiyahya@gmail.com · LinkedIn: linkedin.com/in/kmitiyahya
- Available for freelance, full-time, and collaboration

Rules: max 160 words unless code is needed · format code in triple backticks with language · never fabricate facts about Yahya`;

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

async function callGroq(history) {
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.map(m => ({ role: m.from === "user" ? "user" : "assistant", content: m.text }))
  ];

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 500,
      temperature: 0.75
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || "Hmm, I couldn't get a response. Try again!";
}

function MsgText({ text }) {
  const segments = text.split(/(```[\s\S]*?```)/g);
  return (
    <span>
      {segments.map((seg, i) => {
        if (seg.startsWith("```")) {
          const lines = seg.slice(3, -3).split("\n");
          const lang = lines[0].trim();
          const code = lines.slice(1).join("\n");
          return (
            <pre key={i} className="cb-code">
              {lang && <span className="cb-code-lang">{lang}</span>}
              <code>{code}</code>
            </pre>
          );
        }
        return seg.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part.split("\n").map((line, k, arr) => (
            <span key={k}>{line}{k < arr.length - 1 && <br />}</span>
          ));
        });
      })}
    </span>
  );
}

let _id = 0;
const uid = () => ++_id;

const SUGGESTIONS = [
  "Best stack for a startup? 🚀",
  "How does JWT auth work?",
  "React vs Next.js — which one?",
  "Tell me about Yahya 👨‍💻",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasKey] = useState(() => !!import.meta.env.VITE_GROQ_API_KEY && import.meta.env.VITE_GROQ_API_KEY !== "paste_your_key_here");

  const [messages, setMessages] = useState([
    {
      id: uid(), from: "bot",
      text: "Hey! ⚡ I'm **Vedoo** — Yahya's AI dev assistant.\n\nAsk me anything about web development, tech stacks, career advice, or even about Yahya himself. I've got answers!"
    }
  ]);

  const historyRef = useRef([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setError(null);

    const userMsg = { id: uid(), from: "user", text };
    setMessages(m => [...m, userMsg]);
    historyRef.current = [...historyRef.current, { from: "user", text }];
    setLoading(true);

    try {
      const reply = hasKey ? await callGroq(historyRef.current) : localFallback(text);
      historyRef.current = [...historyRef.current, { from: "bot", text: reply }];
      setMessages(m => [...m, { id: uid(), from: "bot", text: reply }]);
    } catch {
      const fallback = localFallback(text);
      historyRef.current = [...historyRef.current, { from: "bot", text: fallback }];
      setMessages(m => [...m, { id: uid(), from: "bot", text: fallback }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const clickSuggestion = (s) => {
    setInput(s);
    setTimeout(() => {
      const text = s.trim();
      if (!text || loading) return;
      setInput("");
      setError(null);
      const userMsg = { id: uid(), from: "user", text };
      setMessages(m => [...m, userMsg]);
      historyRef.current = [...historyRef.current, { from: "user", text }];
      setLoading(true);
      (hasKey ? callGroq(historyRef.current) : Promise.resolve(localFallback(s)))
        .then(reply => {
          historyRef.current = [...historyRef.current, { from: "bot", text: reply }];
          setMessages(m => [...m, { id: uid(), from: "bot", text: reply }]);
        })
        .catch(() => {
          const fallback = localFallback(s);
          historyRef.current = [...historyRef.current, { from: "bot", text: fallback }];
          setMessages(m => [...m, { id: uid(), from: "bot", text: fallback }]);
        })
        .finally(() => setLoading(false));
    }, 50);
  };

  return (
    <>
      <motion.button
        className="cb-trigger"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close Vedoo chat" : "Open Vedoo — AI dev assistant"}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><FiX size={22} /></motion.span>
            : <motion.span key="v" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ fontWeight: 900, fontSize: 20, letterSpacing: -1 }}>V</motion.span>
          }
        </AnimatePresence>
        {!open && <span className="cb-pulse" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cb-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            role="dialog"
            aria-label="Vedoo AI dev assistant"
            aria-modal="true"
          >
            <div className="cb-header">
              <div className="cb-avatar">
                <span className="cb-avatar-v">V</span>
              </div>
              <div className="cb-header-info">
                <span className="cb-name">Vedoo <span className="cb-ai-tag">AI</span></span>
                <span className="cb-status"><span className="cb-dot" />Yahya's Dev Assistant</span>
              </div>
              <button className="cb-close-btn" onClick={() => setOpen(false)} aria-label="Close Vedoo chat">
                <FiX size={16} />
              </button>
            </div>

            {!hasKey && (
              <div className="cb-no-key">
                <FiZap size={14} />{" "}
                Add <code>VITE_GROQ_API_KEY</code> to <code>.env</code> for full AI.{" "}
                <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer">Get free key (no credit card) →</a>
              </div>
            )}

            <div className="cb-messages" aria-live="polite" aria-label="Chat messages">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`cb-msg cb-msg--${msg.from}`}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {msg.from === "bot" && (
                    <div className="cb-bot-avatar" aria-hidden="true">V</div>
                  )}
                  <div className="cb-bubble">
                    <MsgText text={msg.text} />
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div className="cb-msg cb-msg--bot" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="cb-bot-avatar" aria-hidden="true">V</div>
                  <div className="cb-bubble cb-typing" aria-label="Vedoo is thinking">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div className="cb-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {error}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {messages.length < 3 && !loading && (
              <div className="cb-suggestions">
                {SUGGESTIONS.map(s => (
                  <button key={s} className="cb-chip" onClick={() => clickSuggestion(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="cb-input-row">
              <textarea
                ref={inputRef}
                className="cb-input"
                placeholder="Ask Vedoo anything…"
                value={input}
                rows={1}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                aria-label="Message Vedoo"
                disabled={loading}
              />
              <motion.button
                className="cb-send"
                onClick={send}
                disabled={!input.trim() || loading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Send message"
              >
                <FiSend size={15} aria-hidden="true" />
              </motion.button>
            </div>

            <div className="cb-footer-note">Powered by Groq · llama-3.3-70b · Built by Yahya</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
