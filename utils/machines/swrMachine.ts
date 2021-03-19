import { Machine, assign } from 'xstate';

export const swrMachine = Machine({
  id: `swr-9999`,
  initial: 'pending',
  context: {
    data: null,
    error: null,
  },
  states: {
    pending: {
      on: { _FETCH_STARTED: 'fetching' },
    },
    fetching: {
      on: {
        _FETCH_SUCCEEDED: {
          target: 'fetched',
          actions: assign({
            data: (_, event) => event.data,
          }),
        },
        _FETCH_FAILED: {
          target: 'failed',
          actions: assign({
            error: (_, event) => event.error,
          }),
        },
      },
    },
    fetched: {
      on: {
        _FETCH_STARTED: 'revalidating',
        REFETCH: { actions: ['revalidate'] },
      },
    },
    revalidating: {
      on: {
        _FETCH_SUCCEEDED: {
          target: 'fetched',
          actions: assign({
            data: (_, event) => event.data,
          }),
        },
        _FETCH_FAILED: {
          target: 'failed',
          actions: assign({
            error: (_, event) => event.error,
          }),
        },
      },
    },
    stale: {
      on: {
        _FETCH_STARTED: {
          target: 'revalidating',
          actions: assign({
            error: (_, event) => event.error,
          }),
        },
        REFETCH: { actions: ['revalidate'] },
      },
    },
    failed: {
      on: {
        _FETCH_STARTED: {
          target: 'revalidating',
          actions: assign({
            error: (_, event) => event.error,
          }),
        },
        REFETCH: { actions: ['revalidate'] },
      },
    },
  },
});
