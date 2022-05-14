import React from "react";
import "./Results.css";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Results = ({ data }) => {
    const openLink = (link) => {
        window.open(link, "_blank");
    };
    return (
        <div className="results-container">
            <div className="results">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Keywords</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="left">Summary</TableCell>
                                <TableCell align="left">Authors</TableCell>
                                <TableCell align="right">Credibility</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.keywords}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.category}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.summary}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.authors}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.credibility}
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            color="primary"
                                            component="span"
                                            onClick={() => {
                                                openLink(row.link);
                                            }}
                                        >
                                            <LaunchIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Results;
