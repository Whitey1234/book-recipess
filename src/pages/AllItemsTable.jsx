import React from 'react';
import { useLoaderData } from 'react-router';

const AllItemsTable = () => {
  const recipes = useLoaderData();

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">All Recipes (Dashboard View)</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Likes</th>
              <th>Added By</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="font-semibold">{item.title}</td>
                <td>{item.cuisine || 'N/A'}</td>
                <td>{item.likeCount}</td>
                <td>{item.addedBy || 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItemsTable;
