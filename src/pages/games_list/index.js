import axios from "axios";
import { useEffect, useState, useRef } from "react";
import CharacterCard from "../characterCard/characterCard";
import GameCard from "../characterCard/gameCard";
import ReactLoading from "react-loading";
import Nav from "../../components/Nav";
import Children from "./Children";
import FreeGameCard from "../characterCard/freeGameCard";
import { GiftIcon } from "../characterCard/icons";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function GamesList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        setData(response.data);
      })
      .catch();
  }, []);

  if (data.length == 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type={"spinningBubbles"} color={"gray"} width={100} />
      </div>
    );
  }
  return (
    <div className="m-0 p-0 text-white">
      <Nav />
      <Search />
      <Children>
        <p className="text-[30px] font-medium my-4 ml-[40px]">Most Popular :</p>
        <div className="grid grid-cols-2 ml-[30px] mr-[10px] md:grid-cols-4">
          {data.map((game) => {
            return (
              <CharacterCard
                key={game.id}
                to={`/games/${game.id}`}
                imageURL={game.imageURL}
                name={game.title}
                realDate={game.releaseDate}
              />
            );
          })}
        </div>
        <Game2 />
        <div>
          <FreeGames />
        </div>
        <Catalog />
      </Children>
      <Footer />
    </div>
  );
}

export default GamesList;

function Game2() {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/games2")
      .then((response) => {
        setData2(response.data);
      })
      .catch();
  }, []);
  return (
    <div className="w-full h-full pb-[20px] mt-[60px] rounded-xl">
      <div className="m-[30px] text-[30px]">Top Sellers :</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data2.map((game) => {
          return (
            <GameCard
              key={game.id}
              to={`/games2/${game.id}`}
              imageURL={game.imageURL}
              desc={game.description}
              name={game.title}
              price={game.price}
            />
          );
        })}
      </div>
    </div>
  );
}
function FreeGames(props) {
  const [data3, setData3] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/freeGames")
      .then((response) => {
        setData3(response.data);
      })
      .catch();
  }, []);
  return (
    <div className="w-full h-full pb-[20px] pt-[10px] mt-[60px] rounded-xl bg-freeColour">
      <div className="m-[30px] flex justify-between items-center">
        <div>
          <p className="text-[25px] flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 mr-[10px]"
            >
              <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
            </svg>
            Free Games
          </p>
        </div>
        <div>
          <button className="border hover:bg-white hover:text-black hover:font-medium hover:border-slate-800 transition-colors px-4 py-2">
            View More
          </button>
        </div>
      </div>
      <div className="grid p-0 m-0 grid-cols-1 md:grid-cols-2">
        {data3.map((game) => {
          return (
            <FreeGameCard
              key={game.id}
              to={`/freeGames/${game.id}`}
              imageURL={game.imageURL}
              name={game.title}
              data={game.releaseDate}
            />
          );
        })}
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <div className="flex md:justify-evenly md:flex-row flex-col  items-center my-[70px]">
      <div className="rounded-3xl">
        <img
          src="https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=400&amp;quality=medium&amp;resize=1&amp;w=580"
          className=" sm:h-[300px] sm:w-[480px]  md:h-[400px] md:w-[580px]"
        />
      </div>
      <div>
        <Link className="text-[20px] flex justify-center md:justify-start">
          Explore Our Catalog
        </Link>
        <p className="my-[30px] text-center md:text-start text-neutral-400 ">
          Browse by genre, features, price, and more to find your next favorite
          game.
        </p>
        <div className=" flex justify-center md:justify-start">
          <button className="py-[15px] px-[13px]  rounded-lg bg-white text-neutral-900 text-[14px] font-medium uppercase">
            Browse All
          </button>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="sticky hidden md:block top-0">
      <div className=" mx-[20px] ml-[80px]  bg-neutral-900 px-[10px]  space-x-5 flex items-center py-[20px]">
        <form className="bg-neutral-800 py-[7px] w-[250px] flex rounded-3xl">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-[10px] w-4 h-4 text-neutral-500"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="border-none text-[15px] px-[7px] bg-transparent text-neutral-500"
            placeholder="Search Store"
          />
        </form>
        <Link className="text-neutral-700 hover:text-neutral-300 transition-colors">
          Discover
        </Link>
        <Link className="text-neutral-700 hover:text-neutral-300 transition-colors">
          Browse
        </Link>
        <Link className="text-neutral-700 hover:text-neutral-300 transition-colors">
          News
        </Link>
      </div>
    </div>
  );
}
