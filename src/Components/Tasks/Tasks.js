import React,{useEffect, useState} from 'react';
import './Tasks.css';
import axios from "axios";
//import isEmpty from "../../Support/isEmpty.js";
import done from "../../Assets/Check/done.svg";
import progress from "../../Assets/Check/progress.svg";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Box,
    Button
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Tooltip, {  tooltipClasses } from '@mui/material/Tooltip';

const Tasks = ({task}) => {

    const tasksPerPage = 8;
    const [currentPage,setCurrentPage] = useState(1);
    const [tasks,setTasks] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [checkedTasks, setCheckedTasks] = useState({});
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const fetchTasks = async () => {
        try {
            const response = await axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do");
            console.log(response.data);
            if(response){
                const initialCheckedState = response.data.reduce((acc, task) => {
                    acc[task.id] = false; // Initialize all tasks as unchecked
                    return acc;
                }, {});
                setTasks(response.data);
                setTotalPages(Math.ceil(response.data.length / tasksPerPage));
                setCheckedTasks(initialCheckedState);
            }
            // if(isEmpty(response)){
            //     console.error("Error empty tasks data", error);
            // }
            
        } catch (error) {
            console.error("Error fetching tasks data", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    },[]);


    console.log(checkedTasks);
    console.log(hoveredItem);


    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (taskId) => {
        setTasks(prevTasks => (
            prevTasks.map(task => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        completed : !task.completed
                    };
                }
                return task;
            })
        ));

    };

    const renderPriorityText = (priority) => {
        if (priority === 'LOW') {
            return <div style={{width:'40px',height:'23px',backgroundColor:'rgba(47, 128, 237, 0.1)',borderRadius:'10px'}}><center><div style={{color:'#2F80ED'}}>Low</div></center></div>;
        } else if (priority === 'MEDIUM') {
            return <div style={{width:'63px',height:'23px',backgroundColor:'rgba(242, 201, 76, 0.1)',borderRadius:'10px'}}><center><div style={{ color: '#F2C94C' }}>Medium</div></center></div>;
        } else if (priority === 'HIGH') {
            return <div style={{width:'43px',height:'23px',backgroundColor:'rgba(235, 87, 87, 0.1)',borderRadius:'10px'}}><center><div style={{ color: '#EB5757' }}>High</div></center></div>;
        } else {
            return null; 
        }
    };


    const renderTasks = () => {
        const startIndex = (currentPage - 1) * tasksPerPage;
        const endIndex = startIndex + tasksPerPage;
        return tasks.slice(startIndex, endIndex).map(task => {
            const date = new Date(task.createdAt);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();

            let tooltipMessage = task.completed ? 'Success' : 'In Progress';
            
            return (
            <TableRow key={task.id} className="task">
                <TableCell>
                <CustomTooltip title={tooltipMessage} arrow completed={task.completed}
                        // style={{
                        //     color:{ tooltipTextColor},
                        //     backgroundColor: {tooltipBackgroundColor}
                        // }}
                    >
                    
                    <Box display="flex" 
                        alignItems="center" 
                        onClick={() => handleCheckboxChange(task.id)} 
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHoveredItem(task.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        >

                        {task.completed ? (
                            <img src={done} alt='done'></img>
                        ) : (
                            <img src={progress} alt='progress'></img>
                        )}
                    </Box>
                </CustomTooltip>
            </TableCell>


                <TableCell>
                    {task.completed === false ? (
                        <>
                        <div>{task.todo}</div>
                        <Button 
                            variant="text" 
                            onClick={() => handleCheckboxChange(task.id)} 
                            style={{ cursor: 'pointer' }}
                            size='small'
                            sx={{ backgroundColor: '#fff', color: '#BC006D'}}
                        >
                            Mark as done
                        </Button>
                        </>
                    ) : (
                        <div>{task.todo}</div>
                    )}
                    
                </TableCell>
                <TableCell>
                    {task.createdBy}
                </TableCell>
                <TableCell>
                {renderPriorityText(task.priority)}
                </TableCell>
                <TableCell>
                {`${month} ${day}`}
                </TableCell>
                </TableRow>
        );
    });
};

// pagination

const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
      display: 'inline-block',
      color: 'black',
      padding: '16px 16px,16px,16px',
      border: '1px solid #ddd',
      margin: '10px 10px',
      borderRadius: '5px',
    },
    '& .Mui-selected': {
      backgroundColor: 'white',
      color: '#BC006D',
      border: '2px solid #BC006D',
      borderRadius: '5px',
    },
    '& .MuiPaginationItem-root:hover:not(.Mui-selected)': {
      backgroundColor: '#fff',
      borderRadius: '5px',
    },
  }));

  const CustomTooltip = styled(({ className, completed, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ completed }) => ({
    '& .MuiTooltip-tooltip': {
      display: 'inline-block',
      color: completed === true ? 'green' : '#F2C94C',
      backgroundColor: completed ? 'rgb(76, 175, 80,0.1)' : 'rgba(242, 201, 76, 0.1)',
      padding: '8px',
      border: '1px solid #ddd',
      margin: '5px',
      borderRadius: '15px',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: completed ? 'rgb(76, 175, 80,0.1)' : 'rgba(242, 201, 76, 0.1)',
      },
  }));

    const renderPageNumbers = () => {
        const handlePageChange = (event, page) => {
            setCurrentPage(page);
            // Handle any additional logic you need when the page changes
          };
        
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <a
                    key={i}
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handleClick(i)}
                    href=" "
                >
                    {i}
                </a>
            );
        }
        return (
            <Stack spacing={2}
            justifyContent="center" 
            alignItems="center"
            direction="row"
            >
                <CustomPagination 
                    count={totalPages} 
                    page={currentPage} 
                    variant="outlined" 
                    shape="rounded" 
                    onChange={handlePageChange} 
                />
                </Stack>
        
        )
    };

    const getMonthAndDate = (createdAt) => {
        const date = new Date(createdAt);
        const month = date.getMonth() + 1; 
        const day = date.getDate(); 
        return { month, day };
    };
    console.log(getMonthAndDate());
    
    // console.log(`Month: ${month}, Day: ${day}`);

    return (
        <>
        <div className="tasks">
            <h2>Tasks</h2>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:'#F2F2F2'}}>
                        <TableCell>Status</TableCell>
                        <TableCell>Task Name</TableCell>
                        <TableCell>Created by</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTasks()}
                </TableBody>
            </Table>
            <div className="pagination">
                {renderPageNumbers()}
            </div>
        </div>
        
        </>
    );
};

export default Tasks;