import { Link, Outlet , NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
          {/* <h4 onClick={()=>setPage("Home")}>HOME</h4>
          <h4 onClick={()=>setPage("About")}>ABOUT</h4>
          <h4 onClick={()=>setPage("Items")}>ITEMS</h4> */}
          <NavLink style={({isActive})=>isActive?{color:"blue"}:undefined} to="/"><h4>HOME</h4></NavLink>
          <NavLink style={({isActive})=>isActive?{color:"blue"}:undefined} to="/items"><h4>ITEMS</h4></NavLink>
          <NavLink style={({isActive})=>isActive?{color:"blue"}:undefined} to="/about"><h4>ABOUT</h4></NavLink>
      </div>
      {/* To define a space ...where should children components of Navbar be placed....use Outlet */}
      <Outlet/>
    </>
  );
}

export default Navbar;
