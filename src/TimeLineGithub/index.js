import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PostItemGithub from "./../PostItemGithub";
import Avatar from "@material-ui/core/Avatar";
import Chance from 'chance';
import GitHubIcon from "@material-ui/icons/GitHub";
const chance = new Chance();


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:0
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  oposite: {
    '&::before':{
    display: 'none'

    }
  }
}));

const Item = ()=>{
  const classes = useStyles();
  const color = chance.color();

  return (
    <TimelineItem className={classes.oposite}>
      <TimelineSeparator>
        <TimelineDot style={{backgroundColor:color}}>
          <Avatar aria-label="Recipe" className={classes.avatar} >
            <GitHubIcon style={{color: 'black'}}/>

          </Avatar>
        </TimelineDot>
        <TimelineConnector style={{backgroundColor:color}} />
      </TimelineSeparator>
      <TimelineContent>
        <PostItemGithub/>
      </TimelineContent>
    </TimelineItem>
  )
}

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="left" className={classes.root}>
      <Item />
      {/*<Item />*/}
      {/*<Item />*/}
    </Timeline>
  );
}
