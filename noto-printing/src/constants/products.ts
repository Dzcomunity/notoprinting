import type { Product } from "./types";

export const products: Product[] = [
  // Outdoor Products (categoryId: "1")
  {
    id: "1",
    name: "Banner Flexi 3x4 Meter",
    slug: "banner-flexi-3x4",
    categoryId: "1",
    description:
      "Banner flexi premium dengan kualitas cetak tajam dan tahan lama untuk outdoor",
    specifications: [
      { label: "Bahan", value: "Flexi 280 gsm" },
      { label: "Ukuran", value: "3 x 4 meter" },
      { label: "Finishing", value: "Mata ayam + las pinggir" },
      { label: "Ketahanan", value: "Tahan air & UV resistant" },
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Spanduk Outdoor 2x1 Meter",
    slug: "spanduk-outdoor-2x1",
    categoryId: "1",
    description:
      "Spanduk outdoor berkualitas dengan bahan flexi yang kuat dan tahan cuaca",
    specifications: [
      { label: "Bahan", value: "Flexi 280 gsm" },
      { label: "Ukuran", value: "2 x 1 meter" },
      { label: "Finishing", value: "Mata ayam + las pinggir" },
      { label: "Ketahanan", value: "Anti air & panas" },
    ],
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "3",
    name: "Billboard 4x6 Meter",
    slug: "billboard-4x6",
    categoryId: "1",
    description:
      "Billboard besar untuk promosi outdoor dengan visual yang mencolok",
    specifications: [
      { label: "Bahan", value: "Frontlite 440 gsm" },
      { label: "Ukuran", value: "4 x 6 meter" },
      { label: "Finishing", value: "Mata ayam + las pinggir" },
      { label: "Ketahanan", value: "Sangat tahan UV & cuaca ekstrem" },
    ],
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "4",
    name: "MMT Banner 1.5x1 Meter",
    slug: "mmt-banner-1-5x1",
    categoryId: "1",
    description:
      "MMT banner ekonomis namun tetap berkualitas untuk promosi outdoor",
    specifications: [
      { label: "Bahan", value: "MMT 280 gsm" },
      { label: "Ukuran", value: "1.5 x 1 meter" },
      { label: "Finishing", value: "Mata ayam" },
      { label: "Ketahanan", value: "Tahan air" },
    ],
    images: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "5",
    name: "Neon Box Sign 80x120 cm",
    slug: "neon-box-80x120",
    categoryId: "1",
    description:
      "Neon box untuk signage toko dengan pencahayaan LED hemat energi",
    specifications: [
      { label: "Bahan", value: "Galvanis + Acrylic" },
      { label: "Ukuran", value: "80 x 120 cm" },
      { label: "Pencahayaan", value: "LED Strip" },
      { label: "Ketahanan", value: "Waterproof" },
    ],
    images: [
      "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=800&h=600&fit=crop",
    ],
    featured: false,
  },

  // Indoor Products (categoryId: "2")
  {
    id: "6",
    name: "Indoor Poster A1",
    slug: "indoor-poster-a1",
    categoryId: "2",
    description:
      "Poster indoor ukuran A1 dengan cetak berkualitas tinggi untuk dekorasi ruangan",
    specifications: [
      { label: "Bahan", value: "Art Paper 150 gsm" },
      { label: "Ukuran", value: "A1 (594 x 841 mm)" },
      { label: "Finishing", value: "Laminasi doff/glossy" },
      { label: "Kualitas Cetak", value: "Full color HD" },
    ],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "7",
    name: "Wallpaper Custom",
    slug: "wallpaper-custom",
    categoryId: "2",
    description: "Wallpaper custom design untuk mempercantik interior ruangan",
    specifications: [
      { label: "Bahan", value: "Vinyl Wallpaper" },
      { label: "Ukuran", value: "Custom (per meter)" },
      { label: "Finishing", value: "Matte finish" },
      { label: "Fitur", value: "Mudah dipasang & dilepas" },
    ],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "8",
    name: "Canvas Print 40x60 cm",
    slug: "canvas-print-40x60",
    categoryId: "2",
    description: "Cetak foto di canvas berkualitas museum untuk hiasan dinding",
    specifications: [
      { label: "Bahan", value: "Cotton Canvas 380 gsm" },
      { label: "Ukuran", value: "40 x 60 cm" },
      { label: "Finishing", value: "Wooden frame" },
      { label: "Kualitas", value: "Museum grade" },
    ],
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "9",
    name: "Foam Board Print A2",
    slug: "foam-board-a2",
    categoryId: "2",
    description:
      "Cetak di foam board untuk display indoor yang kokoh dan ringan",
    specifications: [
      { label: "Bahan", value: "Foam Board 5mm" },
      { label: "Ukuran", value: "A2 (420 x 594 mm)" },
      { label: "Finishing", value: "Laminasi doff" },
      { label: "Berat", value: "Ringan & kokoh" },
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "10",
    name: "Acrylic Photo Print",
    slug: "acrylic-photo-print",
    categoryId: "2",
    description:
      "Cetak foto premium di acrylic untuk tampilan mewah dan modern",
    specifications: [
      { label: "Bahan", value: "Acrylic 3mm" },
      { label: "Ukuran", value: "30 x 40 cm" },
      { label: "Finishing", value: "HD Print + Polish" },
      { label: "Display", value: "Standoff mounting" },
    ],
    images: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop",
    ],
    featured: false,
  },

  // Merchant Products (categoryId: "3")
  {
    id: "11",
    name: "X-Banner 60x160 cm",
    slug: "x-banner-60x160",
    categoryId: "3",
    description:
      "X-Banner portable dengan standing kokoh untuk promosi merchant",
    specifications: [
      { label: "Bahan", value: "Albatros 260 gsm" },
      { label: "Ukuran", value: "60 x 160 cm" },
      { label: "Standing", value: "X-Banner stand frame" },
      { label: "Fitur", value: "Portable & mudah dipasang" },
    ],
    images: [
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "12",
    name: "Roll Banner 85x200 cm",
    slug: "roll-banner-85x200",
    categoryId: "3",
    description:
      "Roll banner premium dengan sistem retractable untuk kemudahan penyimpanan",
    specifications: [
      { label: "Bahan", value: "Albatros 260 gsm" },
      { label: "Ukuran", value: "85 x 200 cm" },
      { label: "Standing", value: "Roll-up stand" },
      { label: "Fitur", value: "Retractable & travel case" },
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "13",
    name: "Standing Banner Mini",
    slug: "standing-banner-mini",
    categoryId: "3",
    description: "Standing banner ukuran mini untuk counter dan display meja",
    specifications: [
      { label: "Bahan", value: "Albatros 260 gsm" },
      { label: "Ukuran", value: "A4 (21 x 29.7 cm)" },
      { label: "Standing", value: "Mini stand" },
      { label: "Penggunaan", value: "Table top display" },
    ],
    images: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "14",
    name: "Flag Banner 3 Meter",
    slug: "flag-banner-3m",
    categoryId: "3",
    description:
      "Flag banner tinggi untuk menarik perhatian di area outdoor merchant",
    specifications: [
      { label: "Bahan", value: "Flexi 280 gsm" },
      { label: "Ukuran", value: "60 x 300 cm" },
      { label: "Standing", value: "Flag pole + base" },
      { label: "Fitur", value: "Tahan angin" },
    ],
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "15",
    name: "Wobbler Display",
    slug: "wobbler-display",
    categoryId: "3",
    description: "Wobbler untuk point of sale yang menarik perhatian pembeli",
    specifications: [
      { label: "Bahan", value: "PVC 0.3mm" },
      { label: "Ukuran", value: "Diameter 15 cm" },
      { label: "Finishing", value: "Die cut custom shape" },
      { label: "Fitur", value: "Spring wobbler" },
    ],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    ],
    featured: false,
  },

  // Poster Products (categoryId: "4")
  {
    id: "16",
    name: "Poster A3 Premium",
    slug: "poster-a3-premium",
    categoryId: "4",
    description:
      "Poster A3 dengan kualitas cetak premium untuk berbagai kebutuhan",
    specifications: [
      { label: "Bahan", value: "Art Paper 150 gsm" },
      { label: "Ukuran", value: "A3 (297 x 420 mm)" },
      { label: "Finishing", value: "Laminasi glossy/doff" },
      { label: "Kualitas", value: "Full color HD" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "17",
    name: "Poster A2 Event",
    slug: "poster-a2-event",
    categoryId: "4",
    description: "Poster A2 ideal untuk promosi event dan announcement",
    specifications: [
      { label: "Bahan", value: "Art Carton 230 gsm" },
      { label: "Ukuran", value: "A2 (420 x 594 mm)" },
      { label: "Finishing", value: "Laminasi doff" },
      { label: "Kualitas", value: "Full color HD" },
    ],
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "18",
    name: "Poster A1 Jumbo",
    slug: "poster-a1-jumbo",
    categoryId: "4",
    description: "Poster berukuran besar untuk display yang impactful",
    specifications: [
      { label: "Bahan", value: "Art Carton 260 gsm" },
      { label: "Ukuran", value: "A1 (594 x 841 mm)" },
      { label: "Finishing", value: "Laminasi glossy" },
      { label: "Kualitas", value: "Full color HD" },
    ],
    images: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "19",
    name: "Poster Vinyl Waterproof",
    slug: "poster-vinyl-waterproof",
    categoryId: "4",
    description: "Poster dengan bahan vinyl yang waterproof untuk outdoor",
    specifications: [
      { label: "Bahan", value: "Vinyl Sticker" },
      { label: "Ukuran", value: "A3 (297 x 420 mm)" },
      { label: "Finishing", value: "Waterproof" },
      { label: "Fitur", value: "Tahan air & UV" },
    ],
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "20",
    name: "Poster Frame A4",
    slug: "poster-frame-a4",
    categoryId: "4",
    description: "Poster A4 dengan frame siap pajang",
    specifications: [
      { label: "Bahan", value: "Art Paper 150 gsm" },
      { label: "Ukuran", value: "A4 (210 x 297 mm)" },
      { label: "Finishing", value: "Frame kayu/aluminium" },
      { label: "Fitur", value: "Ready to hang" },
    ],
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop",
    ],
    featured: false,
  },

  // Stiker Products (categoryId: "5")
  {
    id: "21",
    name: "Stiker Vinyl Cut Custom",
    slug: "stiker-vinyl-cut",
    categoryId: "5",
    description:
      "Stiker vinyl dengan cutting custom sesuai design untuk branding",
    specifications: [
      { label: "Bahan", value: "Vinyl Oracal" },
      { label: "Ukuran", value: "Custom" },
      { label: "Finishing", value: "Die cut" },
      { label: "Ketahanan", value: "3-5 tahun outdoor" },
    ],
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "22",
    name: "Stiker Chromo A3",
    slug: "stiker-chromo-a3",
    categoryId: "5",
    description: "Stiker chromo glossy untuk berbagai keperluan indoor",
    specifications: [
      { label: "Bahan", value: "Chromo 80 gsm" },
      { label: "Ukuran", value: "A3 (297 x 420 mm)" },
      { label: "Finishing", value: "Glossy" },
      { label: "Penggunaan", value: "Indoor" },
    ],
    images: [
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "23",
    name: "Stiker Transparan",
    slug: "stiker-transparan",
    categoryId: "5",
    description:
      "Stiker dengan material transparan untuk efek premium pada kaca",
    specifications: [
      { label: "Bahan", value: "Vinyl Transparan" },
      { label: "Ukuran", value: "Custom" },
      { label: "Finishing", value: "Clear/frosted" },
      { label: "Penggunaan", value: "Kaca/akrilik" },
    ],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "24",
    name: "Stiker Hologram",
    slug: "stiker-hologram",
    categoryId: "5",
    description: "Stiker hologram untuk keamanan dan authenticity produk",
    specifications: [
      { label: "Bahan", value: "Hologram Material" },
      { label: "Ukuran", value: "Custom (min. 2x2 cm)" },
      { label: "Finishing", value: "Holographic effect" },
      { label: "Fitur", value: "Security feature" },
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "25",
    name: "Stiker One Way Vision",
    slug: "stiker-one-way-vision",
    categoryId: "5",
    description:
      "Stiker one way untuk kaca mobil atau gedung dengan visibilitas satu arah",
    specifications: [
      { label: "Bahan", value: "One Way Vision Vinyl" },
      { label: "Ukuran", value: "Custom (per meter)" },
      { label: "Finishing", value: "Perforated" },
      { label: "Fitur", value: "Transparan dari dalam" },
    ],
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    ],
    featured: false,
  },

  // Cetak Digital Max A3 Products (categoryId: "6")
  {
    id: "26",
    name: "Cetak Dokumen A4",
    slug: "cetak-dokumen-a4",
    categoryId: "6",
    description:
      "Cetak dokumen hitam putih atau berwarna dengan kualitas tajam",
    specifications: [
      { label: "Bahan", value: "HVS 80 gsm" },
      { label: "Ukuran", value: "A4 (210 x 297 mm)" },
      { label: "Warna", value: "BW / Full color" },
      { label: "Kualitas", value: "Print digital 1200 dpi" },
    ],
    images: [
      "https://images.unsplash.com/photo-1554224311-beee415c201f?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "27",
    name: "Cetak Foto 4R",
    slug: "cetak-foto-4r",
    categoryId: "6",
    description: "Cetak foto ukuran 4R dengan kualitas photo paper",
    specifications: [
      { label: "Bahan", value: "Photo Paper 260 gsm" },
      { label: "Ukuran", value: "4R (10 x 15 cm)" },
      { label: "Warna", value: "Full color" },
      { label: "Kualitas", value: "Photo quality" },
    ],
    images: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "28",
    name: "Cetak Brosur A5",
    slug: "cetak-brosur-a5",
    categoryId: "6",
    description: "Cetak brosur A5 untuk promosi dan marketing",
    specifications: [
      { label: "Bahan", value: "Art Paper 120 gsm" },
      { label: "Ukuran", value: "A5 (148 x 210 mm)" },
      { label: "Warna", value: "Full color 2 sisi" },
      { label: "Finishing", value: "Laminasi doff/glossy optional" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
  {
    id: "29",
    name: "Cetak Kartu Nama",
    slug: "cetak-kartu-nama",
    categoryId: "6",
    description: "Cetak kartu nama premium dengan berbagai pilihan bahan",
    specifications: [
      { label: "Bahan", value: "Art Carton 260 gsm" },
      { label: "Ukuran", value: "9 x 5.5 cm" },
      { label: "Warna", value: "Full color 2 sisi" },
      { label: "Finishing", value: "Laminasi doff/glossy" },
    ],
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    ],
    featured: true,
  },
  {
    id: "30",
    name: "Cetak Kalender A3",
    slug: "cetak-kalender-a3",
    categoryId: "6",
    description: "Cetak kalender dinding maksimal ukuran A3",
    specifications: [
      { label: "Bahan", value: "Art Carton 230 gsm" },
      { label: "Ukuran", value: "A3 (297 x 420 mm)" },
      { label: "Warna", value: "Full color" },
      { label: "Finishing", value: "Ring kawat + lubang gantung" },
    ],
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    ],
    featured: false,
  },
];
