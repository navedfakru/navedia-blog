import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Footer = () => {

  const [isAdmin, setIsAdmin] = useState(null)

  const userData = useSelector(state => state.auth.userData)

  useEffect(() => {
    console.log("footer", userData?.labels[0] )
    console.log("fotter is admin", userData?.labels[0] === 'admin' )
    setIsAdmin(userData?.labels[0] === 'admin')
  }, [userData])

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navedia Blog</h3>
            <p className="text-gray-600">
              increase your knowledge with our blog and article across various subjects.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-posts" className="text-gray-600 hover:text-blue-600 transition-colors">
                  All Posts
                </Link>
              </li>
              {
                isAdmin && (
                  <li>
                    <Link to="/add-post" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Add Post
                    </Link>
                  </li>
                )
              }
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a to="mail:naved10055@gmail.com" className="text-gray-600">
              Email: naved10055@gmail.com
            </a>
            <p className="text-gray-600">
              Phone: +91 9027045195
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Navedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;