import { Tabs, Tab, Box, Button } from "@mui/material";
import useStyles from "./Styles";

const VerticalTab = () => {

    const classes = useStyles();

    return (
        <div>
            <Box classname={classes.VTabBox}>
                <Tabs classname={classes.VTabsBox} orientation="vertical" variant="scrollable">
                <Tab label="Dashboard" />
                    <Tab label="History" />
                    <Tab label="Geography" />
                    <Tab label="Science" />
                    <Tab label="English" />
                    <Box component="button" style={{width:"200px",height:"40px",marginLeft:"8rem", border:"1px dashed black",fontSize:"19px",cursor:"pointer"}} >Create New</Box>
                </Tabs>
            </Box>
        </div>
    )
}


export default VerticalTab
