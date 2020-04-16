import React from 'react';
import { PropTypes } from 'react';

/*Ce component gère l'affichage dans une balise span un client
* avec un bouton pour la suppression du client en question
*/
export default class DisplayClient extends React.Component{
  constructor(props) {
      super(props);
      this.removeClient = this.removeClient.bind(this);
  }
 /**
  * Cette methode permet la suppression d'un client de la BD.
  * Elle est utilisée lors d'un click sur le bouton remove (X)
  * clientRemoved(clientRemoved) est appelée pour également supprimer
  * le client de la liste allClients (ce state se trouve dans le component parent "Client")
  **/
  removeClient(){
    let requestOptions = {method: 'DELETE',
                           headers: {"Content-Type" : "application/json"}
                         };
    fetch('http://localhost:3000/clientsrest/'+this.props.clientId, requestOptions)
      .then(response => response.json())
      .then(clientRemoved => this.props.clientRemoved(clientRemoved._id));
  }

  render(){
    return (
      <span className="display">
        <label> {this.props.name}</label>
        <button id="removeclient" onClick = {this.removeClient} > X </button>
      </span>
    );
  }
}
