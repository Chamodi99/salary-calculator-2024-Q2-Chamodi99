import React,{ useState,useEffect } from 'react';
import './TasksPriorities.css';
import axios from 'axios';
import BarChartSet from './BarChart';

const TasksPriorities = () => {

        const [priorityCounts, setPriorityCounts] = useState({ low: 0, medium: 0, high: 0 });
        const [tasks,setTasks] = useState([]);

        
        const fetchTasks = async () => {
            try {
                const response = await axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do");
                console.log(response.data);
                setTasks(response.data);
                console.log(tasks);
                countPriorities(response.data);
            } catch (error) {
                console.error("Error fetching tasks data", error);
            }
        };

        useEffect(() => {
            fetchTasks();
        },);


        const countPriorities = (tasks) => {
            let lowCount = 0;
            let mediumCount = 0;
            let highCount = 0;
    
            tasks.forEach(task => {
                switch (task.priority) {
                    case 'LOW':
                        lowCount++;
                        break;
                    case 'MEDIUM':
                        mediumCount++;
                        break;
                    case 'HIGH':
                        highCount++;
                        break;
                    default:
                        break;
                }
            });
    
            setPriorityCounts({ low: lowCount, medium: mediumCount, high: highCount });
         
        };

    return (
        <div className="tasksprio">
           <h2>Tasks Priorities</h2>
          <center>
          <BarChartSet data={priorityCounts} />
          </center>
        </div>
    )
};

export default TasksPriorities;