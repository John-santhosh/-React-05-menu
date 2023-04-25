const Menu = ({ id, title, category, desc, img, price }) => {
  return (
    <article className="card">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="price">$ {price}</span>
      </div>
      <p>{desc}</p>
    </article>
  );
};

export default Menu;
