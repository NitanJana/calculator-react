import PropTypes from 'prop-types';
import { CALC_ACTIONS } from '../CONSTANTS';

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button
      className="rounded-full bg-cyan-100 text-lg text-teal-900"
      onClick={() => {
        dispatch({ type: CALC_ACTIONS.ADD_DIGIT, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
};

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DigitButton;
