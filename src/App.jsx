import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import UtilityButton from './components/UtilityButton';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 p-8">
      <main className="grid grid-cols-[repeat(4,minmax(auto,6rem))] grid-rows-[minmax(6rem,auto)_repeat(5,minmax(auto,4rem))] gap-x-4 gap-y-6 rounded-xl bg-cyan-300 p-6">
        <div className="flex flex-col items-end justify-around col-span-4 gap-4 p-4 rounded-xl bg-cyan-100">
          <div className="text-lg font-medium text-teal-900 break-all">123 *</div>
          <div className="text-3xl font-medium text-teal-900 break-all">45645634538776456</div>
        </div>
        <UtilityButton utility="DELETE" />
        <UtilityButton utility="CLEAR" />
        <OperationButton operation="÷" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <OperationButton operation="*" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperationButton operation="-" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperationButton operation="+" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
        <button className="text-lg text-teal-900 rounded-full bg-cyan-100">=</button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
