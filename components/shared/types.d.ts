type MenuItem = {
  id: number;
  slug: string;
  label: string;
  subTabs?: MenuItem[];
  isComingSoon?: boolean;
  target?: string;
};

export { MenuItem };
