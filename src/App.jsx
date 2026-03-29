import React from "react";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Кнопка була натиснута!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Бебебубубу" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;