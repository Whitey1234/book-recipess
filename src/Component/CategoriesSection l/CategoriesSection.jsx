import React, { useState, useEffect } from 'react';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Load all categories manually (or from API if needed)
    setCategories(['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drinks', 'Snacks']);

    // Load all recipes
    fetch('https://recipebook-clientside.vercel.app/addrecipes')
      .then(res => res.json())
      .then(data => setFilteredRecipes(data));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    fetch('https://recipebook-clientside.vercel.app/addrecipes')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(recipe => recipe.categories?.includes(category));
        setFilteredRecipes(filtered);
      });
  };

  return (
    <section className="py-16 bg-base-200 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">Explore by Categories</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-md shadow ${selectedCategory === cat ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <div key={recipe._id} className="bg-white shadow rounded-lg p-4">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="font-semibold text-lg text-gray-800">{recipe.title}</h3>
              <p className="text-sm text-gray-600">{recipe.categories}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
