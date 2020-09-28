import React from 'react';

import './notFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className="center-content">
        <h1>
          Sorry, this page is not found :(
        </h1>
        <img draggable="false" src="https://www.icegif.com/wp-content/uploads/pikachu-sad-icegif.gif" alt="Pokemon sad gif" />
      </div>
    )
  }
}

export default NotFound;