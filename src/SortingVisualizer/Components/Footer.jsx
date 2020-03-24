import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        stars: 0,
        forks: 0,
      };
  
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/brchung/sorting-visualizer')
          .then(res => res.json())
          .then(
            (result) => {
              const { stargazers_count, forks_count } = result;
              this.setState({ stars: stargazers_count, forks: forks_count});
            },
            (error) => {
              console.log(error);
            }
          );
      }

    render(){
        return(
            <div>
                <p>Made with 💖 by Brian Chung</p>
                <p>Built with React, Node.js, and Material UI</p>
                <span>{`Forks: ${this.state.forks} `}</span>
                <span>{`Stars: ${this.state.stars}`}</span>
                <p>Copyright © 2020 Brian Chung</p>
            </div>
        );
    }
}