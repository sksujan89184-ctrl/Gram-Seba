import Navbar from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Clock, Filter } from "lucide-react";
import { Link } from "wouter";

const mockJobs = [
  {
    id: 1,
    title: "Fix leaking kitchen sink",
    location: "Mirpur, Dhaka",
    budget: "$20 - $30",
    time: "2 hours ago",
    description: "Water is dripping from the pipe connection under the sink. Need it fixed asap.",
    category: "Plumbing",
    bids: 5,
    status: "Open"
  },
  {
    id: 2,
    title: "Full apartment deep cleaning",
    location: "Gulshan, Dhaka",
    budget: "$50 - $80",
    time: "4 hours ago",
    description: "3 bedroom apartment needs deep cleaning before move-in. Includes windows and floors.",
    category: "Cleaning",
    bids: 12,
    status: "Urgent"
  },
  {
    id: 3,
    title: "Install ceiling fan and lights",
    location: "Dhanmondi, Dhaka",
    budget: "$15 - $25",
    time: "5 hours ago",
    description: "Need to install 2 ceiling fans and 4 LED tube lights in a new office space.",
    category: "Electrical",
    bids: 3,
    status: "Open"
  },
  {
    id: 4,
    title: "Move furniture to new house",
    location: "Uttara, Dhaka",
    budget: "$100 - $150",
    time: "1 day ago",
    description: "Moving a sofa, bed, and wardrobe to 4th floor apartment (no lift).",
    category: "Moving",
    bids: 8,
    status: "Open"
  },
  {
    id: 5,
    title: "Garden trimming and cleanup",
    location: "Banani, Dhaka",
    budget: "$40",
    time: "1 day ago",
    description: "Overgrown bushes need trimming and lawn mowing.",
    category: "Gardening",
    bids: 2,
    status: "Open"
  }
];

export default function WorkerFeed() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <Filter className="w-5 h-5" /> Filters
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Distance</label>
              <Slider defaultValue={[10]} max={50} step={1} />
              <div className="text-xs text-muted-foreground text-right">Within 10 km</div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Budget Range</label>
              <div className="flex gap-2">
                <Input type="number" placeholder="Min" className="h-8 text-sm" />
                <Input type="number" placeholder="Max" className="h-8 text-sm" />
              </div>
            </div>
            
            <Button className="w-full" variant="outline">Apply Filters</Button>
          </aside>

          {/* Job Feed */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold font-heading">Available Jobs</h1>
              <div className="relative w-full max-w-xs hidden sm:block">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search jobs..." className="pl-9" />
              </div>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <Card key={job.id} className="hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2 items-center">
                          <Badge variant="outline" className="rounded-sm bg-muted/50">{job.category}</Badge>
                          {job.status === "Urgent" && <Badge variant="destructive" className="rounded-sm">Urgent</Badge>}
                        </div>
                        <span className="font-bold text-lg text-primary">{job.budget}</span>
                      </div>
                      
                      <Link href={`/jobs/${job.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:underline cursor-pointer">{job.title}</h3>
                      </Link>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-foreground">{job.bids}</span> Bids
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 sm:pt-6 sm:pl-0 flex flex-row sm:flex-col justify-end gap-2 border-t sm:border-t-0 sm:border-l bg-muted/10 sm:bg-transparent">
                       <Link href={`/jobs/${job.id}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90">View & Bid</Button>
                       </Link>
                       <Button variant="outline" className="w-full">Save</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
