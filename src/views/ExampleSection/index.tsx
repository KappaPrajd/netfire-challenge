import SectionBadge from '@components/SectionBadge';

import Description from './Description';
import s from './ExampleSection.module.css';

const ExampleSection = () => {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.badge}>
          <SectionBadge>Example section</SectionBadge>
        </div>
        <div className={s.description}>
          <Description />
        </div>
        <a className={s.link} href="#">
          See more
        </a>
      </div>
    </section>
  );
};

export default ExampleSection;
