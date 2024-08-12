import React from "react";

function BotCard({ bot, handleClick, removeBot }) {
  const handleDeleteBot = async () => {
    try {
      const response = await fetch(`http://localhost:8000/bots/${bot.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        removeBot(bot.id);
      } else {
        throw new Error("Failed to delete bot");
      }
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };

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
      {removeBot && <button onClick={handleDeleteBot}>X</button>}
    </div>
  );
}

export default BotCard;
