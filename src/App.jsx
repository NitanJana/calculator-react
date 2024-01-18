import { useReducer } from 'react';
import DigitButton from './components/DigitButton';
import OperatorButton from './components/OperatorButton';
import UtilityButton from './components/UtilityButton';
import Footer from './components/Footer';

import { CALC_ACTIONS } from './CONSTANTS';

import './styles/App.css';

function reducer(state, { type, payload }) {
  switch (type) {
    case CALC_ACTIONS.ADD_DIGIT:
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
        currentOperand: `${state.currentOperand ?? ''}${payload.digit}`,
      };
  }
}
const App = () => {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {currentOperand:''});
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 p-8">
      <main className="grid grid-cols-[repeat(4,minmax(auto,5rem))] grid-rows-[minmax(8rem,auto)_repeat(5,minmax(auto,3.5rem))] gap-x-2  gap-y-5 rounded-xl bg-cyan-300 p-6">
        <div className="flex flex-col items-end justify-around col-span-4 gap-4 p-4 rounded-xl bg-cyan-100">
          <div className="text-lg font-medium text-teal-900 break-all">
            {previousOperand} {operator}
          </div>
          <div className="text-3xl font-medium text-teal-900 break-all">{currentOperand}</div>
        </div>
        <UtilityButton utility="CLEAR" />
        <UtilityButton utility="DELETE" />
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
        <button className="text-lg text-teal-900 rounded-full bg-cyan-100">=</button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
