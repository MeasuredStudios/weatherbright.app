import * as React from 'react';
import 'twin.macro';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from '../components/Layout';
import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import QuoteDisplay from '../components/QuoteDisplay';

export const getServerSideProps: GetServerSideProps = async () => {
  const open = process.env.NEXT_APP_WEATHER_API_KEY;
  return {
    props: {
      open,
    },
  };
};

const Home = ({
  open,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <Layout>
      <section tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <LocationSearchForm open={open} />
        <QuoteDisplay />
        <WeatherDisplay />
      </section>
    </Layout>
  );
};

export default Home;
