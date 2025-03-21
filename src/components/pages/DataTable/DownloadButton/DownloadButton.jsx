import React from 'react';
import {Button} from "@mui/material";
import Papa from "papaparse";

const DownloadButton = ({data}) => {

    const handleDownloadFile = (e) => {
        const csv = Papa.unparse(data, {header: true});
        const blob = new Blob([csv], {type: "text/csv"});
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.csv";
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
    }
    return (
        <Button onClick={handleDownloadFile} variant="contained">Download</Button>
    );
};

export default DownloadButton;