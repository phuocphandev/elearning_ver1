import "./App.css";
import { useRoutes } from "react-router-dom";
import { router } from "./router";

function App() {
  // const handleClick = async () => {
  //   const flag = await NotiAlert();
  //   console.log("flag: ", flag);
  // };
  return <div>{useRoutes(router)}</div>;
}
export default App;
