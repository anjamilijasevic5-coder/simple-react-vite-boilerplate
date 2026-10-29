import { useEffect } from "react";
import { useCounter } from "../../stores/useCounter";
import { TodoApi } from "@/services/resources";


function AboutScreens() {
  const { count, decrement, increment } = useCounter((state) => state);


  useEffect(() => {
    TodoApi.get()
      .then((response) => {
        console.log("response_from_PostApi", response);
      })
      .catch((error) => {
        console.error("error from PostApi", error);
      });
  }, []);

  return (
    
    <div className="flex flex-col font-medium text-sky-500 gap-4 items-center justify-center min-h-screen bg-slate-200">
      <div className={'text-center font-bold text-2xl md:text-3xl ' + (count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-blue-500')}>should be center! counter: {count}</div>
      {count === 5 && (
        <p className="text-green-600 font-semibold text-sm">You have reached the maximum value (5)!</p>
      )}
      {count === -5 && (
        <p className="text-red-600 font-semibold text-sm">You have reached the minimum value (-5)!</p>
      )}
<div className="flex gap-4">
      <button
        type="button"
        className="bg-slate-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded bg-green-500 border-radius: 6rem;"
        onClick={() => increment()}
        disabled={count === 5}
      >
        Increment
      </button>
        <button
      type="button"
      className="bg-slate-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
      onClick={() => useCounter.setState({ count: 0})} 
    >
      Reset
    </button>
      <button
        type="button"
        className="bg-slate-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded bg-green-500 ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-900'} border-radius: 6rem;"
        onClick={() => decrement()}
        disabled={count === -5}
      >
        Decrement
      </button>
    
  </div>
  </div>
);    

}
export default AboutScreens;
