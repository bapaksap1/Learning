export type Tcard = {
  image: string;
  category: string;
  title: string;
  year: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  center?: boolean
  display?: "horizontal" | "vertical"
};
