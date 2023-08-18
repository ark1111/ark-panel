import { FC } from "react";
import Home1 from "../../assets/Home1";

export const MenuList: {
  id: number;
  title: string;
  icon: JSX.Element | null;
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
    icon: <Home1 width="25px" />,
    childs: [],
    link: "",
  },
  {
    id: 2,
    title: "Posts",
    icon: null,
    childs: [],
    link: "",
  },
  {
    id: 3,
    title: "Inbox",
    icon: null,
    childs: [],
    link: "",
  },
  {
    id: 4,
    title: "Income",
    icon: null,
    childs: [
      {
        id: 4,
        title: "subset1",
        link: "",
      },
      {
        id: 5,
        title: "subset2",
        link: "",
      },
    ],
    link: "",
  },
  // {
  //     id:0,
  //     title:"Schedules",
  //     icon:'',
  //     childs:[],
  //     link:""
  // },
];
