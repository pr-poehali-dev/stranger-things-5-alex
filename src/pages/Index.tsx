import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Index = () => {
  const characters = [
    { name: "Alex", role: "Max's Brother", status: "Leader" },
    { name: "Mike", role: "The Leader", status: "Active" },
    { name: "Eleven", role: "The Powered", status: "Active" },
    { name: "Dustin", role: "The Brain", status: "Active" },
    { name: "Will", role: "The Survivor", status: "Active" },
    { name: "Lucas", role: "The Realist", status: "Active" },
    { name: "Nancy", role: "The Fighter", status: "Active" },
    { name: "Steve", role: "The Protector", status: "Active" },
    { name: "Robin", role: "The Decoder", status: "Active" }
  ];

  const episodes = [
    {
      number: 1,
      title: "The Meeting at WSJQ",
      description: "The team gathers at the secret radio station to plan their next move. Tension fills the air as they discuss Max's condition."
    },
    {
      number: 2,
      title: "Alex's Warning",
      description: "Alex brings devastating news: soldiers are taking kids from schools. The team must act fast to save them."
    },
    {
      number: 3,
      title: "The Rescue Mission",
      description: "Armed with determination and their unique skills, the team infiltrates the military compound to rescue the kidnapped children."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] via-[#1a0a1a] to-[#0A0A0F]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/6edc5a7a-333c-4751-99b7-b8900707379b/files/0b41704f-0ea3-4476-9589-a1afd9b2668d.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
          
          <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
            <div className="mb-8 inline-block">
              <Badge className="bg-destructive/20 text-destructive border-destructive/50 text-sm px-4 py-2 animate-glow-pulse">
                CRITICAL MISSION
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-glow">
              The <span className="text-destructive">Awakening</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              While Max lies in a coma, fighting her own battle in the shadows, 
              her brother Alex must lead the team through their darkest hour yet.
            </p>

            <Alert className="bg-destructive/10 border-destructive/50 glow-red animate-scale-in backdrop-blur-sm">
              <Icon name="AlertTriangle" className="h-5 w-5 text-destructive" />
              <AlertDescription className="text-base md:text-lg">
                <strong className="text-destructive">Alex's Warning:</strong> "We have a problem. 
                The soldiers... they're taking kids from school. We have to save them."
              </AlertDescription>
            </Alert>

            <div className="mt-12 flex gap-4 justify-center">
              <Icon name="Radio" className="h-8 w-8 text-secondary animate-glow-pulse" />
              <span className="text-muted-foreground text-sm">Broadcasting from WSJQ</span>
            </div>
          </div>
        </section>

        <section id="characters" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                The <span className="text-secondary">Team</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                United by friendship. Driven by purpose.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character, index) => (
                <Card 
                  key={character.name}
                  className="bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:glow-purple transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                      <p className="text-muted-foreground text-sm">{character.role}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={character.name === "Alex" ? "bg-destructive/20 text-destructive border-destructive" : "bg-secondary/20 text-secondary border-secondary"}
                    >
                      {character.status}
                    </Badge>
                  </div>
                  
                  <div className="h-40 bg-gradient-to-br from-secondary/20 to-destructive/20 rounded-lg flex items-center justify-center">
                    <Icon name="User" className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="episodes" className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-destructive">Episodes</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The story unfolds in the darkness...
              </p>
            </div>

            <div className="space-y-6">
              {episodes.map((episode, index) => (
                <Card 
                  key={episode.number}
                  className="bg-card/50 backdrop-blur-sm border-border/50 p-8 hover:glow-red transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center border-2 border-destructive">
                        <span className="text-2xl font-black text-destructive">{episode.number}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3">{episode.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{episode.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Alert className="bg-secondary/10 border-secondary/50 inline-block">
                <Icon name="Play" className="h-5 w-5 text-secondary" />
                <AlertDescription>
                  More episodes coming soon...
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border/30">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Zap" className="h-5 w-5 text-secondary" />
              <span className="font-semibold">The Awakening</span>
            </div>
            <p className="text-sm">A Stranger Things inspired story</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;