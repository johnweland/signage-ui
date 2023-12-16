"use client";
import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import {
  LanguageIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const languages = [
  { name: "English", code: "En" },
  { name: "Spanish", code: "Es" },
  { name: "French", code: "Fr" },
  { name: "German", code: "De" },
  { name: "Italian", code: "It" },
];

export default function LanguagePicker() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  return (
    <>
      <button
        type="button"
        className="rounded border bg-gradient-to-br from-cyan-800 to-cyan-600  px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        onClick={() => setShowModal(true)}
      >
        {selected.code}
      </button>
      {showModal && (
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative flex transform flex-col justify-center rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-800">
                        <LanguageIcon
                          className="h-6 w-6 text-cyan-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-neutral-900"
                        >
                          Select your prefered language
                        </Dialog.Title>
                        <div className="mt-2">
                          {/* FORM  */}
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className="relative flex justify-center">
                                  <Listbox.Button className="relative w-full max-w-sm cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6">
                                    <span className="block truncate">
                                      {selected.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full max-w-sm overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {languages.map((language) => (
                                        <Listbox.Option
                                          key={language.code}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-cyan-700 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9",
                                            )
                                          }
                                          value={language}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <span
                                                className={classNames(
                                                  selected
                                                    ? "font-semibold"
                                                    : "font-normal",
                                                  "block truncate",
                                                )}
                                              >
                                                {language.name}
                                              </span>

                                              {selected ? (
                                                <span
                                                  className={classNames(
                                                    active
                                                      ? "text-white"
                                                      : "text-cyan-700",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                                  )}
                                                >
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                          {/* END FORM */}
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-5 w-full max-w-sm sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full max-w-sm justify-center rounded-md bg-gradient-to-br from-cyan-800 to-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        onClick={() => setShowModal(false)}
                      >
                        Go back to dashboard
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
