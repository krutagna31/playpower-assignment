import { ThemeProvider } from "@/context/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <h1>React Shadcn Template</h1>
        <ModeToggle />
      </main>
    </ThemeProvider>
  );
}

export default App;
