// DashboardLayout.jsx
import { Outlet, NavLink } from 'react-router';
import Header from '../../Component/Header';
//import Header from '../../Component/Header';

const DashboardLayout = () => {
  return (
    <>
    <Header></Header>
    <div className="flex min-h-screen mt-3">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <NavLink to="/dashboard/overview" className="block hover:text-yellow-300">Overview</NavLink>
        <NavLink to="/dashboard/allrecipe" className="block hover:text-yellow-300">All  Recipe</NavLink>
        <NavLink to="/dashboard/additem" className="block hover:text-yellow-300">Add Recipe</NavLink>
        <NavLink to="/dashboard/myitems" className="block hover:text-yellow-300">My Recipe</NavLink>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default DashboardLayout;
