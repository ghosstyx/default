import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link to={props.to}>
      <div className="hover:shadow-lg opacity-[1] hover:bg-neutral-800 rounded-xl mb-[10px] h-auto pb-3 w-[240px] sm:w-[300px] md:w-[310px] transition-colors">
        <div className="flex justify-center pt-1 ">
          <img
            className="w-[220px] h-[300px] sm:w-[280px] sm:h-[360px] md:w-[330px] md:h-[400px] "
            src={props.imageURL}
          />
        </div>
        <p className="ml-3 mt-[8px] text-[18px] font-medium">{props.name}</p>
        <div className="flex justify-between items-end mt-5 mx-2">
          <div>
            <p className="text-[14px] text-gray-500 font-medium">
              {props.realDate}
            </p>
          </div>
          <div>
            <p>$ Pricing</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
