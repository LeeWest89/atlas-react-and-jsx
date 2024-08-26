import dayImg from '/src/assets/day.svg';
import eveningImg from '/src/assets/evening.svg';
import nightImg from '/src/assets/night.svg';

// Greeting component
const Greeting = () => {
  const time = new Date().getHours();
  let timeImg = '';
  let message = '';

  // greeting for time of day
  if (time >= 6 && time < 12) {
    timeImg = dayImg;
    message = 'Good Morning!';
  } else if ( time >= 12 && time < 17) {
    timeImg = dayImg;
    message = 'Good Afternoon!';
  } else if (time >= 17 && time < 21) {
    timeImg = eveningImg;
    message = 'Good Evening!';
  } else {
    timeImg = nightImg;
    message = 'Good Night!';
  }

  // h1
  return (
    <h1 className="greeting">
      <img src={timeImg} alt={message} />
      {message}
    </h1>
  );
};

export default Greeting;