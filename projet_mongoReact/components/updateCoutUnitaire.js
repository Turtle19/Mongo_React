import React from 'react';
import { PropTypes } from 'react';
import DisplayRessource from './displayRessource.js';
import DisplayClientsRessources from './displayClientsRessources.js';


/* affiche le component qui permet de modifier le coût unitaire des ressources.
 * et aussi celui qui gère la liste des clients et leurs couts annuels
*/
export default class UpdateCoutUnitaire extends React.Component {
  constructor(props){
    super(props);
    this.state = { allRessources : [] };
    this.handleRessourceChanged = this.handleRessourceChanged.bind(this);
  }


  /* Renvoie toutes les ressources de la BD à l'aide une requête GET */
  componentDidMount(){
    let requestOptions = { method: 'GET',
                           headers: {"Content-Type" : "application/json"}
                         };
    fetch('http://localhost:3000/ressourcesrest/', requestOptions)
      .then(response => response.json())
      .then((result) => this.setState({allRessources : result}))

  }

  handleRessourceChanged(newRessource) {
    const index = this.state.allRessources.findIndex( ress => (ress._id === newRessource._id) );
    const newList = this.state.allRessources;
    newList.splice(index, 1, newRessource);
    this.setState({ allRessources : newList });
  }


  render(){
    let display = this.state.allRessources.map(
      (e,i) => <DisplayRessource nameRessource={e.ressources} price={e.price}
                ressourceId={e._id} key={i}
                ressourceChanged = {this.handleRessourceChanged} />
    );

     return (
       <div>
         <div className="cout">
            {display}
          </div>

          <div className="clientCout">
            <DisplayClientsRessources allRessources = { this.state.allRessources } />
          </div>
       </div>
     );
  }
}
