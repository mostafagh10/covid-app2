import React , {Component} from 'react';
import axios from 'axios'


class Confirmed extends Component {
  render(){
  return(
    <div className="Confirmed">
       <table>
         <tr>
           <td>rate</td>
           <td>country</td>
           <td><b className="c">confirmed</b></td>
           <td>recovered</td>
           <td>deaths</td>
         </tr>
          {this.props.returnco}
       </table>
    </div>
  )
  }
}

export default Confirmed;
