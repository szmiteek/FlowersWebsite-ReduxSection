import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "../../styles/EventsTable.css";
import { makeStyles } from "@mui/styles";

import { useSelector, useDispatch } from "react-redux";
import { deleteEVENT } from "../../redux/actions/actions";

const useStyles = makeStyles({
  table: {
    background: "#67677c;",
  },
});
const Row = (props) => {
  const { event } = props;
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {event.name}
        </TableCell>
        <TableCell align="center">{event.date}</TableCell>
        <TableCell align="center">{event.phoneNumber}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
            onClick={() => {
              dispatch(deleteEVENT(event.name));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div>
                <textarea></textarea>
                <p>Sala:{event.place}</p>
                <p>Styl:{event.style}</p>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const EventsTable = () => {
  const events = useSelector((store) => store);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ color: "white" }}>
            <TableCell />
            <TableCell align="center">Dane osobowe</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Numer telefonu</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <Row key={event.name} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default EventsTable;
