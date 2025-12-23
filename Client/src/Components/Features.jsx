import React from "react"

function Features({loggedInUser}) {

    return (
        <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
      Everything you need in one place
    </h2>

    <div className="mt-14 grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-slate-900">
          Fast Shortening
        </h3>
        <p className="mt-2 text-slate-600">
          Generate short links instantly with a single click.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-slate-900">
          Click Analytics
        </h3>
        <p className="mt-2 text-slate-600">
          Track clicks, timestamps, and user engagement.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-slate-900">
          Secure & Private
        </h3>
        <p className="mt-2 text-slate-600">
          Your links and analytics stay protected.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Features