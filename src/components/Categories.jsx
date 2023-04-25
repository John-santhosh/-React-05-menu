const Categories = ({ category, sortItems }) => {
  const set = [...new Set(category)];

  return (
    <div className="btn-container">
      <button onClick={() => sortItems("all")}>All</button>
      {set.map((btn) => {
        return (
          <button onClick={() => sortItems(btn)} key={btn}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
