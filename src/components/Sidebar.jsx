import { useNavigate, useLocation } from "react-router-dom";
import { FaHotel, FaBed, FaChair, FaUserTie, FaUser, FaUsers } from "react-icons/fa";
import "./Sidebar.css";

const menu = [
  { label: "Hoteles", route: "hoteles", icon: <FaHotel /> },
  { label: "Habitaciones", route: "habitaciones", icon: <FaBed /> },
  { label: "Salones", route: "salones", icon: <FaChair /> },
  { label: "Roles", route: "roles", icon: <FaUserTie /> },
  { label: "Empleados", route: "empleados", icon: <FaUser /> },
  { label: "Usuarios", route: "usuarios", icon: <FaUsers /> },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span role="img" aria-label="hotel" style={{ fontSize: "1.7rem" }}>🏨</span>
        <span className="sidebar-title">Menú</span>
      </div>
      <nav className="sidebar-nav">
        {menu.map((item) => (
          <button
            className={`sidebar-btn${pathname.includes(item.route) ? " active" : ""}`}
            key={item.route}
            onClick={() => navigate(`/dashboard/${item.route}`)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}