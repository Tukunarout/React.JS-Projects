import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <div className="container my-3">
        <TextForm heading="Enter you text to analyze"/>
      </div>
      
      
    </>
  );
}

export default App;
