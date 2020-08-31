import React , {Component} from 'react';
import axios from 'axios'


class Recovered extends Component {
  render(){
  return(
    <div className="Recovered">
       <table>
         <tr>
           <td>rate</td>
           <td>country</td>
           <td>confirmed</td>
           <td><b className="r">recovered</b></td>
           <td>deaths</td>
         </tr>
          {this.props.returnco2}
       </table>
    </div>
  )
  }
}

export default Recovered;
