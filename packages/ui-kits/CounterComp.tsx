import * as React from 'react';
import { useCounter } from "@chakra-ui/counter"
import ButtonTest from './ButtonTest';

export function CounterComp(props: any) {
  const counter = useCounter({
    max: 10,
    min: 0,
    step: 0.1,
  })
 return (
    <div>
      <button onClick={() => counter.increment()}>Increment</button>
      <p>{counter.value}</p>
      <button onClick={() => counter.decrement()}>Decrement</button>
    </div>
  )
}

export default CounterComp;