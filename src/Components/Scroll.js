import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Scroll extends Component{
    render(){
        return(
    <div>
<ul class="smooth-scroll list-unstyled">
    <li>
    <Link to="/Home"></Link>        
    </li>
    <li>
    <a href="#test2"></a>      
    </li>
    <li>
    <h5><a href="#test3"></a></h5></li>        
    
    <br />
    <li>
        </li>
    <br />
</ul>





<div id="test2">
    <h3>Section 2</h3>
    <hr />
    </div>
</div>
        );
    }
}