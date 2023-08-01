import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';

const Chart = () => {
  // State to hold the input value (BMI)
  const [input, setInput] = useState(70);

  // ECharts option object that defines the chart's configuration
  const option = {
    //x-axis value in which the data of xAxis will be filled in the array of "data"
    xAxis: {
      type: 'category',
      data: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
      ],
    },
    //y-axis value in which we can assign the formatter like below in the object of axisLabel
    //also we can add the max and min range and the
    // you can refer more in the docs link which is provided above

    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} kg',
      },
      axisLine: {
        show: true,
      },

      min: 40,
      max: 110,
      splitNumber: 3,
    },

    //configuration of the tooltip also you can add more attributes in it
    tooltip: {
      trigger: 'axis',
    },

    //displayed on the top annoting the chart data
    legend: {},

    //datasets of chart is defined under the series
    series: [
      {
        name: 'BMI',
        data: [85, 80, 85, 80, 80, 75], // Placeholder data for the line chart
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          color: '#5470C6',
          width: 1,
          type: 'dashed',
        },
        itemStyle: {
          color: '#5470C6',
        },
        markArea: {
          itemStyle: {
            color: 'rgba(197, 162 ,245 ,0.5)',
          },
          data: [
            // Mark the area between input - 10 and input + 10 on the yAxis
            [
              {
                yAxis: `${input}`,
              },
              {
                yAxis: `${input - 10}`,
              },
            ],
            [
              {
                yAxis: `${input}`,
              },
              {
                yAxis: `${input + 10}`,
              },
            ],
          ],
        },

        // Mark a line at the value of the input (Weight)
        markLine: {
          symbol: 'none',
          data: [
            {
              name: 'test',
              yAxis: `${input}`,
              lineStyle: {
                type: 'solid',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Input field for the user to enter BMI value */}
      <h1 style={{ fontWeight: 400 }}>
        Input field for the user to enter BMI value in Number
      </h1>
      <input
        style={{ padding: '10px' }}
        placeholder='enter value between 40-110'
        onChange={(e) => {
          setInput(parseInt(e.target.value));
        }}
        defaultValue={70}
      />
      {/* Render the ECharts line chart */}
      <ReactEcharts option={option} />
    </div>
  );
};

export default Chart;
