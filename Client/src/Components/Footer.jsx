import React from "react"

function Footer() {

    return (
        <footer className="bg-white border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm text-slate-500">
      © 2025 Pocket-URL. All rights reserved.
    </p>

    <div className="flex gap-6 text-sm">
      <a
        href="#"
        className="text-slate-600 hover:text-indigo-600 transition"
      >
        Privacy
      </a>
      <a
        href="#"
        className="text-slate-600 hover:text-indigo-600 transition"
      >
        Terms
      </a>
      <a
        href="#"
        className="text-slate-600 hover:text-indigo-600 transition"
      >
        Contact
      </a>
    </div>
  </div>
</footer>

    )
}

export default Footer