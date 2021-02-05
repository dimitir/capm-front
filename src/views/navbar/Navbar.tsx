import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Link from '@material-ui/core/Link';

import { PropTypes_Navbar } from "./ContainerNavbar";
import style from "./navbar.scss";
import modalName from "../../store/modals/modalNamesList";
import _Login from "./Login";

import Grid from "@material-ui/core/Grid";

import HikesIcon from "../pages/_icons/navbar/HikesIcon";
import GoingIcon from "../pages/_icons/navbar/GoingIcon";
import TrailsIcon from "../pages/_icons/navbar/TrailsIcon";
import BlogIcon from "../pages/_icons/navbar/BlogIcon";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const widthIcon = "25";
interface T_Icon {
  width?: string;
  height?: string;
  viewBox?: string;
}

type TypeIcon = React.FC<T_Icon>;

interface TypePage {
  path: string;
  icon: TypeIcon;
  name: string;
  iconWidth: string;
}

const pages: TypePage[] = [
  {
    name: "hikes",
    path: "/",
    icon: GoingIcon,
    // icon: HikesIcon,
    iconWidth: widthIcon,
  },
  // {
  //   name: "going",
  //   path: "/going",
  //   icon: GoingIcon,
  //   iconWidth: widthIcon,
  // },
  {
    name: "trails",
    path: "/trails",
    icon: HikesIcon,
    // icon: TrailsIcon,
    iconWidth: "23",
  },
  {
    name: "blog",
    path: "/blog",
    icon: BlogIcon,
    iconWidth: widthIcon,
  },
];

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const Navbar: React.FC<PropTypes_Navbar> = ({
  showModal,
  user,
  userLogout,
}: PropTypes_Navbar) => {
  const iconObj = { icon: HikesIcon };
  const history = useHistory();

  console.log("user[_________________]", user);

  const handleChangePage = (path: string) => {
    history.push(path);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        className={style.appBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar className={style.toolBar}>
          <NavLink to="/" className={style.logo} key="logo">
            <Typography variant="h6" color="inherit" noWrap>
              Come
            </Typography>
          </NavLink>

          <BottomNavigation className={style.novLinks}>
            {pages &&
              pages.map((page: TypePage) => (
                <LightTooltip
                  key={page.name}
                  title={page.name}
                  enterDelay={500}
                >
                  <BottomNavigationAction
                    onClick={() => {
                      handleChangePage(page.path);
                    }}
                    value={page.name}
                    icon={<page.icon width={page.iconWidth} />}
                  />
                </LightTooltip>
              ))}
          </BottomNavigation>

          {/* <NavLink to={page.path} key={page.name} /> */}
          <div className={style.navbarLogin}>
            <_Login showModal={showModal} user={user} userLogout={userLogout} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
