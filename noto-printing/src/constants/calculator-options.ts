import { PrintingOption } from "./types";

export const printingOptions: PrintingOption[] = [
  {
    id: "business-card",
    name: "Kartu Nama",
    materials: [
      { id: "art-paper-230", name: "Art Paper 230gsm", pricePerUnit: 150 },
      { id: "art-carton-260", name: "Art Carton 260gsm", pricePerUnit: 200 },
      { id: "art-carton-310", name: "Art Carton 310gsm", pricePerUnit: 250 },
      { id: "linen-260", name: "Linen 260gsm", pricePerUnit: 300 },
      { id: "jasmine-250", name: "Jasmine 250gsm", pricePerUnit: 320 },
    ],
    sizes: [
      { id: "standard", name: "Standard (9×5.5 cm)", multiplier: 1 },
      { id: "custom", name: "Custom Size", multiplier: 1.2 },
    ],
    finishings: [
      { id: "none", name: "Tanpa Finishing", additionalCost: 0 },
      {
        id: "laminating-glossy",
        name: "Laminating Glossy",
        additionalCost: 50,
      },
      { id: "laminating-doff", name: "Laminating Doff", additionalCost: 50 },
      { id: "spot-uv", name: "Spot UV", additionalCost: 150 },
      { id: "emboss", name: "Emboss", additionalCost: 200 },
      { id: "foil-gold", name: "Foil Gold", additionalCost: 250 },
      { id: "foil-silver", name: "Foil Silver", additionalCost: 250 },
    ],
  },
  {
    id: "flyer",
    name: "Flyer / Brosur",
    materials: [
      { id: "art-paper-100", name: "Art Paper 100gsm", pricePerUnit: 800 },
      { id: "art-paper-120", name: "Art Paper 120gsm", pricePerUnit: 1000 },
      { id: "art-paper-150", name: "Art Paper 150gsm", pricePerUnit: 1200 },
      { id: "art-carton-190", name: "Art Carton 190gsm", pricePerUnit: 1500 },
    ],
    sizes: [
      { id: "a5", name: "A5 (14.8×21 cm)", multiplier: 1 },
      { id: "a4", name: "A4 (21×29.7 cm)", multiplier: 1.5 },
      { id: "a3", name: "A3 (29.7×42 cm)", multiplier: 2.5 },
    ],
    finishings: [
      { id: "none", name: "Tanpa Finishing", additionalCost: 0 },
      {
        id: "laminating-glossy",
        name: "Laminating Glossy",
        additionalCost: 200,
      },
      { id: "laminating-doff", name: "Laminating Doff", additionalCost: 200 },
    ],
  },
  {
    id: "banner",
    name: "Banner / Spanduk",
    materials: [
      { id: "flexi-china", name: "Flexi China 280gsm", pricePerUnit: 15000 },
      { id: "flexi-korea", name: "Flexi Korea 340gsm", pricePerUnit: 20000 },
      { id: "albatros", name: "Albatros 280gsm", pricePerUnit: 18000 },
    ],
    sizes: [{ id: "custom", name: "Custom (per m²)", multiplier: 1 }],
    finishings: [
      { id: "none", name: "Tanpa Finishing", additionalCost: 0 },
      { id: "mata-ayam", name: "Mata Ayam + Tali", additionalCost: 5000 },
      {
        id: "finishing-pinggir",
        name: "Finishing Pinggir Las",
        additionalCost: 3000,
      },
    ],
  },
  {
    id: "invitation",
    name: "Undangan",
    materials: [
      { id: "art-carton-260", name: "Art Carton 260gsm", pricePerUnit: 3000 },
      { id: "linen-250", name: "Linen 250gsm", pricePerUnit: 4000 },
      { id: "jasmine-250", name: "Jasmine 250gsm", pricePerUnit: 4200 },
      { id: "ivory-300", name: "Ivory 300gsm", pricePerUnit: 6000 },
    ],
    sizes: [
      { id: "standard", name: "Standard (18×10 cm)", multiplier: 1 },
      { id: "medium", name: "Medium (20×15 cm)", multiplier: 1.3 },
      { id: "large", name: "Large (24×18 cm)", multiplier: 1.6 },
    ],
    finishings: [
      { id: "none", name: "Tanpa Finishing", additionalCost: 0 },
      { id: "laminating-doff", name: "Laminating Doff", additionalCost: 500 },
      { id: "emboss", name: "Emboss", additionalCost: 1500 },
      { id: "spot-uv", name: "Spot UV", additionalCost: 1000 },
      { id: "foil-gold", name: "Foil Gold", additionalCost: 2000 },
      { id: "foil-silver", name: "Foil Silver", additionalCost: 2000 },
    ],
  },
  {
    id: "sticker",
    name: "Sticker",
    materials: [
      { id: "chromo", name: "Chromo (Paper)", pricePerUnit: 8000 },
      { id: "vinyl", name: "Vinyl (Glossy)", pricePerUnit: 12000 },
      { id: "vinyl-doff", name: "Vinyl Doff", pricePerUnit: 13000 },
      { id: "transparent", name: "Transparent", pricePerUnit: 15000 },
    ],
    sizes: [{ id: "custom", name: "Custom (per m²)", multiplier: 1 }],
    finishings: [
      { id: "none", name: "Tanpa Finishing", additionalCost: 0 },
      { id: "laminating", name: "Laminating", additionalCost: 2000 },
      {
        id: "cut-contour",
        name: "Cutting Sesuai Bentuk",
        additionalCost: 5000,
      },
    ],
  },
];

