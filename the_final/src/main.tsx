import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { store } from "store";
import { Provider } from "react-redux";
import { ScrollToTop } from "components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Provider store = {store}>
   <StyleProvider hashPriority="high">
    <ScrollToTop/>
    <App />
   </StyleProvider>
   </Provider>
  </BrowserRouter>
);
