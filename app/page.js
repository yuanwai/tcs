'use client'

import React, { useState } from 'react';
import { ThirdMenu } from './thirdMenu';
import { RightTopMenu, SearchBar, Logo } from './topMenuBar';
import { PromptBar, FilterArea } from './promptBar';
import { PageNav } from './pageNav';


const App = () => {

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



  const [secondLabel, setSecondLabel] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');

  const showLabel = (item) => {
    setSecondLabel(item);
  }

  const showPrompt = (item) => {
    setCurrentPrompt(item);
  }

  return (
    <div>
      {/* Top Area */}
      <div className="p-2 flex justify-between items-center shadow-md">
        <div className="flex items-center w-4/5">
          {/* Logo */}
          <Logo />
          {/* Search box */}
          <SearchBar />
        </div>
        {/* Menu */}
        <RightTopMenu />
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
                <li key={index} className="px-2 py-1 rounded-md">
                  <a href="#" onClick={() => showLabel(item)}>{item}</a>
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
          <PromptBar />
          <div className='flex'>
            <div className='font-semibold'>主题：</div>
            <ThirdMenu secondLabel={secondLabel} />
          </div>
          {/* Item Display Area */}
          <ImgDisplay />
          {/* Pagination */}
          <PageNav />
        </div>
      </div>
    </div>
  );


function ImgDisplay(){
  const images = [
      { id: 1, imageUrl: 'https://www.luxiangdong.com/images/food/meishi1-600x360.png', prompt: 'meishi1-600x360' },
      { id: 2, imageUrl: 'https://www.luxiangdong.com/images/food/meishi2-600x360.png', prompt: 'meishi2-600x360' },
      { id: 3, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang1-400x240.png', prompt: 'jiazhuang1-400x240' },
      { id: 4, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang2-400x240.png', prompt: 'jiazhuang2-400x240' },
      { id: 5, imageUrl: 'https://www.luxiangdong.com/images/food/meishi1-600x360.png', prompt: '图片展示内容' },
      { id: 6, imageUrl: 'https://www.luxiangdong.com/images/food/meishi2-600x360.png', prompt: '图片展示内容' },
      { id: 7, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang1-400x240.png', prompt: '图片展示内容' },
      { id: 8, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang2-400x240.png', prompt: '图片展示内容' },
      // ... Add more image data here
    ];

    return(
      <div className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id}>
              {/* Image */}
              <img src={image.imageUrl} alt='' width={600} height={360} />
              {/* Text */}
              <button className="rounded-sm px-2 py-1 bg-blue-500 border" onClick={() => showPrompt(image.prompt)}>使用Prompt</button>
            </div>
          ))}
        </div>
    )
}
};



export default App;
