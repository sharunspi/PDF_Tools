import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TableData from '../TableData';
import {combinePDFs} from '../../API';
const slides = ['Create', 'Modify', 'Enlarge', 'Overlay']
const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: '#545',
        backgroundColor:'#0aff98',
        height:'200px'
      },
      bannertext:{
        paddingTop:'60px'
      },
      buttonsArea:{
          marginTop:'40px',
          textAlign:'centre'
      },
      buttons:{
          padding:'20px',
          fontSize:'1.5em',
          marginLeft:'100px'
      },
      buttonsCombined:{
          display:'block'
      }
  }));
export default function Banner() {
    const [current, setCurrent] = useState(slides[0])
    const [stage,setStage] = useState(1)
    const classes = useStyles();
    const sendCombineRequest = ()=>{
        let data ={
            hai:'hais'
        }
        combinePDFs(data)
    }
    const Cobined = ()=>{
        return <>
         <TableData/>
         <Button onClick={()=>sendCombineRequest()} className={classes.buttonCombined} variant='contained' color='primary'>Combine</Button>
        </>
    }
    const Overlay = ()=>{
        return <>
            overlay
        </>
    }
    const Split = ()=>{
        return <>
            split
        </>
    }
    const changeStage = (n)=>{
        setStage(n)
    }
    return (
        <div>
           <Paper className={classes.paper}> 
                <Typography className={classes.bannertext} variant="h2" component="h3">
                   Let's  {current} PDF 
                </Typography>
            </Paper>
            <Grid className={classes.buttonsArea} container spacing={3}>
                <Grid item xs={3}>
                <Button onClick={()=>changeStage(1)} className={classes.buttons} variant="contained" color="secondary">
                    Combined PDF
                 </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={()=>changeStage(2)} className={classes.buttons} variant="contained" color="secondary">
                    Add watermark PDF
                 </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={()=>changeStage(3)} className={classes.buttons} variant="contained" color="secondary">
                    Split PDF
                 </Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                    {
                        stage == 1 && <Cobined/>
                    }
                    {
                        stage == 2 && <Overlay/>
                    }
                     {
                        stage == 3 && <Split/>
                    }
            </Grid>
           </div>
    )
}
