import React from 'react';
import PropTypes from 'prop-types';
import DisplayClient from './displayClient';
import '../styles/style.css';
/*
 * define component as a class that extends React.component
 * Il permet uniquement la création d'un nouveau client et de l'ajouter
 * dans la BD
*/
export default class CreateClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name : "" };
    this.handleName = this.handleName.bind(this);
    this.filterValue =  this.filterValue.bind(this);
    this.createClient = this.createClient.bind(this);
    this.randomArray = this.randomArray.bind(this);
  }
  /* remet à '' le champ de saisie lorque l'on quitte la zone */
  filterValue() {
    this.setState({ name : '' });
  }

/* renvoie un tableau de valeurs aléatoires comprises entre 4 et 15 */
  randomArray(){
    let tab = new Array(12);
    for(var i=0; i<12; i++){
      tab[i] = Math.floor(Math.random() * (15 - 4) +4);
    }
    return tab;
  }

/* crée un nouveau client et l'ajoute dans la BD
* puis fait appel à la methode addClientToList pour l'ajout dans la liste allClients
* (state se trouvant dans le composant parent)
*/
createClient(event){
  event.preventDefault()
  let body = JSON.stringify({name : this.state.name,
                             gaz : this.randomArray(),
                             eau : this.randomArray(),
                             electricite : this.randomArray()
                          });
  var requestOptions = { method: 'POST',
                         headers: {"Content-Type" : "application/json"},
                         body : body
                   };
    fetch('http://localhost:3000/clientsrest/', requestOptions)
     .then(response => response.json())
     .then(newClient => this.props.addClientToList(newClient))

}

handleName(event){
  event.preventDefault();
  this.setState({name : event.target.value});//on modifie la valeur de name
  }

  render() {
      return(
        <form id="create">
        <fieldset>
        <label> Nouveau client :</label>
        <input onChange={this.handleName} type="text" value={this.state.name} required/>
        <button onClick={this.createClient} onBlur = {this.filterValue }>Créer</button>
        </fieldset>
        </form>
      );
    }
}
