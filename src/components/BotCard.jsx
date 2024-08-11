import React from "react";

function BotCard({ bot, handleClick, removeBot }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <div>
        <span>Class: {bot.bot_class}</span>
        <span>Health: {bot.health}</span>
        <span>Damage: {bot.damage}</span>
        <span>Armor: {bot.armor}</span>
      </div>
      {removeBot && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeBot(bot.id);
          }}
        >
          Remove Bot
        </button>
      )}
    </div>
  );
}

export default BotCard;
