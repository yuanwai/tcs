'use client'

import React, { useState } from 'react';
import { ThirdMenu } from './thirdMenu';
import { RightTopMenu,SearchBar,Logo } from './topMenuBar';
import { PromptBar,FilterArea } from './promptBar';
import { ImgDisplay } from './imgDisplay';
import { PageNav } from './pageNav';


const App = () => {
  // State to control the visibility of the submenu and detailed submenu
  const [showThirdMenu, setShowThirdMenu] = useState(false);

  // Sample data for menu and submenu items
  const menuItems = [
    {
      label: '分类',
      secondItems: ['美食', '家装', '广告', 'UI设计', '时装'],
    },
    {
      label: '最近使用',
      secondItems: ['美食商业摄影', '吉卜力动漫'],
    },
  ];

  // Sample data for detailed submenu
  const handleThirdMenuToggle = () => {
    setShowThirdMenu(!showThirdMenu);
  };

  return (
    <div>
      {/* Top Area */}
      <div className="p-2 flex justify-between items-center shadow-md">
        <div className="flex items-center w-4/5">
          {/* Logo */}
          <Logo/>
          {/* Search box */}
          <SearchBar/>
        </div>
        {/* Menu */}
        <RightTopMenu/>
      </div>

      {/* Main Area */}
      <div className="flex p-4 bg-x-gradient-grey-200-grey-400-80">
        {/* Left Menu Area */}
        <div className="p-4 w-1/12 h-full">
          {/* Left Menu content */}
          <div className="mb-4">
            <div className="font-semibold mb-2 text-lg">分类</div>
            <ul>
              {menuItems[0].secondItems.map((item, index) => (
                <li key={index} className="px-2 py-1 rounded-md"
                  onMouseEnter={handleThirdMenuToggle}
                  onMouseLeave={handleThirdMenuToggle}
                >
                  <a href="#">{item}</a>
                  {showThirdMenu && (
                  <ThirdMenu secondItem={item}>
                  </ThirdMenu>)}
                </li>
              ))
              }
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2 text-lg">最近使用</div>
            <ul>
              {menuItems[1].secondItems.map((item, index) => (
                <li key={index}>
                  {/* Submenu item */}
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Workspace Area */}
        <div className="flex-1 p-4 ml-4">
          {/* Input Area */}
          <PromptBar/>
          {/* Filter Area */}
         <FilterArea/>
          {/* Item Display Area */}
          <ImgDisplay/>
          {/* Pagination */}
          <PageNav />
        </div>
      </div>
    </div>
  );
};

export default App;
