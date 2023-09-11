import "./App.css";
import Bill from "./Bill";
import FriendService from "./FriendService";
import MyService from "./MyService";
import PayText from "./PayText";
import Reset from "./Reset";

function App() {
  return (
    <div className="App">
      <Bill />
      <MyService />
      <FriendService />
      <PayText />
      <Reset />
    </div>
  );
}

export default App;
