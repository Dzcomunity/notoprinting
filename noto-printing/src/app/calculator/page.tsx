import { HeaderSection } from "@/components/header-section";
import { FooterSection } from "@/components/footer-section";
import { CalculatorForm } from "@/components/calculator-form";
import { Breadcrumb } from "@/components/breadcrumb";

export default function CalculatorPage() {
  return (
    <>
      <HeaderSection />
      <main className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Kalkulator Harga" }]} />

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Kalkulator Harga Percetakan
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hitung estimasi biaya percetakan Anda secara online. Pilih produk,
              material, dan finishing untuk mendapatkan harga instant.
            </p>
          </div>

          {/* Calculator */}
          <CalculatorForm />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
