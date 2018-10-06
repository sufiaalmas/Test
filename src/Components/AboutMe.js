import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class AboutMe extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid2">
                <Cell col={2}></Cell>
                    <Cell col={4}>
                        <img 
                        src="https://www.colourbox.com/preview/3771504-beautiful-girl-working-in-the-office.jpg"
                        alt="image"
                        className="image"
                         />
                         
                    </Cell>
                    <Cell col={3}>    
                        <h1>About Me</h1>
                        <p><p>I am passionate about making things happen! whether I am Planning a weekend outing or learning a programming language.I always see everything in my life with a positive attitude.I am highly motivated and result driven person.</p>
                            Apart from this I am a very creative type person and I love making creative things.And now I have also started designing and developing user friendly websites by combining my technical skills as well as my creative skills.
                        </p> 
                                            
                    </Cell>
                    
                </Grid>
                <hr />
            </div>
         )
    }
}