import { PropsWithChildren } from 'react';

import s from './StyledIcon.module.css';

const StyledIcon = ({ children }: PropsWithChildren) => {
  return <div className={s.container}>{children}</div>;
};

export default StyledIcon;
