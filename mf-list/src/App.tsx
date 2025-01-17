import { useState, useEffect } from "react";
import "./App.css";

import { createClient } from "@supabase/supabase-js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { onNavigate } from "useNavigate/useNavigate";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

function App() {
  const [taskList, setTaskList] = useState([]);
  const { navigate } = onNavigate();
  useEffect(() => {
    getTaskList();
  }, []);

  async function getTaskList() {
    const { data } = await supabase.from("todos").select();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setTaskList(data);
  }

  return (
    <>
      <h1>Tasks List</h1>
      <div className="card">
        <ul>
          {taskList.map((country: any) => (
            <li key={country.id}>{country?.title}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <button>Create task</button>
        <button onClick={() => navigate({ to: "/" })}>Go to main page</button>
      </div>
    </>
  );
}

export default App;
