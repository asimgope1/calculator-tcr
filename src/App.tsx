import DetailsForm from "./profile/DetailsForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white-100 flex-col items-center justify-center">
        <DetailsForm onSubmit={() => console.log("k")} />
      </div>

      <div className="bg-gray-400 text-white p-4  items-center justify-center ">working</div>
    </>
  );
}

export default App;
