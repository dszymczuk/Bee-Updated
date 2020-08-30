import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PostList from "./PostList";
import TopBar from "./TopBar";
import { withStyles } from "@material-ui/core/styles";
import GroupsList from "./GroupsList";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FindGroup from "./FindGroup";
import AddGroup from "./AddGroup";

const styles = (theme) => (
  // console.log(theme),
  {
    root: {
      // padding: 16,
      // [breakpoints.up("sm")]: {
      //   padding: 24,
      //   maxWidth: 500,
      //   margin: "auto"
      // },
      // [breakpoints.up("md")]: {
      //   maxWidth: 700
      // }
      // backgroundColor: 'red'
    },
    topBar: {
      backgroundColor: theme.palette.primary.main,
      ...theme.mixins.toolbar,
      [theme.breakpoints.up('sm')]: {
        marginBottom: '50px',
      },

    }
  });


const App = ({ classes }) => {

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <div className={classes.topBar}>
          <Container>
            <TopBar/>
          </Container>
        </div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <GroupsList/>
              {/*<NavContentEx/>*/}
            </Grid>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={7}>
              <Switch>
                <Route exact path="/addGroup">
                  <AddGroup />
                </Route>
                <Route exact path="/findGroup">
                  <FindGroup />
                </Route>
                <Route exact path="/">
                  <PostList/>
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  )
};
export default withStyles(styles)(App);


