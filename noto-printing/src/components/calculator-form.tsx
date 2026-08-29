"use client";

import { useState } from "react";
import { printingOptions, calculatePrice, siteConfig } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calculator as CalculatorIcon } from "lucide-react";
import Link from "next/link";

export function CalculatorForm() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(100);
  const [materialId, setMaterialId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [finishingIds, setFinishingIds] = useState<string[]>([]);
  const [isUrgent, setIsUrgent] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof calculatePrice
  > | null>(null);

  const selectedProduct = printingOptions.find((p) => p.id === productId);

  const handleCalculate = () => {
    if (!productId || !materialId || !sizeId) {
      alert("Mohon lengkapi semua pilihan produk, material, dan ukuran");
      return;
    }

    try {
      const calculatedResult = calculatePrice(
        productId,
        quantity,
        materialId,
        sizeId,
        finishingIds,
        isUrgent
      );
      setResult(calculatedResult);
    } catch (error) {
      alert(
        "Terjadi kesalahan dalam perhitungan. Mohon periksa kembali pilihan Anda."
      );
    }
  };

  const handleFinishingChange = (finishingId: string, checked: boolean) => {
    if (checked) {
      setFinishingIds([...finishingIds, finishingId]);
    } else {
      setFinishingIds(finishingIds.filter((id) => id !== finishingId));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const generateWhatsAppMessage = () => {
    if (!result || !selectedProduct) return "";

    const product = printingOptions.find((p) => p.id === productId);
    const material = product?.materials.find((m) => m.id === materialId);
    const size = product?.sizes.find((s) => s.id === sizeId);
    const finishings = product?.finishings.filter((f) =>
      finishingIds.includes(f.id)
    );

    return `Halo, saya tertarik untuk memesan:

*Produk:* ${selectedProduct.name}
*Jumlah:* ${quantity}
*Material:* ${material?.name}
*Ukuran:* ${size?.name}
*Finishing:* ${finishings?.map((f) => f.name).join(", ") || "Tanpa finishing"}
${isUrgent ? "*Urgent Order*" : ""}

*Estimasi Total:* ${formatCurrency(result.total)}
*Estimasi Waktu:* ${result.estimatedDays} hari kerja

Mohon informasi lebih lanjut. Terima kasih!`;
  };

  const whatsappLink = result
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        generateWhatsAppMessage()
      )}`
    : "#";

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalculatorIcon className="h-5 w-5" />
            Kalkulator Harga
          </CardTitle>
          <CardDescription>
            Hitung estimasi biaya percetakan Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Type */}
          <div className="space-y-2">
            <Label htmlFor="product">Jenis Produk *</Label>
            <Select
              value={productId}
              onValueChange={(value) => {
                setProductId(value);
                setMaterialId("");
                setSizeId("");
                setFinishingIds([]);
              }}
            >
              <SelectTrigger id="product">
                <SelectValue placeholder="Pilih jenis produk" />
              </SelectTrigger>
              <SelectContent>
                {printingOptions.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="quantity">Jumlah *</Label>
              {quantity >= 100 && (
                <Badge variant="secondary" className="text-xs">
                  Diskon{" "}
                  {quantity >= 1000
                    ? "20%"
                    : quantity >= 500
                    ? "15%"
                    : quantity >= 250
                    ? "10%"
                    : "5%"}
                </Badge>
              )}
            </div>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              placeholder="Masukkan jumlah"
            />
            <p className="text-xs text-muted-foreground">
              Min order 100 untuk diskon bulk
            </p>
          </div>

          {/* Material */}
          {selectedProduct && (
            <div className="space-y-2">
              <Label htmlFor="material">Material *</Label>
              <Select value={materialId} onValueChange={setMaterialId}>
                <SelectTrigger id="material">
                  <SelectValue placeholder="Pilih material" />
                </SelectTrigger>
                <SelectContent>
                  {selectedProduct.materials.map((material) => (
                    <SelectItem key={material.id} value={material.id}>
                      {material.name} - {formatCurrency(material.pricePerUnit)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Size */}
          {selectedProduct && (
            <div className="space-y-2">
              <Label htmlFor="size">Ukuran *</Label>
              <Select value={sizeId} onValueChange={setSizeId}>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Pilih ukuran" />
                </SelectTrigger>
                <SelectContent>
                  {selectedProduct.sizes.map((size) => (
                    <SelectItem key={size.id} value={size.id}>
                      {size.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Finishing */}
          {selectedProduct && (
            <div className="space-y-3">
              <Label>Finishing (Opsional)</Label>
              <div className="space-y-2">
                {selectedProduct.finishings.map((finishing) => (
                  <div
                    key={finishing.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={finishing.id}
                      checked={finishingIds.includes(finishing.id)}
                      onCheckedChange={(checked) =>
                        handleFinishingChange(finishing.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={finishing.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                    >
                      {finishing.name}{" "}
                      {finishing.additionalCost > 0 &&
                        `(+${formatCurrency(finishing.additionalCost)})`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Urgent Order */}
          <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
            <Checkbox
              id="urgent"
              checked={isUrgent}
              onCheckedChange={(checked) => setIsUrgent(checked as boolean)}
            />
            <div className="flex-1">
              <label
                htmlFor="urgent"
                className="text-sm font-medium leading-none cursor-pointer block"
              >
                Urgent Order
              </label>
              <p className="text-xs text-muted-foreground mt-1">
                Pengerjaan lebih cepat (+50% biaya)
              </p>
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={handleCalculate}
            className="w-full"
            size="lg"
            disabled={!productId || !materialId || !sizeId}
          >
            <CalculatorIcon className="mr-2 h-5 w-5" />
            Hitung Harga
          </Button>
        </CardContent>
      </Card>

      {/* Result */}
      <Card>
        <CardHeader>
          <CardTitle>Estimasi Harga</CardTitle>
          <CardDescription>Hasil perhitungan biaya percetakan</CardDescription>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-6">
              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    {formatCurrency(result.subtotal)}
                  </span>
                </div>
                {result.discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Diskon Bulk</span>
                    <span className="text-green-600 font-medium">
                      -{formatCurrency(result.discount)}
                    </span>
                  </div>
                )}
                {result.urgentFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-600">Biaya Urgent</span>
                    <span className="text-orange-600 font-medium">
                      +{formatCurrency(result.urgentFee)}
                    </span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">
                      {formatCurrency(result.total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estimated Days */}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Estimasi Waktu Pengerjaan
                </p>
                <p className="text-xl font-bold">
                  {result.estimatedDays} Hari Kerja
                </p>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-muted-foreground space-y-1">
                <p>* Harga adalah estimasi dan dapat berubah</p>
                <p>* Waktu pengerjaan tergantung antrian produksi</p>
                <p>* Hubungi kami untuk konfirmasi harga final</p>
              </div>

              {/* WhatsApp CTA */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Pesan via WhatsApp
                </Button>
              </a>
            </div>
          ) : (
            <div className="text-center py-12">
              <CalculatorIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Isi form di samping untuk menghitung estimasi harga
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
