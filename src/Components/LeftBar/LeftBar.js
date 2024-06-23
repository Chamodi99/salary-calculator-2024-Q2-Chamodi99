import './LeftBar.css';
import dashboard from "../../Assets/LeftBar/Dashboard.svg"

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="leftHead">
                <p>Acmy Solutions</p>
            </div>

            <div className="navigator">
                        <div style={{marginLeft:'10px'}}>
                            <img
                                src={dashboard}>
                            </img>
                        </div>
                        <div  style={{marginLeft:'10px'}}>
                            <p>Dashboard</p>
                        </div>
                    </div>
                
            </div>
    );
};

export default LeftBar;