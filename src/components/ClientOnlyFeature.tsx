'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export default function ClientOnlyFeature() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <p>Welcome, {user.name || 'guest'}!</p>
    </div>
  );
}
