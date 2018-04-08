import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    let currentYear = (new Date()).getFullYear();
    return (
      <footer>
        <div className="container">
            <div className="logo-container">
                <div className="logo">
                    <div className="circle">
                        <div className="share">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <ul>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="left-side">
                    &copy; {currentYear} Belciug Ovidiu-Mihai
                    star github
                </div>
                <div className="right-side">
                   
                </div>
            </div>
        </div>
      </footer>
    )  
  }
}

export default Footer
