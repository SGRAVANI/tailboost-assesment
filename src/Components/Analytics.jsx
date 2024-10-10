
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieChartComponent from './PieChartDemo';
let mockData = [
  {
    week: 1,
    hours_Spent: 12,
  },
  {
    week: 2,
    hours_Spent: 10,
  },
  {
    week: 3,
    hours_Spent: 5,
  },
  {
    week: 4,
    hours_Spent: 10,
  },
];

class Analytics extends PureComponent {
  render() {
    return (
      <>
      <h1 className='pb-8 font-bold text-[30px]  text-center pt-5 '>
          Analytics 
        </h1>
        <h1 className='pb-8 font-bold text-[20px]  text-center sm:text-left text-[#669fff]'>
          Student Engagement per Week
        </h1>

        <div className='flex flex-col md:flex-row md:justify-between justify-center items-center md:items-end gap-6 md:gap-3 w-full max-w-[1350px] mx-auto px-4 box-border '>
          
         
          <table className='min-w-[200px] w-full md:w-[20%] md:min-w-[80px] lg:min-w-[200px] table-auto border-collapse bg-white shadow-lg'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='border px-4 py-2 text-left text-teal-700'>Week No</th>
                <th className='border px-4 py-2 text-left text-teal-700'>
                  Hours Spent In Study Per Week
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((ele) => (
                <tr key={ele.week} className='even:bg-gray-100'>
                  <td className='border px-4 py-2'>{ele.week}</td>
                  <td className='border px-4 py-2'>{ele.hours_Spent}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bar Chart Section */}
          <ResponsiveContainer width="100%" height={300} className="sm:w-[40%]">
            <BarChart
              data={mockData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 25, // Added bottom margin for the X-axis label
              }}
              barSize={40}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="week"
                label={{
                  value: 'Week Number', // X-axis label text
                  position: 'insideBottom', // Position of the label
                  offset: -10, // Adjusts the distance from the X-axis
                  style: { textAnchor: 'middle', fontSize: '14px' }, // Centers the label text
                }}
              />
              <YAxis
                label={{
                  value: 'Hours Spent',
                  angle: -90,
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontSize: '14px' },
                }}
                dataKey="hours_Spent"
              />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey="hours_Spent" fill="#669fff" />
            </BarChart>
          </ResponsiveContainer>

          {/* Pie Chart Section */}
          <ResponsiveContainer width="100%" height={300} className=" md:w-[100%]">
            <PieChartComponent />
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}

export default Analytics;
