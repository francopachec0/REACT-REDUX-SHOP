import { toast, Toaster } from "react-hot-toast";

function App() {

  const handleNotification = () => {
    toast.success("probando de nuevo xd");
  };

  return (
    <div className="container w-full h-full">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container text-center font-semibold">
        <h1>React Redux Ecommerce</h1>
        <button onClick={handleNotification}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
