export default function RoomCard({ room, discount }) {
    const calculateDiscountPrice = (price) => {
      return price - (price * (discount / 100));
    };
  
    return (
      <div className="card">
        <img src={room.image} alt={room.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{room.name}</h5>
          <p className="card-text">{room.description}</p>
          <p className="text-primary font-weight-bold">
            NT${calculateDiscountPrice(room.price).toFixed(2)} / 晚
          </p>
        </div>
      </div>
    );
  }
  