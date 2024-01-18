import PropTypes from 'prop-types';

const DigitButton = ({ digit }) => {
  return <button className="rounded-full bg-cyan-100 text-lg text-teal-900">{digit}</button>;
};

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
};

export default DigitButton;
