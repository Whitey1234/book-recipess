import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyRecipesTable = () => {
  const { user } = useContext(AuthContext);
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://recipebook-clientside.vercel.app/addrecipes`)
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(item => item.addedBy === user.email);
          setMyRecipes(filtered);
        });
    }
  }, [user]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-black-700 mb-6">My Recipes</h2>

      {myRecipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="table w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Cuisine</th>
                <th>Likes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myRecipes.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} alt={item.title} className="w-14 h-14 rounded object-cover" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.cuisine}</td>
                  <td>{item.likeCount}</td>
                  <td>
                    {/* You can add edit/delete later */}
                    <button className="btn btn-sm btn-error text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRecipesTable;
