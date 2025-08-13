import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import img from '../../assets/images/web/bg/bg-web-x2.png';

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ width: 200, height: 200 }} className="loader-wrapper">
        <CircularProgressbar
          value={percentage}
          strokeWidth={1}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransition: 'stroke-dashoffset 0.5s ease 0s',
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#fff',
            trailColor: '#fff',
          })}
        />
      </div>
    </div>
  );
};

export default Loader;
