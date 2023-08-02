import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts/dist/echarts.js';

/**
 *  Bar type chart which also shows the range and acooriding to it the bar color will change
 * @returns  {jsx element}
 *
 * reference link for echarts:
 * https://echarts.apache.org/handbook/en/get-started
 *
 */

const BarChart = () => {
  //options for chart configuration

  const option = {
    //represent the x axis
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          width: 1,
        },
      },
    },

    //represent the y axis
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.1)',
        },
      },
    },

    //represent tooltip
    tooltip: {
      trigger: 'axis',
    },

    //this is clickable so that you can filter out which bar is you want to show
    visualMap: {
      //shows which data colors represents in bar at the bottom of graph
      show: true,
      symbol: 'circle',
      bottom: 0,
      left: '30%',
      orient: 'horizontal',
      itemSymbol: 'circle',

      //to change color of bars according to given data
      pieces: [
        //define the range
        //gt:greater than
        //lte:less than or equal to

        {
          gt: 0,
          lte: 4,
          label: 'normal',
          //define two different color for gradient effect
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(9, 187, 30)',
            },
            {
              offset: 1,
              color: 'rgb(191, 242, 198)',
            },
          ]),
        },
        {
          gt: 4,
          lte: 8,
          label: 'pre-diabetic',
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(234, 232, 24)',
            },
            {
              offset: 1,
              color: 'rgb(247, 247, 189)',
            },
          ]),
        },
        {
          gt: 8,
          lte: 10,
          label: 'diabetic',
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(244, 138, 39)',
            },
            {
              offset: 1,
              color: 'rgb(244, 214, 185)',
            },
          ]),
        },
        {
          gt: 10,
          label: 'high-diabetic',
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(249,11, 11)',
            },
            {
              offset: 1,
              color: 'rgb(255, 193, 193)',
            },
          ]),
        },
      ],
    },

    //the data of the graph will be defined in the series
    series: [
      {
        data: [11, 9, 5, 4, 3, 2, 1],
        type: 'bar',
        //z-index so that the mark line can be behind of the bar
        zlevel: 100,
        markLine: {
          label: {
            //show true will be give you the value of that markline
            show: false,
          },
          symbol: 'none',

          //data of markline
          data: [
            {
              yAxis: `4`,
              lineStyle: {
                type: 'solid',
                color: 'green',
              },
            },
            {
              yAxis: `8`,
              lineStyle: {
                type: 'solid',
                color: 'yellow',
              },
            },
            {
              yAxis: `10`,
              lineStyle: {
                type: 'solid',
                color: 'orange',
              },
            },
            {
              yAxis: `12`,
              lineStyle: {
                type: 'solid',
                color: 'red',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div style={{ width: '60%', marginInline: 'auto' }}>
      <ReactEcharts option={option} />
    </div>
  );
};

export default BarChart;
