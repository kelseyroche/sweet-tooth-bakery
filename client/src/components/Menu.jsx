import { useEffect, useState } from "react";
import { client } from "../sanityClient";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "menuItem"]{
        _id,
        name,
        description,
        price,
        image {
          asset -> {
            url
          }
        }
      }`)
      .then((data) => setMenuItems(data))
      .catch(console.error);
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item._id} className="menu-item">
            <h3>{item.name} — ${item.price.toFixed(2)}</h3>
            <p>{item.description}</p>
            {item.image?.asset?.url && (
              <img src={item.image.asset.url} alt={item.name} width="200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;