import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const recentJobs = [
    {
      id: 1,
      title: "Fix leaking kitchen sink",
      location: "Mirpur, Dhaka",
      budget: "$20 - $30",
      time: "2 hours ago",
      bids: 5,
      status: "Open"
    },
    {
      id: 2,
      title: "Full apartment deep cleaning",
      location: "Gulshan, Dhaka",
      budget: "$50 - $80",
      time: "4 hours ago",
      bids: 12,
      status: "Urgent"
    },
    {
      id: 3,
      title: "Install ceiling fan and lights",
      location: "Dhanmondi, Dhaka",
      budget: "$15 - $25",
      time: "5 hours ago",
      bids: 3,
      status: "Open"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <ServiceCategories />
        
        {/* Recent Jobs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-2">Recent Job Requests</h2>
                <p className="text-muted-foreground">Workers are bidding on these right now.</p>
              </div>
              <Link href="/jobs">
                <Button variant="ghost" className="text-primary hover:text-primary/80">View All Jobs &rarr;</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={job.status === "Urgent" ? "destructive" : "secondary"}>
                        {job.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">{job.budget}</span>
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2 hover:text-primary cursor-pointer">
                      {job.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pb-3 text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {job.time}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t flex justify-between items-center text-sm">
                    <span className="font-medium text-accent-foreground/80">{job.bids} Bids placed</span>
                    <Button size="sm" variant="outline">Bid Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to get started?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of community members helping each other. Whether you need help or want to earn money, GramSeba is for you.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="font-bold text-primary">
                  Join as Customer
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" className="bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground/10 text-primary-foreground">
                  Join as Worker
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-muted py-12 text-sm text-muted-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 GramSeba Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
