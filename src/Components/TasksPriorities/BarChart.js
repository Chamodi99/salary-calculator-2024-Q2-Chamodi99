
import React from 'react';
import { BarChart, Bar, Legend} from 'recharts';

const BarChartSet = ({ data }) => {

    const chartData = [
        { name: 'Low', count: data.low,fill:'#2F80ED' },
        { name: 'Medium', count: data.medium,fill:'#F2C94C' },
        { name: 'High', count: data.high,fill:'#EB5757' },
    ];
    
    const legendItems = [
        { id: 'High', value: 'High', type: 'circle', color: '#EB5757' },
        { id: 'Medium', value: 'Medium', type: 'circle', color: '#F2C94C' },
        { id: 'Low', value: 'Low', type: 'circle', color: '#2F80ED' },

    ];


    chartData.sort((a, b) => b.count - a.count);

    return (
        <BarChart
            width={350}
            height={300}
            data={chartData}
            wrapperStyle={{ paddingBottum: '10px' }} 
            margin={{
                top: 20, right: 30, left: 20, bottom: 5,
            }}
        >
            
            <Legend
                verticalAlign="bottom"
                iconSize={7}
                iconType="circle"
                layout="horizontal"
                payload={legendItems.map(item => ({
                    ...item,
                    color: item.color, 
                    value: <span style={{ color: 'black',marginRight: '20px' }}>{item.value}</span>
                }))}
                wrapperStyle={{ paddingTop: '40px' }} 
            />
            
            <Bar dataKey="count"  isAnimationActive={false}  radius={[10, 10, 10, 10]}>
                {chartData.map((entry, index) => (
                    <Bar 
                        key={`bar-${index}`} 
                        dataKey="count" 
                        fill={entry.fill}
                        width={46} 
                        />
                ))}
            </Bar>
        </BarChart>
    );
};

export default BarChartSet;
