import './DashboardHead.css';
import bellIcon from "../../Assets/HeaderNavigation/Bell-off.svg";
import avatar from "../../Assets/HeaderNavigation/Ellipse 6.svg";
import chevronDown from "../../Assets/HeaderNavigation/Chevron-down.svg";
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';

const DashboardHead = () => {
    return(
        <div className="dashboardhead">
            <div style={{width:'85%'}}>
            <h3>Dashboard</h3>
            </div>

            <div>
                <img
                    src={bellIcon}
                    alt="bellIcon"
                ></img>
            </div>
            <div>
                <img
                    src={avatar}
                    alt="avatar"
                ></img>
            </div>
            <div>
                <img
                    src={chevronDown}
                    alt="chevronDown"
                ></img>
            </div>
{/* 
        <IconButton
          size="large"
          color="outlined"
        >
            <Badge color="error">
                {NotificationsIcon}
            </Badge>
        </IconButton> */}

        </div>
    );
};

export default DashboardHead;