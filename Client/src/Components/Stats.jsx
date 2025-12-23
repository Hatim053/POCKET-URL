import React from "react"

function Stats() {

    return (
<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 text-center">
  <div>
    <h3 className="text-4xl font-bold text-indigo-600">
      10K+
    </h3>
    <p className="mt-2 text-slate-600">
      Links Shortened
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-indigo-600">
      99.9%
    </h3>
    <p className="mt-2 text-slate-600">
      Uptime
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-indigo-600">
      5K+
    </h3>
    <p className="mt-2 text-slate-600">
      Active Users
    </p>
  </div>
</section>

    )
}

export default Stats