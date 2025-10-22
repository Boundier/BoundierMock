import { SiYoutube } from "react-icons/si";
import logoImage from "@assets/LogoForHeader-removebg-preview_1761119896012.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="Boundier" 
                className="h-10" 
                data-testid="logo-footer" 
              />
            </div>
            <p className="mt-4 text-sm text-foreground">
              You see it. We read it.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://youtube.com/@boundier" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid="link-youtube"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-foreground hover-elevate transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-foreground hover-elevate transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="mailto:boundierofficial@gmail.com" className="text-foreground hover-elevate transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground">
          <p data-testid="text-copyright">
            © {currentYear} Boundier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
