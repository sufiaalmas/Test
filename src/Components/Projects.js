import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Projects extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}} >
         <Grid className="landing-grid3">
            <Cell col={12}>
            <div>
                <h1>Projects </h1>
                <hr />
            </div>
            </Cell>
            <Cell col={2}></Cell>
            <Cell col={3} row={4}>
            <h5><b>Duration : </b></h5>
                July-Aug 2016 (1 month)
                <br /><br />
               <p><b> Technologies Used:</b></p>
               HTML5,Appache HTTP Server,MySQL,Jvascript,PHP
                <br />
            </Cell>
            <Cell col={5} row={4}>
                <h5><b>RAILWAY EMPLOYEE BIODATA SUB MODULE </b></h5> 
                <b><i>Description :</i></b>
                <i>According to this project , the railway employees details will be stored with all details to the database of authentic railway websites in an official manner.</i>
                <i>The admins of the database can store the details of all the employees and the details can be edited later with the correct information and as well as it can 
                    be viewed by the office administrator for any kind of purpose.
                </i>
                <br /><br />
                <b>Persons: 4 </b>
                
            </Cell>
            </Grid>
                
           </div>
        )
    }
}