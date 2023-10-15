export type Tbutton = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant?: "primary" | "secondary"
};
