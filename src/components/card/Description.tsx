import { useContext } from "react";
import { CardContext } from "./Card";
import "./card.css";

export interface DescriptionProps {
  /**
   * Title text
   */
  title?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * h1 tag className
   */
  titleClassName?: string;
  /**
   * p tag className
   */
  descriptionClassName?: string;
}

export const Description = ({
  description,
  descriptionClassName,
  title,
  titleClassName,
}: DescriptionProps) => {
  const { information } = useContext(CardContext);

  return (
    <div className="card__content">
      <h1 className={`card__title ${titleClassName}`}>
        {title ? title : information.title}
      </h1>
      <p className={`card__description ${descriptionClassName}`}>
        {description ? description : information.description}
      </p>
    </div>
  );
};
