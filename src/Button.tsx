import { demoButton } from './button.module.css';

interface ButtonProps {
  backgroundColor?: string;
}

export const Button = ({
  backgroundColor,
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor }}
      className={demoButton}
    >
      button1
    </button>
  );
};
