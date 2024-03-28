import kanvaboard from '@/../public/Kanvaboard.png';
import lumosent from '@/../public/Lumosent.png';

export const PROJECTS = [
  {
    href: 'https://lumosent.addoxy.me/',
    title: 'Lumosent',
    description:
      'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
    stack: [
      'NextJS',
      'ReactJS',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'NextAuth',
    ],
    image: lumosent,
  },
  {
    href: 'https://kanvaboard.addoxy.me/',
    title: 'KanvaBoard',
    description:
      'A minimal project management app that lets you keep track of and sort your tasks using a drag and drop interface.',
    stack: [
      'NextJS',
      'ReactJS',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'React Query',
      'NextAuth',
    ],
    image: kanvaboard,
  },
];
