import * as React from 'react';
import 'twin.macro';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CityContext } from '../utils/context/cityContext';

import useSWR from 'swr';
import { swrMachine } from '../utils/machines/swrMachine';
import { useMachine } from '@xstate/react';

import Layout from '../components/Layout';
import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import QuoteDisplay from '../components/QuoteDisplay';
import LoadingDisplay from '../components/LoadingDisplay';
import ErrorDisplay from '../components/ErrorDisplay';

export const getServerSideProps: GetServerSideProps = async () => {
  const openWeather = process.env.NEXT_APP_WEATHER_API_KEY;
  return {
    props: {
      openWeather,
    },
  };
};

const useSWRMachine = (key, fetcher, options) => {
  const { data, error, isValidating, revalidate } = useSWR(
    key,
    fetcher,
    options
  );

  const [state, send] = useMachine(
    swrMachine.withConfig({ actions: { revalidate } })
  );

  React.useEffect(() => {
    send('_FETCH_STARTED');
  }, [send]);

  React.useEffect(() => {
    if (isValidating) {
      send('_FETCH_STARTED');
    } else if (error) {
      send('_FETCH_FAILED', { error });
    } else if (data) {
      send('_FETCH_SUCCEEDED', { data });
    }
  }, [isValidating, send, error, data]);

  return [state, send];
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = ({
  openWeather,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const fetchState = React.useContext(CityContext);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${fetchState.state.city}&appid=${openWeather}&units=imperial`;
  const [state, send] = useSWRMachine(
    fetchState.state.shouldFetch ? url : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <Layout>
      <section tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <LocationSearchForm />
        <QuoteDisplay />
        <div>
          <ul>
            <li>
              Machine state: <code>{state.value}</code>
            </li>
            <li>
              Fetched name:{' '}
              <code>{!!state.context.data && state.context.data.name}</code>
            </li>
            <li>
              Error:{' '}
              <code>{state.context.error && state.context.error.message}</code>
            </li>
            <button onClick={() => send('REFETCH')}>Refetch</button>
          </ul>
        </div>
        {(() => {
          switch (state.value) {
            case 'fetching':
              return <LoadingDisplay />;
            case 'failed':
              return <ErrorDisplay />;
            case 'fetched':
              return <WeatherDisplay data={state.context.data} />;
            default:
              return null;
          }
        })()}
      </section>
    </Layout>
  );
};

export default Home;
