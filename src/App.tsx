import React from 'react';
import logo from './logo.svg';
import './App.css';
import DetailsForm from './profile/DetailsForm';

function App() {
  return (
    <>
    <div className="bg-white-100 min-h-screen flex flex-col items-center">
       <div className="max-w-md w-full mx-4  flex justify-between">
      <div className="w-1/2 pr-2">
        <DetailsForm />
      </div>
      <div className="lg:w-1/2">
        <DetailsForm />
      </div>
      </div>
    
    </div>
    
    <div className="bg-blue-500 text-white p-4 lg:hidden">
    This is a div with Tailwind CSS styles applied.
  </div>
  </>
  );
}

export default App;
