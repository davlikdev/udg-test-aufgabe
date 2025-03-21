import React from 'react';
import {
    Bar,
    Rectangle,
    BarChart,
    ResponsiveContainer, YAxis, XAxis, AreaChart, CartesianGrid, Tooltip, Area, Legend,
} from "recharts";
import c from "../../../app.module.css"
import {Typography} from "@mui/material";

const DataChart = ({ dataFile }) => {

    const calculateÄrmel = (dataFile) => {                    // Функция для подсчета количества значений

        const totalCount = dataFile.length;


        const countMap = dataFile.reduce((acc, item) => { // Подсчитываем количество каждого значения в поле category
            const ärmel = item.Ärmel;
            if (!ärmel) return acc;
            acc[ärmel] = (acc[ärmel] || 0) + 1;
            return(acc)

        }, {});



        const finalMap = {other: 0}

        Object.entries(countMap).forEach(([key, value]) => {
            if (value < 276) {
                finalMap.other += value; // Добавляем к "other"
            } else {
                finalMap[key] = value; // Оставляем как есть
            }
        });

        const result = Object.entries(finalMap).map(([key, value]) => ({
            name: key,
            value: value
        }));

        console.log(result)                    // Вычисляем процентное соотношение
        return result
    };

    // Получаем результаты подсчета
    const ärmelData = calculateÄrmel(dataFile)

    const calculateGeschlecht = (dataFile) => {
        const totalCount = dataFile.length;
        const countMap = dataFile.reduce((acc, item) => {

            const geschlecht = item.Geschlecht

            if (!geschlecht) return acc;
            acc[geschlecht] = (acc[geschlecht] || 0) + 1;
            return(acc)

        }, {});

        const results = Object.entries(countMap).map(([key, value]) => ({
            name: key,
            value: value
        }));


        return results
    };

    const geschlechtData = calculateGeschlecht(dataFile);

    const calculateHerstellung = (dataFile) => {
        const totalCount = dataFile.length;

        const countMap = dataFile.reduce((acc, item) => {

            const herstellung = item.Herstellung

            if (!herstellung) return acc;
            acc[herstellung] = (acc[herstellung] || 0) + 1;
            return(acc)

        }, {});
        console.log(countMap)

        const results = Object.entries(countMap).map(([key, value]) => ({
            name: key,
            value: value
        }));

        return results

    };

    const herstellungData = calculateHerstellung(dataFile);
    console.log(herstellungData)




    if (!dataFile || dataFile.length === 0) return (
        <div className={c.container}>
            <Typography variant="h4" gutterBottom>
                Sie sollen ein Document hochladen
            </Typography>
        </div>
    );
    else {
        return (
            <div style={{ display:"flex", width: "100%", height: "300px" }}>
                <ResponsiveContainer  height="100%">
                    <AreaChart data={ärmelData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                        <Legend/>
                    </AreaChart>
                </ResponsiveContainer >
                <ResponsiveContainer height="100%">
                    <AreaChart data={geschlechtData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                        <Legend/>
                    </AreaChart>
                </ResponsiveContainer>
                <ResponsiveContainer  height="100%">
                    <AreaChart data={herstellungData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                        <Legend/>
                    </AreaChart>
                </ResponsiveContainer>

            </div>
        );
    }

};

export default DataChart;
