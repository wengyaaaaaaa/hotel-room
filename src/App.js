import { useState } from 'react';

const rooms = [
  {
    id: 1,
    name: '豪華雙人房',
    description: '附陽台與海景的寬敞空間，讓您放鬆身心。',
    price: 3800,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
  {
    id: 2,
    name: '家庭四人房',
    description: '適合全家出遊，兩張大床與寬敞空間。',
    price: 5200,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
  {
    id: 3,
    name: '經濟單人房',
    description: '簡約舒適，適合商務旅客。',
    price: 2200,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
  {
    id: 4,
    name: '總統套房',
    description: '尊貴奢華的空間，完美適合特殊場合。',
    price: 12000,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
  {
    id: 5,
    name: '標準雙人房',
    description: '經濟實惠，適合短期住宿。',
    price: 3200,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
  {
    id: 6,
    name: '蜜月套房',
    description: '浪漫溫馨的空間，適合新婚夫婦。',
    price: 5800,
    image: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
  },
];

export default function App() {
  const [discount, setDiscount] = useState(0); // 儲存折扣數字

  // 計算折扣後的價格
  const calculateDiscountPrice = (price) => {
    return price - (price * (discount / 100));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">飯店房型介紹</h1>

      {/* 折扣輸入欄位 */}
      <div className="mb-6 text-center">
        <label htmlFor="discount" className="mr-2">輸入促銷折扣 (%)：</label>
        <input
          id="discount"
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="border p-2 rounded"
          min="0"
        />
      </div>

      {/* 房間列表 */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {rooms.map(room => (
          <div key={room.id} className="col">
            <div className="card h-100">
              <img src={room.image} alt={room.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{room.name}</h5>
                <p className="card-text">{room.description}</p>
                
                {/* 顯示折扣前與折扣後的價格 */}
                <p className="text-secondary text-decoration-line-through">
                  NT${room.price} / 晚 {/* 折扣前的價格 */}
                </p>
                <p className="text-primary font-weight-bold">
                  NT${calculateDiscountPrice(room.price).toFixed(2)} / 晚 {/* 折扣後的價格 */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
