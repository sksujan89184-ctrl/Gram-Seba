import { Card } from "@/components/ui/card";
import { 
  Wrench, 
  Zap, 
  Paintbrush, 
  Truck, 
  Trees, 
  Hammer,
  MonitorSmartphone,
  Baby
} from "lucide-react";

const categories = [
  { icon: Wrench, label: "Plumbing", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Zap, label: "Electrical", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Paintbrush, label: "Cleaning", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Truck, label: "Moving", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Trees, label: "Gardening", color: "text-green-500", bg: "bg-green-50" },
  { icon: Hammer, label: "Carpentry", color: "text-amber-700", bg: "bg-amber-50" },
  { icon: MonitorSmartphone, label: "IT Help", color: "text-cyan-500", bg: "bg-cyan-50" },
  { icon: Baby, label: "Babysitting", color: "text-pink-500", bg: "bg-pink-50" },
];

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the right professional for any job, big or small.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Card 
              key={idx} 
              className="group p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/10 cursor-pointer"
            >
              <div className={`h-16 w-16 rounded-2xl ${cat.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                <cat.icon className={`h-8 w-8 ${cat.color}`} />
              </div>
              <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">{cat.label}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
