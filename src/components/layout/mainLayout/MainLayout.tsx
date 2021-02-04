import React from "react";
import { withStyles } from "@material-ui/core/styles";

interface PropTypes {
  children: any;
}

const styles = (theme: any) => ({
  "@global": {
    body: {
      overflowY: "scroll",
    },
  },
});

function MyCssBaseline() {
  return null;
}

const MyCss = withStyles(styles)(MyCssBaseline);

const MainLayout: React.FC<PropTypes> = ({ children }) => {
  return (
    <>
      <MyCss />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
