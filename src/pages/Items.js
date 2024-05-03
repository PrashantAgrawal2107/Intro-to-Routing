import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
        <ul>
        {ITEMS.map((item) => (
              <Link to={`/items/${item.id}`}>
                    <li key={item.id}>{item.id}</li>
              </Link>
          ))}
          {/* <Link to="item-1"><li>Item1</li></Link>
          <Link to="item-2"><li>Item2</li></Link>
          <Link to="item-3"><li>Item3</li></Link> */}
        </ul>
      </main>
    </>
  );
}

export default Items;
