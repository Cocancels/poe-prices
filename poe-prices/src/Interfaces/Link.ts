export interface LinkProps {
  name: string;
  path?: string;
  icon: React.ReactNode;
  subLinks?: LinkProps[];
  isActive?: boolean;
}
