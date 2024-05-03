import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <main>
        <h1>Home Page</h1>
        {/* <a href="/about">About</a>  // This will lead to refreshing of the page... */}
        {/* <Link to="/about">About</Link>&nbsp;
        <Link to="/items">Items</Link> */}
      </main>
    </>
  );
}

export default Home;
