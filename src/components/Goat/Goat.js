import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div class="card">
        <img class="card-img-top" src={goat.imgUrl} alt="Card of Goat"/>
        <div class="card-body">
          <h5 class="card-title">{goat.name}</h5>
          <p class="card-text">{goat.beardLength}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Goat;
