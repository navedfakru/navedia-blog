import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Button, ThemeBtn } from "..";
import authService from "../../appwrite/auth";
import { useSelector } from "react-redux";
import { setPosts } from "../../store/postsSlice";

const Navbar = () => {

  const [isAdmin, setIsAdmin] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userData = useSelector(state => state.auth.userData);
  console.log("userdata::", userData)

  const logout = () => {
    authService.logout()
  }

  useEffect(() => {
    console.log("footer", userData?.labels[0]);
    console.log("fotter is admin", userData?.labels[0] !== 'admin');
    setIsAdmin(userData?.labels[0] === 'admin')
    setUser(userData);
  }, [userData])

  return (
    <header className="bg-white shadow border-b-1">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Navedia Blog</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/all-posts" className="text-gray-700 hover:text-blue-600 transition-colors">
                All Posts
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600 hidden md:inline">
                  Hi, {user.name}
                </span>
                {
                  isAdmin && (
                    <Link to="/add-post" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Add Posts
                    </Link>
                  )
                }
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
            <ThemeBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
