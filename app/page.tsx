'use client';

import Link from 'next/link';
import { Shield, Users, Zap, BarChart3, CheckCircle, ArrowRight, Lock, Eye, Smartphone } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Shield,
    title: 'Gelişmiş Güvenlik',
    description: 'AI destekli anomali tespiti ve gerçek zamanlı tehdit analizi ile korunan sistem.',
  },
  {
    icon: Users,
    title: 'Akıllı Personel Yönetimi',
    description: 'Otomatik zaman takibi, izin planlaması ve iş akışı yönetimi.',
  },
  {
    icon: Eye,
    title: 'Yüz Tanıma Teknolojisi',
    description: 'Hassas biometrik kimlik doğrulama ile erişim kontrolü.',
  },
  {
    icon: BarChart3,
    title: 'Gelişmiş Raporlama',
    description: 'Detaylı analitik ve özelleştirilebilir dashboard raporları.',
  },
  {
    icon: Zap,
    title: 'Gerçek Zamanlı Monitorlama',
    description: 'Canlı aktivite takibi ve anlık bildirimler.',
  },
  {
    icon: Lock,
    title: 'Veri Güvenliği',
    description: 'Şifreli depolama ve enterprise-grade güvenlik protokolleri.',
  },
];

const stats = [
  { number: '1000+', label: 'Kurulu Kullanıcı' },
  { number: '99.8%', label: 'Sistem Çalışma Zamanı' },
  { number: '24/7', label: 'Destek' },
  { number: '50ms', label: 'Ortalama Yanıt Süresi' },
];

const testimonials = [
  {
    name: 'Fatih Kahraman',
    role: 'İnsan Kaynakları Müdürü',
    company: 'TechCorp',
    text: 'Veridora, personel yönetimini tamamen dönüştürdü. Zaman takibi otomatik oldu, raporlar saniyeler içinde hazırlanıyor.',
  },
  {
    name: 'Ayşe Yılmaz',
    role: 'Güvenlik Müdürü',
    company: 'SecureBuilding Inc.',
    text: 'AI destekli güvenlik sistemi bize işyerine gelen tehditler hakkında önceden uyarıyor. Harika!',
  },
  {
    name: 'Mehmet Demir',
    role: 'Operasyon Direktörü',
    company: 'GlobalTech',
    text: 'Uygulanması hızlı, kullanımı kolay ve sonuçları etkileyici. Harika bir yatırım.',
  },
];

export default function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500"></div>
            <span className="text-xl font-bold">Veridora</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="rounded-lg px-6 py-2 text-sm font-medium transition hover:bg-slate-800"
            >
              Giriş Yap
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-medium transition hover:shadow-lg hover:shadow-sky-500/50"
            >
              Başla
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
            🚀 Akıllı Personel ve Güvenlik Yönetimi
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            İşyerinizi <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Akıllı Hale Getirin</span>
          </h1>

          <p className="mb-8 text-xl text-slate-400">
            AI destekli yüz tanıma, gerçek zamanlı güvenlik izleme ve otomatik personel yönetimi ile modern ofis çağına hoş geldiniz.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3 font-medium transition hover:shadow-lg hover:shadow-sky-500/50"
            >
              Ücretsiz Deneyin <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-slate-700 px-8 py-3 font-medium transition hover:bg-slate-800/50"
            >
              Demo İste
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-sky-400">{stat.number}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Güçlü Özellikler</h2>
            <p className="text-lg text-slate-400">Veridora'nın sunduğu tüm araçlar</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 transition hover:border-sky-500/50 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-sky-500/10"
                >
                  <div className="mb-4 inline-block rounded-lg bg-sky-500/10 p-3">
                    <Icon className="h-6 w-6 text-sky-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Müşterilerimiz Ne Diyor</h2>
            <p className="text-lg text-slate-400">Veridora'yı kullanarak başarıya ulaşan işletmeler</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-6 text-slate-300">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Hemen Başlayın</h2>
            <p className="mb-8 text-lg text-slate-300">
              İşyerinizi Veridora ile dönüştürün. 30 gün ücretsiz deneme.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="E-posta adresiniz..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-950 px-6 py-3 outline-none focus:border-sky-500"
              />
              <Link
                href="/login"
                className="rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3 font-medium transition hover:shadow-lg hover:shadow-sky-500/50"
              >
                Deneyin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500"></div>
                <span className="font-bold">Veridora</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">Akıllı personel ve güvenlik yönetimi platformu.</p>
            </div>
            <div>
              <p className="font-semibold">Ürün</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-sky-400">Özellikler</Link></li>
                <li><Link href="#" className="hover:text-sky-400">Fiyatlandırma</Link></li>
                <li><Link href="#" className="hover:text-sky-400">Güvenlik</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Şirket</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-sky-400">Hakkımızda</Link></li>
                <li><Link href="#" className="hover:text-sky-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-sky-400">Kariyer</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Hukuki</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-sky-400">Gizlilik</Link></li>
                <li><Link href="#" className="hover:text-sky-400">Şartlar</Link></li>
                <li><Link href="#" className="hover:text-sky-400">İletişim</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2024 Veridora. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
