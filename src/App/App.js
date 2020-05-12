import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }
  // outside render - anything that modifies state
  // anytime your getting data or deleting it goes here or click an event to modify

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    // inside the render - anything we need to do to modify the UI
    // anytime you are looping over the data or changing how it shows;
    const { goats } = this.state;
    return (
      <div className="App">
        <h1>GOAT YOGA LTD</h1>
        <GoatCoral goats={goats} useAGoat={this.useAGoat}/>
        </div>
    );
  }
}
export default App;
