import s from './AdvertBar.module.css';

const AdvertBar = () => {
  return (
    <div className={s.container}>
      <p className={s.message}>
        New customers get 15% off! Use code{' '}
        <span className={s.code}>WELCOME15</span>
      </p>
    </div>
  );
};

export default AdvertBar;
