import React, { Fragment } from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Chance from 'chance';
import GitHubIcon from '@material-ui/icons/GitHub';

const chance = new Chance();

/*
{
    avatar:"",
    title:"",
    date:"",
    image:"",
    text:"",
    extraText:"",
  }
 */

function randomIntFromInterval(min = 1031, max = 1039) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const color = chance.color();

const filesCount = 6;

export default [
  {
    avatar: <GitHubIcon style={{ fontSize: 40 }}/>,
    title: "New pull request has been created",
    date: "1.09.2020",
    image: "",
    text: <Fragment>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>Description:</Typography>
      <Typography paragraph>{chance.paragraph({ sentences: 3 })}</Typography>
      <Typography paragraph><span style={{ fontWeight: "bold" }}>Changed files:</span> {filesCount}
      </Typography>
    </Fragment>,
    extraText: <Fragment>
      <Typography paragraph>Changed files:</Typography>
      {new Array(filesCount).fill(null).map(() => (
        <Typography variant="body2">{`${chance.word({ syllables: 3 })}.js `}
          (<span style={{ color: 'green' }}>+{chance.integer({ min: 1, max: 20 })
          }</span><span style={{ color: 'red' }}> -{chance.integer({ min: 1, max: 20 })
          }</span>)
        </Typography>
      ))
      }
    </Fragment>,
  },
  {
    avatar: <Avatar aria-label="Recipe" src={"https://picsum.photos/id/1005/100/100"}/>,
    title: "Title",
    date: "2.09.2020",
    image: `https://picsum.photos/seed/${randomIntFromInterval()}/800/500`,
    text: "Text",
    color,
    extraText: <div>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
        minutes.
      </Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
        again without stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </div>,
  }
]