import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleClick={() => addBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
