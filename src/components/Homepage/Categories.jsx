import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'FLOORING',
    projectCount: 150,
    imageSrc: '/placeholder.svg?height=800&width=600',
    hoverColor: 'bg-blue-500',
  },
  {
    name: 'ARTWORK & MIRROR',
    projectCount: 120,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-red-500',
  },
  {
    name: 'QUARTZ & GRANITE',
    projectCount: 100,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-green-500',
  },
  {
    name: 'SEATING',
    projectCount: 200,
    imageSrc: '/chairs.png',
    hoverColor: 'bg-yellow-500',
  },
  {
    name: 'LIGHTING',
    projectCount: 180,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-purple-500',
  },
  {
    name: 'GLASS DOORS',
    projectCount: 90,
    imageSrc: '/placeholder.svg?height=800&width=600',
    hoverColor: 'bg-pink-500',
  },
  {
    name: 'TUB SURROUNDS',
    projectCount: 70,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-indigo-500',
  },
  {
    name: 'BARN DOORS',
    projectCount: 60,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-teal-500',
  },
  {
    name: 'CASEGOODS',
    projectCount: 110,
    imageSrc: '/placeholder.svg?height=400&width=600',
    hoverColor: 'bg-orange-500',
  },
];

function CategoryCard({ category, className }) {
  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className={`block relative overflow-hidden ${className} group`}
    >
      <div className="absolute inset-0 bg-gray-200">
        <img
          src={category.imageSrc}
          alt={category.name}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
            category.name === 'SEATING' 
              ? 'object-contain object-right-bottom'
              : 'object-cover'
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gray-200 bg-opacity-80 transition-opacity duration-300 group-hover:bg-opacity-0" />
      <div className={`absolute inset-0 ${category.hoverColor} opacity-0 transition-opacity duration-300 group-hover:opacity-80`} />
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <p className="text-xl font-medium mb-2 group-hover:opacity-0 transition-opacity duration-300">
          {category.projectCount} PROJECTS
        </p>
        <h2 className="text-6xl font-bold mb-4 transition-colors duration-300 group-hover:text-white">
          {category.name}
        </h2>
        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-2xl mr-3">see project</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function PerfectlyAlignedCategories() {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <div className="w-1/2 relative">
          <CategoryCard category={categories[0]} className="h-full" />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="h-1/2 relative">
            <CategoryCard category={categories[1]} className="h-full" />
          </div>
          <div className="h-1/2 relative">
            <CategoryCard category={categories[2]} className="h-full" />
          </div>
        </div>
      </div>
      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col">
          <div className="h-1/2 relative">
            <CategoryCard category={categories[3]} className="h-full" />
          </div>
          <div className="h-1/2 relative">
            <CategoryCard category={categories[4]} className="h-full" />
          </div>
        </div>
        <div className="w-1/2 relative">
          <CategoryCard category={categories[5]} className="h-full" />
        </div>
      </div>
      <div className="flex h-1/2-screen">
        <div className="w-1/2 relative">
          <CategoryCard category={categories[6]} className="h-full" />
        </div>
        <div className="w-1/2 relative">
          <CategoryCard category={categories[7]} className="h-full" />
        </div>
      </div>
    </div>
  );
}