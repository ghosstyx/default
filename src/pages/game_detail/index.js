import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Nav from "../../components/Nav";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function GameDetailRoute() {
  const { gameId } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${gameId}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const onDelete = () => {
    axios.delete(`http://localhost:3000/games/${gameId}`).then(() => {
      navigate("/games");
    });
  };

  if (data == null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading
          type={"spinningBubbles"}
          color={"rgb(100, 77, 67)"}
          width={100}
        />
      </div>
    );
  }

  return (
    <>
      <div className="text-white">
        <Nav />
        <div className="flex justify-center">
          <img className="w-[600px]" src={data.imageURL} />
        </div>
        <h1 className="text-[30px] text-center my-[20px]">{data.title}</h1>
        <h2 className="text-center mx-[500px]">{data.description}</h2>
        <div className="flex space-x-[20px] justify-center">
          <Link
            to={`/games/edit/${gameId}`}
            className="mt-6 p-4 bg-green-300 text-green-600"
          >
            Edit
          </Link>
          <button
            onClick={() => setModalIsOpen(true)}
            className="mt-6 p-4 bg-red-300 text-red-600"
          >
            delete
          </button>
        </div>
        <Modal style={customStyles} isOpen={modalIsOpen}>
          <h1>Do you want to delete the game?</h1>
          <div className="space-x-4 mt-10">
            <button className="bg-red-300 px-8 py-4 rounded" onClick={onDelete}>
              Xa
            </button>
            <button
              className="bg-gray-300 px-8 py-4 rounded"
              onClick={() => setModalIsOpen(false)}
            >
              Yo'q
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default GameDetailRoute;
