/*Ce component permet de gérer les ressources identifiées par un nom et un coût unitaire.*/

import React from 'react';
import { PropTypes } from 'react';
export default class DisplayRessource extends React.Component {
  constructor(props){
    super(props);
    this.state =  { filterValue : this.props.price };
    this.updateDB = this.updateDB.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }

updateDB(event){
  let body = JSON.stringify({price : parseFloat(event.target.value) });
  let requestOptions = { method: 'PUT',
                         headers: {"Content-Type" : "application/json"},
                         body : body
                       };
   fetch('http://localhost:3000/ressourcesrest/'+this.props.ressourceId, requestOptions)
     .then(response => response.json())
     .then( updatedRessource => this.props.ressourceChanged(updatedRessource) )

}

/** change filterValue value each time a key is pressed in input field */
 filterChange(event) {
   this.setState({ filterValue : event.target.value });
 }

  render(){
  return(
    <div className="coutUnit">
      {this.props.nameRessource}

      <input type="number" step="0.01" min="0"
             value = { this.state.filterValue }
             onChange = { this.filterChange }
             onBlur= {this.updateDB} required />
    </div>
  );
}

}
