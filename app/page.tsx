'use client';

import Link from 'next/link';
import { BarChart3, Shield, Users, Clock, AlertCircle, TrendingUp, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { label: 'Aktif Personel', value: '156', change: '+12%', icon: Users, color: 'bg-blue-500/10 text-blue-400' },
  { label: 'Güvenlik Olayı', value: '3', change: '-8%', icon: AlertCircle, color: 'bg-red-500/10 text-red-400' },
  { label: 'Saat Ortalaması', value: '8.5h', change: '+2%', icon: Clock, color: 'bg-green-500/10 text-green-400' },
  { label: 'Sistem Sağlığı', value: '99.8%', change: 'Stabil', icon: Shield, color: 'bg-purple-500/10 text-purple-400' },
];

const recentActivity = [
  { name: 'Ahmet Yılmaz', action: 'Giriş Yaptı', time: '09:45', status: 'success' },
  { name: 'Fatih Kaya', action: 'Çıkış Yaptı', time: '18:30', status: 'info' },
  { name: 'Selin Demir', action: 'Anomali Tespiti', time: '14:22', status: 'warning' },
  { name: 'Mehmet Öz', action: 'Giriş Yaptı', time: '08:15', status: 'success' },
  { name: 'Ayşe Şahin', action: 'İzin Başladı', time: '07:00', status: 'info' },
];

const menuItems = [
  { label: 'Dashboard', icon: BarChart3, href: '/dashboard' },
  { label: 'Personel', icon: Users, href: '/dashboard' },
  { label: 'Güvenlik', icon: Shield, href: '/security' },
  { label: 'Raporlar', icon: TrendingUp, href: '/dashboard' },
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} border-r border-slate-800 bg-slate-900/50 transition-all duration-300`}>
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-sky-600"></div>
              <span className="font-semibold">Veridora</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 hover:bg-slate-800">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-slate-800 bg-slate-900/30">
          <div className="flex items-center justify-between px-8 py-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400">Ana Sayfa</p>
              <h1 className="mt-1 text-3xl font-semibold">Kontrol Paneli</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="rounded-lg bg-sky-500 px-6 py-2 text-sm font-medium transition hover:bg-sky-400"
              >
                Dashboard'a Git
              </Link>
              <button className="rounded-lg p-2 hover:bg-slate-800">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{stat.change}</p>
                    </div>
                    <div className={`rounded-lg p-3 ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts and Activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Chart Placeholder */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold">Haftalık Aktivite</h2>
              <div className="mt-6 flex h-64 items-end justify-around gap-4 bg-gradient-to-b from-slate-800/20 to-transparent rounded-lg p-4">
                {[65, 78, 92, 88, 75, 85, 95].map((height, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-8 rounded-t-lg bg-gradient-to-t from-sky-500 to-sky-400 transition hover:from-sky-400 hover:to-sky-300"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-slate-500">{'PAZTTÇP'[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="text-lg font-semibold">Son Aktiviteler</h2>
              <div className="mt-4 space-y-4">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0">
                    <div>
                      <p className="text-sm font-medium">{activity.name}</p>
                      <p className="text-xs text-slate-500">{activity.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">{activity.time}</p>
                      <div className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${
                        activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                        activity.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6">
            <p className="text-sm text-sky-300">
              <strong>Demo Modunda:</strong> Bu panel örnek verilerle çalışmaktadır. Gerçek verileri görmek için sisteme giriş yapın ve Dashboard panelini ziyaret edin.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
