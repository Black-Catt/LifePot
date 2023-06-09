import { MdAutoAwesome, MdAutoFixHigh, MdOutlineHelp } from 'react-icons/md';

interface IServices {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}

interface ILinks {
  id: number;
  text: string;
  url: string;
}

export const links: ILinks[] = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services: IServices[] = [
  {
    id: 1,
    icon: <MdAutoAwesome />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <MdAutoFixHigh />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <MdOutlineHelp />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];
