import { AppBar, Toolbar,Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Student Management System</Button>
                <Button color="inherit" component={Link} to="/register">Register Student</Button>
                <Button color="inherit" component={Link} to="/students">View Students</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;