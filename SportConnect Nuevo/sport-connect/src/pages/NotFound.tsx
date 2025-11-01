import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ViewModeToggle } from "@/components/ViewModeToggle";

const NotFound = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Página no encontrada</p>
          <a href="/" className="text-primary underline hover:opacity-80">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
