import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Newspaper, 
  Building2, 
  Wrench, 
  LogOut 
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Адмін Панель</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-navy-700 hover:text-white"
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Головна
          </Link>
          <Link
            to="/admin/news"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-navy-700 hover:text-white"
          >
            <Newspaper className="w-5 h-5 mr-2" />
            Новини
          </Link>
          <Link
            to="/admin/projects"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-navy-700 hover:text-white"
          >
            <Building2 className="w-5 h-5 mr-2" />
            Об'єкти
          </Link>
          <Link
            to="/admin/services"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-navy-700 hover:text-white"
          >
            <Wrench className="w-5 h-5 mr-2" />
            Послуги
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-navy-700 hover:text-white"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Вийти
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;