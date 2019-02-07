import React from 'react'
import PropTypes from 'prop-types'

import techiphone from '../images/techiphone.png';
import roundedview from '../images/roundedview.png';


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          {/* <span className="image main"><img src={pic01} alt="" /></span> */}
          <p>Josh Turner is a full stack software engineer / UX & UI designer living in the UK.</p>
          <p>I started my journey in software back in 2017, fast forward 18 months and i'm currently working for <a href="https://consentric.io/">Consentric</a>, a cloud based data management software that complies with the new GDPR regulations</p>
          <p>Check out my <a href="https://github.com/jturner11/"> work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>My working days currently consist of engineering <a href="https://consentric.io/"> Consentric.io</a></p>
          <p>A new cloud-based GDPR software, which provides a comprehensive and compliant record of processing activity for personal data.</p>
          <h3>Technologies i've been using</h3>
          <span><img src={roundedview} /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/joshsturner11@gmail.com" >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/Josh____Turner" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://instagram.com/joshturner_jt" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/jturner11/" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main