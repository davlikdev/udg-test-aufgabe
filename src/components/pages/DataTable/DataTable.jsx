import * as React from 'react';
import NoteForm from "./NoteForm/NoteForm";
import UploadButton from "./UploadButton/UploadButton";
import DownloadButton from "./DownloadButton/DownloadButton";
import Table from "./Table/Table";
import c from "./dataTable.module.css"

const DataTable = ({setData, data}) => {

    return (

        <div>
            <div>
                <Table data={data} setData={setData}/>
            </div>

            <div className={c.buttonWrap}>
                <div>
                    <UploadButton setData={setData}/>
                    <DownloadButton data={data}/>
                </div>
                <NoteForm dataFile={data} setDataFile={setData}/>
            </div>
        </div>


    );


}

export default DataTable;