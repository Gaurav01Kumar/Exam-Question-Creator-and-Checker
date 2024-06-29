import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    // Navbar

    '$green': '#08823F',

    navbar: {
        padding: '10px',
        backgroundColor: '#ffffff',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        color: '#08823F',
        width: '170px',
        fontSize: '15px'
    },
    navItem: {
        display: 'inline-block',
        textDecoration: 'none',
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 auto',
        fontSize: '28px',
        padding: '5%',
        margin: 0,
    },
    logos: {
        height: '100px',
        width: '100px',
        float: 'left',
        paddingLeft: '190px',
        paddingBottom: '20px',
        cursor: 'pointer',
    },


    //Home Pgae
    btnReg: {
        color: '#08823F',
        fontWeight: 'bold !important',
        border: 'solid',
        fontSize: '16px',
        height: '58px',
        width: '250px',
    },


    containers: {
        backgroundColor: '#E3F9FC',
        height: '100vh',
    },


    // Service Page

    serviceCard: {
        color: '#08823F',
        fontSize: '16px',
        width: '20vw',
        height: '40vh',
        fontFamily: 'Roboto',
        padding: '30px',
        margin: '20px'
    },

    serCardHolder: {
        height: '58px',
        color: '#08823F',
        textAlign: 'center',
    },


    serCardContent: {
        color: '#08823F',
        padding: '30px',
    },
    // CSS variables
    btnSerReg: {
        color: '#08823F',
        fontWeight: 'bold !important',
        border: 'solid',
        fontSize: '16px',
        height: '58px',
        width: '250px',
        paddingLeft: '130px',
    },

    serList: {
        padding: '10px',
    },

    textField: {
        display: 'flex',
        margin: '20px',
        padding: '5px',
    },



    //Dashboard

    dashBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "100px",
        padding: "20px",
        height: '100px',
        width: 'fit-content',
        border: "3px dashed #08823F",
        borderRadius: 2,
        cursor: "pointer",
        backgroundColor: "#fff",
        color: "#08823F",
    },

    //Vertical Tab

    VTabBox: {
        position: "relative",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: "224px",
        backgroundColor: "#ffffff",
    },

    VTabsBox: {
        width: "60px",
    },

    VTab: {
        width: "40px",
    },


    // Media queries
    '@media (max-width: 767px)': {
        // Hide the image on mobile
        '.std-img': {
            display: 'none',
        },

        // Move the header content below the navigation bar
        '.home-header': {
            paddingTop: 50,
            order: 2,
        },

        // Center the navigation bar and header content
        '.page-conatiner': {
            justifyContent: 'center',
        },

        // Reduce the size of the buttons and links
        '.btn': {
            height: 24,
            width: 80,
            fontSize: 12,
        },

        '.links': {
            margin: 0,
            padding: 0,
            paddingTop: 20,
        },

        // Reduce the size of the logo
        '.logo': {
            height: 80,
            width: 80,
        },
    },
}));

export default useStyles;
