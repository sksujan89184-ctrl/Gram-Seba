import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoIcon from "@assets/generated_images/gramseba_logo_icon.png";

export default function Register() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [userType, setUserType] = useState<"customer" | "worker">("customer");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful!",
        description: `Welcome to GramSeba as a ${userType}. Your account is ready to use.`,
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </button>
        </Link>

        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <img src={logoIcon} alt="GramSeba" className="w-10 h-10" />
            </div>
            <CardTitle className="text-2xl">Join GramSeba</CardTitle>
            <CardDescription>Create your account to get started</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">What are you?</Label>
                <RadioGroup.Root value={userType} onValueChange={(val) => setUserType(val as "customer" | "worker")}>
                  <div className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors" onClick={() => setUserType("customer")}>
                    <RadioGroup.Item value="customer" id="customer" className="w-5 h-5" asChild>
                      <div className="flex items-center justify-center w-5 h-5 border-2 border-primary rounded-full cursor-pointer">
                        {userType === "customer" && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                    </RadioGroup.Item>
                    <div className="flex-1">
                      <label htmlFor="customer" className="font-medium cursor-pointer">Looking for Help</label>
                      <p className="text-xs text-muted-foreground">Post jobs and hire verified workers</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors" onClick={() => setUserType("worker")}>
                    <RadioGroup.Item value="worker" id="worker" className="w-5 h-5" asChild>
                      <div className="flex items-center justify-center w-5 h-5 border-2 border-primary rounded-full cursor-pointer">
                        {userType === "worker" && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                    </RadioGroup.Item>
                    <div className="flex-1">
                      <label htmlFor="worker" className="font-medium cursor-pointer">Offering Services</label>
                      <p className="text-xs text-muted-foreground">Get hired and earn money</p>
                    </div>
                  </div>
                </RadioGroup.Root>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+880 1700 123456" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" placeholder="••••••••" required />
                </div>

                {userType === "worker" && (
                  <div className="space-y-2">
                    <Label htmlFor="skills">Primary Skills</Label>
                    <Input id="skills" placeholder="e.g. Plumbing, Electrical, Cleaning" required />
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3 text-sm">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded cursor-pointer" required />
                <label htmlFor="terms" className="cursor-pointer text-muted-foreground">
                  I agree to the <span className="text-primary underline">Terms of Service</span> and <span className="text-primary underline">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 h-11 font-semibold" 
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/signin">
                <span className="text-primary font-semibold hover:underline cursor-pointer">Sign In</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
            <p className="text-xs text-muted-foreground">Verified Members</p>
          </div>
          <div className="space-y-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
            <p className="text-xs text-muted-foreground">Secure Escrow</p>
          </div>
          <div className="space-y-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
            <p className="text-xs text-muted-foreground">24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
