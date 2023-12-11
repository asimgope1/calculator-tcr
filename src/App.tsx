import DetailsForm from "./profile/DetailsForm";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white-100 min-h-screen flex flex-col ">
        <DetailsForm onSubmit={() => console.log("k")} />
      </div>

      <div className="bg-gray-400 text-white p-4 lg:hidden">working</div>
    </>
  );
}

export default App;
