import React from "react";


export type TColors  = string 

export type TThemeProvider = {
  children: React.ReactNode
}

export type TThemeProps = {
  colors: TColors;
}

export type TThemeContext = {
  theme: TThemeProps;
}