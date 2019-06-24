
import React, { Component } from 'react'


export default class Comment extends Component {
    constructor(props) {
        super(props);
       
        this.state = { commentText: "" };
    
      }
    render(){
        return(
        <div className="comment"> 
            {this.props.commentText}
        </div>) 
    }
}