'use client';

import { cn } from '@/utils/utils';
import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-4 py-10 sm:px-10 lg:px-16 xl:px-24'
      )}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
