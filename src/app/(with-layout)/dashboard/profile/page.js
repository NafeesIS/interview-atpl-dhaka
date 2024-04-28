"use client";
import React, { useContext } from "react";
import { userData } from "../../../../../public/users";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBuildingFillGear, BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import {
  MdLocationCity,
  MdOutlineLocationOn,
  MdOutlineShareLocation,
} from "react-icons/md";
import Link from "next/link";
const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();
      // Show a success notification
      toast.success("logout successful");
    } catch (error) {
      console.error(error);
    }
  };
  //   console.log(user);
  return (
    <div className=" w-full mx-auto">
      <div className="flex items-center justify-end">
        {user ? (
          <div className="flex items-center justify-end pt-4">
            <Image
              src={user.photoURL}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full object-cover mr-2"
            />
            <button className="btn bg-[#5995fd]" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn bg-[#5995fd]" href="/">
            Login
          </Link>
        )}
      </div>
      <h1 className="text-center text-3xl  font-bold mt-4 my-8">My Profile</h1>
      <div className="">
        {user && (
          <div className="bg-white rounded-2xl my-6 pb-8">
            {/* TODO  */}
            <div className="bg-[#5995fd] bg-opacity-70 h-28 relative rounded-t-2xl ">
              <div className="left-[calc(50%-40px)] absolute top-[40%]">
                <figure>
                  <Image
                    src={user.photoURL}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="h-[96px] w-[96px]  mb-4 rounded-full ring-4 ring-white ring-offset-2 ring-offset-white"
                  />
                </figure>
              </div>
            </div>
            <h2 className="text-2xl mt-12   font-semibold text-center">
              {user.name}
            </h2>

            <div className="divide-y max-w-[400px] mx-auto rounded-md divide-gray-3 border border-gray-3  ">
              <h3 className="text-lg font-semibold mb-1 p-4">
                Personal Information
              </h3>
              <div className="py-3 px-4 space-y-2">
                <div className="flex gap-2 items-center text-gray-6">
                  <HiOutlineMail className="text-2xl" />
                  <span> Email</span>
                </div>
                <p className="">{user.email}</p>
              </div>
              <div className="py-3 px-4 space-y-2">
                <div className="flex gap-2 items-center text-gray-6">
                  <AiOutlinePhone className="text-2xl" />
                  <span>Phone</span>
                </div>
                <p> {user.phone ? user.phone : "N/A"}</p>
              </div>
              <div className="py-3 px-4 space-y-2">
                <div className="flex gap-2 items-center text-gray-6">
                  <BsGenderAmbiguous className="text-2xl" />
                  <span>Gender</span>
                </div>
                <p>{user.gender ? user.gender : "N/A"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
