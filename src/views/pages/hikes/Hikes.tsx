import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import Link from '@material-ui/core/Link';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "../../../store/storeConfig/rootReducers";
import SearchIcon from "../_icons/hikes/SearchIcon";
import DatePicker from "./components/hike/_DatePicker";
import EcoTypeDifficult from "./components/hike/_EcoTypeDifficultLine";
import RegionCountry from "./components/hike/_RegionCountry";
import FilterHikes from "./components/filterHikes/FilterHikes";
// import { Interface_Hike } from "../../../store/hikes/types";
import { Interface_Hike } from "./types";

const hikeListStyle = () =>
  createStyles({
    filterBlock: {
      maxWidth: "100%",
      // background: '#FEFEFE'
    },
    filter: {
      marginTop: "120px",
      marginBottom: "100px",
      maxWidth: "60%",
      margin: "auto",
      padding: "50px 30px 50px 30px",
      // background: '#FEFEFE',
      borderRadius: "20px",
      // border: 'solid 1px black'
    },
    date: {
      width: "46%",
    },
    region: {
      width: "46%",
      marginBottom: "-20px",
    },
    dateRegion: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ecoLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "20px",
    },
    ecoTypeDifficultBox: {
      // marginLeft: '18px',
      width: "80%",
    },
    botton: {
      marginTop: "20pt",
      borderRadius: "20px",
      width: "100%",
      maxWidth: "120px",
      // margin: 'auto',
    },
    hikesList: {
      marginTop: "100px",
      marginBottom: "50px",
      width: "100%",
    },
    card: {
      width: "55%",
      margin: "auto",
      marginBottom: "50px",
      borderRadius: "10px",
      paddingLeft: "10px",
      // background: "#fffbfe",
      // background: "#f5f5f5",
      background: "#fcfcfc",
      minHeight: "150px",
      textDeclaration: "none",
      "&:hover": {
        textDeclaration: "none",
      },
    },

    cardAdd: {
      cursor: "pointer",
      width: "55%",
      margin: "auto",
      marginBottom: "50px",
      borderRadius: "10px",
      background: "#fff8b5",
      minHeight: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    cardAddContent: {
      width: "100%",
    },

    dateGap: {
      fontSize: "14px",
    },
    subscription: {
      marginTop: "5px",
      marginBottom: "20px",
    },
    nameHike: {
      marginTop: "5px",
      "&:hover": {
        textDeclaration: "none",
      },
    },
    footerCard: {
      marginLeft: "10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    pageTitle: {
      textAlign: "center",
      marginTop: "160px",
      marginBottom: "180px",
      fontWeight: 400,
    },
    searchIcon: {
      borderRadius: "20px",
      marginBottom: "-15px",
    },
    pagination: {
      marginBottom: "50px",
    },
    link: {
      textDeclaration: "inherit",
      color: "inherit",
    },
  });

const useStyles = makeStyles(hikeListStyle);

const dateFormat = (start: any, finish: any) => {
  if (start && finish) {
    start = new Date(start);
    finish = new Date(finish);
    if (start.getMonth() === finish.getMonth()) {
      return `${start.getDate()} - ${finish.getDate()}  ${finish.toLocaleString(
        "default",
        { month: "long" }
      )} `;
    } else {
      return `${start.getDate()} ${start.toLocaleString("default", {
        month: "long",
      })} - ${finish.getDate()}  ${finish.toLocaleString("default", {
        month: "long",
      })} `;
    }
  } else return null;
};

const HikeList = () => {
  const classes = useStyles();
  const [valueCountry, setValueCountry] = React.useState<string | null>(null);
  const [valueRegion, setValueRegion] = React.useState<string | null>(null);
  const [hikes, setHikes] = React.useState<Interface_Hike[] | "">("");
  const user = useSelector((state) => state.user.user);
  const axios = useSelector((state) => state.axios.axios);

  const history = useHistory();

  const fetchData = async () => {
    const { data } = await axios.get("/hike/list");
    setHikes(data);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const createNewHike = () => {
    history.push("/hikes/new");
  };

  const {
    register,
    handleSubmit,
    errors,
    reset,
    control,
    setValue,
  } = useForm();

  const paginationCount = () => {
    if (hikes.length) {
      const count = Math.round(hikes.length / 5);
      return count;
    } else return 10;
  };

  const paginationGap = (itemOnPage: number) => ({
    from: (page - 1) * itemOnPage,
    to: (page - 1) * itemOnPage + itemOnPage,
  });
  const gap = paginationGap(10);

  let hikeList;
  if (hikes) {
    const listHike = hikes.slice().reverse();
    hikeList = listHike
      .slice(gap.from, gap.to)
      .map((hike: Interface_Hike, index: number) => {
        return (
          <Card className={classes.card} elevation={0} key={index}>
            <CardContent>
              <Typography
                className={classes.dateGap}
                color="textSecondary"
                gutterBottom
              >
                {dateFormat(hike.start, hike.finish)}
              </Typography>
              <Typography variant="h5" className={classes.nameHike}>
                {hike.name}
              </Typography>
              <Typography
                className={classes.subscription}
                color="textSecondary"
              >
                {hike.subscription}
              </Typography>
            </CardContent>
            <CardActions className={classes.footerCard}>
              <div>
                <Typography variant="body2" component="span">
                  {hike.difficulty}
                </Typography>
                <Typography variant="body2" component="span">
                  {hike.typeHike}
                </Typography>
              </div>
              <Link
                to={`/hike/${hike._id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Button>Details</Button>
              </Link>
            </CardActions>
          </Card>
        );
      });
  }

  return (
    <>
      <Typography variant="h1" gutterBottom className={classes.pageTitle}>
        Hikes
      </Typography>

      <FilterHikes
        control={control}
        errors={errors}
        setValue={setValue}
        valueCountry={valueCountry}
        valueRegion={valueRegion}
        setValueCountry={setValueCountry}
        setValueRegion={setValueRegion}
      />

      <div className={classes.hikesList}>
        <Card
          className={classes.cardAdd}
          elevation={0}
          key={"hikeAdd"}
          onClick={() => createNewHike()}
        >
          <Typography variant="h4" align="center">
            <AddIcon
              style={{
                fontSize: 55,
                marginBottom: "-15px",
                marginRight: "5px",
              }}
            />
            {"New hike"}
          </Typography>
        </Card>
        {hikes && (
          <>
            {hikeList}
            <Grid container justify="center" className={classes.pagination}>
              <Pagination
                count={paginationCount()}
                page={page}
                onChange={handleChange}
              />
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export { dateFormat };
export default HikeList;
