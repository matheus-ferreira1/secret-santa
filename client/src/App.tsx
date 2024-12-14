import { Toaster } from "./components/ui/toaster";
import { AppRouterProvider } from "./providers/app-providers";

function App() {
  return (
    <>
      <AppRouterProvider />
      <Toaster />
    </>
  );
}

export default App;
