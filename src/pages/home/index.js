import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import AuctionForm from "./auctionForm";

function HomeRoute() {
  return (
    <div className="bg-gray-200 h-screen">
      <Nav />
      <h1 className="text-center text-[30px] text-lime-600 my-[50px]">
        Home Page
      </h1>
      <AuctionForm />
    </div>
  );
}
export default HomeRoute;
