import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Appbar/Appbar";
import MainRouter from "./AppRouter/MainRouter";
import BottomNav from "./Components/BottonNav/BottomNav";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
      <BottomNav />
    </div>
  );
}

export default App;
