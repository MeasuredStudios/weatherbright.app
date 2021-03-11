import * as React from 'react';
import 'twin.macro';
import Layout from '../components/Layout';
import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import Head from 'next/head';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <section tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <LocationSearchForm />
        <WeatherDisplay />
      </section>
    </Layout>
  );
};

export default Home;
