export function ImgDisplay(){
    const images = [
        { id: 1, imageUrl: 'https://www.luxiangdong.com/images/food/meishi1-600x360.png', altText: '图片展示内容' },
        { id: 2, imageUrl: 'https://www.luxiangdong.com/images/food/meishi2-600x360.png', altText: '图片展示内容' },
        { id: 3, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang1-400x240.png', altText: '图片展示内容' },
        { id: 4, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang2-400x240.png', altText: '图片展示内容' },
        { id: 5, imageUrl: 'https://www.luxiangdong.com/images/food/meishi1-600x360.png', altText: '图片展示内容' },
        { id: 6, imageUrl: 'https://www.luxiangdong.com/images/food/meishi2-600x360.png', altText: '图片展示内容' },
        { id: 7, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang1-400x240.png', altText: '图片展示内容' },
        { id: 8, imageUrl: 'https://www.luxiangdong.com/images/food/jiazhuang2-400x240.png', altText: '图片展示内容' },
        // ... Add more image data here
      ];

      return(
        <div className="grid grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id}>
                {/* Image */}
                <img src={image.imageUrl} alt={image.altText} width={600} height={360} />
                {/* Text */}
                <div className="text-center">{image.altText}</div>
              </div>
            ))}
          </div>
      )
}