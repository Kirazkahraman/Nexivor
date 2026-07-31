import Link from 'next/link';

const alerts = [
  { title: 'Şüpheli erişim', detail: 'Bilinmeyen yüz profili algılandı.', level: 'Yüksek' },
  { title: 'Geçiş saati sapması', detail: 'Personel normal saat dışında erişim denemesi.', level: 'Orta' },
  { title: 'Kamera bağlantısı', detail: 'Koridor kamerası stabil çalışıyor.', level: 'Düşük' },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Güvenlik Merkezi</p>
            <h1 className="mt-2 text-3xl font-semibold">Canlı güvenlik durumu</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Ana Sayfa
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold">Aktif olaylar</h2>
            <div className="mt-6 space-y-3">
              {alerts.map((alert) => (
                <div key={alert.title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{alert.title}</h3>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{alert.level}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{alert.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold">Sistem durumu</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">AI model: Aktif</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">CCTV: 12/12 bağlı</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">Veritabanı: Bağlı</div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
