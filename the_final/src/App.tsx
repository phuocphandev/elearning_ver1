import "./App.css";
import { useRoutes } from "react-router-dom";
import { router } from "./router";
import { NotiAlert } from "constant";

function App() {
  const handleClick= async() =>{
    const flag =await NotiAlert(); 
    console.log("flag: ", flag);
    
  }
  return (
  <div>
    <button onClick={handleClick}>abc</button>
  </div>)
  // <div>{useRoutes(router)}</div>;
}
export default App;
