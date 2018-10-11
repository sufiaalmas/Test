import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Technologies extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}} >
            <Grid className="landing-grid4">
            <Cell col={12}>
            <div>
                <h1>Skills </h1>
                <hr />
            </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}