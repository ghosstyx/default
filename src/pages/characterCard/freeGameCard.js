import { Link } from "react-router-dom";

function FreeGameCard(props) {
  return (
    <Link to={props.to}>
      <div className="md:ml-[25px] ml-[40px] hover:shadow-lg  hover:bg-neutral-700 opacity-[1] rounded-xl h-auto pb-[10px] m-0 p-0 w-[420px] sm:w-[640px] transition-colors  mb-[20px]">
        <div className="flex justify-center pt-1">
          <img
            className="hover:opacity-[1] w-[500px] h-[250px] sm:w-[600px] sm:h-[330px] rounded-xl"
            src={props.imageURL}
          />
        </div>
        <p className="ml-3 mt-[8px] text-[19px] font-medium">{props.name}</p>
        <div className="mt-5 mx-2">
          <p className="text-[16px] text-gray-500 font-medium">{props.data}</p>
        </div>
      </div>
    </Link>
  );
}

export default FreeGameCard;
