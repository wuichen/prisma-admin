import React, { useReducer } from 'react';
import { PlatformContext } from './platform.context';
type ActionType = { type: 'UPDATE' | 'RESET'; payload: any };

function reducer(state: any, action: ActionType): any {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, text: action.payload.text };
    case 'RESET':
      return { text: '' };
    default:
      return state;
  }
}

export const PlatformProvider: React.FunctionComponent<{ platform: any }> = ({ children, platform }) => {
  const [state, dispatch] = useReducer(reducer, platform ? platform : { slug: 'www', categories: [] });
  return <PlatformContext.Provider value={{ state, dispatch }}>{children}</PlatformContext.Provider>;
};
