import * as React from 'react';
import 'twin.macro';
import Layout from '../components/Layout';
import useResizeObserver from '../hooks/useResizeObserver';
import * as d3 from 'd3';

const D3CircleChart = (): JSX.Element => {
  const [data, setData] = React.useState([10, 25, 50, 30, 120]);
  const svgRef = React.useRef();
  const wrapperRef = React.useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  React.useEffect(() => {
    const svg = d3.select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // general update pattern (join):
    svg
      .selectAll('.circle1')
      .data(data)
      .join('circle') // returns a selection for both entering/updating circles, removes unnecessary circles
      .attr('class', 'circle1')
      .attr('fill', 'orange')
      .attr('cx', (value, index) => index * 20)
      .attr('cy', 10)
      .attr('r', 5);

    // general update pattern (old)
    // circles2 = summary about entering/updating/exiting circles,
    // but returns the updating (existing) ones per default
    const circles2 = svg.selectAll('.circle2').data(data);

    circles2
      .enter() // get the entering (new) circles from (enter/update/exit) summary
      .append('circle') // create a new circle for entering (new) piece of data
      .merge(circles2) // merge the "entering circles" with "existing" circles
      .attr('fill', 'red')
      .attr('class', 'circle2') // then apply all the things to the combined group
      .attr('cx', (value, index) => index * 20)
      .attr('cy', 30)
      .attr('r', 5);

    circles2.exit().remove(); // remove exiting circles

    // scales, and other generators
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const lineGenerator = d3
      .line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(d3.curveCardinal);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('stroke', 'black')
      .attr('fill', 'none')
      .attr('d', lineGenerator);
  }, [data, dimensions]);

  return (
    <Layout>
      <section tw="flex flex-col justify-center items-stretch w-full mx-auto mb-16">
        <h2 tw="font-bold text-2xl md:text-4xl tracking-tight mb-4">D3 Test</h2>
        <div tw="mb-2" ref={wrapperRef}>
          <svg tw="w-full overflow-visible" ref={svgRef}>
            <g className="x-axis" />
            <g className="y-axis" />
          </svg>
        </div>
        <button
          tw="bg-blue-300 text-white rounded text-xl m-2 px-8 max-w-xs font-semibold hover:bg-blue-400 focus:outline-none focus:ring"
          onClick={() => setData(data.map((value) => value + 5))}
        >
          Update data
        </button>
      </section>
    </Layout>
  );
};

export default D3CircleChart;
