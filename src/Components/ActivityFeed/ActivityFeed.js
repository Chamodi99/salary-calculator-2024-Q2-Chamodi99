import React from 'react';
import './ActivityFeed.css';
import Kushantha from "../../Assets/Feeds/Kushantha.svg";
import Lorem from "../../Assets/Feeds/Lorem.svg";
import { Typography } from '@mui/material';

const ActivityFeed = () => {

    return (
        <>
            <div className="feeds">
                <h2>Activity Feed</h2>
                <table className="feedsTable">
                    <tbody>
                    <tr>
                        <td>
                            <img
                            src={Kushantha}>
                            </img>
                        </td>
                        <td>
                        <Typography>
                            <span style={{fontWeight:'bold'}}>Kushantha Charuka</span> created<span style={{color: '#BC006D', fontWeight:'bold'}}> Contract #00124 need John Beige's signature</span>
                            </Typography>
                            <Typography style={{fontSize:'12px'}}>
                            Sep 16, 2022 at 11:30 AM
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                            src={Lorem}>
                            </img>
                        </td>
                        <td>
                            <Typography>
                            Lorem ipsum <span style={{fontWeight:'bold'}}>Dolor sit amet,</span>consectetur adipiscing elit. <span style={{fontWeight:'bold'}}> Maecenas</span> pretium neque
                            </Typography>
                            <Typography style={{fontSize:'12px'}}>
                            Sep 16, 2022 at 11:45 AM
                            </Typography>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img
                            src={Lorem}>
                            </img>
                        </td>
                        <td>
                        <Typography>
                            Lorem ipsum <span style={{fontWeight:'bold'}}>Dolor sit amet,</span>consectetur adipiscing elit. <span style={{fontWeight:'bold'}}> Maecenas</span> pretium neque
                            </Typography>
                            <Typography style={{fontSize:'12px'}}>
                            Sep 16, 2022 at 11:45 AM
                            </Typography>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ActivityFeed;