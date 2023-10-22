import "./App.css";
import { useRoutes } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div>
      <div>{useRoutes(router)}</div>
    </div>
  );
}
export default App;
