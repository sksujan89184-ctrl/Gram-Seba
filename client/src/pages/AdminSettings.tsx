import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServiceMinimumPrice {
  id: string;
  category: string;
  minimumPrice: number;
  description: string;
  active: boolean;
}

export default function AdminSettings() {
  const { toast } = useToast();
  const [services, setServices] = useState<ServiceMinimumPrice[]>([
    {
      id: "1",
      category: "ঘর পরিষ্কার",
      minimumPrice: 300,
      description: "এক বেডরুম ঘর পরিষ্কারের ন্যূনতম দাম",
      active: true
    },
    {
      id: "2",
      category: "প্লাম্বিং",
      minimumPrice: 250,
      description: "সাধারণ প্লাম্বিং মেরামতের ন্যূনতম দাম",
      active: true
    },
    {
      id: "3",
      category: "ইলেকট্রিক্যাল",
      minimumPrice: 350,
      description: "ইলেকট্রিক্যাল কাজের ন্যূনতম দাম",
      active: true
    },
    {
      id: "4",
      category: "পেইন্টিং",
      minimumPrice: 500,
      description: "ঘর রং করার ন্যূনতম দাম",
      active: true
    },
    {
      id: "5",
      category: "গার্ডেনিং",
      minimumPrice: 200,
      description: "বাগান পরিচর্যার ন্যূনতম দাম",
      active: false
    }
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<ServiceMinimumPrice | null>(null);

  const handleEdit = (service: ServiceMinimumPrice) => {
    setEditingId(service.id);
    setEditValues(service);
  };

  const handleSave = (id: string) => {
    if (editValues) {
      setServices(services.map(s => s.id === id ? editValues : s));
      toast({
        title: "আপডেট সফল",
        description: `${editValues.category} এর মূল্য আপডেট হয়েছে।`,
      });
      setEditingId(null);
      setEditValues(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValues(null);
  };

  const handleToggle = (id: string) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, active: !s.active } : s
    ));
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">অ্যাডমিন সেটিংস</h1>
          <p className="text-muted-foreground">প্রতিটি সার্ভিসের ন্যূনতম মূল্য নির্ধারণ করুন</p>
        </div>

        <div className="grid gap-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">সক্রিয় সার্ভিস</p>
                  <p className="text-3xl font-bold text-primary">4</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">মোট সার্ভিস</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">গড় ন্যূনতম মূল্য</p>
                  <p className="text-3xl font-bold text-accent">৳ 320</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Table */}
          <Card>
            <CardHeader>
              <CardTitle>সার্ভিস মূল্য তালিকা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>সার্ভিস</TableHead>
                      <TableHead>ন্যূনতম মূল্য (৳)</TableHead>
                      <TableHead>বর্ণনা</TableHead>
                      <TableHead>স্ট্যাটাস</TableHead>
                      <TableHead>অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">
                          {editingId === service.id ? (
                            <Input 
                              value={editValues?.category}
                              onChange={(e) => editValues && setEditValues({...editValues, category: e.target.value})}
                              className="h-8"
                            />
                          ) : (
                            service.category
                          )}
                        </TableCell>
                        <TableCell>
                          {editingId === service.id ? (
                            <Input 
                              type="number"
                              value={editValues?.minimumPrice}
                              onChange={(e) => editValues && setEditValues({...editValues, minimumPrice: parseInt(e.target.value)})}
                              className="h-8 w-24"
                            />
                          ) : (
                            `৳ ${service.minimumPrice}`
                          )}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground max-w-xs">
                          {editingId === service.id ? (
                            <Input 
                              value={editValues?.description}
                              onChange={(e) => editValues && setEditValues({...editValues, description: e.target.value})}
                              className="h-8 text-xs"
                            />
                          ) : (
                            service.description
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={service.active ? "default" : "secondary"}>
                            {service.active ? "সক্রিয়" : "নিষ্ক্রিয়"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {editingId === service.id ? (
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-7 px-2"
                                onClick={() => handleSave(service.id)}
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-7 px-2"
                                onClick={handleCancel}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="h-7 px-2"
                              onClick={() => handleEdit(service)}
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines Section */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">গ্রাহকদের জন্য মূল্য নির্দেশিকা</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">কাস্টমাররা কেন অনুপযুক্ত বাজেট দেয়?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• বাজার সম্পর্কে সঠিক ধারণা না থাকা</li>
                  <li>• ওয়ার্কারদের দক্ষতা ও সময়ের মূল্য না বোঝা</li>
                  <li>• সস্তায় কাজ করিয়ে নেওয়ার চেষ্টা</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">আমাদের সমাধান</h4>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>১. স্বচ্ছ মূল্য নির্ধারণ:</strong> প্রতিটি সার্ভিসের জন্য নির্দেশিকা মূল্য দেখান।
                  </p>
                  <p>
                    <strong>২. ওয়ার্কার স্বাধীনতা:</strong> ওয়ার্কাররা তাদের নিজস্ব মূল্য নির্ধারণ করতে পারে।
                  </p>
                  <p>
                    <strong>৩. খোলা প্রতিযোগিতা:</strong> সব বিড দৃশ্যমান, যা স্বাস্থ্যকর প্রতিযোগিতা তৈরি করে।
                  </p>
                  <p>
                    <strong>৪. কাউন্টার অফার:</strong> ওয়ার্কাররা তাদের প্রকৃত খরচ দিয়ে বিড করতে পারে এবং ব্যাখ্যা দিতে পারে।
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
