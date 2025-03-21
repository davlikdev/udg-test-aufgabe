import React from 'react';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {Button, styled} from "@mui/material";
import Papa from "papaparse";
import {v4 as uuidv4} from "uuid";

const UploadButton = ({setData}) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const handleUploadFile = (e) => {
        const file = e.target.files[0]

        Papa.parse(file, {
            header: true,
            complete: (results) => {

                setData(results.data.map(
                    n => {
                        return {...n,id: uuidv4()
                        };
                    }
                ))
            }
        })
    }
    return (
        <Button
            style={{marginRight: 15}}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon/>}
        >
            Upload files
            <VisuallyHiddenInput
                type="file"
                onChange={handleUploadFile}
                multiple
            />
        </Button>
    );
};

export default UploadButton;