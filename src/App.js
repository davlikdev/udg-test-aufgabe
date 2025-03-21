import React, {useState} from 'react';
import {Box} from "@mui/material";
import DataTable from "./components/pages/DataTable/DataTable";
import DataChart from "./components/pages/DataChart/DataChart";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";


const App = () => {

    const [dataFile, setDataFile] = useState([])

    return (
        <div>
            <Box sx={{ width: '100%'}}>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>

                        <Route path={"/home"} element={<Home/>} index/>
                        <Route path={"/table"} element={
                            <DataTable  setData={setDataFile} data={dataFile}/>
                        }/>
                        <Route path={"/charts"} element={
                            <DataChart dataFile={dataFile}/>
                        } />

                        <Route path={"*"} element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </Box>
        </div>

    )

};
export default App;