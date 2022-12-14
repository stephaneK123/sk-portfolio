import React, { useState, useEffect } from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export const ReadTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <Typography
            variant="h1"
            fontSize={25}
            color={"#e0e0e0"}
            fontWeight="bold"
            sx={{ m: 1, position: 'absolute'}}
        >
            <p> {date.toLocaleTimeString()}</p>
            <p> {date.toLocaleDateString()}</p>
        </Typography>
    )
}

export default ReadTime