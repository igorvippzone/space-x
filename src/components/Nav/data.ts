interface ILinkElement {
  path: string;
  label: string;
}

export const menuLink: ILinkElement[] = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/technology",
    label: "Технология",
  },
  {
    path: "/schedule",
    label: "График полетов",
  },
  {
    path: "/guarantees",
    label: "Гарантии",
  },
  {
    path: "/about",
    label: "О компании",
  },
  {
    path: "/contacts",
    label: "Контакты",
  },
];
