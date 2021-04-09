import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Drawer } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ anchor, children, open, onClose }) {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={onClose}
      >
        <Container fluid className={classes.list}>{children}</Container>
      </Drawer>
    </div>
  );
}

// <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

//         </React.Fragment>
