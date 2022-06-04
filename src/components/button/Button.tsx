import "./button.css";
export interface ButtonProps {
  /**
   * The text to display in the button
   */
  text: string;
  /**
   * The type of button to display
   */
  type: "button" | "submit" | "reset";
  /**
   * Action to perform when the button is clicked
   */
  onClick: () => void;
  /**
   * The size of the button
   */
  size?: "small" | "medium" | "large";
  /**
   * The color of the button
   */
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  /**
   * The shape of the button
   */
  shape?: "pill" | "rounded" | "square";
  /**
   * Font color of the button
   */
  fontColor?: string;
  /**
   * Font size of the button
   */
  fontSize?: "small" | "medium" | "large";
  /**
   * Class name to apply to the button
   */
  className?: string;
  /**
   * Style to apply to the button
   */
  style?: React.CSSProperties;

  [key: string]: any;
}

/**
 * A button component
 */

export const Button = ({
  className,
  color = "primary",
  fontColor = "#fff",
  fontSize = "medium",
  shape = "square",
  size = "small",
  style,
  text,
  type = "button",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${color} ${size} ${shape} ${className} text-${fontSize}`}
      style={{ ...style, color: fontColor }}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
