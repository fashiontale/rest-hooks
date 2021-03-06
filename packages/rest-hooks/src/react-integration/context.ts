import { createContext } from 'react';
import { ActionTypes } from 'rest-hooks/types';
import { initialState } from 'rest-hooks/state/reducer';

export const StateContext = createContext(initialState);

export const DispatchContext = createContext((value: ActionTypes) => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    console.error(
      'It appears you are trying to use Rest Hooks without a provider.\nFollow instructions: https://resthooks.io/docs/getting-started/installation#add-provider-at-top-level-component',
    );
    /* istanbul ignore next */
    if (process.env.NODE_ENV === 'test') {
      console.error(
        'If you are trying to test: https://resthooks.io/docs/guides/unit-testing-hooks',
      );
    }
  }
  return Promise.resolve();
});
