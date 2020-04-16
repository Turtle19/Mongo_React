import React from 'react';
import { PropTypes } from 'react';
import Detail from './detail.js';
import GraphiqueComponent from './graphiqueComponent.js';
export default class ConsommationMensuelle extends React.Component {
  constructor(props){
    super(props);
    this.months = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"] ;

  }

  render(){
    let detail = this.months.map(
      (e,i) => <Detail month={e} name={ this.props.currentClient.name }
                ressElectricite={ this.props.currentClient.electricite[i] }
                ressGaz={ this.props.currentClient.gaz[i] }
                ressEau={this.props.currentClient.eau[i]}
                {...this.props} key={i}  />
    );
    return(
      <div>
        <table className="detailConso">
              <caption> Details sur la consommation annuelle du client {this.props.currentClient.name} </caption>
                       {detail}
        </table>
        <GraphiqueComponent client={this.props.currentClient} months={this.months} />
      </div>
    );
  }
}
