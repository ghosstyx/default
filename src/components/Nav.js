import { Link } from "react-router-dom";
import Tf from "../pages/games_list/NavB";

function Nav() {
  const OnTun = () => {
    localStorage.setItem("mode", "tun");
  };
  const OnKun = () => {
    localStorage.setItem("mode", "kun");
  };
  return (
    <div className="space-x-[20px] bg-slate-800 text-white py-0 mb-[20px] flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <h2 className="my-0 ml-[20px] py-0 text-[40px] font-light font-sans border-b-2 border-slate-500">
            SLeam
          </h2>
        </Link>
      </div>
      <div className="hidden md:block space-x-[20px] mx-[30px] mt-[10px] text-[14px] font-normal uppercase ">
        <Link className="hover:text-slate-500 transition-colors" to={""}>
          Support
        </Link>
        <Link className="hover:text-slate-500 transition-colors" to={""}>
          Community
        </Link>
        <Link className="hover:text-slate-500 transition-colors" to={""}>
          Solutations
        </Link>
        <Link className="hover:text-slate-500 transition-colors" to={""}>
          Learn
        </Link>
        {/* <Link to={"/about"}>About</Link>
        <Link to={"/characters"}>Characters</Link>
        <Link to={"/games"}>Games</Link> */}
        <Link
          className="hover:text-slate-500 transition-colors"
          to={"/games/create"}
        >
          Create game
        </Link>
        <Link
          className="hover:text-slate-500 transition-colors"
          to={"/games/edit/:gameId"}
        >
          Edit game
        </Link>
      </div>
      <div className="space-x-[10px]">
        <Tf />
        <button className="mr-[20px] border hover:bg-white hover:text-black font-medium hover:border-slate-800 transition-colors px-4 py-2">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Nav;
