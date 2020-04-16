import React from 'react';
import { PropTypes } from 'react';
import UpdateCoutUnitaire from './updateCoutUnitaire.js';
import Client from './client.js';
export default class Data extends React.Component {
  constructor(props){
    super(props);
    this.state = { click : false }
    //click pour la gestion du click sur le bouton More Data
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      (prevState, props) => ({ click : ! prevState.click })
    );
  }

  render(){

    if(this.state.click ){
      return(
        <div>
          <UpdateCoutUnitaire {...this.props}/>
          <button className="bdata" onClick= { this.handleClick}> More Data </button>
        </div>   
      );
    }

    //Sinon on reste dans le component Client
    else{
      return(
        <div>
          <button className="bdata" onClick= { this.handleClick}> More Data </button>
          <div>
            <Client {...this.props}/>
          </div>
        </div>
      );

    }

  }
}
