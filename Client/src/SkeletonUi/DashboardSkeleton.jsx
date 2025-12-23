function DashboardSkeleton() {

    return (
<section className="max-w-7xl mx-auto px-6 py-10 animate-pulse">
  {/* Header Skeleton */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
    <div>
      <div className="h-6 w-40 bg-slate-200 rounded"></div>
      <div className="h-4 w-64 bg-slate-200 rounded mt-2"></div>
    </div>

    <div className="h-10 w-32 bg-slate-200 rounded-lg"></div>
  </div>

  {/* Table Skeleton */}
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-slate-100">
        <tr>
          <th className="px-6 py-4">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
          </th>
          <th className="px-6 py-4">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
          </th>
          <th className="px-6 py-4 text-center">
            <div className="h-4 w-12 bg-slate-200 rounded mx-auto"></div>
          </th>
          <th className="px-6 py-4 text-right">
            <div className="h-4 w-16 bg-slate-200 rounded ml-auto"></div>
          </th>
        </tr>
      </thead>

      <tbody className="divide-y">
        {[...Array(5)].map((_, i) => (
          <tr key={i}>
            <td className="px-6 py-4">
              <div className="h-4 w-full bg-slate-200 rounded"></div>
            </td>

            <td className="px-6 py-4">
              <div className="h-4 w-32 bg-slate-200 rounded"></div>
            </td>

            <td className="px-6 py-4 text-center">
              <div className="h-4 w-8 bg-slate-200 rounded mx-auto"></div>
            </td>

            <td className="px-6 py-4 text-right">
              <div className="h-4 w-20 bg-slate-200 rounded ml-auto"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

    )
}

export default DashboardSkeleton