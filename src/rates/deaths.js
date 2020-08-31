import React , {Component} from 'react';
import axios from 'axios'


class Deaths extends Component {
  render(){
  return(
    <div className="Deaths">
       <table>
         <tr>
           <td>rate</td>
           <td>country</td>
           <td>confirmed</td>
           <td>recovered</td>
           <td><b className="d">deaths</b></td>
         </tr>
          {this.props.returnco3}
       </table>
    </div>
  )
  }
}

export default Deaths;
