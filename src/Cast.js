import React from 'react';

export default class Cast extends React.Component {
  constructor() {
    super();

    this.state = {
      res1: [],
    }
  }

  componentDidMount() {
    return fetch("https://api.themoviedb.org/3/tv/2710/season/13/credits?api_key=d79bb5203fc1508d02255a49c0bdd25f", {
      method: "GET",
      headers: {"content-type": "application/json"},
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        res1: res.cast
      })
      console.log(this.res1);
    })
  }

  setQuoteCharacter() {
    console.log('test');
  }

  generateQuote() {
    return 'Throw me in the traaaaaaaaaaaash';
  }

  render() {
    return (
      <div className="tc bg-light-blue">

        {/* Header - TODO: Change to Props */}
        <div className="backgroundAnimateColor tc header">
          <h2 className="tc smallGrowth white">Always Sunny - Random Quote!</h2>
          <h3 className="tc bigGrowth white">Hover over a card to reveal a random quote!</h3>
        </div>

        {/* Character Cards */}
        <div className="flex flex-wrap justify-center tc">
          {this.state.res1.map(({ name, character, profile_path }, index) =>{
            const x = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`;

            return (
              // Individual Cards - Front
            <div key={-index} className="w-30 pa3 mr2 ma1 heightContain flip-card tc" onMouseEnter={this.generateQuote}>
              <div className="flip-card-inner tc">

                {/* Front Card Details */}
                <div className="flip-card-front tc">
                  <p key={index+name} className="bg-dark-blue pa3 mr2 bold tc">{`Actor: ${name}`}<br />
                  <span className="bigGrowth">{`Character: ${character}`}</span></p>
                  <img key={index+character} alt={name} width="25%" max-width="300px" src={x} />
                </div>
              <div className="flip-card-back">
                <h1>{`- ${character}`}</h1>
                <p className="quoteText">{this.generateQuote()}</p>
              </div>
              </div>
            </div>
            )}
          )}

        </div>
      </div>
    )
  }
}
