import React from 'react';
import CreateClient from './createClient.js';
import DisplayAllClients from './displayAllClients';

/* Ce composant Client permet la création d'un nouveau client (gérer par CreateClient)
* et l'affichage de la liste des clients disponibles avec possibilité de
* les supprimer (géré par DisplayAllClients)
* Ce component est le parent de : CreateClient et DisplayAllClients
*/
export default class Client extends React.Component{
  constructor(props){
    super(props);
    this.state = { allClients : [] };
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
/*
* @param clientId : correspond à l'id du client à supprimer
*/
  clientRemoved(clientId){
    const res = this.state.allClients.filter( (client) => client._id !== clientId );
    this.setState({allClients : res });
  }

  /*
  * @param client : le nouveau client à ajouter dans la liste allClients
  */
  addClientToList(client){
    let res = this.state.allClients;
    res.push(client);
    this.setState({allClients : res});
  }

  render(){
    return (
        <div>
        <CreateClient addClientToList={ (newClient) => this.addClientToList(newClient)}/>

        <DisplayAllClients allClients={this.state.allClients}
                           clientRemoved={(clientId) => this.clientRemoved(clientId)}/>
        </div>
      );
  }


}
