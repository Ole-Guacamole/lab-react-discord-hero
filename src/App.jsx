// src/App.jsx
import './App.css';
import MenuIcon from "../src/assets/menu-icon.png";
import DiscordLogo from "../src/assets/discord-logo-white.png";
import Background from "../src/assets/discord-background.png";

function App() {
  return (
    <div className="App">
      
      <div className="Navbar">
        <img src={DiscordLogo} alt="menu icon" />
        <img src={MenuIcon} alt="disord logo" />
      </div>
      
      
      <div className="Main">
      <h1>IMAGINE A PLACE ...</h1>
      <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      <button>Download for Mac</button>
      <button className="DarkButton">Open Dicord in your browser</button>
      </div>
      
      <div className="bg-image">
      <img src={Background} alt="disord logo" />
      </div>




    </div>
  );
}

export default App;