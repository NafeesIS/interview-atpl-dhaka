"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { products } from "../../../../../public/products";
import Link from "next/link";
import { AuthContext } from "@/provider/AuthProvider";

const Product = () => {
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
    <div className="w-full px-4">
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
      <h1 className="font-bold text-3xl text-center my-8">All Products</h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Link
            href={`/product-details/${product.id}`}
            key={index}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-xl"
                width={350}
                height={250}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions">
                <button className="btn bg-[#5995fd] btn-primary">
                  Price: {product.price} $
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
