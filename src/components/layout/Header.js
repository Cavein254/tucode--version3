import Link from "next/link";
import React from "react";
import { FaGuitar } from "react-icons/fa";

function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div>
        {/* logo */}

        <div className="flex flex-row justify-between bg-black pl-2 m-0">
          <div className="flex flex-col text-white pl-2 pt-2">
            <div>
              <div className="flex flex-row justify-center items-center">
                <FaGuitar size={45} />
                <div className=" text-2xl">PATE</div>
              </div>
              <div>
                <div className=" text-sm">International</div>
                <div className="text-xs">+253 444 333</div>
              </div>
            </div>
          </div>

          {/* Mid */}
          {/* Todo: Make it hidden in small devices */}
          <div className="text-gray-400 font-xs mt-8 hidden md:flex">
            <div className="pr-2">
              <Link href="/">TICKETS</Link>
            </div>
            <div className="pr-2">
              <Link href="/">PREVIOUS LINEUPS</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MERCH</Link>
            </div>
            <div className="pr-2">
              <Link href="/">SUSTAINABILITY</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MEDIA</Link>
            </div>
            <div className="pr-2">
              <Link href="/">HELP</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MORE</Link>
            </div>
            <div className="pr-2">
              <Link href="/">WORLDWIDE</Link>
            </div>
          </div>
          {/* login */}
          <div className="flex flex-row">
            <div className=" pr-2 mr-4 text-gray-400">
              <div className="">Create My Account / </div>
              <div className="">Login</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="">Icon</div>
            <div className="">=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;