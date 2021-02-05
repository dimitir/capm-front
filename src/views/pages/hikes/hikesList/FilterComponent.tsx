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
import { useSelector } from "../../../../store/storeConfig/rootReducers";
import SearchIcon from "../../_icons/hikes/SearchIcon";
import DatePicker from "../components/hike/_DatePicker";
import EcoTypeDifficult from "../components/hike/_EcoTypeDifficultLine";
import RegionCountry from "../components/hike/_RegionCountry";
// import { Interface_Hike } from "../../../store/hikes/types";
import { Interface_Hike } from "./types";


const HikesFilter = () => {


    return (
        </>
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
    )
};
