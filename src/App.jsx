import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const linkBase =
  'hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-300'
const linkActive = 'font-semibold text-slate-900 dark:text-slate-100'

export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Oskar Nordin</h1>
        <nav className="flex gap-4">
          <NavLink to="/" end className={({ isActive }) => isActive ? linkActive : linkBase}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? linkActive : linkBase}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? linkActive : linkBase}>Contact</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="mt-20 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Oskar Nordin
      </footer>
    </main>
  )
}