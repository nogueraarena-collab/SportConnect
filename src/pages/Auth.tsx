import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES, CITIES_BY_COUNTRY } from "@/data/locations";
import { ViewModeToggle } from "@/components/ViewModeToggle";

const COUNTRY_CODES = [
  { code: "+1", country: "Estados Unidos/Canadá" },
  { code: "+34", country: "España" },
  { code: "+52", country: "México" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brasil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+51", country: "Perú" },
  { code: "+593", country: "Ecuador" },
  { code: "+44", country: "Reino Unido" },
  { code: "+33", country: "Francia" },
  { code: "+49", country: "Alemania" },
];

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [countryCode, setCountryCode] = useState("+34");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const navigate = useNavigate();

  // Calcular los días disponibles según el mes y año seleccionados
  const availableDays = useMemo(() => {
    if (!birthMonth) return 31;
    
    const month = parseInt(birthMonth);
    const year = birthYear ? parseInt(birthYear) : new Date().getFullYear();
    
    // Febrero
    if (month === 2) {
      // Año bisiesto
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      return isLeapYear ? 29 : 28;
    }
    
    // Meses con 30 días
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    
    // Meses con 31 días
    return 31;
  }, [birthMonth, birthYear]);

  // Obtener ciudades según el país seleccionado
  const availableCities = useMemo(() => {
    if (!selectedCountry) return [];
    return CITIES_BY_COUNTRY[selectedCountry.toLowerCase()] || [];
  }, [selectedCountry]);

  const getMaxWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-md";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {/* Logo */}
        <div className="bg-foreground text-background px-6 py-3 rounded-lg font-bold text-xl mb-8">
          LOGO
        </div>

        {/* Auth Card */}
        <div className={`w-full transition-all duration-300 ${getMaxWidth()} bg-card border border-border rounded-lg p-8 space-y-6`}>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">SportConnect</h1>
          <p className="text-muted-foreground">
            {isSignUp 
              ? "Crea tu cuenta y comienza a hacer deporte en compañía"
              : "Accede a tu cuenta"}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-2 bg-muted p-1 rounded-lg">
          <Button
            variant={!isSignUp ? "default" : "ghost"}
            onClick={() => setIsSignUp(false)}
            className="rounded-md"
          >
            Iniciar sesión
          </Button>
          <Button
            variant={isSignUp ? "default" : "ghost"}
            onClick={() => setIsSignUp(true)}
            className="rounded-md"
          >
            Registrarse
          </Button>
        </div>

        {/* Sign In Form */}
        {!isSignUp ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
              />
            </div>

            <div className="text-right">
              <button 
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-primary hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => navigate("/profile")}
            >
              Ingresar
            </Button>
          </div>
        ) : (
          /* Sign Up Form */
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombres</Label>
                <Input id="firstName" placeholder="Escribe tus nombres" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellidos</Label>
                <Input id="lastName" placeholder="Escribe tus apellidos" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Género</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                    <SelectItem value="intersexual">Intersexual</SelectItem>
                    <SelectItem value="no-binario">No binario</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Fecha de nacimiento</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Select value={birthDay} onValueChange={setBirthDay}>
                    <SelectTrigger>
                      <SelectValue placeholder="Día" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      {Array.from({ length: availableDays }, (_, i) => i + 1).map((day) => (
                        <SelectItem key={day} value={day.toString()}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={birthMonth} onValueChange={setBirthMonth}>
                    <SelectTrigger>
                      <SelectValue placeholder="Mes" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      <SelectItem value="1">Enero</SelectItem>
                      <SelectItem value="2">Febrero</SelectItem>
                      <SelectItem value="3">Marzo</SelectItem>
                      <SelectItem value="4">Abril</SelectItem>
                      <SelectItem value="5">Mayo</SelectItem>
                      <SelectItem value="6">Junio</SelectItem>
                      <SelectItem value="7">Julio</SelectItem>
                      <SelectItem value="8">Agosto</SelectItem>
                      <SelectItem value="9">Septiembre</SelectItem>
                      <SelectItem value="10">Octubre</SelectItem>
                      <SelectItem value="11">Noviembre</SelectItem>
                      <SelectItem value="12">Diciembre</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={birthYear} onValueChange={setBirthYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Año" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      {Array.from(
                        { length: new Date().getFullYear() - 1900 + 1 },
                        (_, i) => new Date().getFullYear() - i
                      ).map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-signup">Email</Label>
              <Input 
                id="email-signup" 
                type="email" 
                placeholder="ejemplo@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Celular (con autenticación)</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px]">
                    {COUNTRY_CODES.map((item) => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Ingresa tu número"
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Recibirás un código de verificación por SMS
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Select value={selectedCountry} onValueChange={(value) => {
                  setSelectedCountry(value);
                }}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px]">
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country.toLowerCase()}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ciudad</Label>
                <Select disabled={!selectedCountry}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder={selectedCountry ? "Selecciona tu ciudad" : "Primero elige país"} />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px]">
                    {availableCities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-signup">Contraseña</Label>
              <Input 
                id="password-signup" 
                type="password" 
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full" size="lg">
              Crear cuenta
            </Button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Auth;
