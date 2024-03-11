import { PropsWithChildren } from 'react';

import s from './GradientText.module.css';

const GradientText = ({ children }: PropsWithChildren) => {
  return <span className={s.container}>{children}</span>;
};

export default GradientText;
