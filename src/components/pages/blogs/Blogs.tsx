import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import DatePicker from "../going/createHikes/_DatePicker";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import RegionCountry from "../going/createHikes/_RegionCountry";
import EcoTypeDifficult from "../going/createHikes/_EcoTypeDifficultLine";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import Link from '@material-ui/core/Link';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const blogsList = [
  {
    name: "Types of fires",
    date: Date.now(),
    theme: "Fires",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу то можете вернуться на предыдущую",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
  },
  {
    name: "Shelter in field",
    date: Date.now(),
    theme: "Shelters",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу, то можете вернуться на предыдущую",
  },
  {
    name: "Overnight in winter",
    date: Date.now(),
    theme: "Shelters",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу, то можете вернуться на предыдущую",
  },
  {
    name: "Types of fires",
    date: Date.now(),
    theme: "Fires",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу, то можете вернуться на предыдущую",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
  },
  {
    name: "Shelter in field",
    date: Date.now(),
    theme: "Shelters",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу, то можете вернуться на предыдущую",
  },
  {
    name: "Overnight in winter",
    date: Date.now(),
    theme: "Shelters",
    img:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    text:
      "Страница  на которой вы находились  пытается перенаправить вас на страницу  Если вы не хотите переходить на эту страницу, то можете вернуться на предыдущую",
  },
];

const hikeListStyle = () =>
  createStyles({
    filterBlock: {
      maxWidth: "100%",
    },
    filter: {
      marginTop: "120px",
      marginBottom: "100px",
      maxWidth: "80%",
      margin: "auto",
      padding: "50px 30px 50px 30px",
      borderRadius: "20px",
    },

    card: {
      width: "55%",
      margin: "auto",
      marginBottom: "50px",
      borderRadius: "10px",
      paddingLeft: "10px",
      background: "#fffbfe",
      // height: '200px',
      textDecaration: "none",
      "&:hover": {
        textDecaration: "none",
      },
    },

    subscription: {
      marginTop: "5px",
      marginBottom: "20px",
    },
    pageTitle: {
      textAlign: "center",
      marginTop: "160px",
      marginBottom: "180px",
      fontWeight: 400,
    },
  });

const useStyles = makeStyles(hikeListStyle);

const Blogs = () => {
  const classes = useStyles();

  const user = useSelector((state: any) => state.axios.axios);

  console.log("---------------user----------------------", user);

  const {
    register,
    handleSubmit,
    errors,
    reset,
    control,
    setValue,
  } = useForm();

  return (
    <>
      <Typography variant="h1" gutterBottom className={classes.pageTitle}>
        Blogs
      </Typography>
      <Paper elevation={0} className={classes.filter}>
        <Grid container spacing={3}>
          {blogsList &&
            blogsList.map((blog) => (
              <Grid item xs={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={blog.img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blog.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {blog.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Blogs;
