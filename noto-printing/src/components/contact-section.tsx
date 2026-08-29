"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: siteConfig.contact.address,
      link: null,
    },
    {
      icon: Phone,
      title: "Telepon",
      content: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08.00 - 17.00 WIB",
      link: null,
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      url: siteConfig.socialMedia.instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: siteConfig.socialMedia.facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: siteConfig.socialMedia.twitter,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Punya pertanyaan atau ingin konsultasi? Tim kami siap membantu Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Info & Social Media */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = item.link ? (
                  <a
                    href={item.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                );

                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-muted rounded-lg transition-all hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Chat via WhatsApp
                    </h3>
                    <p className="text-green-50 text-sm">
                      Respon cepat untuk pertanyaan Anda
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${
                      siteConfig.whatsappNumber
                    }?text=${encodeURIComponent(
                      "Halo, saya ingin bertanya tentang layanan Noto Printing."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="bg-white text-green-600 hover:bg-green-50"
                    >
                      Chat Sekarang
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Map */}
          <div>
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0 h-full min-h-[400px]">
                {/* OpenStreetMap Embed - Free alternative to Google Maps */}
                <iframe
                  title="Lokasi Noto Printing"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.7849%2C-6.2388%2C106.8849%2C-6.1588&layer=mapnik&marker=-6.1988,106.8349"
                  style={{ border: 0, minHeight: "400px" }}
                  className="rounded-lg"
                />
                <div className="p-4 bg-background border-t">
                  <a
                    href="https://www.openstreetmap.org/?mlat=-6.1988&mlon=106.8349#map=12/-6.1988/106.8349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Lihat di peta lebih besar →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Atau kunjungi langsung showroom kami untuk konsultasi tatap muka
          </p>
        </div>
      </div>
    </section>
  );
}
