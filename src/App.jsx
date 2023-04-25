import { useState } from "react";
import Title from "./components/Title";
import data from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const App = () => {
  const [menu, setMenu] = useState(data);
  const category = data.map((item) => {
    return item.category;
  });

  const sortItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const result = data.filter((item) => item.category === category);
    setMenu(result);
  };
  return (
    <main>
      <div className="container">
        {}
        <Title category={category} sortItems={sortItems} />
        <Categories category={category} sortItems={sortItems}></Categories>
        <section className="cards">
          {menu.map((item) => {
            return <Menu key={item.id} {...item}></Menu>;
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
