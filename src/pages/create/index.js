import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

function CreateRoute() {
  const [titleInp, setTitleInp] = useState("");
  const [descInp, setDescInp] = useState("");
  const [rdInp, setRdInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [devInp, setDevInp] = useState("");
  const navigate = useNavigate();

  const onCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/games/", {
        title: titleInp,
        description: descInp,
        releaseDate: rdInp,
        imageURL: imageInp,
        developer: devInp,
      })
      .then(function (response) {
        navigate(`/games/${response.data.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="max-w-6xl mx-auto shadow-lg rounded p-10">
        <h1 className="text-white text-center text-[25px]">
          Create The Game :
        </h1>
        <form onSubmit={onCreate} className="flex flex-col space-y-4 p-10">
          <input
            value={titleInp}
            onChange={(e) => setTitleInp(e.target.value)}
            className="border-[2px] bg-slate-600 text-gray-300 p-2"
            type="text"
            placeholder="title"
          />
          <input
            value={descInp}
            onChange={(e) => setDescInp(e.target.value)}
            className="border-[2px] bg-slate-600 text-gray-300 p-2"
            type="text"
            placeholder="description"
          />
          <input
            value={rdInp}
            onChange={(e) => setRdInp(e.target.value)}
            type="text"
            className="border-[2px] bg-slate-600 text-gray-300 p-2"
            placeholder="releaseDate"
          />
          <input
            value={imageInp}
            onChange={(e) => setImageInp(e.target.value)}
            type="text"
            className="border-[2px] bg-slate-600 text-gray-300 p-2"
            placeholder="imageURL"
          />
          <input
            value={devInp}
            onChange={(e) => setDevInp(e.target.value)}
            type="text"
            className="border-[2px] bg-slate-600 text-gray-300 p-2"
            placeholder="developer"
          />
          <input
            className="border bg-green-600 text-white p-2"
            type="submit"
            value="Yaratish"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateRoute;
