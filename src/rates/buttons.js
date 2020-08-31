import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Button extends Component {
    render(){
        return(
            <div>
                <Link to="/"><button className="con">CONFIRMED</button></Link><p>&nbsp;</p>
                <Link to="/recovered"><button className="rec">RECOVERED</button></Link><p>&nbsp;</p>
                <Link to="/deaths"><button className="dea">DEATHS</button></Link>
            </div>
        )
    }
}
export default Button;