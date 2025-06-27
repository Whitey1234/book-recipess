import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ total: 0, myItems: 0 });

  useEffect(() => {
    fetch('https://recipebook-clientside.vercel.app/addrecipes')
      .then(res => res.json())
      .then(data => {
        const myItems = data.filter(item => item.userEmail === user?.email);
        setStats({ total: data.length, myItems: myItems.length });
      })
      .catch(err => console.error("Failed to load stats:", err));
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Welcome, {user?.displayName || "User"}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold text-center">Total Recipes</h3>
          <p className="text-3xl text-blue-600 text-center">{stats.total}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold text-center">My Recipes</h3>
          <p className="text-3xl text-green-600 text-center">{stats.myItems}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-blue-900 break-all">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
