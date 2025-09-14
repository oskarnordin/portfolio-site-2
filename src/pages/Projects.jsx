import React from 'react'

const projects = [
  { title: 'Project One', desc: 'A short description goes here.' },
  { title: 'Project Two', desc: 'Another short description.' },
]

export default function Projects() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold">Projects</h2>
      <ul className="mt-6 space-y-4">
        {projects.map((p, i) => (
          <li key={i} className="rounded border border-slate-200 dark:border-slate-700 p-4">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}