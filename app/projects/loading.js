
export default function loading() {
  return (
      <div className="grid grid-cols-4 gap-4 p-8">
          {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="card card-compact bg-white shadow-xl p-4">
                  <figure className="w-full h-[150px] bg-gray-300 animate-pulse rounded"></figure>
                  <div className="card-body mt-4">
                      <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-300 animate-pulse rounded w-5/6 mb-4"></div>
                      <div className="card-actions justify-end">
                          <div className="h-8 bg-gray-300 animate-pulse rounded w-1/3"></div>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )
}
