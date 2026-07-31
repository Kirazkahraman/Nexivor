'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/login');
      } else {
        setIsAuthed(true);
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace('/login');
      } else {
        setIsAuthed(true);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (isAuthed === null) {
    return <div className="min-h-screen bg-slate-950"></div>;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Nexivor</p>
            <p className="text-sm text-slate-400">Yönetici kontrol paneli</p>
          </div>
          <div className="flex gap-3">
            <Link href="/security" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">Güvenlik</Link>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                router.replace('/login');
              }}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
