import React, { Fragment } from 'react';
import Typography from "@material-ui/core/Typography";
import Chance from 'chance';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ReactComponent as JiraIcon } from "./jira.svg";

import SvgIcon from '@material-ui/core/SvgIcon';

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

const filesCount = 6;

export default [
  {
    avatar:
      <SvgIcon>
        <JiraIcon style={{ color: '#fff', fontSize: 40 }}/>
      </SvgIcon>,
    title: "Ticket BU-001 has been updated",
    date: "1.09.2020",
    color: "#0052CC",
    image: "",
    text: <Fragment>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>Description:</Typography>
      <Typography paragraph>{chance.paragraph({ sentences: 3 })}</Typography>
      <Typography paragraph><span style={{ fontWeight: "bold" }}>Current status: </span><span style={{ color: "#0052CC" }}>ready for test</span>
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
    avatar: <GitHubIcon style={{ fontSize: 40 }}/>,
    title: "New pull request has been created",
    date: "1.09.2020",
    color: "#333",
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
    avatar: <img alt="avatar" src="/sandwich.svg" style={{ height: 35 }}/>,
    title: "Sandwich shop arrived 🥪",
    date: "",
    image: "/sandwiches.jpg",
    text: <Fragment>
      <Typography paragraph>Grilled Cheese w/ side of chips - $8.49
        <Typography variant="body2">Pepper Jack, Mozzarella, Provolone, Cheddar, Bacon Bits</Typography>
      </Typography>

      <Typography paragraph>Mama Mia w/ side of chips - $8.49
        <Typography variant="body2">Pepperoni, Salami, Mozzarella, Served w/ side of marinara</Typography>
      </Typography>

      <Typography paragraph>Spicy Chicken w/ side of chips - $8.49
        <Typography variant="body2">Chicken Breast, Bacon, Pepper Jack Cheese, Avocado-Poblano Ranch Dressing</Typography>
      </Typography>

      <Typography paragraph>Turkey Melt w/ side of chips - $8.49
        <Typography variant="body2">Turkey, Bacon, Pepper Jack Cheese, w/ choice of Hot Chipotle Mayo Or Sweet N Tangy Chipotle Ranch</Typography>
      </Typography>
    </Fragment>,
    extraText: "",
  },
  {
    avatar: <img alt="avatar" src="/avatar.png" style={{ height: 35 }}/>,
    title: "Bike trip this weekend 🚲",
    date: "2.09.2020",
    image: "/bike_forest.jpg",
    text:
      <Typography paragraph>
        You can register here.
      </Typography>,
    color: "darkcyan",
    extraText: "",
  }
]