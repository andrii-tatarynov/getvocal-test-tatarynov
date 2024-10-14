import { FC } from 'react';
import cn from 'classnames';
import { BsCheck } from 'react-icons/bs';

interface CheckboxProps {
    isCompleted: boolean,
    toggelDone: () => void
}

const Checkbox: FC<CheckboxProps> = ({ isCompleted, toggelDone }) => {
  return (
    <div 
        onClick={toggelDone}
        className={
            cn(
                'border-2 rounded-lg border-lightGrey w-6 h-6 cursor-pointer',
                { 
                    'bg-primary': isCompleted,
                    'border-primary': isCompleted, 
                }
            )
        }
    >
      {isCompleted && <BsCheck size={22} className='text-white'/>}
    </div>
  )
}

export default Checkbox
