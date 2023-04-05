import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: "01",
      title: "Hats",
    },
    {
      id: "02",
      title: "Jackets",
    },
    {
      id: "03",
      title: "Sneakers",
    },
    {
      id: "04",
      title: "Womens",
    },
    {
      id: "05",
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <div className="background-image"></div>
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
