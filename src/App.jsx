import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";

function App() {
  //mounted/ rendered
  //updated
  //destroyed/unmounted
  const [count, setCount] = useState(0);

  useEffect(() => {
    //mounted
    //updated
    console.log("mounted + updated");

    return () => {
      //destroyed
    };
  });

  useEffect(() => {
    //mounted
    console.log("useEffect");
  }, []);

  useEffect(() => {
    //mounted + count updated
    console.log("count modified");
  }, [count]);

  return <Layout />;
}

export default App;
