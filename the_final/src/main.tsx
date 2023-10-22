import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { store } from "store";
import { Provider } from "react-redux";
import { ScrollToTop } from "components";
import {NextUIProvider} from "@nextui-org/react"
import BackToTop from "components/BackToTop.tsx";
import LoadingonTop from "components/LoadingonTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <LoadingonTop/>
    <BrowserRouter>
    <Provider store = {store}>
     <StyleProvider hashPriority="high">
      <ScrollToTop/>
      <NextUIProvider>
        <BackToTop/>
       <App />
      </NextUIProvider>
     </StyleProvider>
     </Provider>
    </BrowserRouter>
  </div>
);
