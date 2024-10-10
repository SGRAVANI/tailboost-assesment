
// export default PieChartComponent;
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { week: 'Week 1', hours_Spent: 12 },
  { week: 'Week 2', hours_Spent: 10 },
  { week: 'Week 3', hours_Spent: 5 },
  { week: 'Week 4', hours_Spent: 10 },
];

const COLORS = ['rgb(254,195,84)', '#66b3ff', 'rgb(10,140,123)', '#ff9999']; // Define colors for each slice

const PieChartComponent = () => {
  return (
    <div className="md:w-[30%]" style={{ width: '100%', height: '300px' }}> {/* Adjusted height to 300px for consistency */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={mockData}
            dataKey="hours_Spent"
            nameKey="week"
            cx="50%"
            cy="50%"
            outerRadius={85}
            fill="#8884d8"
            label
          >
            {mockData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
