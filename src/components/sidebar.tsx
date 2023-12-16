"use client";
const { version } = require("../../package.json");
import { Fragment, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import LanguagePicker from "@/components/language-picker";
import { ThemeSelector } from "@/components/theme-selector";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarDaysIcon,
  ChartPieIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  TvIcon,
  RectangleGroupIcon,
  QueueListIcon,
  XMarkIcon,
  UserGroupIcon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const primaryNavigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Players", href: "#", icon: TvIcon, current: false },
  { name: "Groups", href: "#", icon: RectangleGroupIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarDaysIcon, current: false },
  { name: "Assets", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "PlayLists", href: "#", icon: QueueListIcon, current: false },
];
const secondaryNavigation = [
  {
    name: "Subscriptions / Licenses",
    href: "#",
    icon: CreditCardIcon,
    current: false,
  },
  { name: "Collaborators", href: "#", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  { name: "Guide Map", href: "#", icon: AcademicCapIcon, current: false },
  { name: "Template Designer", href: "#", icon: FolderIcon, current: false },
];

const tertiaryNavigation = [
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center justify-center">
                    <Image
                      className="h-10 w-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=700"
                      alt="Your Company"
                      width={32}
                      height={32}
                      unoptimized
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {primaryNavigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-neutral-50 text-cyan-700"
                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-cyan-700"
                                      : "text-neutral-500 group-hover:text-cyan-700",
                                    "mr-3 h-6 w-6 shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-neutral-500">
                          Management
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {secondaryNavigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-neutral-50 text-cyan-700"
                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-cyan-700"
                                      : "text-neutral-500 group-hover:text-cyan-700",
                                    "mr-3 h-6 w-6 shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          <li>
                            <ThemeSelector />
                          </li>
                          {tertiaryNavigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-neutral-50 text-cyan-700"
                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-cyan-700"
                                      : "text-neutral-500 group-hover:text-cyan-700",
                                    "mr-3 h-6 w-6 shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="mb-6 text-center text-xs text-neutral-500">
                          Server Version: {version}
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-neutral-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <Image
              className="h-10 w-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=700"
              alt="Your Company"
              width={32}
              height={32}
              unoptimized
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {primaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral-50 text-cyan-700"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-cyan-700"
                              : "text-neutral-500 group-hover:text-cyan-700",
                            "mr-3 h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-neutral-500">
                  Management
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral-50 text-cyan-700"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-cyan-700"
                              : "text-neutral-500 group-hover:text-cyan-700",
                            "mr-3 h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  <li>
                    <ThemeSelector />
                  </li>
                  {tertiaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral-50 text-cyan-700"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-cyan-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-cyan-700"
                              : "text-neutral-500 group-hover:text-cyan-700",
                            "mr-3 h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="mb-6 text-center text-xs text-neutral-500">
                  Server Version: {version}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 lg:mx-auto">
          <div className="flex h-16 items-center gap-x-4 border-b border-neutral-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:shadow-none">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-neutral-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-neutral-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-neutral-500"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-neutral-900 placeholder:text-neutral-500 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <span className="sr-only">Choose your language</span>
                <LanguagePicker />

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-neutral-200"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon
                      className="h-8 w-8 text-neutral-500"
                      aria-hidden="true"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-neutral-900"
                        aria-hidden="true"
                      >
                        Welcome, John Weland
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-neutral-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-neutral-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-neutral-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
