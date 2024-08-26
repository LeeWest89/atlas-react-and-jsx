// Greeting component
const Greeting = () => {
  const time = new Date().getHours();
  let timeImg = '';
  let message = '';

  // greeting for time of day
  if (time >= 6 && time < 12) {
    timeImg = '/src/assets/day.svg';
    message = 'Good Morning!';
  } else if ( time >= 12 && time < 17) {
    timeImg = '/src/assets/day.svg';
    message = 'Good Afternoon!';
  } else if (time >= 17 && time < 21) {
    timeImg = '/src/assets/evening.svg';
    message = 'Good Evening!';
  } else {
    timeImg = '/src/assets/night.svg';
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