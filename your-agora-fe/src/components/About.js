import React from 'react'
import Header from './Header'
// import EditProfileButton from  '../

export default function About(props) {

  return(

    <div>

      <Header />

      <div className="AboutPage">

        <br />
        <h3> About </h3>

        <div className="AboutText row">

          <div className="row">
            <p className="six columns">
              YourAgora started as a response to the current political climate in the U.S.
              The country has become increasingly polarized, and social media appears to have had the unfortunate effect of creating opinion silos,
              as algorithms designed to deliver relevant content surface more and more of what a person identifies with.
            </p>
          </div>

          <div className="row">
            <p className="six columns">
              The resulting echo chambers amplify opinions and reinforce some positions, while others go unconsidered in their scarcity.
              Still others are seen as absurd, or worse.  It's now all too easy to become divided, and to lack mutual understanding.
              We believe that opening up a market of ideas, where people can engage with some of the best arguments available,
              is a good first step to correcting this.  We hope this project, or something like it,
              would yield a more widely read, and therefore more empathetic population.
            </p>
          </div>

          <p>Happy reading.</p>

        </div>


        <h3> Project Authors </h3>

        <div className="row" id="about-authors">

          <div className="three columns" id="info-colby">
            <b> Colby Pines </b>
            <em><a href="https://github.com/wcpines/" target="_blank">@wcpines</a></em>
            <p>
              Former philosophy major turned technologist.  In his increasingly fictional 'spare time',
              Colby enjoys running, rock climbing, and jazz.  He also has a growing interest in DevOps and lowering his regex golf handicap.
            </p>
          </div>

          <div className="three columns" id="info-kevin">
            <b> Kevin Evans </b>
            <em><a href="https://github.com/MKevinEvans" target="_blank">@mkevinevans</a></em>
            <p>
              Kevin taught Music Technology at Santa Barbara City College where he became enthralled by the idea that
              technology can create fresh means to communicate, engage, and educate.
              He is a great fan of learning, and loves new ways of telling old stories.
            </p>
          </div>

          <div className="three columns" id="info-tom">
            <b> Tom Marren </b>
            <em><a href="https://github.com/thomasmarren" target="_blank">@thomasmarren</a></em>
            <p>
              Returned Peace Corps volunteer who turned his love of languages from human to programming.
              When he's not questioning the pursuit of learning Vim, you can find Tom homebrewing,
              playing soccer, or listening to hip hop.

            </p>
          </div>

        </div>

      </div>
    </div>
  )

}
