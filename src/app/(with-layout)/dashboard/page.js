"use client";

import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useState } from "react";
import imageOne from "../../../../public/assets/control.png";
import imageTwo from "../../../../public/assets/logo.png";
import Link from "next/link";

const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="flex h-[2500px]">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-[#5995fd] h-[2500px] p-5  hidden pt-8 relative duration-300`}
        >
          <Image
            src={imageOne}
            alt="image"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#5995fd]
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <Image
              width={32}
              height={32}
              src={imageTwo}
              alt="image"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {/* {Menus.map((Menu, index) => ( */}
            <li>
              <Link
                href="/dashboard/product"
                // key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}
              >
                <Image width={32} height={32} alt="image" src={imageTwo} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Product
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                // key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}
              >
                <Image width={32} height={32} alt="image" src={imageTwo} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                // key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2`}
              >
                <Image width={32} height={32} alt="image" src={imageTwo} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Users
                </span>
              </Link>
            </li>
            {/* ))} */}
          </ul>
        </div>
        {/* <div className="h-screen flex-1 p-7">{children}</div> */}
      </div>
    </div>
  );
};

export default Dashboard;
