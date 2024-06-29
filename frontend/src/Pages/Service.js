import Navbar from "../Components/Navbar";
import Grid from '@mui/material/Grid';
import ServiceCard from "../Components/Servicecard";
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../Components/Styles';


const Service = () => {

    const navigate = useNavigate()
    const classes = useStyles()


    return (
        <div className="main_container">
            <Navbar />
            <div className="page-container">
                <div className="header">
                    Our Services
                </div>
                <div className="grids">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ServiceCard title="Accuracy" description={[
                                " Our AI grading application is trained on a massive dataset of student work, which allows it to grade answers accurately and consistently. : Our AI model is constantly being updated and improved, so you can be confident that your students are getting the most accurate feedback possible."
                            ]} />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard title="Efficiency" description=" Our AI grading application can grade an assignment in seconds, freeing up your time to focus on other important tasks. : We offer a variety of features to help you manage your grading workflow more efficiently, such as bulk grading and automatic feedback." />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard title="Flexiblity" description=" Our AI grading application can be used to grade a variety of different types of assignments, including essays. : Our application is scalable to meet the needs of different educational institutions, from small schools to large universities." />
                        </Grid>
                    </Grid>
                    <div className='registerSer'>
                        <Button variant='Text' onClick={() => navigate('/register')} className={classes.btnReg}>Register Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
