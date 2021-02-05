import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "../../../../store/storeConfig/rootReducers";
import { TypeProps_HikeOne } from "./ContainerHikeOne";
import { Typography, Grid, Box } from "@material-ui/core";
// import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from "@material-ui/core";
import env from "../../../../env";
import { dateFormat } from "../hikesList/Hikes";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";
import { hikesApi } from "../../../../constants";

const hikeStyle = () =>
  createStyles({
    page: {
      margin: "auto",
      maxWidth: "700px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    nameHike: {
      textAlign: "center",
      fontWeight: 400,
    },
    subscription: {
      textAlign: "center",
    },
    date: {
      fontWeight: 300,
      textAlign: "center",
      color: "#bbbfc4",
      marginBottom: "100px",
    },
    region: {
      marginTop: "160px",
      textAlign: "center",
      color: "#bbbfc4",
      fontWeight: 300,
    },
    typeLine: {
      marginTop: "160px",

      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    progress: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
    discription: {},
  });

const useStyles = makeStyles(hikeStyle);

interface IHike {
  name: string;
  start: Date;
  finish: Date;
  subscription: string;
  discription: Array<any>;
  eco: boolean;
  difficulty: String;
  typeHike: String;
  country: String;
  region: String;
  openEvent: Boolean;
  teamInfo: Array<any>;
  leaderEmail: String;
}

// const isHike = (hike: any): hike is IHike => { return true }

const utfToHtml = (str: any) => new TextDecoder("utf-8").decode(str);

const HikeOne = ({ match }: any) => {
  const classes = useStyles();
  const axios = useSelector((state) => state.axios.axios);
  const hikeId = match.params.id;
  const [hike, setHike] = useState({
    name: "",
    subscription: "",
    start: Date,
    finish: Date,
    typeHike: "",
    difficulty: "",
    discription: "",
    country: "",
    region: "",
    openEvent: false,
  });

  const fetchData = async () => {
    // const { data } = await axios({
    //   url: `${env.host}/hike/getById`,
    //   method: "post",
    //   data: { id: hikeId },
    // });
    const { data } = await axios.get(`${hikesApi.GET_HIKE_BY_ID}?id=${hikeId}`);
    setHike(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (hike.name) {
    console.log(hike.discription);
    return (
      <>
        <div className={classes.page}>
          <Typography variant="body1" className={classes.region}>
            {hike.country} {hike.region} region
          </Typography>

          <Typography variant="h6" gutterBottom className={classes.date}>
            {dateFormat(hike.start, hike.finish)}
          </Typography>

          <Typography variant="h3" gutterBottom className={classes.nameHike}>
            {hike.name}
          </Typography>

          <Typography variant="body1" className={classes.subscription}>
            {hike.subscription}
          </Typography>

          <div className={classes.typeLine}>
            <Typography variant="body1">
              {hike.openEvent ? ` open event` : `close team event`}
            </Typography>

            <Typography variant="body1">{hike.difficulty}</Typography>

            <Typography variant="body1">type {hike.typeHike}</Typography>
          </div>

          <div className={classes.discription}>
            {ReactHtmlParser(hike.discription)}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <Grid container justify="center" className={classes.progress}> */}
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress disableShrink />
        </Box>
      </>
    );
  }
};

export default HikeOne;
