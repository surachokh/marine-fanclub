export interface MenuInterface {
  menu_label: string;
  menu_key: string;
}

export interface NavigationProps {
  menu: Array<MenuInterface>;
}
