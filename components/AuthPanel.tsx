'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthPanel({ redirectTo = '/dashboard' }: { redirectTo?: string }) {
  const [email, setEmail] = useState('admin@nexivor.dev');
  const [password, setPassword] = useState('admin123456');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!supabase) {
      setMessage('Supabase ortam değişkenleri tanımlanmadı. .env.local dosyasını doldurunuz.');
      setSessionReady(true);
      return;
    }

    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace(redirectTo);
      }
      setSessionReady(true);
    };

    loadSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace(redirectTo);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [redirectTo, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!supabase) {
      setMessage('Supabase yapılandırması eksik.');
      return;
    }

    setLoading(true);
    setMessage(null);

    if (mode === 'signin') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Giriş başarılı. Yönlendiriliyor...');
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`,
        },
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Hesap oluşturuldu. E-posta onayı gerekebilir.');
      }
    }

    setLoading(false);
  };

  if (!sessionReady) {
    return <div className="text-sm text-slate-400">Oturum kontrol ediliyor...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2 rounded-full border border-slate-700 p-1">
        <button
          type="button"
          onClick={() => setMode('signin')}
          className={`flex-1 rounded-full px-3 py-2 text-sm ${mode === 'signin' ? 'bg-sky-500 text-white' : 'text-slate-300'}`}
        >
          Giriş Yap
        </button>
        <button
          type="button"
          onClick={() => setMode('signup')}
          className={`flex-1 rounded-full px-3 py-2 text-sm ${mode === 'signup' ? 'bg-sky-500 text-white' : 'text-slate-300'}`}
        >
          Kayıt Ol
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">E-posta</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
          placeholder="admin@nexivor.dev"
          type="email"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm text-slate-300">Parola</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
          placeholder="••••••••"
          type="password"
          required
          minLength={6}
        />
      </div>

      {message ? <p className="text-sm text-slate-300">{message}</p> : null}

      <button disabled={loading} className="w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-medium text-white disabled:opacity-60">
        {loading ? 'İşleniyor...' : mode === 'signin' ? 'Giriş Yap' : 'Hesap Oluştur'}
      </button>
    </form>
  );
}
