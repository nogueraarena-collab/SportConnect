import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewModeToggle } from "@/components/ViewModeToggle";
import heroImage from "@/assets/hero-exercise.jpg";

const Index = () => {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const navigate = useNavigate();

  const getMaxWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-7xl";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      <div className={`mx-auto transition-all duration-300 ${getMaxWidth()}`}>
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-border">
          <div className="bg-foreground text-background px-4 py-2 rounded font-bold">
            LOGO
          </div>
          <Button onClick={() => navigate("/auth")} variant="outline">
            ACCEDER
          </Button>
        </header>

        {/* Hero Section */}
        <main className="px-6">
          <div className="text-center py-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              ¡Haz amigos<br />practicando deportes!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conecta con personas que comparten tu pasión por el deporte.<br />
              De forma segura y confiable.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-10 py-8 flex items-center gap-4">
                <Apple className="h-16 w-16" />
                <div className="text-left">
                  <div className="text-sm">Descarga en</div>
                  <div className="text-2xl font-bold">App Store</div>
                </div>
              </Button>
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-10 py-8 flex items-center gap-4">
                <Smartphone className="h-16 w-16" />
                <div className="text-left">
                  <div className="text-sm">Descarga en</div>
                  <div className="text-2xl font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto my-12">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Grupo de atletas corriendo al atardecer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-foreground">Encuentra compañeros</h3>
              <p className="text-sm text-muted-foreground">
                Conecta con deportistas cerca de ti
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-2xl">📅</span>
              </div>
              <h3 className="font-bold text-foreground">Organiza actividades</h3>
              <p className="text-sm text-muted-foreground">
                Planifica o únete espontáneamente
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-foreground">Seguridad garantizada</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de referencias y verificación
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-2xl">❤️</span>
              </div>
              <h3 className="font-bold text-foreground">Comunidad deportiva</h3>
              <p className="text-sm text-muted-foreground">
                Más que deporte, una red social
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
