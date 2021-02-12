import React, { useEffect } from "react";
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
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "../../../../../store/storeConfig/rootReducers";
import SearchIcon from "../../../_icons/hikes/SearchIcon";
import DatePicker from "../hike/_DatePicker";
import EcoTypeDifficult from "../hike/_EcoTypeDifficultLine";
import RegionCountry from "../hike/_RegionCountry";
// import { Interface_Hike } from "../../../store/hikes/types";
import { Interface_Hike } from "../../hikesList/types";

const hikeListStyle = ({}) =>
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

interface TypePropsFilterHikes {
  control: any;
  errors: any;
  setValue: any;
  valueCountry: any;
  valueRegion: any;
  setValueCountry: any;
  setValueRegion: any;
}

const FilterHikes = ({
  control,
  errors,
  setValue,
  valueCountry,
  valueRegion,
  setValueCountry,
  setValueRegion,
}: TypePropsFilterHikes) => {
  const classes = useStyles();

  return (
    <>
      <form>
        <div className={classes.filterBlock}>
          <Paper elevation={0} className={classes.filter}>
            <div className={classes.dateRegion}>
              <div className={classes.date}>
                <DatePicker control={control} errors={errors} />
              </div>
              <div className={classes.region}>
                <RegionCountry
                  setValue={setValue}
                  errors={errors}
                  control={control}
                  valueCountry={valueCountry}
                  valueRegion={valueRegion}
                  setValueCountry={setValueCountry}
                  setValueRegion={setValueRegion}
                />
              </div>
            </div>
            <div className={classes.ecoLine}>
              <div className={classes.ecoTypeDifficultBox}>
                <EcoTypeDifficult control={control} errors={errors} />
              </div>

              <Button
                className={classes.searchIcon}
                variant="outlined"
                startIcon={<SearchIcon width="16" />}
              >
                result
              </Button>
            </div>
          </Paper>
        </div>
      </form>
    </>
  );
};

export default FilterHikes;
