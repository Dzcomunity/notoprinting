import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, CheckCircle } from "lucide-react";

export function HowToOrderSection() {
  const steps = [
    {
      icon: Search,
      title: "Pilih Produk",
      description: "Cari dan pilih produk yang sesuai dengan kebutuhan Anda",
    },
    {
      icon: MessageCircle,
      title: "Klik via WhatsApp",
      description:
        "Klik tombol WhatsApp untuk mengirim detail produk yang dipilih",
    },
    {
      icon: CheckCircle,
      title: "Transaksi via WhatsApp",
      description:
        "Selesaikan transaksi dan diskusi detail pesanan melalui WhatsApp",
    },
  ];

  return (
    <section id="how-to-order" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Memesan</h2>
          <p className="text-muted-foreground text-lg">
            Proses pemesanan mudah dan cepat melalui WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mt-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
