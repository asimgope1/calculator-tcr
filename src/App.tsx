import DetailsForm from "./profile/DetailsForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white-100 flex-col items-center justify-center">
        <DetailsForm onSubmit={() => console.log("k")} />
      </div>

     
    </>
  );
}

export default App;
