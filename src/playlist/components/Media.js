import React, { Component } from 'react';
import './media.css';

class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div>
          <img src={this.props.image} alt='Esta es una img del Bitcoin' width={260} height={160} />
          <h3 className='Media-title'>{this.props.title}</h3>
          <p classAuthor='Media-author'>{this.props.author}</p>
        </div>
      </div>
    );
  }
}

export default Media;
