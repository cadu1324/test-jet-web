import React from "react";

const Lista = () => {
  const productsMobile = [
    {
      id: 1,
      name: "Mini Cooper 2020",
      reservation: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 2,
      name: "Mini Cooper 2020",
      reservation: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 3,
      name: "Mini Cooper 2020",
      reservation: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 4,
      name: "Mini Cooper 2020",
      reservation: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
    {
      id: 5,
      name: "Mini Cooper 2020",
      reservation: "Next reservation: 11/07",
      image: "/carlist-image.svg",
      stars: "/star.svg",
    },
  ];

  const productsWeb = [
    {
      id: 1,
      name: "Mini Cooper 2020",
      reservation: "11/07",
      image: "/car-web.svg",
      stars: "/star.svg",
      status: "Available",
    },
    {
      id: 2,
      name: "Mini Cooper 2020",
      reservation: "11/07",
      image: "/car-web.svg",
      stars: "/star.svg",
      status: "Available",
    },
    {
      id: 3,
      name: "Mini Cooper 2020",
      reservation: "11/07",
      image: "/car-web.svg",
      stars: "/star.svg",
      status: "Available",
    },
    {
      id: 4,
      name: "Mini Cooper 2020",
      reservation: "11/07",
      image: "/car-web.svg",
      stars: "/star.svg",
      status: "Available",
    },
    {
      id: 5,
      name: "Mini Cooper 2020",
      reservation: "11/07",
      image: "/car-web.svg",
      stars: "/star.svg",
      status: "Available",
    },
  ];

  return (
    <div>
      <ul>
        {productsMobile.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="li">
              <h1>{product.name}</h1>
              <p>{product.reservation}</p>
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
      <table>
        <thead>
          <tr>
            <th>CAR</th>
            <th>NEXT RESERVATION</th>
            <th>STATUS</th>
            <th>RATING</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {productsWeb.map((product) => (
            <tr key={product.id}>
              <td className="car">
                <img src={product.image} alt={product.name} />
                {product.name}
              </td>
              <td className="reservation">{product.reservation}</td>
              <td className="status">
                <div className="status-box">
                  <p>{product.status}</p>
                </div>
              </td>
              <td className="rating">
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
              </td>
              <td className="dots-vertical">
                <i>
                  <img src={"/dots-vertical.svg"} alt={"dots-vertical"} />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
