import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { MailContainer } from "./Components/MailContainer/MailContainer";
import { fetchMail } from "./mailSlice";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.mails);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMail());
    }
  }, [status, dispatch]);
  return (
    <div className="App">
      <MailContainer />
    </div>
  );
}

export default App;