// Bulk discount tiers
export const bulkDiscounts = [
  { minQty: 1, maxQty: 99, discount: 0 },
  { minQty: 100, maxQty: 249, discount: 0.05 }, // 5%
  { minQty: 250, maxQty: 499, discount: 0.1 }, // 10%
  { minQty: 500, maxQty: 999, discount: 0.15 }, // 15%
  { minQty: 1000, maxQty: Infinity, discount: 0.2 }, // 20%
];

// Estimated production days based on quantity
export const estimateDays = (
  quantity: number,
  isUrgent: boolean = false
): number => {
  let days;

  if (quantity < 100) days = 2;
  else if (quantity < 500) days = 3;
  else if (quantity < 1000) days = 4;
  else days = 5;

  // Urgent order cuts time in half but minimum 1 day
  return isUrgent ? Math.max(1, Math.floor(days / 2)) : days;
};

// Calculate price helper
export const calculatePrice = (
  productId: string,
  quantity: number,
  materialId: string,
  sizeId: string,
  finishingIds: string[],
  isUrgent: boolean = false
): {
  subtotal: number;
  discount: number;
  urgentFee: number;
  total: number;
  estimatedDays: number;
} => {
  const product = printingOptions.find((p) => p.id === productId);
  if (!product) throw new Error("Product not found");

  const material = product.materials.find((m) => m.id === materialId);
  if (!material) throw new Error("Material not found");

  const size = product.sizes.find((s) => s.id === sizeId);
  if (!size) throw new Error("Size not found");

  // Calculate base price
  let basePrice = material.pricePerUnit * size.multiplier * quantity;

  // Add finishing costs
  let finishingCost = 0;
  finishingIds.forEach((finishId) => {
    const finishing = product.finishings.find((f) => f.id === finishId);
    if (finishing) {
      finishingCost += finishing.additionalCost * quantity;
    }
  });

  const subtotal = basePrice + finishingCost;

  // Apply bulk discount
  const discountTier = bulkDiscounts.find(
    (tier) => quantity >= tier.minQty && quantity <= tier.maxQty
  );
  const discount = subtotal * (discountTier?.discount || 0);

  // Urgent fee (50% of subtotal after discount)
  const urgentFee = isUrgent ? (subtotal - discount) * 0.5 : 0;

  const total = subtotal - discount + urgentFee;
  const estimatedDays = estimateDays(quantity, isUrgent);

  return {
    subtotal,
    discount,
    urgentFee,
    total,
    estimatedDays,
  };
};
