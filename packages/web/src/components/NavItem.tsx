import { MouseEventHandler } from 'react';

interface NavItemProps {
  name: string;
  href?: string;
  onClick?: MouseEventHandler;
}

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <div
      className="flex justify-between hover:opacity-80 cursor-pointer px-2"
      onClick={props.onClick ? props.onClick : undefined}
    >
      <img className="mr-3" src={`/static/${props.name}.svg`} />
      <a
        href={props.href ? props.href : '#'}
        className="hidden lg:block font-extrabold text-white text-lg"
      >
        {props.name}
      </a>
    </div>
  );
};
