import PropTypes from 'prop-types';
import { CALC_ACTIONS } from '../CONSTANTS';

const OperatorButton = ({ operator, dispatch }) => {
  return (
    <button
      className="rounded-full bg-teal-100 text-lg text-teal-900"
      onClick={() => dispatch({ type: CALC_ACTIONS.ADD_OPERATOR, payload: { operator } })}
    >
      {operator}
    </button>
  );
};

OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default OperatorButton;
