import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBot }) {
  const handleBotClick = (botId) => {
    removeBot(botId);
  };
  return (
    <div className="your-bot-army">
      <h3 className="your-bot-army-header">Your Bot Army</h3>
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
