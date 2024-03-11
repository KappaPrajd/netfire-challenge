import SectionBadge from '../../components/SectionBadge';
import s from './ExampleSection.module.css';

const ExampleSection = () => {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.badge}>
          <SectionBadge>Example section</SectionBadge>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
