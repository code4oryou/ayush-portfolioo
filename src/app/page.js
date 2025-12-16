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
      if (themeText) themeText.innerText = 'CMD + D'
    } else {
      html.classList.add('dark')
      localStorage.theme = 'dark'
      if (themeText) themeText.innerText = 'LGT MODE'
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      const themeText = document.getElementById('theme-text')
      if (themeText) themeText.innerText = 'LGT MODE'
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
      <div className="noise-overlay fixed inset-0 z-50 pointer-events-none opacity-[0.06] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]"></div>

      {/* Top right system box - Adjusted for mobile */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] text-green-700 dark:text-green-400 opacity-80 bg-white/40 dark:bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700 dark:bg-green-500"></span>
          </span>
          SYSTEM ONLINE
        </div>

        <button
          onClick={toggleTheme}
          className="font-mono text-[10px] md:text-xs border border-stone-300 dark:border-zinc-700 px-3 py-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-sm"
        >
          <span id="theme-text">CMD + D</span>
        </button>
      </div>

      {/* Main Container - Adjusted padding for mobile */}
      <main className="max-w-[680px] mx-auto px-5 py-24 md:px-6 md:py-28 relative z-10 w-full overflow-hidden">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight cursor text-black dark:text-white">
              Ayush Mandal
            </h1>
            <p className="font-mono text-xs md:text-sm text-stone-500 dark:text-zinc-500">
              v2.6.0 • Full Stack Engineer
            </p>
          </div>

          <div className="text-base md:text-lg leading-relaxed opacity-90 space-y-4 text-stone-800 dark:text-zinc-300">
            <p>I build software that actually works at scale.</p>

            <p>
              Software Developer at{' '}
              <span className="dev-link font-medium text-black dark:text-white">
                DigiShield Technologies
              </span>
              — delivered production systems for
              <span className="inline-flex items-center align-middle font-mono text-xs md:text-sm bg-stone-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded ml-1.5 mr-1">
               ISRO
              </span>and<span className="inline-flex items-center align-middle font-mono text-xs md:text-sm bg-stone-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded ml-1">NCERT</span>
              , now building high-impact government and enterprise platforms..
              {/* I don’t do “lanes” — one day I scale APIs, next day I ship
              pixel-perfect mobile apps. */}
            </p>

            <p>
              I prefer shipping code over debating tech stacks. If it doesn’t
              break at 3AM, I like it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 font-mono text-xs md:text-sm text-stone-600 dark:text-zinc-400">
            <a
              href="mailto:gruspyy@gmail.com"
              className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-stone-400"
            >
              ~/email
            </a>
            <a
              href="https://github.com/code4oryou"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-stone-400"
            >
              ~/github
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-mandal/"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-stone-400"
            >
              ~/linkedin
            </a>
            <span className="opacity-50 cursor-not-allowed">~/portfolio</span>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-14 md:mb-16">
          <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 dark:text-zinc-600 mb-6 md:mb-8 border-b border-stone-300 dark:border-zinc-800 pb-2">
            01_Experience
          </h2>

          <div className="flex flex-col gap-8 md:gap-10">
            {/* DigiShield */}
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                2024—NOW
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white">
                  DigiShield Technologies
                </h3>
                <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-700 dark:text-zinc-300">
                  Architected NCERT’s Journal System and optimized ISRO’s
                  platform for <b className="font-semibold">10M+ users</b>.
                </p>
                <div className="mt-2 pl-3 border-l-2 border-stone-200 dark:border-zinc-700">
                  <p className="italic text-sm opacity-80">
                    Also building offline-first Flutter apps with complex state
                    handling.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-3 font-mono text-[10px]">
                  <span className="border border-stone-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-stone-500 dark:text-zinc-400">
                    NEXT.JS
                  </span>
                  <span className="border border-stone-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-stone-500 dark:text-zinc-400">
                    FLUTTER
                  </span>
                  <span className="border border-stone-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-stone-500 dark:text-zinc-400">
                    REDIS
                  </span>
                </div>
              </div>
            </div>

            {/* iSpaces */}
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                2023—2024
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white">
                  iSpaces
                </h3>
                <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-700 dark:text-zinc-300">
                  Solved production issues and cut Time-to-Detect by 50% using
                  automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="mb-14 md:mb-16">
          <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 dark:text-zinc-600 mb-6 md:mb-8 border-b border-stone-300 dark:border-zinc-800 pb-2">
            02_Selected_Work
          </h2>

          <div className="flex flex-col gap-8 md:gap-10">
            {/* Mockly */}
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                AI / VAPI
              </div>
              <div>
                <a
                  href="#"
                  className="group text-lg font-medium inline-flex items-center gap-1 text-black dark:text-white"
                >
                  <span className="dev-link">Mockly.ai</span>
                  <span className="text-sm opacity-50 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
                <p className="mt-1 md:mt-2 text-sm md:text-base text-stone-700 dark:text-zinc-300 leading-relaxed">
                  AI interviewer bot powered by Gemini and Vapi AI.
                </p>
              </div>
            </div>

            {/* ChatOri */}
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                SOCKETS
              </div>
              <div>
                <a
                  href="#"
                  className="group text-lg font-medium inline-flex items-center gap-1 text-black dark:text-white"
                >
                  <span className="dev-link">ChatOri</span>
                  <span className="text-sm opacity-50 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
                <p className="mt-1 md:mt-2 text-sm md:text-base text-stone-700 dark:text-zinc-300 leading-relaxed">
                  Bi-directional communication server with pure Node.js
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playground */}
        <section className="mb-14 md:mb-16">
          <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 dark:text-zinc-600 mb-6 md:mb-8 border-b border-stone-300 dark:border-zinc-800 pb-2">
            03_Playground
          </h2>

          <div className="flex flex-col gap-6 md:gap-6">
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                EXP / UI
              </div>
              <div>
                <a
                  href="https://github.com/code4oryou/MAGMA-website"
                  target="_blank"
                  className="group font-medium inline-flex items-center gap-1 text-black dark:text-white"
                >
                  <span className="dev-link">MAGMA-website</span>
                  <span className="text-xs opacity-50 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
                <p className="text-sm mt-1 opacity-90 text-stone-600 dark:text-zinc-400">
                  Experimental UI project exploring 3D layouts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-4">
              <div className="font-mono text-xs text-stone-400 dark:text-zinc-500 pt-0 md:pt-1.5">
                DESIGN
              </div>
              <div>
                <a
                  href="https://github.com/code4oryou/Interior-master"
                  target="_blank"
                  className="group font-medium inline-flex items-center gap-1 text-black dark:text-white"
                >
                  <span className="dev-link">Interior-master</span>
                  <span className="text-xs opacity-50 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
                <p className="text-sm mt-1 opacity-90 text-stone-600 dark:text-zinc-400">
                  Modern interior frontend concept.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-stone-400 dark:text-zinc-600 mb-6 md:mb-8 border-b border-stone-300 dark:border-zinc-800 pb-2">
            04_Tech_Stack
          </h2>

          <div className="font-mono text-[10px] md:text-xs leading-loose opacity-80 text-stone-600 dark:text-zinc-400">
            <div className="block md:hidden space-y-2">
              <div>
                <span className="font-semibold text-stone-800 dark:text-zinc-300">
                  LANGS:
                </span>{' '}
                JS, TS, Dart, Java, C++
              </div>
              <div>
                <span className="font-semibold text-stone-800 dark:text-zinc-300">
                  WEB:
                </span>{' '}
                Next.js, React, Node, Express
              </div>
              <div>
                <span className="font-semibold text-stone-800 dark:text-zinc-300">
                  MOBILE:
                </span>{' '}
                Flutter, Android SDK
              </div>
              <div>
                <span className="font-semibold text-stone-800 dark:text-zinc-300">
                  INFRA:
                </span>{' '}
                Docker, Linux, Git
              </div>
            </div>

            <div className="hidden md:block">
              [LANGUAGES] JavaScript, TypeScript, Dart, Java, C++ <br />
              [WEB] Next.js, React, Node.js, Express, Socket.io <br />
              [MOBILE] Flutter, Android SDK <br />
              [INFRA] Docker, Linux, Git
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="font-mono text-[10px] md:text-xs text-stone-400 dark:text-zinc-600 pt-8 border-t border-stone-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between gap-4">
          <div>© 2025 Ayush Mandal</div>
          <div>
            Local time (Kolkata):{' '}
            <span className="text-stone-600 dark:text-zinc-400 font-medium">
              {time}
            </span>
          </div>
        </footer>
      </main>
    </>
  )
}