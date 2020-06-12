import React, { Component } from "react";
import axios from "axios";
class Lyric extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=e331ef0c8e781b36cd838763c8a16747`
      )
      .then((res) => {
        this.setState({
          lyrics: res.data.message.body.lyrics,
        });
      })
      .catch((err) => console.log(err));
    // this.setState({
    //   lyrics: dataJson.message.body.lyrics,
    // });
  };

  render() {
    console.log(this.state.lyrics);
    return (
      <div>
        <h1>hello from lyric</h1>
      </div>
    );
  }
}

export default Lyric;
