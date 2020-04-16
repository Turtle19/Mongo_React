import React from 'react';
import { PropTypes } from 'react';
export default class Detail extends React.Component {
  constructor(props){
    super(props);
    this.getPrice = this.getPrice.bind(this);
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
  render(){
    this.getPrice();
    return(
      <tbody className="detail">
              <tr>
                <td className="month"> {this.props.month} </td>
                <td className="electricite"> {this.props.ressElectricite} / {(this.props.ressElectricite * this.electricitePrice).toFixed(2)} </td>
                <td className="gaz"> {this.props.ressGaz} / {(this.props.ressGaz * this.gazPrice).toFixed(2)} </td>
                <td className="eau"> {this.props.ressEau} / {(this.props.ressEau * this.eauPrice).toFixed(2)} </td>
              </tr>
      </tbody>
    );
  }
}
