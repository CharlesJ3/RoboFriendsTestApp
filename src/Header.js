import React from 'react';

export default class Cast extends React.Component {    
      
  render() {
    return (
      <div className="tc bg-alice-blue">
        <div className="backgroundAnimateColor tc header">
          <h2 className="tc smallGrowth white borderBright">Always <strike>S</strike>FUNNY! - Random Quote!</h2>
          <h3 className="tc bigGrowth white borderBright">Hover over a card to reveal a random quote!</h3>
        </div>
      </div>
    );
  }
}
