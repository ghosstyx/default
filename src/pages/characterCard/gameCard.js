import { Link } from "react-router-dom";

function GameCard(props) {
  return (
    <Link to={props.to}>
      <div className="md:ml-[25px] ml-[40px] hover:shadow-lg  hover:bg-neutral-800 opacity-[1] rounded-xl h-auto pb-3 w-[420px] sm:w-[620px] transition-colors  mb-[20px]">
        <div className="flex justify-center pt-1">
          <img
            className="hover:opacity-[1] w-[500px] h-[250px] sm:w-[600px] sm:h-[330px] rounded-xl"
            src={props.imageURL}
          />
        </div>
        <p className="ml-3 mt-[8px] text-[25px] font-medium">{props.name}</p>
        <div className="mt-5 mx-2">
          <div className="">
            <p className="text-[15px] text-gray-500 font-medium">
              {props.desc}
            </p>
          </div>
          <div className="my-[15px]">
            <p className="text-[25px] ml-[5px]">{props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
