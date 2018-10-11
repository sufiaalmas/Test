import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Education extends Component{
    render(){
        return(
        <div style={{width:'100%',margin:'auto'}} >
         <Grid className="landing-grid3">
            <Cell col={12}>
            <div>
                <h1>Education </h1>
                <hr />
            </div>
            </Cell>
            <Cell col={2}></Cell>
            <Cell col={3} row={4}>
                <h5><b>Narula Institute of Technology (2013-2017)</b></h5>
               <b> 8.45/10 CGPA</b>
                <br />
            </Cell>
            <Cell col={5} row={4}>
                <h5><b>B.Tech in INFORMATION TECHNOLOGY</b></h5>
                <i>Apart from my subject knowledge and coding skills most important thing I learned here is Teamwork.
                I learned working efficiently in a team and how to recognize peoples's strength.</i>
                
            </Cell>
            </Grid>
            <Grid className="landing-grid3">
            <Cell col={2}></Cell>
            <Cell col={3} row={6}>
                <h5><b>Delhi Public School,Dhanbad (2013-2017)</b></h5>
               <b> Passed with 76.80%</b>
                <br />
            </Cell>
            <Cell col={5} row={4}>
                <h5><b>CBSE (XIIth Standard)</b></h5>
                <i>I learned how to stay and solve a difficult situation and not to give up beacause of things get difficult.
                      Teachers were always guiding me but i realized that it is only me who have to learn. </i>
                
            </Cell>
        </Grid>
        <Grid className="landing-grid3">
            <Cell col={2}></Cell>
            <Cell col={3} row={6}>
                <h5><b>JLNM Senior Secondary School,Dhanbad (2009-2010)</b></h5>
               <b> 8.4/10 CGPA</b>
                <br />
            </Cell>
            <Cell col={5} row={4}>
                <h5><b>CBSE (Xth Standard)</b></h5>
                <i>It was my first school and here I learned every small but important lessons of life.
                      I learned how I fit into the world socially.And the most important thing I learned here is Dicsipline.My School was very famous because of it's discipline.
                        </i>
                
            </Cell>
        </Grid>
            </div>
        )
    }
}