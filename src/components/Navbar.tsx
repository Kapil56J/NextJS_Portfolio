'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'RESUME', path: '/resume' },
    { name: 'PROJECT', path: '/project' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              <Link 
                href="/" 
                className="text-xl font-semibold text-gray-800 font-raleway tracking-widest uppercase"
                style={{ 
                  fontSize: '0.9em', 
                  letterSpacing: '0.15em' 
                }}
              >
                Kapil Jadhav
              </Link>
            </div>
            <div className="h-4 w-px bg-gray-300 mr-2" />
          </div>
          <div className="hidden md:flex items-center space-x-0">
            {navItems.map((item, index) => (
              <div key={item.path} className="flex items-center">
                <Link
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium font-raleway tracking-widest uppercase ${
                    pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  style={{ 
                    fontSize: '0.7em', 
                    fontWeight: 400, 
                    letterSpacing: '0.25em' 
                  }}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <div className="h-4 w-px bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 