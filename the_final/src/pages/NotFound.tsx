import { useNavigate } from "react-router-dom";
import "../sass/main.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
      <div className="flex flex-col justify-center items-center absolute top-[60%]">
        <p className="text-xl font-bold">Oops! 404 Not Found</p>
        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2" onClick={()=>{navigate('/')}}>Back To Home</button>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
