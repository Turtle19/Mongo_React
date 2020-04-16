import React from 'react';
import { PropTypes } from 'react';
import DisplayClient from './displayClient';

/* Ce component affiche dans une div tous les clients de la BD
* Il est le parent du component DisplayClient (qui affiche qu'un seul client)
*/
export default class DisplayAllClients extends React.Component{
  constructor(props) {
      super(props);
  }

  /* affiche tous les clients */
  render(){
    const displayClients = this.props.allClients.map(
    (e, i) => <DisplayClient name = { e.name} clientId = {e._id} {...this.props}
                             key = {i} />);
    return (
      <div className="clients">
       {displayClients}
      </div>
    );
}
}
