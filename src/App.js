// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar"
let NavLink = [
  {
    txt: 'Главная',
    url: "/",
  },
  {
    txt: 'Отзывы',
    url: "/reviews",

  },
  {
    txt: 'Акции и скидки',
    url: "/sales",
  },
];
function App() {
  return (
    <div className="App">
            <NavBar arrLink={NavLink}></NavBar>
      <Outlet/>
    </div>
  );
}

export default App;
