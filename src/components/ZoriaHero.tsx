import { Button } from "@/components/ui/button";
import spaceBackground from "@/assets/space-background.jpg";

const ZoriaHero = () => {
  const handleGetInTouch = () => {
    window.location.href = "mailto:contact@zoriahealth.com";
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${spaceBackground})` }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 px-6 md:pt-12 md:px-12">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <h1 className="text-xl md:text-2xl font-medium text-space-text">
              Zoria Health
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-start px-6 md:px-12 pb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-space-text leading-tight mb-8">
              Dawn-clear<br />
              decisions for<br />
              nuclear health.
            </h2>
            
            <p className="text-lg md:text-xl text-space-text-muted mb-12 max-w-md leading-relaxed">
              Rapid diagnostics to protect people
              in radiological emergencies.
            </p>

            <Button
              onClick={handleGetInTouch}
              variant="outline"
              size="lg"
              className="border-space-text text-space-text hover:bg-space-text hover:text-space-primary transition-all duration-300 px-8 py-6 text-lg font-medium rounded-lg"
            >
              Get in Touch
            </Button>
          </div>
        </main>

        {/* Decorative Plus Sign */}
        <div className="absolute top-32 right-12 md:top-40 md:right-20 text-space-text text-2xl md:text-3xl font-light">
          +
        </div>
      </div>
    </div>
  );
};

export default ZoriaHero;