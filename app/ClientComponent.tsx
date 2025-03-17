'use client'; // Marks this component as a client component

import { addTodo } from "@/app/actions/todos"
import { useState } from "react";
 
interface ClientComponentProps {
  data: string;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ data }) => {
  const [text, setText] = useState<string>("init")

  const addTodoHandler = addTodo.bind(null, data)
  return (
    <div onClick={async () => {
        const ret = await addTodoHandler()
        setText(ret)
    }}>
      This is a client-side component! Received data: {data}
      <br />
      text: {text}
    </div>
  );
};

export default ClientComponent;
