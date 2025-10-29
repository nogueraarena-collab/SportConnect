import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";
import { Users, Calendar, Shield } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Personas practicando deportes juntos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-in fade-in duration-1000">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Encuentra tu</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Compañero Deportivo
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Conecta con deportistas, practica en comunidad, construye confianza
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6"
            >
              Comenzar Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              Conocer Más
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-md border border-border/50">
              <Users className="w-8 h-8 text-primary" />
              <div className="text-3xl font-bold text-foreground">+1000</div>
              <div className="text-sm text-muted-foreground">Deportistas Activos</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-md border border-border/50">
              <Calendar className="w-8 h-8 text-secondary" />
              <div className="text-3xl font-bold text-foreground">+500</div>
              <div className="text-sm text-muted-foreground">Actividades Semanales</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-md border border-border/50">
              <Shield className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Verificación Segura</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
