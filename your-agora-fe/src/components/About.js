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
            <em>@wcpines</em>
            <p>
              Former philosophy major turned technologist.  When not hacking around with the latest web technologies,
              Colby enjoys running, rock climbing, and jazz.  He also has a growing interest in dev-ops and security.
            </p>
          </div>

          <div className="three columns" id="info-kevin">
            <b> Kevin Evans </b>
            <em>@mkevinevans</em>
            <p>
              Elen sila lumenn omentilmo, Nae saian luume'. Cormamin lindua ele lle. Saesa omentien lle,
              vanya sulie Namaarie. Aa' lasser en lle coia orn n' omenta gurtha. Aa' i'sul nora lanne'lle.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.
            </p>
          </div>

          <div className="three columns" id="info-tom">
            <b> Tom Marren </b>
            <em>@tommarren</em>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
              vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>

        </div>

      </div>
    </div>
  )

}