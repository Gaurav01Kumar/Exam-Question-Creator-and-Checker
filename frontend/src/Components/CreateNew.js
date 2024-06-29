import { Box, Button } from "@mui/material";
import useStyles from '../Components/Styles';

const CreateNew = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="page-container">
                <Box component="button" className={classes.dashBox}>
                    <Button children="Create New Paper Pattern" sx={{
                        color: "#08823F", fontSize: "14px",
                        ":hover": { backgroundColor: '#08823F', color: "#fff" }
                    }} />
                </Box>
            </div>
        </div>
    )
}

export default CreateNew