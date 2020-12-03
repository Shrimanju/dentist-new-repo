
import React from 'react';
import '../experts/experts.scss'
import Expert from '../../assets/experts.png'
import SubmitForm from '../sumbitform/sumbitform.js';
import BottomNav from '../bottomnav/bottomnav.js';
import Nav from '../../assets/icons8-menu-24.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Experts() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <div>
      <div className='backgroundexpert'>
        <div className='backgroundexperts'>
          <div className='backgroundexperts__logobox'>
            <div className='backgroundexperts__logobox__threedotnav'>
              <img

                src={Nav}
                alt='expert'
              />
              <div className='backgroundexperts__logobox__logoimage'>
                <div className='backgroundexperts__logobox__Swetha'>Swetha</div>
                <div className='backgroundexperts__logobox__dentistry'>DENTISTRY</div>
              </div></div>
          </div>
        </div>
        <Grid
  container
  direction="row-reverse"
  justify="flex-start"
  alignItems="flex-start"
>
    <div className='blue'>
          <div className='bluerighttreatement'>
            <img
              className='imageblueright'
              src={Expert}
              alt='expert'
            />
          </div>
</div>
</Grid>

<Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
>
        <div className='blueleftdes'>Meet <br />Dr. Prashant Patil</div>
        <div className='blueleftdessmall'>Combine your paid vacation with your dental <br />procedure<br /> schedule to save money or to get more value out of<br /> investment.</div>
        <div className='number1'>21 311+</div>
        <div className='description12'>Year of Experience
          <div className='description13'>Happy patients</div></div>
        <div className='description14'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent<br /> further complications, the tooth may be extracted or it may be saved by a root canal<br /> treatment. Once root canal treatment is performed, the patient must usually have a crown <br />placed over the tooth to protect it and enhance its aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure in which<br /> the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and <br />sealed.</div>
        <div className='description15'>Dental crowns are fabricated in the dental laboratory using the impression your dentist has<br /> made of your tooth after having prepared it. Because dental crowns encase the visible <br />portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can <br />be used to enhance the cosmetic appearance of a tooth.</div>
        </Grid>
      
        {/* <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xl={6} ls={6} xs={12} sm={7} ms={12}>
        <div className='backgroundexpert__meetdoctor__treatmentblueleft'>
          <img
              className='backgroundexpert__meetdoctor__treatmentimage'
              src={Expert}
              alt='expert'
            /></div>
        </Grid>
        <Grid item xl={6} ls={6} xs={12} sm={5} ms={12}>
          <img
              className='backgroundexpert__meetdoctor__treatmentimage'
              src={Expert}
              alt='expert'
            />
        </Grid>
        </Grid>
        </div> */}

        <div className='backgroundexpert__meetdoctor'>
          <div className='backgroundexpert__meetdoctor__treatmentblueleft'>
            <img
              className='backgroundexpert__meetdoctor__treatmentimage'
              src={Expert}
              alt='expert'
            />
            <div className='treatmentheading1'>Meet<br /> Dr. Prashant Patil
        <div className='treatmentdes'>Combine your paid vacation with your dental<br /> procedure <br />schedule to save money or to get more value out of <br />investment.
        <div className='number20'>21 311+</div>
                <div className='description21'>Year of Experience</div>
                <div className='description22'>Happy patients</div>
                <div className='description23'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain <br />and prevent further complications, the tooth may be extracted or it may be saved <br />by a root canal treatment. Once root canal treatment is performed, the patient<br /> must usually have a crown placed over the tooth to protect it and enhance its<br /> aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure <br />in which the diseased or damaged pulp (core) of a tooth is removed and root<br /> canals are filled and sealed.</div>
                <div className='description34'>Dental crowns are fabricated in the dental laboratory using the impression your<br /> dentist has made of your tooth after having prepared it. Because dental crowns<br /> encase the visible portion of a tooth, any porcelain crown (all-ceramic or <br />porcelain-fused-to-metal ones) can be used to enhance the cosmetic <br />appearance of a tooth.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='backgroundexpert'>
          <SubmitForm />

          <BottomNav />
        </div>

      </div>
    </div>

  );
}
export default Experts;

