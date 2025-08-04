'use client';

import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { ReactNode, useMemo } from 'react';

type userType = {
  name: string;
  email: string;
}

interface RootState {
  user: userType;
}

interface Props {
  children: ReactNode;
  preloadedState?: Partial<RootState>;
}

export function ReduxShell({ children, preloadedState }: Props) {
  const store = useMemo(() => makeStore(preloadedState), [preloadedState]);
  return <Provider store={store}>{children}</Provider>;
}
