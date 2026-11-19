import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Home from "@/pages/Home"
import Resume from "@/pages/Resume"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
