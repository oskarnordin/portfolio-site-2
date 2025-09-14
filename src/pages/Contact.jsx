import React from 'react'

export default function Contact() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Email me at <a className="underline" href="mailto:you@example.com">you@example.com</a>.<br />
        Find me on <a className="underline" href="https://github.com/oskarnordin" target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </section>
  )
}