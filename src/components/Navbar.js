import React, { Component } from 'react'

export default class Navbar extends Component {  
    render() {
        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-start">
                            <div className="navbar-brand">Brand</div>
                            <div className="navbar-search">
                                <span class="fa fa-search"></span>
                                <input type="text" placeholder="Search books..." />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item active-item">Home</div>
                            <div className="navbar-item navbar-dropdown">
                                <span>Hello, Ovidiu</span>
                                {/* <a href="" class="">My Books</a> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
            
        );
    }
}