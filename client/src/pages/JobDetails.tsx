import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, DollarSign, ShieldCheck, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function JobDetails() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-4 pl-0 hover:pl-2 transition-all" onClick={() => setLocation("/jobs")}>
          &larr; Back to Jobs
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Job Details Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="border-b bg-card pb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Badge variant="outline" className="mb-3">Plumbing</Badge>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Fix leaking kitchen sink</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Mirpur, Dhaka
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> Posted 2 hours ago
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <ShieldCheck className="w-4 h-4" /> Verified Customer
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-muted-foreground mb-1">Budget</div>
                    <div className="text-2xl font-bold text-primary">$20 - $30</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Water is dripping from the pipe connection under the sink. It seems to be a loose joint or a worn-out washer. I need someone to come fix it today if possible. Please bring your own tools.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Photos</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-md bg-muted flex items-center justify-center text-muted-foreground text-xs">Photo 1</div>
                    <div className="aspect-square rounded-md bg-muted flex items-center justify-center text-muted-foreground text-xs">Photo 2</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Bids (5)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((bid) => (
                  <div key={bid} className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${bid}`} />
                      <AvatarFallback>W{bid}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold">Worker Name {bid}</h4>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            ⭐ 4.9 • 24 jobs completed
                          </div>
                        </div>
                        <div className="font-bold text-lg">$25</div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        "I can come fix this in 1 hour. I have the necessary tools."
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Action Column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-primary/20">
              <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="text-lg">Place a Bid</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Offer Price ($)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="number" placeholder="25" className="pl-9 font-bold text-lg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Proposal Description</label>
                  <Textarea placeholder="Describe why you are the best fit..." className="h-24 resize-none" />
                </div>

                <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-md flex gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Payment is held securely in escrow until the job is completed. Admin fee (10%) applies.
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Submit Bid
                </Button>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
