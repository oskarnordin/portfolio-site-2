import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Sorry, we couldn't find that page. Go back to the <Link className="underline" to="/">home page</Link>.
      </p>
    </section>
  )
}