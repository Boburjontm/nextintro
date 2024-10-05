"use client"; // Bu yerda komponentni client side component qilish

import Image from "next/image";
import Img1 from "../img/img1.svg";
import Img2 from "../img/img2.svg";
import Img3 from "../img/img3.svg";
import Img4 from "../img/img4.svg";
import Img5 from "../img/img5.svg";
import Img6 from "../img/img6.svg";
import Img7 from "../img/img7.svg";
import Img8 from "../img/img8.svg";

export default function ProductPage() {
  const products = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      oldPrice: 'Rp 3.500.000',
      discount: '-30%',
      image: Img1,
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      image: Img2,
    },
    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      discount: '-50%',
      image: Img3,
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      label: 'New',
      image: Img4,
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      image: Img5,
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      label: 'New',
      image: Img6,
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      oldPrice: 'Rp 14.000.000',
      discount: '-50%',
      image: Img7,
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      label: 'New',
      image: Img8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden"
            >
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                  {product.discount}
                </div>
              )}
              {product.label && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                  {product.label}
                </div>
              )}
              <div className="flex justify-center">
                <Image src={product.image} alt={product.name} width={200} height={150} className="w-48 h-32 object-cover" />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 hover:bg-opacity-70 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white-500 text-yellow-500 hover:text-white px-6 py-2 rounded border-yellow-400 border-2 hover:bg-yellow-600">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="bg-white-500 text-yellow-500 hover:text-white px-6 py-2 rounded border-yellow-400 border-2 hover:bg-yellow-600">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
