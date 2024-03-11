import { PropsWithChildren } from 'react';

import s from './SectionBadge.module.css';

const SectionBadge = ({ children }: PropsWithChildren) => {
  return <div className={s.container}>{children}</div>;
};

export default SectionBadge;
