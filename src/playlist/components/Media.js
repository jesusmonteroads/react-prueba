import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  render() {
    this.culeClick = (event) => {
      console.log('Hola')
    }
    return (
      <div className='Media-image' onClick={this.culeClick}>
        <div>
          <img src={this.props.cover} alt='Hola' width={200} height={"auto"}/>
          <h3 className='Media-title'>{this.props.title}</h3>
          <p className='Media-author'>{this.props.author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;
