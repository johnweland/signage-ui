import Image from 'next/image'


const stats = [
  { name: 'Now', stat: '4' },
  { name: 'Last 60 Minutes', stat: '0' },
  { name: 'Last 4 Hours', stat: '0' },
  { name: 'Today', stat: '0' },
  { name: 'Last 7 Days', stat: '0' },
  { name: '> 7 Days Ago', stat: '0' },
]

export default function Home() {
  return (
    <div className="w-auto xl:max-w-7xl mx-auto">
      <section className="mb-5">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-50 px-2 text-sm text-gray-500">Player Reporting Status</span>
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-6">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-50 text-center">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-50 text-center">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className='mb-5'>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-50 px-2 text-sm text-gray-500">Players Expected to Report Now</span>
          </div>
        </div>
        <div className="p-5">
        <p className="text-xs text-neutral-500 mb-6 text-center">No players that have missed check-in</p>
        </div>
      </section>
    </div>
  )
}
