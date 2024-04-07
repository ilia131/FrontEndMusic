import cn from 'classnames';
import { Link } from 'react-router-dom';






export default function NavLink({
   isSelected, 
   isMobile,
   isBanner, 
   href, 
   children,
   ...rest
}) {
    const className = cn(
        rest.className,
        'text-white rounded-md px-3 py-2 font-medium',
        {
           'bg-blue-400' : isSelected,
           'hover:bg-blue-400 hover:text-white' : !isSelected && !isBanner,
           'block text-base' : isMobile,
           'text-sm' : !isMobile,
           'text-gray-300' : isBanner,
        }
    );

    if (!href) {
        return (
            <span className={className} role='button' onClick={rest.onClick}>
                {children}
            </span>
        )
    }

    return (
      <Link className={className} to={href}>
          {children}
      </Link>
    )
}

