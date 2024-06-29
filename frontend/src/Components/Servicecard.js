import React from "react";
import { Card, CardContent, CardHeader, List, ListItem } from '@mui/material';
import useStyles from '../Components/Styles';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const ServiceCard = ({ title, description, variant = "outlined" }) => {

    const classes = useStyles();


    if (typeof description !== "string") {
        description = description.toString();
    }

    const points = description.split(":");

    return (
        <Card className={classes.serviceCard} variant={variant}>
            <CardHeader className={classes.serCardHolder} title={title} />
            <CardContent className={classes.serCardContent}>
                <List>
                    {points.map((point) => (
                        <ListItem className="serList" key={point}><DoneRoundedIcon className={classes.servCheck} />{point}</ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
