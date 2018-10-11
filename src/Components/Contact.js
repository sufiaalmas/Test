import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Contact extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}} id="test1">
            <Grid className="landing-grid4">
            <Cell col={12}>
                 <div>
                      <h1>CONTACT</h1>
                      <h4>You can reach out to me in one of the following ways</h4>
                </div>
               <div className="banner-text1"><hr /></div>
            </Cell>
            <Cell col={2}></Cell>
            <Cell col={4}>
                <div>
                    <img 
                    src="https://image.shutterstock.com/image-photo/white-cup-hot-black-coffee-450w-498320740.jpg"
                    alt="image"
                    className="image1"/>
                    
                </div>
            </Cell>
            <Cell col={5}>
                <div>
                    <h4>  sufiaalmas4@gmail.com</h4>
                    <h4> <i> (+91) 8961453188 </i></h4>
                    <h4>  https://www.linkedin.com/in/sufia-almas-85430b114</h4>
                </div>
            </Cell>
            <Cell col={12}>
            <div className="banner-text1"><hr /></div>
            <h4>Like My Profile ....Hire me</h4>
            </Cell>
    
            </Grid>
            </div>
        )
    }
}