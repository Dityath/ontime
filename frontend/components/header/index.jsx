import React from "react";

import { useRouter } from "next/router";
import moment from "moment";

function Header({ page }) {
  const router = useRouter();

  return (
    <header className="backdrop-blur-sm z-50 flex w-wmobile bg-gradient-to-b from-black/40 to-black/0 justify-between items-center text-white p-5 fixed">
      {page === "Settings" ? (
        <button onClick={() => router.back()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z"
              fill="white"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
      <div className="">
        {page === "Home" ? (
          <>
            <h1 className="text-xl font-black">For Today</h1>
            <p className="text-sm">{moment().format("Do MMMM YYYY")}</p>
          </>
        ) : (
          <h1 className="text-xl font-medium">{page}</h1>
        )}
      </div>
      <button>
        <svg
          width="29"
          height="23"
          viewBox="0 0 29 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.31134e-07"
            y1="1.5"
            x2="29"
            y2="1.5"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="-1.31134e-07"
            y1="21.5"
            x2="29"
            y2="21.5"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="-1.31134e-07"
            y1="11.5"
            x2="29"
            y2="11.5"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </button>
      <div className="w-3-auto mx-auto">
        <aside className="w-36" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded-lg bg-stone-800 opacity-75">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="ml-3 text-sm text-white">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 text-sm whitespace-nowrap">
                    Setting
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 text-sm whitespace-nowrap">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Header;
