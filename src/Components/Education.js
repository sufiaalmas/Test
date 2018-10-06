import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Education extends Component{
    render(){
        return(
        <div style={{width:'100%',margin:'auto'}}>
         <Grid className="landing-grid3">
            <Cell col={12}>
            <div>
                <h1>Education </h1>
                <hr />
            </div>
            </Cell>
            <Cell col={2}></Cell>
            <Cell col={3}>
                <h5>Narula Institute of Technology (2013-2017)</h5>
                <br />
                <h5>Delhi Public school (2012-2013)</h5>
                <br />
            </Cell>
            <Cell col={5}>

            </Cell>
        </Grid>
            </div>
        )
    }
}