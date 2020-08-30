import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    marginBottom: '50px'
  },
  media: {
    height: 0,
    // paddingTop: "26.25%", // 16:9
    paddingTop: "39.25%" // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    [theme.breakpoints.up("md")]: {
      // maxWidth: 1100
      // maxWidth:"100%",
      display: 'none'
    }
  }
}));

export default function PostItem({ title, date, image, text, extraText }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="Recipe" className={classes.avatar}>
        //     <img src={"http://i.pravatar.cc/300?img=5"} />
        //   </Avatar>
        // }
        action={
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        }
        title={
          <Typography variant="h6">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        }
      />
      {image &&
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      }
      <CardContent>
        <Typography component="p">{text}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
        {extraText && <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>}
      </CardActions>
      {extraText && <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {extraText}
        </CardContent>
      </Collapse>}
    </Card>
  );
}
