import React from "react";

const Lista = () => {
  const products = [
    {
      id: 1,
      name: "Mini Cooper 2020",
      price: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 2,
      name: "Mini Cooper 2020",
      price: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 3,
      name: "Mini Cooper 2020",
      price: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 4,
      name: "Mini Cooper 2020",
      price: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 5,
      name: "Mini Cooper 2020",
      price: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
  ];

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="li">
              <h1>{product.name}</h1>
              <p>{product.price}</p>
              <div className="stars">
                <i>
                  <img src={product.stars} alt={product.stars} />
                </i>
                <i>
                  <img src={product.stars} alt={product.stars} />
                </i>
                <i>
                  <img src={product.stars} alt={product.stars} />
                </i>
                <i>
                  <img src={product.stars} alt={product.stars} />
                </i>
                <i>
                  <img src={product.stars} alt={product.stars} />
                </i>
              </div>
            </div>
            <i className="dots-vertical">
              <img src={"/dots-vertical.svg"} alt={"dots-vertical"} />
            </i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
