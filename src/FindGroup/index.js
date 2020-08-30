import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { grey } from '@material-ui/core/colors';
import sampleData from "./sampleData";

const avatarSize = 150;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  // pos: {
  //   marginBottom: 12,
  // },
  cardButton: {
    display: "flex",
    justifyContent: "center"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    marginBottom: theme.spacing(3)
  },
  subTitle: {
    color: grey.A200,
    marginBottom: theme.spacing(1)
  }
}));

const SingleGroup = ({ name, count, avatar, inGroup, index,description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Avatar src={`${avatar}?random=${index}`} className={classes.avatar} style={{ alignSelf: 'center' }}/>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p" className={classes.subTitle}>
          {description}
        </Typography>
        <Typography variant="body2" component="p" className={classes.subTitle}>
          People in group: {count}
        </Typography>
        <AvatarGroup max={5} style={{ alignSelf: 'center' }}>
          {new Array(count).fill(null).map(() => (<Avatar src="/avatar.png"/>
          ))}
        </AvatarGroup>
      </CardContent>
      <CardActions className={classes.cardButton}>
        {!inGroup &&
        <Button variant="contained" color="primary" size="small">
          Join
        </Button>
        }
        {inGroup &&
        <Button variant="contained" color="primary" size="small" disabled>
          Joined
        </Button>
        }
      </CardActions>
    </Card>
  )
}

export default function FindGroup() {

  return (
    <Grid container spacing={3}>
      {sampleData.map((props, i) => (
        <Grid container
              item
              xs={12}
              md={6}
              alignItems="stretch"
              justify="center"
        >
          <SingleGroup {...props} index={i}/>
        </Grid>
      ))}
    </Grid>
  );
}
