import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot }) {
  return (
    <div className="bot-collection">
      <h3 className="bot-collection-header">Bot Collection</h3>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleClick={() => addBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
