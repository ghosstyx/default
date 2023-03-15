import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../list/characterCard";
import ReactLoading from "react-loading";
import Nav from "../../components/Nav";

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
        <ReactLoading type={"bars"} color={"rgb(100, 77, 67)"} width={100} />
      </div>
    );
  }
  return (
    <div className=" bg-slate-200 h-full">
      <Nav />
      <h1 className="text-[30px] mb-[40px] font-medium text-center">
        Oyinlar royxati:
      </h1>
      <div className="grid grid-cols-3 gap-10 gap-y-[20px]">
        {data.map((game) => {
          return (
            <CharacterCard
              key={game.id}
              to={`/games/${game.id}`}
              imageURL={game.imageURL}
              name={game.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GamesList;
