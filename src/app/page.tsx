import Image from "next/image";

const stats = [
  { name: "Now", stat: "4" },
  { name: "Last 60 Minutes", stat: "0" },
  { name: "Last 4 Hours", stat: "0" },
  { name: "Today", stat: "0" },
  { name: "Last 7 Days", stat: "0" },
  { name: "> 7 Days Ago", stat: "0" },
];

const players = [
  {
    group: "Demo Units",
    location: "Jackson, MN US",
    software: "4.9.5",
    playlist: "Demo",
    id: 1,
  },
  {
    group: "Demo Units",
    location: "Jackson, MN US",
    software: "3.2.8",
    playlist: "Demo",
    id: 2,
  },
  {
    group: "Retail Location X",
    location: "Jackson, MN US",
    software: "4.9.5",
    playlist: "Demo",
    id: 3,
  },
  {
    group: "Retail Location X",
    location: "Jackson, MN US",
    software: "4.9.5",
    playlist: "Demo",
    id: 4,
  },
];

export default function Home() {
  return (
    <div className="w-auto xl:max-w-7xl mx-auto">
      <section className="mb-5">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-neutral-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-50 px-2 text-sm text-neutral-500">
              Player Reporting Status
            </span>
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-6">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-gradient-to-br from-cyan-800 to-cyan-600 px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-neutral-50 text-center">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-neutral-50 text-center">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mb-5">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-neutral-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-50 px-2 text-sm text-neutral-500">
              Players Expected to Report Now
            </span>
          </div>
        </div>
        <div className="my-9">
          <p className="text-xs text-neutral-500 text-center">
            No players have missed check-in
          </p>
        </div>
      </section>
    </div>
  );
}
