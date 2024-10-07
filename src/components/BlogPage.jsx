"use client";

import { useState } from 'react';
import Image from 'next/image';
import Comp from "../img/comp.svg" 
import Note from "../img/note.svg" 
import Work from "../img/worktime.svg" 
import Notetwo from "../img/noteandpen.svg" 
import Read from "../img/read.svg" 
import Handmade from "../img/compandnote.svg" 
import Flower from "../img/flower.svg" 
import Coffe from "../img/coffe.svg"

const blogPosts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    date: '2024-10-01',
    category: 'Design',
    author: 'Author 1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image:Comp ,
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    date: '2024-10-02',
    category: 'Decor',
    author: 'Author 2',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: Note,
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    date: '2024-10-03',
    category: 'Handmade',
    author: 'Author 3',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: Work,
  },
  // Add more posts as needed
];

export default function BlogPage() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Calculate the index of the first and last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the current posts for the page
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 border rounded-lg"
          />
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts Section */}
        <main className="md:col-span-2 grid grid-cols-1 gap-8">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.author} | {post.date} | {post.category}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <a href="#" className="text-blue-500 hover:underline mt-4 block">Read more</a>
              </div>
            </div>
          ))}
        </main>

        {/* Sidebar Section */}
        <aside className="space-y-8">
          {/* Categories Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Crafts</span>
                <span>3</span>
              </li>
              <li className="flex justify-between">
                <span>Design</span>
                <span>6</span>
              </li>
              <li className="flex justify-between">
                <span>Handmade</span>
                <span>4</span>
              </li>
              <li className="flex justify-between">
                <span>Interior</span>
                <span>1</span>
              </li>
              <li className="flex justify-between">
                <span>Wood</span>
                <span>0</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {blogPosts.slice(0, 4).map((post) => (
                <li key={post.id} className="flex items-start space-x-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{post.title}</h3>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <footer className="max-w-7xl mx-auto mt-10 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(Math.ceil(blogPosts.length / postsPerPage)).keys()].map((number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
