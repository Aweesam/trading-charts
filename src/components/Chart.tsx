import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .append('g');

      // Add your chart drawing logic here
    }
  }, []);

  return <ChartContainer ref={chartRef}></ChartContainer>;
};

export default Chart;
