import { PropsWithChildren } from 'react';

import s from './StyledIcon.module.css';

const StyledIcon = ({ children }: PropsWithChildren) => {
  return <button className={s.container}>{children}</button>;
};

export default StyledIcon;
