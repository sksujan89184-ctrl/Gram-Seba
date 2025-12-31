import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, TrendingUp, CheckCircle2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Bid {
  id: number;
  workerName: string;
  workerId: string;
  originalPrice: number;
  bidPrice: number;
  justification: string;
  rating: number;
  jobsCompleted: number;
  timestamp: string;
  status: "pending" | "accepted" | "rejected";
}

export default function BidManagement() {
  const { toast } = useToast();
  const [bids, setBids] = useState<Bid[]>([
    {
      id: 1,
      workerName: "আব্দুল করিম",
      workerId: "W001",
      originalPrice: 500,
      bidPrice: 500,
      justification: "আমি এই কাজ দ্রুত করতে পারি। দক্ষতা আছে।",
      rating: 4.8,
      jobsCompleted: 45,
      timestamp: "2 মিনিট আগে",
      status: "pending"
    },
    {
      id: 2,
      workerName: "ফাহিম আহমেদ",
      workerId: "W002",
      originalPrice: 500,
      bidPrice: 800,
      justification: "আপনার কাজটিতে অতিরিক্ত পরিষ্কারের প্রয়োজন, তাই আমি ৮০০ টাকা চাইছি। এটি নিশ্চিত করবে যে কাজ নিখুঁত হবে।",
      rating: 4.9,
      jobsCompleted: 62,
      timestamp: "5 মিনিট আগে",
      status: "pending"
    },
    {
      id: 3,
      workerName: "সুমাইয়া বেগম",
      workerId: "W003",
      originalPrice: 500,
      bidPrice: 650,
      justification: "আমার অভিজ্ঞতা অনুযায়ী এই ধরনের কাজে ৬৫০ টাকা লাগে। কিন্তু মান নিশ্চিত করব।",
      rating: 4.7,
      jobsCompleted: 38,
      timestamp: "8 মিনিট আগে",
      status: "pending"
    }
  ]);

  const [selectedBid, setSelectedBid] = useState<Bid | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [negotiationMessage, setNegotiationMessage] = useState("");

  const handleAcceptBid = (bidId: number) => {
    setBids(bids.map(b => b.id === bidId ? { ...b, status: "accepted" } : b));
    toast({
      title: "বিড অ্যাক্সেপ্ট করা হয়েছে",
      description: `চূড়ান্ত মূল্য নির্ধারিত হয়েছে। কাজ শুরু করার জন্য প্রস্তুত হন।`,
    });
  };

  const handleRejectBid = (bidId: number) => {
    setBids(bids.map(b => b.id === bidId ? { ...b, status: "rejected" } : b));
  };

  const handleSendMessage = () => {
    if (negotiationMessage.trim()) {
      toast({
        title: "বার্তা পাঠানো হয়েছে",
        description: `আপনার বার্তা ওয়ার্কারকে পাঠানো হয়েছে।`,
      });
      setNegotiationMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">সেলাম পরিষ্কার - সব বিডস</h1>
          <p className="text-muted-foreground">৩ টি বিড পেয়েছেন। আপনার পছন্দের ওয়ার্কার বেছে নিন।</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">সকল বিড (৩)</TabsTrigger>
            <TabsTrigger value="within-budget">বাজেটের মধ্যে (১)</TabsTrigger>
            <TabsTrigger value="counter">কাউন্টার মূল্য (২)</TabsTrigger>
            <TabsTrigger value="accepted">গ্রহণ করা (০)</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {bids.map((bid) => (
              <Card key={bid.id} className={`overflow-hidden transition-all ${bid.status === "accepted" ? "border-green-500 border-2" : ""}`}>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4 flex-1">
                        <Avatar className="h-12 w-12 border-2">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${bid.workerId}`} />
                          <AvatarFallback>{bid.workerName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{bid.workerName}</h3>
                          <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
                            <span>⭐ {bid.rating}</span>
                            <span>• {bid.jobsCompleted} কাজ সম্পন্ন</span>
                            <span>• {bid.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      {bid.status === "accepted" && (
                        <Badge className="bg-green-500 ml-4">গৃহীত</Badge>
                      )}
                      {bid.status === "rejected" && (
                        <Badge variant="destructive" className="ml-4">প্রত্যাখ্যাত</Badge>
                      )}
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg mb-4 border-l-4 border-primary">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">মূল্য প্রস্তাব:</span>
                        <span className="text-2xl font-bold text-primary">৳ {bid.bidPrice}</span>
                        {bid.bidPrice > 500 && (
                          <span className="text-xs text-orange-600 font-semibold ml-2 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" /> বাজেটের চেয়ে ৳{bid.bidPrice - 500} বেশি
                          </span>
                        )}
                        {bid.bidPrice === 500 && (
                          <span className="text-xs text-green-600 font-semibold ml-2">✓ আপনার বাজেটের মধ্যে</span>
                        )}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed italic">
                        "{bid.justification}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {bid.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-primary" onClick={() => { setSelectedBid(bid); setChatOpen(true); }}>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            আলোচনা করুন
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleAcceptBid(bid.id)}>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            এই বিড গ্রহণ করুন
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleRejectBid(bid.id)}>
                            <X className="w-4 h-4 mr-2" />
                            প্রত্যাখ্যান করুন
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="within-budget" className="space-y-4">
            {bids.filter(b => b.bidPrice === 500).map((bid) => (
              <Card key={bid.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{bid.workerName}</h3>
                      <p className="text-sm text-muted-foreground">⭐ {bid.rating} • {bid.jobsCompleted} কাজ</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">৳{bid.bidPrice}</div>
                      <Badge className="mt-2">আপনার বাজেট</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="counter" className="space-y-4">
            {bids.filter(b => b.bidPrice > 500).map((bid) => (
              <Card key={bid.id} className="overflow-hidden border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">{bid.workerName}</h3>
                      <p className="text-sm text-muted-foreground mb-3">⭐ {bid.rating} • {bid.jobsCompleted} কাজ</p>
                      <p className="text-sm italic text-foreground">"{bid.justification}"</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">৳{bid.bidPrice}</div>
                      <span className="text-xs text-orange-600">+৳{bid.bidPrice - 500}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Negotiation Chat Modal */}
      {chatOpen && selectedBid && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{selectedBid.workerName} এর সাথে আলোচনা</CardTitle>
                <button onClick={() => setChatOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-3 rounded-lg max-h-64 overflow-y-auto space-y-3">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                    <p className="text-sm">আমার বাজেট ৫০০ টাকা। এটা সম্ভব?</p>
                    <span className="text-xs opacity-75">আপনি</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-card border p-3 rounded-lg max-w-xs">
                    <p className="text-sm">আমার অভিজ্ঞতা অনুযায়ী, এই ধরনের কাজে ৮০০ টাকা দরকার। কিন্তু আমরা কথা বলে দেখতে পারি।</p>
                    <span className="text-xs text-muted-foreground">{selectedBid.workerName}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Textarea 
                  placeholder="আপনার বার্তা লিখুন..."
                  value={negotiationMessage}
                  onChange={(e) => setNegotiationMessage(e.target.value)}
                  className="min-h-20"
                />
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary" onClick={handleSendMessage}>পাঠান</Button>
                  <Button variant="outline" onClick={() => setChatOpen(false)}>বন্ধ করুন</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
