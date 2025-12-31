import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wallet, Briefcase, Star, Clock, CheckCircle2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-16 w-16 border-2 border-white shadow-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold font-heading">Welcome back, John</h1>
            <p className="text-muted-foreground">Worker Account • Verified Member</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-primary text-primary-foreground border-none shadow-lg">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 font-medium">Wallet Balance</p>
                <h2 className="text-3xl font-bold mt-1">$1,250.00</h2>
                <div className="flex items-center gap-1 mt-2 text-sm text-green-300">
                  <CheckCircle2 className="w-4 h-4" /> Escrow Secure
                </div>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground font-medium">Active Jobs</p>
                <h2 className="text-3xl font-bold mt-1">3</h2>
                <p className="text-sm text-muted-foreground mt-2">2 In Progress, 1 Review</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground font-medium">Rating</p>
                <h2 className="text-3xl font-bold mt-1">4.8</h2>
                <div className="flex mt-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-4 h-4 ${i <= 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active Jobs</TabsTrigger>
            <TabsTrigger value="bids">My Bids</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
             <Card>
               <CardHeader className="pb-3 border-b">
                 <div className="flex justify-between items-center">
                   <div>
                     <CardTitle className="text-lg">Apartment Cleaning - Gulshan 2</CardTitle>
                     <p className="text-sm text-muted-foreground mt-1">Customer: Sarah Khan</p>
                   </div>
                   <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">In Progress</Badge>
                 </div>
               </CardHeader>
               <CardContent className="pt-4">
                 <div className="flex justify-between items-center text-sm">
                   <div className="space-y-1">
                     <p className="text-muted-foreground">Agreed Price: <span className="font-bold text-foreground">$60</span></p>
                     <p className="text-muted-foreground">Due Date: <span className="font-medium text-foreground">Tomorrow, 10:00 AM</span></p>
                   </div>
                   <Button size="sm">Update Status</Button>
                 </div>
               </CardContent>
             </Card>

             <Card>
               <CardHeader className="pb-3 border-b">
                 <div className="flex justify-between items-center">
                   <div>
                     <CardTitle className="text-lg">AC Repair - Dhanmondi</CardTitle>
                     <p className="text-sm text-muted-foreground mt-1">Customer: Rakib Hasan</p>
                   </div>
                   <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Pending Review</Badge>
                 </div>
               </CardHeader>
               <CardContent className="pt-4">
                 <div className="flex justify-between items-center text-sm">
                   <div className="space-y-1">
                     <p className="text-muted-foreground">Agreed Price: <span className="font-bold text-foreground">$35</span></p>
                     <p className="text-muted-foreground">Status: <span className="font-medium text-foreground">Work Completed</span></p>
                   </div>
                   <Button size="sm" variant="secondary" disabled>Waiting for Approval</Button>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="bids">
            <div className="text-center py-12 text-muted-foreground">
              You have no pending bids. <span className="text-primary underline cursor-pointer">Find jobs to bid on</span>.
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
