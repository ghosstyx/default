import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link to={props.to}>
      <div className="hover:shadow-lg opacity-[2] transition-shadow hover:bg-red-200 h-[340px]">
        <img
          className="rounded-[8px] w-[600px] h-[260px]"
          src={props.imageURL}
        />
        <p className="text-center mt-[8px] text-[18px] font-medium">
          {props.name}
        </p>
      </div>
    </Link>
  );
}

export default CharacterCard;
