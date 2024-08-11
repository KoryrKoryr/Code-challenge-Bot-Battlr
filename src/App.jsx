import React, { Component } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: [],
      army: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ bots: data, loading: false });
      })
      .catch((error) => this.setState({ error, loading: false }));
  }

  addBotToArmy = (bot) => {
    this.setState((prevState) => {
      if (!prevState.army.find((b) => b.id === bot.id)) {
        return { army: [...prevState.army, bot] };
      }
    });
  };

  removeBotFromArmy = (botId) => {
    this.setState((prevState) => ({
      army: prevState.army.filter((b) => b.id !== botId),
    }));

    fetch(`http://localhost:8000/bots/${botId}`, {
      method: "DELETE",
    });
  };

  render() {
    const { bots, army, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching bots: {error.message}</div>;

    return (
      <div>
        <h1>Bot Battlr</h1>
        <h3>
          The one and only spot in the known universe where you can custom build
          your own Bot Army!
        </h3>
        <YourBotArmy army={army} removeBot={this.removeBotFromArmy} />
        <BotCollection bots={bots} addBot={this.addBotToArmy} />
      </div>
    );
  }
}

export default App;
