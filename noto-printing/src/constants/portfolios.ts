import { Portfolio } from "./types";

export const portfolios: Portfolio[] = [
  {
    id: "1",
    slug: "undangan-pernikahan-elegan-sarah-john",
    title: "Undangan Pernikahan Elegan - Sarah & John",
    client: "Sarah & John",
    description:
      "Undangan pernikahan mewah dengan desain floral elegan menggunakan kertas art carton 260gsm dengan finishing emboss dan spot UV. Paket lengkap mencakup kartu undangan, kartu RSVP, dan kartu ucapan terima kasih.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    category: "Undangan",
    productIds: ["1", "2"], // Undangan Pernikahan, Kartu Ucapan
    completedDate: "2024-01-15",
    tags: ["pernikahan", "mewah", "emboss", "spot-uv"],
    testimonial: {
      text: "Hasil cetakan sangat memuaskan! Kualitas kertas dan finishing emboss membuat undangan kami terlihat sangat mewah. Tamu-tamu kami banyak yang memuji. Terima kasih Noto Printing!",
      author: "Sarah & John",
      rating: 5,
    },
  },
  {
    id: "2",
    slug: "paket-branding-korporat-techstart",
    title: "Paket Branding Korporat - TechStart Startup",
    client: "TechStart Inc.",
    description:
      "Paket branding lengkap untuk startup teknologi, mencakup kartu nama, kop surat, amplop, dan profil perusahaan. Menggunakan desain modern minimalis dengan aksen biru teknologi.",
    images: [
      "https://images.unsplash.com/photo-1635776062360-af423602aff3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1635776062360-af423602aff3?w=400&h=300&fit=crop",
    category: "Korporat",
    productIds: ["3", "5"], // Kartu Nama, Brosur
    completedDate: "2024-02-20",
    tags: ["korporat", "branding", "kartu-nama", "modern"],
    testimonial: {
      text: "Layanan profesional dengan hasil yang luar biasa! Material dan kualitas cetak sangat baik. Proses revisi juga cepat. Sangat direkomendasikan untuk kebutuhan branding perusahaan!",
      author: "Michael Chen, CEO TechStart",
      rating: 5,
    },
  },
  {
    id: "3",
    slug: "banner-grand-opening-cafe-aroma",
    title: "Banner Grand Opening - Cafe Aroma",
    client: "Cafe Aroma",
    description:
      "Banner jumbo untuk grand opening cafe dengan ukuran 3x2 meter. Menggunakan flexi 340gsm dengan hasil warna yang cerah dan tahan cuaca luar ruangan.",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    category: "Banner",
    productIds: ["7"], // Banner
    completedDate: "2024-03-10",
    tags: ["banner", "outdoor", "grand-opening", "cafe"],
    testimonial: {
      text: "Banner nya bagus banget! Warna nya keluar sempurna dan bahan nya kuat untuk outdoor. Sangat membantu menarik perhatian pelanggan baru kami!",
      author: "Lisa - Pemilik Cafe Aroma",
      rating: 5,
    },
  },
  {
    id: "4",
    slug: "buku-menu-premium-restoran-nusantara",
    title: "Buku Menu Premium - Restoran Nusantara",
    client: "Restoran Nusantara",
    description:
      "Buku menu restoran dengan sampul hard cover linen dan isi art paper 150gsm. Finishing laminasi doff untuk kesan premium dan mudah dibersihkan.",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    category: "Buku",
    productIds: ["6"], // Katalog/Menu
    completedDate: "2024-02-28",
    tags: ["menu", "restoran", "premium", "hardcover"],
  },
  {
    id: "5",
    slug: "flyer-promosi-max-fitness-center",
    title: "Flyer Promosi - Max Fitness Center",
    client: "Max Fitness Center",
    description:
      "Flyer promosi keanggotaan dengan desain energik dan modern. Cetak 5000 lembar menggunakan art paper 120gsm, finishing mengkilap untuk warna yang cerah.",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
    category: "Promosi",
    productIds: ["5"], // Brosur/Flyer
    completedDate: "2024-03-05",
    tags: ["flyer", "promosi", "fitness", "cetak-massal"],
    testimonial: {
      text: "Pengerjaan cepat dan hasil cetak sangat bagus! Warna nya cerah sesuai dengan brand fitness kami. Puas dengan pelayanan dan kualitas!",
      author: "David - Marketing Max Fitness",
      rating: 5,
    },
  },
  {
    id: "6",
    slug: "kemasan-produk-skincare-organik",
    title: "Kemasan Produk - Lini Skincare Organik",
    client: "Pure Glow Skincare",
    description:
      "Kemasan kotak kustom untuk produk skincare organik. Menggunakan art carton board dengan finishing laminasi matte dan emboss logo. Desain ramah lingkungan.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    category: "Packaging",
    productIds: ["8"], // Packaging
    completedDate: "2024-01-25",
    tags: ["kemasan", "skincare", "ramah-lingkungan", "mewah"],
    testimonial: {
      text: "Kemasan nya cantik dan premium! Kontrol kualitas juga bagus, semua box sempurna. Pelanggan kami sangat suka dengan kemasan baru ini. Terima kasih!",
      author: "Amanda - Pendiri Pure Glow",
      rating: 5,
    },
  },
];
