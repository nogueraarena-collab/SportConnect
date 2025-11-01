import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ViewModeToggle } from "@/components/ViewModeToggle";
import { Pencil, Camera } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const getMaxWidth = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-4xl";
    }
  };

  // Datos de ejemplo (editables)
  const [profileData, setProfileData] = useState({
    firstName: "Luis",
    lastName: "García Pérez",
    username: "usuario_ejemplo",
    gender: "Masculino",
    city: "Madrid",
    country: "España",
    description: "Apasionado por el deporte y la vida activa. Siempre buscando nuevos compañeros para entrenar y disfrutar de actividades al aire libre. ¡El deporte es mejor en compañía!"
  });

  const elements = [
    { id: 1, name: "Agua", icon: "💧" },
    { id: 2, name: "Tierra", icon: "🏔️" },
    { id: 3, name: "Aire", icon: "🌬️" },
    { id: 4, name: "Fuego", icon: "🔥" },
  ];

  const clubs = [
    { id: 1, name: "Club Deportivo A" },
    { id: 2, name: "Club Deportivo B" },
  ];

  const fanClubs = [
    { id: 1, name: "Club Ciudad Norte" },
    { id: 2, name: "Club Wellness Center" },
  ];

  const brands = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Adidas" },
    { id: 3, name: "Puma" },
  ];

  const sports = [
    "Fútbol", "Basketball", "Natación", "Tenis", "Voleibol", "Atletismo",
    "Ciclismo", "Running", "Yoga", "CrossFit", "Boxeo", "Artes Marciales",
    "Escalada", "Surf", "Skateboarding", "Gimnasia", "Golf", "Pádel",
    "Caminar", "Senderismo", "Baile", "Pilates"
  ];

  const badges = [
    { id: 1, name: "Asistencia perfecta", icon: "🏆" },
    { id: 2, name: "Deportista activo", icon: "⭐" },
    { id: 3, name: "Miembro verificado", icon: "✓" },
    { id: 4, name: "Organizador destacado", icon: "🎯" },
    { id: 5, name: "Compañero confiable", icon: "🤝" },
    { id: 6, name: "Entusiasta del deporte", icon: "💪" },
    { id: 7, name: "Mentor deportivo", icon: "📚" },
    { id: 8, name: "Aventurero", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      <div className={`mx-auto transition-all duration-300 ${getMaxWidth()} p-4 md:p-8 space-y-6`}>
        {/* Header con foto y nombres */}
        <Card className="p-6 relative">
          {/* Botón de edición en esquina */}
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <div className="flex flex-col items-center gap-6">
            {/* Foto de perfil centrada */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center text-6xl overflow-hidden border-4 border-border">
                👤
              </div>
              {isEditing && (
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                  variant="secondary"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Información básica - centrada */}
            <div className="w-full max-w-2xl space-y-4">
              <div className="text-center">
                {isEditing ? (
                  <div className="space-y-2">
                    <Input 
                      value={profileData.firstName} 
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      placeholder="Nombre"
                      className="text-center text-2xl font-bold"
                    />
                    <Input 
                      value={profileData.username} 
                      onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                      placeholder="@usuario"
                      className="text-center"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold text-foreground">{profileData.firstName}</h1>
                    <p className="text-muted-foreground">@{profileData.username}</p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">Nombres y Apellidos:</span>
                  {isEditing ? (
                    <Input 
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium">{profileData.firstName} {profileData.lastName}</p>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">Género:</span>
                  {isEditing ? (
                    <Input 
                      value={profileData.gender}
                      onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium">{profileData.gender}</p>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">Ciudad, País:</span>
                  {isEditing ? (
                    <div className="flex gap-2 mt-1">
                      <Input 
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        placeholder="Ciudad"
                      />
                      <Input 
                        value={profileData.country}
                        onChange={(e) => setProfileData({...profileData, country: e.target.value})}
                        placeholder="País"
                      />
                    </div>
                  ) : (
                    <p className="font-medium">{profileData.city}, {profileData.country}</p>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">Última conexión:</span>
                  <p className="font-medium">Hace 2 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <Separator className="my-6" />
          <div>
            <h3 className="font-semibold mb-2">Descripción</h3>
            {isEditing ? (
              <Textarea 
                value={profileData.description}
                onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                className="min-h-[100px]"
              />
            ) : (
              <p className="text-muted-foreground">{profileData.description}</p>
            )}
          </div>
        </Card>

        {/* Elementos Naturales */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Elementos Naturales</h2>
          <div className="flex gap-4 flex-wrap">
            {elements.map((element) => (
              <div key={element.id} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-3xl border-2 border-border">
                  {element.icon}
                </div>
                <span className="text-sm text-muted-foreground">{element.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Clubes y Fan */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-2">Clubes</h2>
            <p className="text-xs text-muted-foreground mb-4">Clubes oficiales de tu ciudad</p>
            <div className="flex gap-3 flex-wrap">
              {clubs.map((club) => (
                <div key={club.id} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold border-2 border-border">
                    {club.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-xs text-center max-w-[80px]">{club.name}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-2">Fan</h2>
            <p className="text-xs text-muted-foreground mb-4">Clubes que sigues en la app</p>
            <div className="flex gap-3 flex-wrap">
              {fanClubs.map((club) => (
                <div key={club.id} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-bold border-2 border-border">
                    ❤️
                  </div>
                  <span className="text-xs text-center max-w-[80px]">{club.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Marcas Deportivas */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Marcas Deportivas</h2>
          <div className="flex gap-4 flex-wrap">
            {brands.map((brand) => (
              <div key={brand.id} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-sm font-bold border-2 border-border">
                  {brand.name}
                </div>
                <span className="text-xs text-muted-foreground">{brand.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Deportes y otras actividades */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Deportes y otras actividades</h2>
          <div className="flex gap-2 flex-wrap">
            {sports.map((sport, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                {sport}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Insignias */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Insignias</h2>
          <div className="flex gap-4 flex-wrap">
            {badges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl border-2 border-border">
                  {badge.icon}
                </div>
                <span className="text-xs text-center max-w-[80px]">{badge.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
