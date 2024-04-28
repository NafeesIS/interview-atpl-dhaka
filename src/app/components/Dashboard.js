"use client";

import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useContext, useState } from "react";
import imageOne from "../../../public/assets/control.png";
import imageTwo from "../../../public/assets/logo.png";
import Link from "next/link";
import { AuthContext } from "@/provider/AuthProvider";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

const Dashboard = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-[4800px] sm:h-[2300px] lg:h-[1900px]">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#5995fd] h-[4800px] sm:h-[2300px] lg:h-[1900px] p-5  pt-8 relative duration-300`}
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
            ATPL Dhaka
          </h1>
        </div>
        <ul className="pt-6">
          {/* {Menus.map((Menu, index) => ( */}
          <li>
            <Link
              href="/dashboard/product"
              // key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
                mt-2`}
            >
              <FaShoppingCart width={40} height={40} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Product
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              // key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
                mt-2`}
            >
              <FaUser width={40} height={40} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Profile
              </span>
            </Link>
          </li>
          {user && user.email === "nafees96321@gmail.com" && (
            <li>
              <Link
                href="/dashboard/users"
                // key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 mt-2`}
              >
                <PiUsersThreeFill width={40} height={40} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Users
                </span>
              </Link>
            </li>
          )}
          {/* ))} */}
        </ul>
      </div>
      {/* <div className="h-screen p-7">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-5xl font-bold text-center">
            Welcome To The Dashboard
          </h1>
          <p className="text-2xl font-semibold">
            Explore Your Profile and All Available Products
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
