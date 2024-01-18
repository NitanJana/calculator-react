import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 p-8">
      <main className="grid grid-cols-[repeat(4,minmax(auto,6rem))] grid-rows-[minmax(6rem,auto)_repeat(5,minmax(auto,4rem))] gap-x-4 gap-y-6 rounded-xl bg-cyan-300 p-6">
        <div className="col-span-4 flex flex-col items-end justify-around gap-4 rounded-xl bg-cyan-100 p-4">
          <div className="break-all text-lg font-medium text-teal-900">123 *</div>
          <div className="break-all text-3xl font-medium text-teal-900">45645634538776456</div>
        </div>
        <button className="font- col-span-2 rounded-full bg-teal-500 text-xl font-medium text-cyan-100">DELETE</button>
        <button className="font- col-span-2 rounded-full bg-teal-500 text-xl font-medium text-cyan-100">CLEAR</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">÷</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">7</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">8</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">9</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">*</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">4</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">5</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">6</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">-</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">1</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">2</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">3</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">+</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">.</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">0</button>
        <button className="rounded-full bg-cyan-100 text-lg text-teal-900">=</button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
