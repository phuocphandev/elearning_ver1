import "./App.css";
import {useRoutes } from "react-router-dom";
import { router } from "./router";
import { useEffect, useState } from "react";
import { Loading } from "pages";

function App() {
  const withDelay = (Component, delay)=>{
    return function DelayedComponent(props) {
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, delay);
      }, []);
  
      return isLoading ? <Loading/> : <Component {...props} />;
    };
  }
  
  return (
  <div>
        
          { useRoutes(router)}
      

  </div>)
  // <div>{useRoutes(router)}</div>;
}
export default App;
