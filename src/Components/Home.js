import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Home extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <br /><br /><br /><br />
                            <h1>SUFIA ALMAS</h1>
                            <h3>Web Developer</h3>
                            <hr />
                        </div>
                 
                    </Cell>
                </Grid>
            </div>
        )
    }
}