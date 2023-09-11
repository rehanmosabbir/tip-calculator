import { useState } from "react";
import Bill from "./Bill";
import FriendService from "./FriendService";
import MyService from "./MyService";
import PayText from "./PayText";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleChangeBill(e) {
    // console.log(e.target.value);
    setBill(Number(e.target.value));
  }
  function handleChangeMyPercentage(e) {
    // console.log(e.target.value);
    setMyPercentage(Number(e.target.value));
  }
  function handleChangeFriendPercentage(e) {
    // console.log(e.target.value);
    setFriendPercentage(Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setMyPercentage(0);
    setFriendPercentage(0);
  }

  const percentageAverage = (myPercentage + friendPercentage) / 2;
  const tip = Math.round((bill * percentageAverage) / 100);
  const totalBill = bill + tip;

  return (
    <div className="App">
      <Bill bill={bill} onChangeBill={handleChangeBill} />
      <MyService
        myPercentage={myPercentage}
        onChangeMyPercentage={handleChangeMyPercentage}
      />
      <FriendService
        friendPercentage={friendPercentage}
        onChangeFriendPercentage={handleChangeFriendPercentage}
      />
      <PayText
        totalBill={totalBill}
        bill={bill}
        tip={tip}
        myPercentage={myPercentage}
        friendPercentage={friendPercentage}
      />
      <Reset
        bill={bill}
        myPercentage={myPercentage}
        friendPercentage={friendPercentage}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
