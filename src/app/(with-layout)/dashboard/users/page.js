"use client";
import React, { useContext } from "react";
import { userData } from "../../../../../public/users";
import Image from "next/image";
import { AuthContext } from "@/provider/AuthProvider";
import Link from "next/link";
const Users = () => {
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
  return (
    <div className="w-full p-4">
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
          <Link className="btn  bg-[#5995fd]" href="/">
            Login
          </Link>
        )}
      </div>
      <h1 className="text-center text-3xl font-bold my-8">All Users</h1>
      <div className="divide-y-2 border-2 w-full">
        {userData.map((user, index) => (
          <div
            key={index}
            className="flex p-4 justify-between w-full items-center"
          >
            <Image
              width={40}
              height={40}
              src={user.photoURL}
              alt={user.name}
              className="user-image"
            />

            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
