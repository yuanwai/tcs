'use client'

import React, { useState } from 'react';

const App = () => {
  // State to control the visibility of the submenu and detailed submenu
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showDetailedSubMenu, setShowDetailedSubMenu] = useState(false);

  // Sample data for menu and submenu items
  const menuItems = [
    {
      label: '分类',
      subItems: ['美食', '家装', '广告', 'UI设计', '时装'],
    },
    {
      label: '最近使用',
      subItems: ['美食商业摄影', '吉卜力动漫'],
    },
  ];

  const images = [
    { id: 1, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 2, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 3, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 4, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 5, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 6, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 7, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    { id: 8, imageUrl: 'https://via.placeholder.com/200x120', altText: '图片展示内容' },
    // ... Add more image data here
  ];

  // Sample data for detailed submenu
  const detailedSubMenuItems = ['牛排', '中餐', '日料', '法餐'];

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleDetailedSubMenuToggle = () => {
    setShowDetailedSubMenu(!showDetailedSubMenu);
  };

  return (
    <div>
      {/* Top Area */}
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center w-4/5">
          {/* Logo */}
          <div className="bg-blue-500 h-8 w-8"></div>
          {/* Search box */}
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 p-2 rounded-md w-4/5"
          />
        </div>

        {/* Menu */}
        <div className="flex items-center">
          {/* Three menu items */}
          <div className="mr-4">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white">
              文档
            </button>
          </div>
          <div className="mr-4">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white">
              联系
            </button>
          </div>
          <div className="relative mr-4">
            <button
              className="px-2 py-1 rounded-md bg-blue-500 text-white"
              onMouseEnter={handleSubMenuToggle}
              onMouseLeave={handleSubMenuToggle}
            >
              用户中心
            </button>
            {/* Submenu */}
            {showSubMenu && (
              <div className="absolute mt-2 bg-white border border-gray-300 p-2 rounded-md">
                {menuItems.map((menuItem, index) => (
                  <div key={index}>
                    <div
                      className="font-semibold mb-1 cursor-pointer"
                      onMouseEnter={handleDetailedSubMenuToggle}
                      onMouseLeave={handleDetailedSubMenuToggle}
                    >
                      {menuItem.label}
                    </div>
                    {/* Detailed Submenu */}
                    {showDetailedSubMenu &&
                      menuItem.label === '分类' && (
                        <div className="ml-2">
                          {detailedSubMenuItems.map((item, index) => (
                            <div key={index}>
                              <a href="#">{item}</a>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex p-4">
        {/* Left Menu Area */}
        <div className="bg-gray-300 p-4 w-1/12 h-full">
          {/* Left Menu content */}
          <div className="mb-4">
            <div className="font-semibold mb-2">分类</div>
            <ul>
              {menuItems[0].subItems.map((item, index) => (
                <li key={index}>
                  {/* Submenu item */}
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">最近使用</div>
            <ul>
              {menuItems[1].subItems.map((item, index) => (
                <li key={index}>
                  {/* Submenu item */}
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Workspace Area */}
        <div className="flex-1 p-4 ml-4 bg-gray-300">
          {/* Input Area */}
          <div className="flex items-center mb-4">
            <div className="font-semibold mr-4">Prompt</div>
            <textarea className="flex-1 border border-gray-300 p-2"></textarea>
            <div className="ml-4 flex-col">
              <button className="px-2 py-1 rounded-md bg-blue-500 text-white mb-2 mr-2">
                Copy
              </button>
              <button className="px-2 py-1 rounded-md bg-blue-500 text-white">
                Save
              </button>
            </div>
          </div>

          {/* Filter Area */}
          <div className="flex items-center mb-4">
            {/* Filter inputs */}
            <div className="flex">
      {/* First Input */}
      <div className="flex mr-2">
        <label htmlFor="inputA" className="block mb-1">
          a:
        </label>
        <input
          type="text"
          id="inputA"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Second Input */}
      <div className='flex mr-2'>
        <label htmlFor="inputB" className="block mb-1">
          b:
        </label>
        <input
          type="text"
          id="inputB"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
    </div>
            <button className="ml-4 px-2 py-1 rounded-md bg-blue-500 text-white">
              过滤
            </button>
          </div>

          {/* Item Display Area */}
          <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          {/* Image */}
          <img src={image.imageUrl} alt={image.altText}/>
          {/* Text */}
          <div className="text-center">{image.altText}</div>
        </div>
      ))}
    </div>

          {/* Pagination */}
          <div className="flex justify-center mt-2">
            {/* Pagination component */}
            {/* (Your pagination component here) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
