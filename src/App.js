import ImageGrid from "./components/grid/ImageGrid";
import Header from "./components/Header/Header";
import UploadForm from "./components/Upload/UploadForm";

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
