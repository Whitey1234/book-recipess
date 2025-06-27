import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopRecipe = () => {
  const [topRecipe, setTopRecipe] = useState([]);

  useEffect(() => {
    fetch('https://recipebook-clientside.vercel.app/top-recipe')
      .then(res => res.json())
      .then(data => setTopRecipe(data));
  }, []);

  return (
    <div className="w-[90%] mx-auto ">
      <h1 className='text-center text-4xl font-bold my-8 p-2 text-blue-700 border-b-2'>
        Top 4 Recipes
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          topRecipe.slice(0, 4).map(item => (
            <div key={item._id} className="bg-base-100 shadow-md rounded-xl flex flex-col h-full">
              <img
                src={item.image}
                alt={item.title || "Recipe image"}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                {/* <p className="text-gray-600 text-sm mb-3">
                  {item.description?.slice(0, 80) || 'No description available...'}...
                </p> */}
                <p className="text-green-600 text-sm font-semibold mb-4">
                  👍 Like: {item.likeCount}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  <span className="badge badge-primary">{item.categories}</span>
                  <span className="badge badge-secondary">{item.cuisine}</span>
                </div>
                <Link to={`/recipedetails/${item._id}`} className="mt-auto">
                  <button className="btn btn-sm btn-primary w-full">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex justify-center mt-10'>
        <Link to='/allrecipe'>
          <button className='btn bg-blue-700 text-white'>See All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipe;
