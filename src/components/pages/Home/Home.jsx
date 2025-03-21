import React from 'react';
import {Typography} from "@mui/material";
import c from "../../../app.module.css"

const Home = () => {
    return (
        <div className={c.container}>
            <div>
                <Typography variant="h1" gutterBottom>
                    Herzlich Willkommen!
                </Typography>
            </div>
            <div>
                <Typography variant="h2" gutterBottom>
                    Zu meinem React Projeckt
                </Typography>
            </div>
        </div>
    );
};

export default Home;