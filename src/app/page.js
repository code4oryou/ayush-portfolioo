'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [time, setTime] = useState('--:--')

  const toggleTheme = () => {
    const html = document.documentElement
    const themeText = document.getElementById('theme-text')

    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.theme = 'light'
      themeText.innerText = 'CMD + D'
    } else {
      html.classList.add('dark')
      localStorage.theme = 'dark'
      themeText.innerText = 'LGT MODE'
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document.getElementById('theme-text').innerText = 'LGT MODE'
    }

    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault()
        toggleTheme()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      clearInterval(interval)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <>
      <div className="noise-overlay"></div>

      {/* Top right system box */}
      <div className="fixed top-6 right-6 z-[60] flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 font-mono text-[10px] text-green-700 dark:text-green-400 opacity-80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700 dark:bg-green-500"></span>
          </span>
          SYSTEM ONLINE
        </div>

        <button
          onClick={toggleTheme}
          className="font-mono text-xs border border-stone-300 dark:border-zinc-700 px-3 py-1 rounded-full hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors bg-white/50 dark:bg-black/20 backdrop-blur-sm"
        >
          <span id="theme-text">CMD + D</span>
        </button>
      </div>

      <main className="max-w-[680px] mx-auto px-6 py-20 md:py-28 relative z-10">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-semibold tracking-tight cursor text-black dark:text-white">
            Ayush Mandal
          </h1>

          <p className="font-mono text-sm text-stone-500 dark:text-zinc-500 mb-6">
            v2.6.0 • Full Stack Engineer
          </p>

          <div className="text-lg leading-relaxed opacity-90">
            <p className="mb-4">I build software that actually works at scale.</p>

            <p className="mb-4">
              Right now I'm at <span className="dev-link font-medium">DigiShield</span>, building for
              <span className="font-mono text-sm bg-stone-200 dark:bg-zinc-800 px-1 rounded ml-1">ISRO</span> and
              <span className="font-mono text-sm bg-stone-200 dark:bg-zinc-800 px-1 rounded ml-1">NCERT</span>.
              I don’t do “lanes” — one day I scale APIs, next day I ship pixel-perfect mobile apps.
            </p>

            <p>
              I prefer shipping code over debating tech stacks. If it doesn’t break at 3AM, I like it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-stone-600 dark:text-zinc-400">
            <a href="mailto:gruspyy@gmail.com">~/email</a>
            <a href="https://github.com/code4oryou" target="_blank">~/github</a>
            <a href="https://www.linkedin.com/in/ayush-mandal/" target="_blank">~/linkedin</a>
            <span>~/portfolio</span>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-400 dark:text-zinc-600 mb-8 border-b border-stone-300 dark:border-zinc-800 pb-2">
            01_Experience
          </h2>

          <div className="flex flex-col gap-10">
            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-1.5">
                2024—NOW
              </div>
              <div>
                <h3 className="text-lg font-medium">DigiShield Technologies</h3>
                <p className="mt-1">
                  Architected NCERT’s Journal System and optimized ISRO’s platform for <b>10M+ users</b>.
                </p>
                <p className="mt-2 italic text-sm opacity-80">
                  Also building offline-first Flutter apps with complex state handling.
                </p>

                <div className="flex gap-2 mt-3 font-mono text-[10px]">
                  <span className="border px-1.5 rounded">NEXT.JS</span>
                  <span className="border px-1.5 rounded">FLUTTER</span>
                  <span className="border px-1.5 rounded">REDIS</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-1.5">
                2023—2024
              </div>
              <div>
                <h3 className="text-lg font-medium">iSpaces</h3>
                <p className="mt-1">
                  Solved production issues and cut Time-to-Detect by 50% using automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest mb-8 border-b pb-2">
            02_Selected_Work
          </h2>

          <div className="flex flex-col gap-10">
            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 pt-1.5">AI / VAPI</div>
              <div>
                <h3 className="text-lg font-medium dev-link inline-block">
                  Mockly.ai ↗
                </h3>
                <p className="mt-2">
                  AI interviewer bot powered by Gemini and Vapi AI.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 pt-1.5">SOCKETS</div>
              <div>
                <h3 className="text-lg font-medium dev-link inline-block">
                  ChatOri ↗
                </h3>
                <p className="mt-2">
                  Bi-directional communication server with pure Node.js architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playground */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest mb-8 border-b pb-2">
            03_Playground
          </h2>

          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 pt-1.5">EXP / UI</div>
              <div>
                <a href="https://github.com/code4oryou/MAGMA-website" target="_blank" className="dev-link">
                  MAGMA-website ↗
                </a>
                <p className="text-sm mt-1 opacity-90">
                  Experimental UI project exploring 3D layouts.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="font-mono text-xs text-stone-400 pt-1.5">DESIGN</div>
              <div>
                <a href="https://github.com/code4oryou/Interior-master" target="_blank" className="dev-link">
                  Interior-master ↗
                </a>
                <p className="text-sm mt-1 opacity-90">
                  Modern interior frontend concept.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest mb-8 border-b pb-2">
            04_Tech_Stack
          </h2>

          <div className="font-mono text-xs leading-loose opacity-80">
            [LANGUAGES] JavaScript, TypeScript, Dart, Java, C++ <br />
            [WEB] Next.js, React, Node.js, Express, Socket.io <br />
            [MOBILE] Flutter, Android SDK <br />
            [INFRA] Docker, Linux, Git
          </div>
        </section>

        {/* Footer */}
        <footer className="font-mono text-xs text-stone-400 dark:text-zinc-600 pt-10 border-t flex flex-col md:flex-row justify-between gap-4">
          <div>© 2025 Ayush Mandal</div>
          <div>
            Local time (Kolkata):{' '}
            <span className="text-stone-600 dark:text-zinc-400">
              {time}
            </span>
          </div>
        </footer>
      </main>
    </>
  )
}
