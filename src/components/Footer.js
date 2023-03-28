import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-800 pb-[20px]">
      <div className="mx-[50px]  ">
        <div className=" flex justify-between pt-[20px] border-b pb-[30px] border-b-neutral-700">
          <div>
            <Link className="my-0 ml-[20px] py-0 text-[40px] font-light font-sans border-b-2 border-slate-500">
              SLeam
            </Link>
          </div>
          <Link
            to={"/"}
            className="border border-white px-2 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-center items-center">
              <svg
                fill="#ffffff"
                height="50px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 407.436 407.436"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "></polygon>{" "}
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-[15px]  md:text-[17px] md:flex-row space-x-5 pt-[20px]">
          <div className="pb-[20px] md:pb-1">
            <Link className="text-neutral-400 hover:text-blue-600 px-3 transition-colors border-r border-r-neutral-600">
              Terms of Service
            </Link>
            <Link className="text-neutral-400 hover:text-blue-600 px-3 transition-colors border-r border-r-neutral-600">
              Privacy Policy
            </Link>
            <Link className="text-neutral-400 hover:text-blue-600 px-3 transition-colors border-r border-r-neutral-600">
              Store Refund Policy
            </Link>
          </div>
          <div>
            <p className="p-0 m-0">© 2023, Ghosstyx, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
