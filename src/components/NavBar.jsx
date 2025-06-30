import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css'; // CSS로 꾸미고 싶다면

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: '🏠 Home' },
    { to: '/todo', label: '📝 Todo List' },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;