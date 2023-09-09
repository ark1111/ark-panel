import Home1 from "../../assets/Home1";
import SampleIcon1 from "../../assets/SampleIcon1";

export const MenuList: {
  id: number;
  title: string;
  icon: JSX.Element | null;
  activeIcon: JSX.Element | null;
  childs: {
    id: number;
    title: string;
    link: string;
  }[];
  link: string;
}[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Home1 width="25px" color1="#BBBBBB" color2="#666666" />,
    activeIcon: <Home1 width="25px" color2="#a8a8a8" color1="#fff" />,
    childs: [],
    link: "/",
  },
  {
    id: 2,
    title: "Sample",
    icon: <SampleIcon1 width="25px" color1="#BBBBBB" color2="#666666" />,
    activeIcon: <SampleIcon1 width="25px" color2="#a8a8a8" color1="#fff" />,
    childs: [],
    link: "#",
  },
  {
    id: 3,
    title: "Sample",
    icon: <SampleIcon1 width="25px" color1="#BBBBBB" color2="#666666" />,
    activeIcon: <SampleIcon1 width="25px" color2="#a8a8a8" color1="#fff" />,
    childs: [],
    link: "#",
  },
  {
    id: 4,
    title: "Sample",
    icon: <SampleIcon1 width="25px" color1="#BBBBBB" color2="#666666" />,
    activeIcon: <SampleIcon1 width="25px" color2="#a8a8a8" color1="#fff" />,
    childs: [
      {
        id: 5,
        title: "subset1",
        link: "#",
      },
      {
        id: 6,
        title: "subset2",
        link: "#",
      },
    ],
    link: "#",
  },
  // {
  //     id:0,
  //     title:"Schedules",
  //     icon:'',
  //     childs:[],
  //     link:""
  // },
];
