import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/add-order', label: 'Add Order' },
  { to: '/order-history', label: 'Order History' },
  { to: '/services', label: 'Services' },
  { to: '/add-funds', label: 'Add Funds' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow h-full">
      <div className="p-4 text-xl font-bold text-center border-b dark:border-gray-700">no1SMM</div>
      <nav className="flex flex-col p-4 gap-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}