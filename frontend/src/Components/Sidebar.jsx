import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white flex flex-col">
      {/* Profile Section */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Username</h3>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Contacts/Chats Section */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li
              key={index}
              className="p-4 hover:bg-gray-700 cursor-pointer flex items-center space-x-3"
            >
              <img
                src="https://via.placeholder.com/40"
                alt={`Contact ${index}`}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h4 className="text-sm font-medium">Contact {index + 1}</h4>
                <p className="text-xs text-gray-400">Last message...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
