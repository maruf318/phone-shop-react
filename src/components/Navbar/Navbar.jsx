import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-5 shadow-md">
      <h2 className="text-3xl font-bold">Phone shop</h2>
      <div>
        <ul className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-red-200" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-red-200" : ""
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-red-200" : ""
            }
          >
            Login
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
