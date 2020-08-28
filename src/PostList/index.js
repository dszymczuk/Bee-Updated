/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PostElement from "./../PostItem";
import TimeLine from "./../TimeLine";

const styles = ({ breakpoints }) => ({
  root: {
    // backgroundColor:'red',
    // padding: 16,
    // [breakpoints.up("sm")]: {
    //   padding: 24,
    //   maxWidth: 500,
    //   margin: "auto"
    // },
    [breakpoints.up("md")]: {
      maxWidth: 1100
    // maxWidth:"100%",
    }
  }
});

const PostList = ({ classes }) => (
  <div className={classes.root}>
    {/*<Typography variant={"overline"}>Post list</Typography>*/}
    <TimeLine />
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
    {/*<PostElement/>*/}
  </div>
);

PostList.propTypes = {};
PostList.defaultProps = {};

export default withStyles(styles)(PostList);
