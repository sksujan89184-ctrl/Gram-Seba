import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import heroImage from "@assets/generated_images/hero_image_handyman.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/20">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span>Trusted by 10,000+ neighbors</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-foreground">
              Expert Help for Your <span className="text-primary">Everyday Needs</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              From quick repairs to major renovations, GramSeba connects you with verified local professionals who get the job done right. Secure payments, guaranteed quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/post-job">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg bg-primary hover:bg-primary/90 hover:scale-105 transition-all">
                  Post a Job for Free
                </Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 transition-all">
                  Become a Worker
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Verified Pros</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Secure Escrow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-in slide-in-from-right-5 duration-700 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/3] group">
              <img 
                src={heroImage} 
                alt="Professional Handyman" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="font-bold text-foreground">John Doe sent a bid</p>
                  <p className="text-sm text-muted-foreground">"I can fix this for $45. Available now."</p>
                </div>
                <Button size="sm" className="ml-auto rounded-full">View</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
