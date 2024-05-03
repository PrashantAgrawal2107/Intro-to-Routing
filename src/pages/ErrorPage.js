import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>navigate(-1),3000); // Take back to previous page
    })
  return (
    <>
        <h1>Oops!!! Something Went Wrong</h1>
    </>
  );
}

export default ErrorPage;