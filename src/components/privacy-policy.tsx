"use client";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
          <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-neutral-900/10">
            <p className="text-sm leading-6 text-neutral-900">
              This website uses cookies to supplement a balanced diet and
              provide a much deserved reward to the senses after consuming bland
              but nutritious meals. Accepting our cookies is optional but
              recommended, as they are delicious. See our{" "}
              <a href="#" className="font-semibold text-cyan-700">
                cookie policy
              </a>
              .
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <button
                type="button"
                className="rounded-md bg-gradient-to-br from-cyan-800 to-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                onClick={() => setShow(false)}
              >
                Accept all
              </button>
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-neutral-900"
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
