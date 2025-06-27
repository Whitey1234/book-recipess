import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import AllCard from '../Component/AllCard';

const Allrecipe = () => {
  const data = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [sortOrder, setSortOrder] = useState('default'); // new state

  // Extract unique cuisine types
  const cuisineOptions = useMemo(() => {
    const allCuisines = data.map(item => item.cuisine).filter(Boolean);
    const unique = Array.from(new Set(allCuisines));
    return ['All', ...unique];
  }, [data]);

  // Filter and sort recipes
  const filteredAndSortedRecipes = useMemo(() => {
    let filtered = selectedCuisine === 'All' ? [...data] : data.filter(recipe => recipe.cuisine === selectedCuisine);

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.likeCount - b.likeCount);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.likeCount - a.likeCount);
    }

    return filtered;
  }, [data, selectedCuisine, sortOrder]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
  <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
    Explore Delicious Recipes
  </h1>
  <p className="text-gray-600 text-lg">
    Filter and sort to discover your favorite dishes from around the world!
  </p>
</div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
        {/* Filter by Cuisine */}
        <div>
          <label className="font-semibold mr-2">Filter by Cuisine:</label>
          <select
            className="border p-2 rounded"
            value={selectedCuisine}
            onChange={e => setSelectedCuisine(e.target.value)}
          >
            {cuisineOptions.map((cuisine, idx) => (
              <option key={idx} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by Likes */}
        <div>
          <label className="font-semibold mr-2"> Search by Likes:</label>
          <select
            className="border p-2 rounded"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
  {filteredAndSortedRecipes.map(cardData => (
    <div key={cardData._id} className="p-2"> {/* Add horizontal padding here */}
      <AllCard cardData={cardData} />
    </div>
  ))}
</div>
    </div>
  );
};

export default Allrecipe;
