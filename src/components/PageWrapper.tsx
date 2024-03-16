'use client';

import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-6 py-48 sm:px-32 lg:px-64 xl:px-72'
      )}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
