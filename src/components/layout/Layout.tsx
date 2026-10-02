import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Code2, FolderGit2, User, Mail } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-400">
            <Code2 className="w-6 h-6" />
            <span>Developer Portfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              Home
            </Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              Projects
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <User className="w-4 h-4" />
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 flex-1 flex flex-col justify-center items-center w-full">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Freelance Developer Portfolio. All rights reserved.
      </footer>
    </div>
  );
};
