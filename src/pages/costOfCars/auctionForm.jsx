import { useState } from "react";
import { useNavigate } from "react-router";

function AuctionForm() {
  const [nameInp, setInpName] = useState(""); // State yaratish
  const [costInp, setCostInp] = useState(0);
  const [err, SetErr] = useState("");
  const navigate = useNavigate();

  const onSend = (e) => {
    e.preventDefault();
    if (costInp < 10000) {
      SetErr("10 ming AQSH $ dan kam tikseng saytdan chiqib ket!");
      return;
    } else {
      SetErr("");
    }

    console.log(nameInp);
    console.log(costInp);
    navigate("/about");
  };

  return (
    <form onSubmit={onSend} className="flex justify-center items-center flex-col space-y-4 ">
      <label>
        Mashina nomi:
      </label>
      <input
          type="text"
          required
          className="w-[300px] py-3 px-5 rounded border-lime-400 border-[2px]"
          value={nameInp}
          onChange={(e) => {
            setInpName(e.target.value);
          }}
        />
      <br />
      <label>
        Sizning taklifingiz dollarda $:
      </label>
      <input
          
          value={costInp}
          onChange={(e) => {
            setCostInp(e.target.value);
          }}
          type="number"
          className="w-[300px] py-3 px-5 rounded border-lime-400 border-[2px]"
        />
      <br />
      {err && <span className="text-red-600 font-medium animate-bounce">{err}</span>}
      <br />
      <input type="submit" value="Taklif etish" className="py-3 bg-lime-300 text-lime-600 w-[400px]" />
    </form>
  );
}

export default AuctionForm;
