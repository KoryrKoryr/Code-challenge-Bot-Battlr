import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBot }) {
  const handleBotClick = (botId) => {
    removeBot(botId);
  };
  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => handleBotClick(bot.id)}
          removeBot={removeBot}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
