import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, DollarSign, ShieldCheck, Check, TrendingUp } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function JobDetails() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [bidPrice, setBidPrice] = useState("");
  const [bidNotes, setBidNotes] = useState("");

  const handleSubmitBid = () => {
    if (!bidPrice || !bidNotes) {
      toast({
        title: "দয়া করে সব তথ্য পূরণ করুন",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "বিড সফলভাবে জমা দেওয়া হয়েছে",
      description: `আপনার বিড ৳${bidPrice} কাস্টমারের কাছে পাঠানো হয়েছে।`,
    });
    setBidPrice("");
    setBidNotes("");
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-4 pl-0 hover:pl-2 transition-all" onClick={() => setLocation("/jobs")}>
          &larr; কাজের তালিকায় ফিরুন
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Job Details Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="border-b bg-card pb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Badge variant="outline" className="mb-3">প্লাম্বিং</Badge>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">রসুনের বাজার - ঘর পরিষ্কার</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> মিরপুর, ঢাকা
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> ২ ঘন্টা আগে পোস্ট করা
                      </div>
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <ShieldCheck className="w-4 h-4" /> যাচাইকৃত গ্রাহক
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-muted-foreground mb-1">বাজেট</div>
                    <div className="text-2xl font-bold text-primary">৳ ৫০০</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">বর্ণনা</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    আমার ঘর ভালোভাবে পরিষ্কার করা দরকার। মেঝে ধোয়া, আসবাবপত্র পরিষ্কার, ঝুল অপসারণ সবকিছু করতে হবে। দ্রুত এবং নির্ভরযোগ্য কাজের জন্য অভিজ্ঞ ব্যক্তি খুঁজছি।
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">ছবি</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-md bg-muted flex items-center justify-center text-muted-foreground text-xs">ছবি ১</div>
                    <div className="aspect-square rounded-md bg-muted flex items-center justify-center text-muted-foreground text-xs">ছবি ২</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3 border-b">
                <CardTitle className="flex justify-between items-center">
                  <span>সকল বিডস (৫টি)</span>
                  <Link href="/bid-management">
                    <Button size="sm" variant="outline">সব দেখুন</Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {/* Within Budget Bid */}
                <div className="flex items-start gap-4 p-4 rounded-lg border bg-green-50 border-green-200">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=w1" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold">আব্দুল করিম</h4>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      ⭐ 4.8 • 45 কাজ সম্পন্ন
                    </div>
                    <p className="text-xs mt-2 italic text-foreground">"আমি এই কাজ দ্রুত করতে পারি। দক্ষতা আছে।"</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">৳500</div>
                    <Badge className="mt-2 bg-green-600">আপনার বাজেট</Badge>
                  </div>
                </div>

                {/* Counter Bids */}
                <div className="flex items-start gap-4 p-4 rounded-lg border bg-orange-50 border-orange-200">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=w2" />
                    <AvatarFallback>FA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold">ফাহিম আহমেদ</h4>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      ⭐ 4.9 • 62 কাজ সম্পন্ন
                    </div>
                    <p className="text-xs mt-2 italic text-foreground">"আপনার কাজটিতে অতিরিক্ত পরিষ্কারের প্রয়োজন, তাই আমি ৮০০ টাকা চাইছি। এটি নিশ্চিত করবে যে কাজ নিখুঁত হবে।"</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-orange-600">৳800</div>
                    <span className="text-xs text-orange-600 flex items-center gap-1 justify-end">
                      <TrendingUp className="w-3 h-3" /> +৳300
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border bg-orange-50 border-orange-200">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=w3" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold">সুমাইয়া বেগম</h4>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      ⭐ 4.7 • 38 কাজ সম্পন্ন
                    </div>
                    <p className="text-xs mt-2 italic text-foreground">"আমার অভিজ্ঞতা অনুযায়ী এই ধরনের কাজে ৬৫০ টাকা লাগে। কিন্তু মান নিশ্চিত করব।"</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-orange-600">৳650</div>
                    <span className="text-xs text-orange-600 flex items-center gap-1 justify-end">
                      <TrendingUp className="w-3 h-3" /> +৳150
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Action Column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-primary/20">
              <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="text-lg">বিড করুন</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">আপনার প্রস্তাবিত মূল্য (৳)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="number" 
                      placeholder="এখানে টাকা লিখুন" 
                      className="pl-9 font-bold text-lg" 
                      value={bidPrice}
                      onChange={(e) => setBidPrice(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">💡 আপনি বাজেটের চেয়ে বেশি দামও দিতে পারেন এবং কারণ দিতে পারেন।</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">কেন আপনি এই কাজের জন্য সেরা?</label>
                  <Textarea 
                    placeholder="আপনার অভিজ্ঞতা এবং কাজ করার যোগ্যতা ব্যাখ্যা করুন..."
                    className="h-24 resize-none" 
                    value={bidNotes}
                    onChange={(e) => setBidNotes(e.target.value)}
                  />
                </div>

                <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-md flex gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>অর্থ প্রদান নিরাপদে এসক্রোতে রাখা হয় কাজ সম্পন্ন হওয়া পর্যন্ত। অ্যাডমিন ফি (১০%) প্রযোজ্য।</span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg" onClick={handleSubmitBid}>
                  বিড জমা দিন
                </Button>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
