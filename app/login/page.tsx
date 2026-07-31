import Link from 'next/link';
import AuthPanel from '@/components/AuthPanel';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Nexivor Giriş</p>
        <h1 className="mt-3 text-2xl font-semibold">Yönetici paneline giriş yapın</h1>
        <p className="mt-2 text-sm text-slate-400">AI destekli güvenlik sistemi için kimlik doğrulama ekranı.</p>

        <div className="mt-8">
          <AuthPanel />
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          Henüz hesap yok mu? <Link href="/" className="text-sky-400">Ana sayfaya dön</Link>
        </div>
      </div>
    </main>
  );
}
