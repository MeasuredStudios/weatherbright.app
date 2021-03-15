import * as React from 'react';
import 'twin.macro';
import Layout from '../components/Layout';
import Head from 'next/head';

const TileArticle = () => {
  return (
    <article tw="relative">
      <span tw="before:(content block absolute top-0 left-0 w-full h-full z-10 bg-blue-200 opacity-60) relative block w-full rounded-sm overflow-hidden after:(content block absolute top-0 left-0 w-full h-full opacity-20 z-20)">
        <img
          tw="block w-full rounded-sm"
          src="https://source.unsplash.com/random/256x256"
          alt="unsplash"
        />
      </span>
      <a tw="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full p-1 z-30 border-b-0 text-center">
        <h2 tw="m-0">Link</h2>
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
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
          <TileArticle />
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
