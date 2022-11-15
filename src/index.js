import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [flag, setflag] = useState(false);
root.render(
  <>
    <Welcome />
  </>
);
