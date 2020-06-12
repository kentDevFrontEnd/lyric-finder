import React, { Component } from "react";

const Context = React.createContext();
class Provider extends Component {
  state = {
    track_list: [],
    healding: "top 10 lyrical",
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&apikey=e331ef0c8e781b36cd838763c8a16747`
      );
      // `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&apikey=${process.env.REACT_APP_MM_KEY}`
      let dataJson = await response.json();

      this.setState({
        track_list: dataJson.message.body.track_list,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
