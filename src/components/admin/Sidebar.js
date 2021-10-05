import React from 'react';
import './sidebar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'; 
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; 
import GroupIcon from '@material-ui/icons/Group'; 
import BookIcon from '@material-ui/icons/Book';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
import Drawer from '@material-ui/core/Drawer';
import { useHistory, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: 'rotate(0deg)'
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: 'rotate(180deg)'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();
  const classes = useStyles();
  const itemsList = [
    {
      text: 'About',
      icon: <DashboardIcon />,
      onClick: () => history.push('/admin/about')
    },
    {
      text: 'About Cards',
      icon: <CardGiftcardIcon />,
      onClick: () => history.push('/admin/aboutcards')
    },
    {
      text: 'Testimonial',
      icon: <RecentActorsIcon />,
      onClick: () => history.push('/admin/testimonial')
    },
    {
      text: 'Choice',
      icon: <StarIcon />,
      onClick: () => history.push('/admin/choice')
    },
    {
      text: 'User',
      icon: <AccountCircleIcon />,
      onClick: () => history.push('/admin/user')
    },
    {
      text: 'Instructor',
      icon: <GroupIcon />,
      onClick: () => history.push('/admin/instructor')
    },
    {
      text: 'Slots',
      icon: <BookIcon />,
      onClick: () => history.push('/admin/slots')
    },
    {
      text: 'All Rides',
      icon: <DriveEtaSharpIcon />,
      onClick: () => history.push('/admin/allrides')
    },
    {
      text: 'Logout',
      icon: <ExitToAppSharpIcon />,
      onClick: () => history.push('/admin/logout')
    }
  ];
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={true}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon
              classes={{
                root: open
                  ? classes.menuButtonIconOpen
                  : classes.menuButtonIconClosed
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          {itemsList.map((item) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default withRouter(Sidebar);

Sidebar.PropTypes = {
  history: PropTypes.object.isRequired
};
