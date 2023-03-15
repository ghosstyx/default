import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

function AboutRoute() {
  return (
    <div className="bg-gray-300 h-screen ">
      <Nav />
      <div className="flex justify-center items-center">
        <h1 className="text-[100px] animate-ping mt-[250px]">About Page</h1>
      </div>
    </div>
  );
}

export default AboutRoute;
