import React from 'react';
import { PropTypes } from 'react';
import DisplayClientWithCoutAnnuel from './displayClientWithCoutAnnuel.js';
import ConsommationMensuelle from './consommationMensuelle.js';

/*Ce component renvoie la liste des clients avec les ressources de chaque client et leurs coûts annuels*/
export default class DisplayClientsRessources extends React.Component {
  constructor(props){
    super(props);
    this.state = { allClients : [], currentClient : [], on : false };
    this.nameClientClicked = this.nameClientClicked.bind(this);


  }

  /*On recupère tous les clients de la BD */
  componentDidMount(){
      var requestOptions = { method: 'GET',
                             headers: {"Content-Type" : "application/json"},
                       };
      fetch('http://localhost:3000/clientsrest/', requestOptions)
        .then(response => response.json())
        .then(clientList => this.setState({ allClients : clientList }))

}
/* Cette methode recupère le client selectionné lors d'un client sur le nom de celui-ci */
nameClientClicked(clientId){
  let currentClient = this.state.allClients.find(client => client._id === clientId);
  this.setState((prevState, props)  => ({currentClient : currentClient, on : ! prevState.on }));
}
render(){

  let clientsWithCout = this.state.allClients.map(
    (client,i) => <DisplayClientWithCoutAnnuel name={client.name} eau={client.eau} gaz={client.gaz}
                   electricite={client.electricite} clientId={client._id}
                   {...this.props }
                   nameClientClicked={this.nameClientClicked }  key={i} />
  );

  let consommationMensuelle = <ConsommationMensuelle  currentClient={ this.state.currentClient } allRessources={this.props.allRessources}/>

  if(this.state.on){
    return(
      <div>
        { clientsWithCout }
        { consommationMensuelle }
      </div>
    );
  }
  else{
    return(
      <div>
        { clientsWithCout }
      </div>
    );
  }

}
}
