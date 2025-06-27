import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CardDetails = () => {
  const { user } = useContext(AuthContext);
  const [allRecipes, setAllRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://recipebook-clientside.vercel.app/addrecipes')
      .then(res => res.json())
      .then(data => setAllRecipes(data));
  }, []);

  const findCard = allRecipes.find(recipe => recipe._id === id);

  if (!findCard) {
    return <div className="text-center mt-10 text-gray-500">Loading recipe details...</div>;
  }

  const {
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    categories,
    likeCount,
    addedBy
  } = findCard;

  const isOwner = user?.email === addedBy;

  const handleLikes = () => {
    const updatedLikes = parseInt(likeCount) + 1;
    const updatedRecipes = allRecipes.map(item =>
      item._id === id ? { ...item, likeCount: updatedLikes } : item
    );
    setAllRecipes(updatedRecipes);

    fetch(`https://recipebook-clientside.vercel.app/addrecipes/${id}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likeCount: updatedLikes }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Like updated:', data);
        fetch('https://recipebook-clientside.vercel.app/addrecipes')
          .then(res => res.json())
          .then(data => setAllRecipes(data));
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 lg:flex gap-8">
        {/* Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 space-y-3">
          <h1 className="text-3xl font-bold text-blue-700">{title}</h1>

          <p className="text-sm text-gray-600">
            <strong>Cuisine:</strong> {cuisine || 'N/A'}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Preparation Time:</strong> {prepTime || '?'} mins
          </p>

          <p className="text-sm text-gray-600">
            <strong>Categories:</strong> {Array.isArray(categories) ? categories.join(', ') : categories}
          </p>

          <div>
            <strong className="text-gray-700">Ingredients:</strong>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
              {ingredients?.split(',').map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong className="text-gray-700">Instructions:</strong>
            <ul className="list-decimal list-inside text-sm text-gray-600 mt-1">
              {instructions?.split('.').filter(Boolean).map((step, idx) => (
                <li key={idx}>{step.trim()}.</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-green-600 font-medium">❤️ {likeCount || 0} Likes</p>
            <button
              onClick={handleLikes}
              disabled={isOwner}
              className={`px-4 py-1 rounded-md text-white text-sm ${
                isOwner ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isOwner ? 'Your Recipe' : 'Like'}
            </button>
          </div>

          <div className="mt-6">
            <Link to="/" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
