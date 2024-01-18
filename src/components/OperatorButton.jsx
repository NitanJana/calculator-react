import PropTypes from 'prop-types';

const OperatorButton = ({ operator }) => {
  return <button className="text-lg text-teal-900 rounded-full bg-cyan-100">{operator}</button>;
};

OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
};

export default OperatorButton;
