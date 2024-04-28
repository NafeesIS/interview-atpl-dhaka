"use client";
import Image from "next/image";
import React, { useState } from "react";
import { products } from "../../../../../public/products";
import Navbar from "@/app/components/navbar";
import { BsXLg } from "react-icons/bs";

const getProductById = (productId) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == productId) {
      return products[i];
    }
  }
  return null; // Product with the given ID was not found
};
const ProductPage = ({ params }) => {
  const { id } = params;
  const [amount, setAmount] = useState(1);
  const product = getProductById(id);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center lg:flex-row gap-16 lg:items-center p-4">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-[#5995fd] font-semibold">Watch</span>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>
          <p className="text-gray-700">
            Con unammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
            Questo modello incredibilmente elastico e sostenitivo, è pensato per
            dare il massimo lungo il tuo percorso preferito e fare ritorno a
            casa carico di energia, in attesa della prossima corsa.
          </p>
          <h6 className="text-2xl font-semibold">$ 199.00</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-[#5995fd] text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-[#5995fd] text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-[#5995fd] text-white text-sm font-semibold py-3 px-3 md:px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
