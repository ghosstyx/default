import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../components/Nav";

function GameEditRoute() {
  const [titleInp, setTitleInp] = useState("");
  const [descInp, setDescInp] = useState("");
  const [rdInp, setRdInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [devInp, setDevInp] = useState("");
  const navigate = useNavigate();
  const { gameId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${gameId}`).then((response) => {
      setTitleInp(response.data.title);
      setDescInp(response.data.description);
      setRdInp(response.data.releaseDate);
      setImageInp(response.data.imageURL);
      setImageInp(response.data.developer);
    });
  }, []);

  const onEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/games/${gameId}`, {
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
        <h1>Eski oyinni ozgartirish</h1>
        <form onSubmit={onEdit} className="flex flex-col space-y-4 p-10">
          <input
            value={titleInp}
            onChange={(e) => setTitleInp(e.target.value)}
            className="border p-2"
            type="text"
            placeholder="title"
          />
          <input
            value={descInp}
            onChange={(e) => setDescInp(e.target.value)}
            className="border p-2"
            type="text"
            placeholder="description"
          />
          <input
            value={rdInp}
            onChange={(e) => setRdInp(e.target.value)}
            className="border p-2"
            type="text"
            placeholder="realiseDate"
          />
          <input
            value={imageInp}
            onChange={(e) => setImageInp(e.target.value)}
            className="border p-2"
            type="text"
            placeholder="imageURL"
          />
          <input
            value={devInp}
            onChange={(e) => setDevInp(e.target.value)}
            className="border p-2"
            type="text"
            placeholder="developer"
          />
          <input
            className="border bg-green-500 p-2"
            type="submit"
            value="Yaratish"
          />
        </form>
      </div>
    </div>
  );
}

export default GameEditRoute;
