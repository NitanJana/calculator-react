import PropTypes from 'prop-types';
import { CALC_ACTIONS } from '../CONSTANTS';

const UtilityButton = ({ utility, dispatch }) => {
  
  const utilityAction =
    utility === 'CLEAR' ? CALC_ACTIONS.CLEAR :
    utility === 'DELETE' ? CALC_ACTIONS.DELETE : 
    null;

  return (
    <button
      className="col-span-2 m-1 text-xl font-medium uppercase bg-teal-700 rounded-full text-cyan-100"
      onClick={() => dispatch({ type: utilityAction })}
    >
      {utility}
    </button>
  );
};

UtilityButton.propTypes = {
  utility: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default UtilityButton;
