import React, { Component } from 'react'

export default class Rating extends Component {

    render() {
        let score = this.props.score;
       
        let totalScore = 5;
        let negativeScore = totalScore - score;

        let arr = [];
        while (score) {
            arr = [...arr, (<div className="fa fa-star box-star box-star-active"></div>)];
            score--;
        }

        while (negativeScore) {
            arr = [...arr, (<div className="fa fa-star box-star"></div>)];
            negativeScore--;
        }


        return arr;
        
      
    }

}
