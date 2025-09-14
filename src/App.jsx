import React from 'react'
import About from './sections/About.jsx'

export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Oskar Nordin</h1>
        <nav className="flex gap-4 text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100">About</a>
        </nav>
      </header>
      <About />
      <footer className="mt-20 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Oskar Nordin
      </footer>
    </main>
  )
}