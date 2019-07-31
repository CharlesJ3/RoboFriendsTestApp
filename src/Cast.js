import React from 'react';

export default class Cast extends React.Component {
  constructor() {
    super();

    this.updateQuote = this.updateQuote.bind(this);
    this.setQuote = this.setQuote.bind(this);

    this.state = {
      res1: [],
      quotes: [],
      quoteSelection: Math.floor(Math.random() * 4),
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
        res1: res.cast,
        quotesDennis: [
          `I am a golden god!`,
          `Without the sunglasses, Weekend at Bernie's would have been a very dark, strange tale.`,
          `So, all for thinner limes, raise your hands. And all for thicker limes, raise your hands. Now, there you go. That's a democracy in action. That's two votes against two votes. A perfect example of when democracy has failed.`,
          `My nose was chiseled by the gods themselves, Frank. My body was sculpted to the proportions of Michaelango's "David". You, on the other hand, are a pit of despair. `,
        ],
        quotesCharlie: [
          `I'll just regress, because I feel I've made myself perfectly redundant.`,
          `Aw yeah, yeah, like in The Sixth Sense you find out that the dude in that hair piece the whole time, that's Bruce Willis the whole movie.`,
          `Just get a job? Why don’t I strap on my job helmet, and squeeze down into a job cannon, AND FIRE OFF INTO JOBLAND, WHERE JOBS GROW ON JOBBIES?!!!`,
          `Keep singing, bitch! You're not gonna have a face by the time I'm through with you!`,
        ],
        quotesDeandra: [
          `*Ostrich Noises*`,
          `*Ostrich Noises*`,
          `*Ostrich Noises*`,
          `*Ostrich Noises*`,
        ],
        quotesFrank: [
          `Actually it is Mantis. Mantis Toboggan, MD.`,
          `I still. Got the. Moooooooooves. Go for it, go for it!`,
          `Ongo goblogian, the art collector! Charmed, I'm sure! I'm going to invite you to a show, but first, allow me to destroy your gallery.`,
          `Well, I don't know how many years on this Earth I got left, but I'm gonna get real weird with it.`,
        ],
        quotesRonald: [
          `But I'm more healthier than he is, is the point I think you're trying to make, even with the diabitis.`,
          `People change, Frank. Look at me, I went from a tiny twink, to the muscle-bound freak you see before you.`,
          `Mark my words, Dennis, there will be a time when I utilize these glasses to assess a threat, and then... are they still standing there?`,
          `You know what, it turns out I am too muscular and I can't fit through.`,
        ],
      })
    })
  }

  updateQuote() {
    this.setState({
      quoteSelection: Math.floor(Math.random() * 4),
    })
  }


  setQuote(index) {

    console.log(this.state.setquoteSelection);

    return index === 0 ? this.state.quotesDennis[this.state.quoteSelection] : 
    index === 1 ? this.state.quotesCharlie[this.state.quoteSelection] :
    index === 2 ? this.state.quotesDeandra[this.state.quoteSelection] :
    index === 3 ? this.state.quotesFrank[this.state.quoteSelection] :
    index === 4 ? this.state.quotesRonald[this.state.quoteSelection] : ''
  }

  render() {
    return (
      <div className="tc bg-alice-blue">

        {/* Header - TODO: Change to  */}
        <div className="backgroundAnimateColor tc header">
          <h2 className="tc smallGrowth white borderBright">Always <strike>S</strike>FUNNY! - Random Quote!</h2>
          <h3 className="tc bigGrowth white borderBright">Hover over a card to reveal a random quote!</h3>
        </div>

        {/* Character Cards */}
        <div className="flex flex-wrap justify-center tc" onMouseEnter={this.updateQuote}>

          {this.state.res1.map(({ name, character, profile_path }, index) =>{
            const x = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`;

            return (
            // Individual Cards - Front
            <div key={-index} className="w-30 pa3 mr2 ma1 heightContain flip-card tc" onMouseEnter={this.updateQuote}>
              <div className="flip-card-inner tc cardInfoBorder">

                {/* Front Card Details */}
                <div className="flip-card-front tc bigWaveBGr">
                  <div>
                    <p key={index+name} className="bg-black pa3 mr2 bold tc">{`Actor: ${name}`}<br />
                    <span className="bigGrowth">{`Character: ${character}`}</span></p>
                    <img key={index+character} alt={name} className="frontImage cardInfoBorderFull" src={x} />
                  </div>
                </div>

                {/* Back Card Details */}
                <div className="flip-card-back">

                  {/* generate quote from list of quotes */}
                  <p id={character.substring(0,3) + index}></p>
                  <h2 className="pa3">
                    { 
                      this.setQuote(index)
                    }
                  </h2>
                  <h3>{`-${character}`}</h3>
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
