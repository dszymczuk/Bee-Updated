import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineItem from "../TimeLineItem";
import sampleData from "./sampleData";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  oposite: {
    '&::before': {
      display: 'none'

    }
  },

}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="left" className={classes.root}>
      {sampleData.map(item => <TimeLineItem {...item} />)}
    </Timeline>
  );
}
