import React from "react";
import Button from "./button";

function App() {
  const schedules = [
    {
      id: "s1",
      title: "Jogging",
    },
    {
      id: "s2",
      title: "Meditation",
    },
  ];
  return (
    <div>
      <h2>Day Scheduler</h2>
      <Button />
    </div>
  );
}

export default App;
