import { useState } from "react";

function App() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] ?? null);
    console.log(event.target.files);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      console.log("please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("myFile", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("server response: " + JSON.stringify(data, null, 2));
    } catch (err) {
      console.log(`error uploading file: ${err}`);
    }
  };

  return (
    <main className="grid min-h-screen place-content-center">
      <form onSubmit={handleSubmit}>
        <input className="border-2" onChange={handleFileChange} type="file" />
        <button>Upload</button>
      </form>
    </main>
  );
}

export default App;
