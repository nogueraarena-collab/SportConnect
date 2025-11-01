import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewModeToggle } from "@/components/ViewModeToggle";

const ForgotPassword = () => {
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

      <div className={`mx-auto transition-all duration-300 ${getMaxWidth()} flex flex-col items-center justify-center min-h-screen p-4`}>
        {/* Logo */}
        <div className="bg-foreground text-background px-6 py-3 rounded-lg font-bold text-xl mb-8">
          LOGO
        </div>

        {/* Recovery Card */}
        <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Recuperar contraseña</h1>
            <p className="text-muted-foreground">
              Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="correo@ejemplo.com"
              />
            </div>

            <Button className="w-full" size="lg">
              Enviar instrucciones
            </Button>

            <div className="text-center">
              <button 
                onClick={() => navigate("/auth")}
                className="text-sm text-primary hover:underline"
              >
                Volver al inicio de sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
