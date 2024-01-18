import PropTypes from 'prop-types';

const OperationButton = ({ operation }) => {
  return <button className="text-lg text-teal-900 rounded-full bg-cyan-100">{operation}</button>;
};

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
};

export default OperationButton;
