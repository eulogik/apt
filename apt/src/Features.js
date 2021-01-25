import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../src/download.JPEG'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
 
}));

const Features = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            
            <Grid container spacing={5} style={{width:'90%', marginLeft:'2%'}}>
            <Grid item xs={6} sm={4}>
          <Grid><img src={logo}  alt='logo' style={{float:'left',width:'50%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>Timley</h3>
          <p style={{fontSize:'13px'}}>Course Completion</p></Grid>
       
          
        </Grid>
        <Grid item xs={6} sm={4}>
          <Grid><img src={logo}  alt='logo' style={{float:'left',width:'50%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>24/7</h3>
          <p style={{fontSize:'13px'}}>Doubt Clearing & <br/>faculty support</p></Grid>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p><img src={logo}  alt='logo' style={{float:'left',width:'50%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>2REVISIONS</h3>
          <p style={{fontSize:'13px'}}>and 6 Mock Test</p></p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p><img src={logo}  alt='logo' style={{float:'left',width:'50%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>DIGITAL LIBRARY</h3>
          <p style={{fontSize:'13px'}}>Facility at all Centers</p></p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p><img src={logo}  alt='logo' style={{float:'left',width:'50%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>HOSTEL</h3>
          <p style={{fontSize:'13px'}}>Facility&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></p>
        </Grid>
        <Grid item xs={6} sm={4}>
          <p><img src={logo}  alt='logo' style={{float:'left',width:'60%', marginLeft:'10%',height:'70px'}}/>
          <h3 style={{marginRight:'10%', color:'#CF1322'}}>HI-TECH</h3>
          <p style={{fontSize:'13px'}}>Classrooms with Audio Visual Aids</p></p>
        </Grid>
        </Grid>
        </div>
    )
}

export default Features;