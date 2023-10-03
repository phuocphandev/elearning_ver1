import "./App.css";
import { useRoutes } from "react-router-dom";
import { router } from "./router";

function App() {
  // const handleClick= async() =>{
  //   const flag =await NotiAlert(); 
  //   console.log("flag: ", flag);
    
  // }
  return (
  <div>
    <div>{useRoutes(router)}</div>;
    {/* <button onClick={handleClick}>abc</button> */}
  </div>)
}
export default App;
