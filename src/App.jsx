import { useReducer } from 'react';
import DigitButton from './components/DigitButton';
import OperatorButton from './components/OperatorButton';
import UtilityButton from './components/UtilityButton';
import Footer from './components/Footer';

import { CALC_ACTIONS } from './CONSTANTS';

import './styles/App.css';

const calculate = ({ currentOperand, previousOperand, operator }) => {
  let previous = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  let result = '';
  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '÷':
      result = previous / current;
      break;
  }
  return result.toString();
};

function reducer(state, { type, payload }) {
  switch (type) {
    //To add digits
    case CALC_ACTIONS.ADD_DIGIT:
      // Adding digit after using equal button
      if (state.overwrite === true) {
        return {
          ...state,
          overwrite: false,
          currentOperand: payload.digit,
        };
      }
      // Multiple leading zeroes not allowed
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      // Multiple decimal points not allowed
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };

    //To add operator
    case CALC_ACTIONS.ADD_OPERATOR:
      if (state.currentOperand === '' && state.previousOperand === '') {
        return state;
      }
      if (state.currentOperand === '') {
        return {
          ...state,
          operator: payload.operator,
        };
      }
      if (state.previousOperand === '') {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: '',
        };
      }
      return {
        ...state,
        previousOperand: calculate(state),
        operator: payload.operator,
        currentOperand: '',
      };

    // To clear everything
    case CALC_ACTIONS.CLEAR:
      return {
        currentOperand: '',
        previousOperand: '',
      };

    // To delete last digit
    case CALC_ACTIONS.DELETE:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    // To calculate using equal button
    case CALC_ACTIONS.EVALUATE:
      return {
        ...state,
        overwrite: true,
        currentOperand: calculate(state),
        operator: '',
        previousOperand: '',
      };
  }
}
const App = () => {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {
    currentOperand: '',
    previousOperand: '',
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 p-8">
      <main className="grid grid-cols-[repeat(4,minmax(auto,5rem))] grid-rows-[minmax(8rem,auto)_repeat(5,minmax(auto,3.5rem))] gap-x-2  gap-y-5 rounded-xl bg-cyan-300 p-6">
        <div className="col-span-4 flex flex-col items-end justify-around gap-4 rounded-xl bg-cyan-100 p-4">
          <div className="break-all text-lg font-medium text-teal-900">
            {previousOperand} {operator}
          </div>
          <div className="break-all text-3xl font-medium text-teal-900">{currentOperand}</div>
        </div>
        <UtilityButton utility="CLEAR" dispatch={dispatch} />
        <UtilityButton utility="DELETE" dispatch={dispatch} />
        <OperatorButton operator="÷" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperatorButton operator="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton operator="-" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton operator="+" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button
          className="rounded-full bg-cyan-100 text-lg text-teal-900"
          onClick={() => {
            dispatch({ type: CALC_ACTIONS.EVALUATE });
          }}
        >
          =
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
