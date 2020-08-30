import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import Chance from 'chance';
import Badge from "@material-ui/core/Badge";
import randomIntNumber from "../utils/randomIntNumber";
import withStyles from "@material-ui/styles/withStyles";

import {
  Link
} from "react-router-dom";

const chance = new Chance();


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },
}));

const StyledBadge = withStyles((theme) => (
  // console.log(theme),
  {
    badge: {
      right: 0,
      top: 36,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

// const StyledBadge = withStyles((theme) => (console.log(theme),{
//   badge: {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: '$ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }))(Badge);


const GroupsList = () => {
  const classes = useStyles();

  const items = [
    {
      primary: "Bike lovers",
      secondary: chance.name()
    },
    {
      primary: "Deployments",
      secondary: chance.name()
    },
    {
      primary: "Corporate newsletter",
      secondary: chance.name()
    }
  ];

  return (
    <List className={classes.root}>
      {items.map(item => (
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            {/*<StyledBadge*/}
            {/*  overlap="circle"*/}
            {/*  anchorOrigin={{*/}
            {/*    vertical: 'bottom',*/}
            {/*    horizontal: 'right',*/}
            {/*  }}*/}
            {/*  variant="dot"*/}
            {/*  badgeContent={randomIntNumber(1,20)}*/}
            {/*>*/}
            {/*  <Avatar src={`https://picsum.photos/seed/${randomIntNumber()}/100/100`} />*/}

            {/*</StyledBadge>*/}
            <StyledBadge color="primary" badgeContent={randomIntNumber(1, 20)}>
              <Avatar src={`https://picsum.photos/seed/${randomIntNumber()}/100/100`}/>
            </StyledBadge>
            {/*<Badge color="secondary" badgeContent={randomIntNumber(1, 20)}>*/}
            {/*  <Avatar src={`https://picsum.photos/seed/${randomIntNumber()}/100/100`}/>*/}
            {/*</Badge>*/}
          </ListItemAvatar>
          <ListItemText {...item} />
        </ListItem>
      ))}
      <Divider/>
      <ListItem button className={classes.listItem} to="/findGroup" component={Link}>
        <ListItemAvatar>
          <Avatar>
            <SearchIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Find group"/>
      </ListItem>
      <ListItem button className={classes.listItem} to="/addGroup" component={Link}>
        <ListItemAvatar>
          <Avatar>
            <AddCircleOutlineIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Create new group"/>
      </ListItem>
    </List>
  );
};

export default GroupsList;
