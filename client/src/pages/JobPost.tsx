import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, DollarSign, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function JobPost() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Job Posted Successfully!",
        description: "Workers will be notified and start bidding soon.",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground">Post a New Job</h1>
          <p className="text-muted-foreground mt-2">Describe what you need done and get bids from verified workers.</p>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Be as specific as possible to get accurate bids.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g. Fix leaking pipe in kitchen" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="moving">Moving</SelectItem>
                      <SelectItem value="gardening">Gardening</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="Area / City" className="pl-9" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the issue in detail. What needs to be done? When do you need it?" 
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Estimated Budget</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input type="number" placeholder="0.00" className="pl-9" required />
                </div>
                <p className="text-xs text-muted-foreground">Workers can bid higher or lower than this.</p>
              </div>

              <div className="space-y-2">
                <Label>Photos (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Click to upload photos</p>
                  <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
                </div>
              </div>

            </CardContent>
            <CardFooter className="flex justify-end gap-4 bg-muted/10 py-4">
              <Button type="button" variant="ghost" onClick={() => setLocation("/")}>Cancel</Button>
              <Button type="submit" className="bg-primary min-w-[120px]" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Job"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
