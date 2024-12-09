const CardSmall = ({ store }) => {
  return (
    <a href="/" className="card">
      <div className="card-info">
        <div className="card-title">{store.name}</div>
        <div className="card-sub">{store.sub}</div>
      </div>
      <img src="./res/images/bread_img.jpg" alt="" />
    </a>
  );
};

export default CardSmall;
