import { Twitter, Github, Linkedin } from "lucide-react";
import { SiProducthunt } from "react-icons/si";
import logoImage from "@assets/LogoForHeader_1761119497062.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="Boundier" 
                className="h-8" 
                data-testid="logo-footer" 
              />
            </div>
            <p className="mt-4 text-sm text-foreground">
              You see it. We read it.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="#" 
                className="text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground hover-elevate active-elevate-2 transition-colors"
                data-testid="link-producthunt"
              >
                <SiProducthunt className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-sm">Product</h3>
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
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-sm">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-sm">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover-elevate transition-colors">
                  Cookie Policy
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
