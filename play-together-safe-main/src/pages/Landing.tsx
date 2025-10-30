import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Heart, Shield, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-border">
        <div className="bg-foreground text-background px-4 py-2 rounded font-bold text-sm">
          LOGO
        </div>
        <Button 
          onClick={() => navigate("/auth")}
          variant="outline"
          className="font-semibold"
        >
          ACCEDER
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              ¡Haz amigos<br />practicando deportes!
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Conecta con personas que comparten tu pasión por el deporte.<br />
              De forma segura y confiable.
            </p>

            {/* Download Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg hover:bg-foreground/90 transition-colors font-semibold"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Descarga en</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg hover:bg-foreground/90 transition-colors font-semibold"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Descarga en</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto px-4 pb-12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img 
              src={heroImage} 
              alt="Personas practicando deporte juntos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Encuentra compañeros</h3>
              <p className="text-sm text-muted-foreground">
                Conecta con deportistas cerca de ti
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Organiza actividades</h3>
              <p className="text-sm text-muted-foreground">
                Planifica o únete espontáneamente
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Seguridad garantizada</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de referencias y verificación
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Comunidad deportiva</h3>
              <p className="text-sm text-muted-foreground">
                Más que deporte, una red social
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 SportConnect. Conectando deportistas.</p>
      </footer>
    </div>
  );
};

export default Landing;
