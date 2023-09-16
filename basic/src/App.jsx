import "/src/global.css";
import Cards from "./components/Cards";
import IncreDecre from "./components/IncreDecre";


const App = () => {
  return (
    <>
      <div className="main">
        <div className="hero_sec">
          <div className="nav">
            <a href="" className="logo">
              MovieSite
            </a>
            <div className="navbarList">
              <a href="" className="menubar">
                BollyHood
              </a>
              <a href="" className="menubar">
                South Indian
              </a>
              <a href="" className="menubar">
                HollyHood
              </a>
            </div>
          </div>
          <div className="hero_body">
          <Cards title="ranjit" />
          <Cards title="rang de basanti"/>
          <Cards title="ramlo"/>
         
         <IncreDecre/>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
