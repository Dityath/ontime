import React from "react";
import Canvas from "../components/canvas";
import Footer from "../components/footer";
import Header from "../components/header";

function search() {
  return (
    <Canvas>
      <Header page="Search" />
      <div className="pt-20 mx-6">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-transparent bg-stone-800 opacity-75 h-10 px-5 pr-16 rounded-lg text-sm text-white focus:outline-none placeholder-white w-full"
            type="text"
            name="search"
            placeholder="Search something..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
      </div>
      <div className="mt-48 text-white text-center">
        <div className="mx-auto flex justify-center item-center">
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1398 0.968851C11.8174 3.59418 5.74794 8.82556 2.16624 16.4603C0.32232 20.389 -0.00307722 22.0709 2.18038e-05 27.6368C0.00312083 33.1911 0.336266 34.9054 2.18793 38.8981C4.9205 44.7916 10.2113 50.0315 16.266 52.8418C20.2111 54.6732 21.9109 55 27.5 55C33.0891 55 34.7889 54.6732 38.734 52.8418C44.7887 50.0315 50.0795 44.7916 52.8121 38.8981C54.6637 34.9054 54.9969 33.1911 55 27.6368C55.0031 22.0693 54.6777 20.3906 52.833 16.4603C50.487 11.4624 46.5722 6.93942 42.1452 4.11061C36.0851 0.238137 26.702 -1.1015 20.1398 0.968851ZM37.9104 7.15293C46.0136 11.0979 50.3235 18.2092 50.3235 27.6368C50.3235 34.2032 48.7144 38.5952 44.6035 43.2539C38.3001 50.396 26.2286 52.5928 17.2872 48.2247C4.87092 42.1586 0.626799 26.8151 8.11559 15.0675C14.2966 5.37086 27.2048 1.94236 37.9104 7.15293ZM14.4841 23.937C13.1995 25.215 13.3189 28.0245 14.7064 29.1699C17.6327 31.5863 22.1728 27.0695 19.7439 24.1582C18.5926 22.7777 15.7686 22.659 14.4841 23.937ZM35.4025 23.937C34.118 25.215 34.2373 28.0245 35.6249 29.1699C36.2826 29.7133 37.6075 29.9137 38.7123 29.6378C40.9823 29.0712 42.1127 25.8963 40.6623 24.1582C39.511 22.7777 36.6871 22.659 35.4025 23.937ZM22.4641 35.6423C21.185 36.1965 19.6463 37.2409 19.0443 37.9631C18.0945 39.1008 18.1131 39.44 19.1853 40.506C20.3172 41.6329 20.6488 41.6298 23.1095 40.4674C26.4975 38.868 28.5025 38.868 31.8905 40.4674C34.3512 41.6298 34.6828 41.6329 35.8147 40.506C36.8869 39.44 36.9055 39.1008 35.9557 37.9616C33.3502 34.8368 26.8856 33.7253 22.4641 35.6423Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mt-2.5">
          <p className="text-xs">No Result Found</p>
        </div>
      </div>
      <Footer page="search" />
    </Canvas>
  );
}

export default search;
