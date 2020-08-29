import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PostItem from "./../PostItem";


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
  }
}));

export default function TimeLineItem({ avatar, color, title, date, image, text, extraText }) {
  const classes = useStyles();

  return (
    <TimelineItem className={classes.oposite}>
      <TimelineSeparator>
        <TimelineDot style={{ backgroundColor: color, marginBottom: 0 }}>{avatar}</TimelineDot>
        <TimelineConnector style={{ backgroundColor: color }}/>
      </TimelineSeparator>
      <TimelineContent>
        <PostItem
          title={title}
          date={date}
          image={image}
          text={text}
          extraText={extraText}
        />
      </TimelineContent>
    </TimelineItem>
  )
}