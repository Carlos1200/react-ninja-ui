import { ReactElement } from "react";

export interface Information {
  title: string;
  description: string;
  image: string;
}

export interface CardProps {
  /**
   * Information about the card
   */
  information: Information;
  /**
   * Children to be rendered inside the card
   */
  children: (args: Information) => JSX.Element;
  /**
   * Card class
   */
  className?: string;
}

export interface CardContextProps {
  /**
   * Information about the card
   */
  information: Information;
}
