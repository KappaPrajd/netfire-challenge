import GradientText from '@components/GradientText';

import s from './Description.module.css';

const Description = () => {
  return (
    <div className={s.container}>
      <p>
        Lorem
        <GradientText>
          {
            ' ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel '
          }
        </GradientText>
        massa lacinia ultricies.
      </p>
      <p>
        Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi
        vitae libero in nunc sodales.
      </p>
    </div>
  );
};

export default Description;
