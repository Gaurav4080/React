// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
function App() {
  return (
    <>
    <NavBar title="TextCleaner"/>
    <div className="container my-3">
      <TextBox heading="Enter the Text to Auto Analyse Below!!"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;