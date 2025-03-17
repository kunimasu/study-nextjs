'use client';

import { useState } from 'react';
import { flushSync } from 'react-dom';

export default function Page() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
 const handleClick = () => {
  flushSync(() => {
     setCount1(count1 + 1);
     setCount2(count2 + 1);
   });
 };

 return (
   <div>
     <h1>Count 1: {count1}</h1>
     <h1>Count 2: {count2}</h1>
     <button onClick={handleClick}>Increment</button>
   </div>
 );
}
