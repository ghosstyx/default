import { Link } from "react-router-dom";

function Nav() {
  const OnTun = () => {
    localStorage.setItem("mode", "tun");
  };
  const OnKun = () => {
    localStorage.setItem("mode", "kun");
  };
  return (
    <div className="space-x-[20px] bg-slate-300 py-5 mb-[20px] flex justify-between ">
      <div className="space-x-[20px] mx-[30px]">
        <Link to={"/"}>Home</Link>
        {/* <Link to={"/about"}>About</Link>
        <Link to={"/characters"}>Characters</Link> */}
        <Link to={"/games"}>Games</Link>
        <Link to={"/games/create"}>Create game</Link>
        <Link to={"/games/edit/:gameId"}>Edit game</Link>
      </div>
      <div className="space-x-[20px] mx-[30px]">
        <button onClick={OnTun}>Dark</button>
        <button onClick={OnKun}>Light</button>
      </div>
    </div>
  );
}

export default Nav;
