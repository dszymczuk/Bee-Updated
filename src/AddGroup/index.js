import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const avatarSize = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      marginLeft: 0,
      //   width: '25ch',
    },
    marginTop: theme.spacing(3)
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    marginRight: theme.spacing(3),
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.action.disabled}`
  },
  avatarUpload: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
}));

export default function AddGroup() {
  const classes = useStyles();


  return (
    <div>
      <Typography component="h1" variant="h4">Create new group</Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.avatarUpload}>
          <Avatar alt="Remy Sharp" className={classes.avatar}>
            <IconButton color="primary">
              <CloudUploadIcon/>
            </IconButton>
          </Avatar>
          <Typography component="p" variant="h6">Upload group image</Typography>
        </div>

        {/*<Button*/}
        {/*  variant="contained"*/}
        {/*  color="primary"*/}
        {/*  className={classes.button}*/}
        {/*  startIcon={<CloudUploadIcon />}*/}
        {/*>*/}
        {/*  Upload group image*/}
        {/*</Button>*/}
        <TextField
          required
          fullWidth
          id="group-name"
          label="Group name"
          variant="outlined"
          placeholder="Your awesome group name"
        />
        <TextField
          required
          fullWidth
          id="group-description"
          label="Group description"
          multiline
          variant="outlined"
          rows={4}
          placeholder="Describe your group in two sentences"
        />
        <Button variant="contained" color="primary">
          Create group
        </Button>
      </form>
    </div>
  )
}