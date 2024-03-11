import Badge from './Badge';
import s from './ExampleSection.module.css';

const ExampleSection = () => {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <div className={s.badge}>
          <Badge />
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
