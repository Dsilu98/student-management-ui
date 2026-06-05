import { Container , Paper, Typography} from "@mui/material";

const Dashboard = ()=>{
    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" >Dashboard</Typography>

                <Typography sx={{ mt: 2 }}>
                    Welcome to the Student Management System Dashboard! Here you can manage student records, view statistics, and perform various administrative tasks. Use the navigation bar to access different sections of the application.
                </Typography>
            </Paper>
        </Container>
    );
};

export default Dashboard;