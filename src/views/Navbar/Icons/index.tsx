import { IconBaseProps } from 'react-icons';
import { MdAddShoppingCart, MdPerson, MdSearch } from 'react-icons/md';

import StyledIcon from '../../../components/StyledIcon';
import s from './Icons.module.css';

const Icons = () => {
  const iconProps: IconBaseProps = { size: 19, color: '#443b3b' };

  return (
    <div className={s.container}>
      <StyledIcon>
        <MdAddShoppingCart {...iconProps} />
      </StyledIcon>
      <StyledIcon>
        <MdPerson {...iconProps} />
      </StyledIcon>
      <StyledIcon>
        <MdSearch {...iconProps} />
      </StyledIcon>
    </div>
  );
};

export default Icons;
