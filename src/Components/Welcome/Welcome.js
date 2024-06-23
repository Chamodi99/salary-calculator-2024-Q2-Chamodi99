import './Welcome.css';
import close from "../../Assets/WelcomeNote/Close.svg";
import group from "../../Assets/WelcomeNote/Group 1770.svg"
import { Typography } from '@mui/material';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="leftcontent">
                <Typography>
                    <span style={{fontWeight:'bold', fontSize:'24px',color:'black'}}>Welcome back, John Doe</span>
                </Typography>
                <Typography>
                    <span style={{color:'#757575'}}>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</span> 
                </Typography>
                <Typography>
                    <span style={{color:'#BC006D'}}><a href=" ">Look here for more information</a></span>
                </Typography>
            </div>   
            
                <div className="middlecontent">
                    <img
                    id='group'
                    src={group}
                    alt='group' >
                    </img>
                </div>
                <div className="rightcontent">
                    <img
                    id='close'
                    src={close}
                    alt='close'>
                    </img>
                </div>
                
            </div>
      
    )
}

export default Welcome;