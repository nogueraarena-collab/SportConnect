import { Card, CardContent } from "@/components/ui/card";
import featureSpontaneous from "@/assets/feature-spontaneous.jpg";
import featureTrust from "@/assets/feature-trust.jpg";
import featureCommunity from "@/assets/feature-community.jpg";

const Features = () => {
  const features = [
    {
      image: featureSpontaneous,
      title: "Actividades Flexibles",
      description: "Encuentra compañeros para jugar en unas horas o planifica actividades con días de anticipación.",
      gradient: "from-primary to-primary-glow",
    },
    {
      image: featureTrust,
      title: "Seguridad y Confianza",
      description: "Sistema de referencias, valoraciones y sellos de asistencia que garantizan experiencias seguras.",
      gradient: "from-secondary to-secondary/80",
    },
    {
      image: featureCommunity,
      title: "Comunidad Deportiva",
      description: "Únete a una comunidad vibrante de deportistas que comparten tu pasión por mantenerse activos.",
      gradient: "from-accent to-accent/80",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SportConnect?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La plataforma que hace que practicar deporte sea más fácil, seguro y social
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
