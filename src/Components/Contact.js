import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Contact extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid6">
            <Cell col={12}>
                 <div>
                      <h1>Contact Me</h1>
                </div>
               <div className="banner-text"><hr /></div>
            </Cell>
            <Cell col={3}></Cell>
            <Cell col={4}>
                <div>
                    <h4>  sufiaalmas4@gmail.com</h4>
                    <h4>  (+91) 8961453188 </h4>
                </div>
            </Cell>
            <Cell col={4}>
                <div>
                    <h4>  sufiaalmas4@gmail.com</h4>
                    <h4>  (+91) 8961453188 </h4>
                </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}