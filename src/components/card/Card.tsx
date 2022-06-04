import { createContext } from "react";
import { CardContextProps, CardProps } from "../../interfaces";

import "./card.css";

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

/**
 * Card component
 */
export const Card = ({ information, className, children }: CardProps) => {
  return (
    <Provider
      value={{
        information,
      }}
    >
      <div
        className={`card ${className}`}
        style={{
          backgroundImage: `url(${information.image})`,
        }}
      >
        {children(information)}
      </div>
    </Provider>
  );
};
