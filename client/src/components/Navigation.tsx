import { Button } from "@/components/ui/button";
import logoImage from "@assets/LogoForHeader-removebg-preview_1761119896012.png";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="Boundier" 
              className="h-10" 
              data-testid="logo-image" 
            />
          </div>
          
          <div className="hidden items-center gap-6 md:flex">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-foreground hover-elevate transition-colors"
              data-testid="link-how-it-works"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium text-foreground hover-elevate transition-colors"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-sm font-medium text-foreground hover-elevate transition-colors"
              data-testid="link-demo"
            >
              Demo
            </a>
          </div>

          <Button 
            variant="default" 
            size="default"
            data-testid="button-get-started"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
