import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBot }) {
  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => {}}
          removeBot={removeBot}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
