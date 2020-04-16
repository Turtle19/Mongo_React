import React from 'react';
import { PropTypes } from 'react';
import ConsommationMensuelle from './consommationMensuelle.js';

/*ce component renvoie un client avec sa liste de ressources et leurs coûts annuels*/
export default class DisplayClientWithCoutAnnuel extends React.Component {
  constructor(props){
    super(props);

    this.getPrice = this.getPrice.bind(this);
    this.handleClientClicked = this.handleClientClicked.bind(this);
    this.eauPrice = 1;
    this.gazPrice = 1;
    this.electricitePrice = 1;
  }

  getPrice(){
    this.props.allRessources.forEach((ress) => {
      if(ress.ressources === "eau"){
        this.eauPrice = ress.price;
      }
      else if(ress.ressources === "gaz"){
        this.gazPrice = ress.price;
      }
      else{
        this.electricitePrice = ress.price;
      }
    });

  }
  handleClientClicked(e){
    this.props.nameClientClicked(this.props.clientId);
  }
  render(){
    this.getPrice();
    const sumElec = this.props.electricite.reduce( (acc, currentValue) => acc + currentValue );
    const sumEau = this.props.eau.reduce( (acc, currentValue) => acc + currentValue);
    const sumGaz = this.props.gaz.reduce( (acc, currentValue) => acc + currentValue);

    return(
       <div>
       <span className="cliRess">
            <label className="nameClient" onClick={ this.handleClientClicked } > {this.props.name} </label>
            <label className="nameRess"> Electricite : {(sumElec * this.electricitePrice).toFixed(2)} </label>
            <label className="nameRess"> Gaz : {(sumGaz * this.gazPrice).toFixed(2)} </label>
            <label className="nameRess"> Eau : {(sumEau * this.eauPrice).toFixed(2)} </label>
      </span>
       </div>
    );
  }
}
