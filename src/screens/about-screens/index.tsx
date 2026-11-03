import { useEffect } from "react";
import { useCounter } from "../../stores/useCounter";
import { TodoApi } from "@/services/resources";
import { Button } from "@/components/ui/button";

function AboutScreens() {
  const { count, decrement, increment } = useCounter((state) => state);
  const handleReset = () => {
    useCounter.setState({ count: 0 });
  };
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
        <Button
          variant="default"
          onClick={ increment}
          disabled={count === 5}
        >
          Increment
        </Button>
        <Button
          variant="outline"
          onClick={ handleReset}
        >
          Reset
        </Button>
        <Button
            variant="destructive"
          onClick={() => decrement()}
          disabled={count === -5}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
export default AboutScreens;
