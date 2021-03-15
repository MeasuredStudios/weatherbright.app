import * as React from 'react';
import 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout';
import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import QuoteDisplay from '../components/QuoteDisplay';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <section tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <QuoteDisplay />
        <LocationSearchForm />
        <WeatherDisplay />
      </section>
    </Layout>
  );
};

export default Home;
