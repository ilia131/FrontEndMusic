import { ImSpinner3 } from 'react-icons/im'
import cn from 'classnames'







export default function Spinner({sm, md, lg}) {
    const className = cn('animate-spin text-white-300 fill-white-300 mr-2', {
       'w-4 h-4': sm,
       'w-6 h-4 ': md,
       'w-8 h-4': lg,
    });
    

    return (
       <div role='status'>
         <ImSpinner3 className={className} />
         <span className='sr-only'>Loading...</span>
       </div>
    )
}
