import React from 'react';
import { PropTypes } from 'react';
import Chart from 'chart.js';


export default class GraphiqueComponent extends React.Component{
    constructor(props){
            super(props);
            this.chartRef = React.createRef();
            this.canvas ;
            this.ctx ;
    }

    componentDidMount(){
       this.canvas = this.chartRef.current;
       this.ctx = this.canvas.getContext("2d");
       new Chart(this.ctx, {
             type: "bar",
             data: {
                 labels: this.props.months,
                 datasets: [
                     {
                         label: "eau",
                         data: this.props.client.eau,
                         backgroundColor: 'background-color: rgb(128, 0, 85)'
                     },
                     {
                         label: "gaz",
                         data: this.props.client.gaz,
                         backgroundColor: 'rgb(0, 128, 64)'
                     },
                     {
                         label: "electricite",
                         data: this.props.client.electricite,
                         backgroundColor: 'rgb(128, 0, 0)'
                     }
                 ]
             },
             options: {

             }
          });

          }

  render(){
    return(
      <div >
         <canvas
             id="clientChart"
             ref={this.chartRef}
             width="400"
             height="400"
         />
     </div>
   );
 }

}
