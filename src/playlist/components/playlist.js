import React, { Component } from 'react';
import './playlist.css';
import Media from './Media'

class Playlist extends Component {
  render() {
    let playlist = this.props.data.categories[0].playlist
    console.log(this.props.data.categories[0].playlist);
    return (
      <div className="Playlist">
      {
        playlist.map((perro)=>{
          return <Media {...perro} key={perro.id}/>
        })
      }
    </div>
    );
  }
}


export default Playlist;
