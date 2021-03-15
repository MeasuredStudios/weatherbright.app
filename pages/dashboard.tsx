import * as React from 'react';
import 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  AiOutlinePieChart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineDotChart,
  AiOutlineLineChart,
  AiOutlineRadarChart,
} from 'react-icons/ai';

const chartList = {
  'Pie Chart': <AiOutlinePieChart />,
  'Area Chart': <AiOutlineAreaChart />,
  'Bar Chart': <AiOutlineBarChart />,
  'Scatter Plot': <AiOutlineDotChart />,
  'Line Chart': <AiOutlineLineChart />,
  'Radar Chart': <AiOutlineRadarChart />,
};

const TileArticle = (props) => {
  return (
    <article tw="relative" key={props.index}>
      <span tw="before:(content block absolute top-0 left-0 w-full h-full z-10 bg-blue-200 opacity-60) relative block w-full rounded-sm overflow-hidden after:(content block absolute top-0 left-0 w-full h-full opacity-20 z-20)">
        {props.item}
      </span>
      <a tw="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full p-1 z-30 border-b-0 text-center">
        <h2 tw="m-0">{props.index}</h2>
      </a>
    </article>
  );
};

const Dashboard = (): JSX.Element => {
  return (
    <Layout>
      <div tw="container px-5 mx-auto">
        <h2 tw="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">
          Graphs & Charts
        </h2>
        <section tw="grid grid-cols-3 gap-x-8 gap-y-16">
          {Object.keys(chartList).map((item, index) => (
            <TileArticle
              item={chartList[item]}
              index={chartList[index]}
              key={index}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
