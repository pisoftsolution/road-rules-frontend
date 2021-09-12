import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import AboutCards from './AboutCards';
import Testimonials from './Testimonials';
import Choose from './Choose';
import User from './User';
import Instructor from './Instructor';
import Slots from './Slots';
import AllRides from './AllRides';
import Logout from './Logout';
import Sidebar from '../Sidebar';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex"
    }
});

function AdminRouting() {
    const classes = useStyles();
    return (
        <div className="App"> 
            <Switch>
                <div className={classes.container}>
                    <Sidebar />
                    <Route exact path="/admin/about" render={props => <About {...props} />} />
                    <Route exact path="/admin/aboutcards" render={props => <AboutCards {...props} />} />
                    <Route exact path="/admin/testimonial" render={props => <Testimonials {...props} />} />
                    <Route exact path="/admin/choice" render={props => <Choose {...props} />} />
                    <Route exact path="/admin/user" render={props => <User {...props} />} />
                    <Route exact path="/admin/instructor" render={props => <Instructor {...props} />} />
                    <Route exact path="/admin/slots" render={props => <Slots {...props} />} />
                    <Route exact path="/admin/allrides" render={props => <AllRides {...props} />} />
                    <Route exact path="/admin/logout" render={props => <Logout {...props} />} />
                </div>
            </Switch>
        </div>
    );
}

export default AdminRouting;
