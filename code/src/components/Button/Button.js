import propType from 'prop-types';
import { cn } from '../../utils/lib/index';

const Button = ({ asChild, children, name, onClick, className, ...props }) => {
  return (
    <button
      className={cn(
        'rounded bg-hoverBg px-[10px] py-[5px] text-textWhite-primary transition-colors hover:bg-hoverBg/35 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  asChild: propType.bool,
  children: propType.node,
  onClick: propType.func,
  className: propType.string,
  type: propType.oneOf(['button', 'submit', 'reset']),
  ...propType.shape(Button.propTypes),
};

export default Button;
