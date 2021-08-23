import { useState } from "react";
import ImageGrid from "../components/grid/ImageGrid";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import UploadForm from "../components/Upload/UploadForm";

function Dashboard() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {
        selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      }
    </>
  );
}

export default Dashboard;
