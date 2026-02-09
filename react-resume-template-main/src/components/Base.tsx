import { FC, ReactNode, memo } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Universal Primary Button
 * Orange background, white text
 * Used across Hero, Portfolio, Contact, etc.
 */
export const PrimaryButton: FC<PrimaryButtonProps> = memo(
  ({ children, href, onClick, className = "" }) => {
    const Component: any = href ? "a" : "button";

    return (
      <Component
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primaryDark focus:outline-none ${className}`}
      >
        {children}
      </Component>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

/**
 * Base component (kept for future shared layout utilities)
 */
const Base: FC = memo(() => {
  return null;
});

Base.displayName = "Base";
export default Base;
