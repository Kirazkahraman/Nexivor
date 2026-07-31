'use client';

import Link from 'next/link';
import { BarChart3, Shield, Users, Clock, AlertCircle, TrendingUp, Settings, Bell, Globe, Sun, Moon, LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { label: 'Aktif Personel', value: '156', change: '+12%', trend: 'up', icon: Users, color: 'bg-blue-500/10 text-blue-400' },
  { label: 'Güvenlik Olayı', value: '3', change: '-8%', trend: 'down', icon: AlertCircle, color: 'bg-red-500/10 text-red-400' },
  { label: 'Saat Ortalaması', value: '8.5h', change: '+2%', trend: 'up', icon: Clock, color: 'bg-green-500/10 text-green-400' },
  { label: 'Sistem Sağlığı', value: '99.8%', change: 'Stabil', trend: 'stable', icon: Shield, color: 'bg-purple-500/10 text-purple-400' },
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
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} border-r border-slate-800 bg-slate-900/50 transition-all duration-300 flex flex-col`}>
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500"></div>
              <span className="font-semibold">Veridora</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 hover:bg-slate-800">
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <nav className="flex-1 space-y-2 p-4">
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
        {sidebarOpen && (
          <div className="border-t border-slate-800 p-4">
            <Link href="/login" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm hover:bg-slate-800">
              <LogOut className="h-4 w-4" />
              Çıkış Yap
            </Link>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="border-b border-slate-800 bg-slate-900/30 backdrop-blur">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400">Anasayfa</p>
              <h1 className="mt-1 text-2xl font-semibold">Kontrol Paneli</h1>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex">
                <input
                  type="text"
                  placeholder="Ara..."
                  className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm outline-none focus:border-sky-500"
                />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-lg p-2 hover:bg-slate-800"
                title="Tema"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-800"
                  title="Dil"
                >
                  <Globe className="h-5 w-5" />
                  <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-32 rounded-lg border border-slate-700 bg-slate-800 shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition hover:bg-slate-700 ${
                          language === lang.code ? 'text-sky-400' : ''
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Notifications */}
              <button className="relative rounded-lg p-2 hover:bg-slate-800">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-800"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center">
                    <span className="text-sm font-bold">M</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-800 shadow-lg z-50">
                    <div className="px-4 py-3 border-b border-slate-700">
                      <p className="font-semibold">Mehmet Öz</p>
                      <p className="text-xs text-slate-400">mehmet@veridora.dev</p>
                    </div>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-700 flex items-center gap-2">
                      <Settings className="h-4 w-4" /> Ayarlar
                    </button>
                    <Link href="/dashboard" className="w-full text-left px-4 py-2 text-sm hover:bg-slate-700 block">
                      Dashboard
                    </Link>
                    <hr className="border-slate-700" />
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-700 text-red-400">
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-8">
          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                      <p className={`mt-1 text-xs ${stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-slate-500'}`}>
                        {stat.change}
                      </p>
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
            {/* Weekly Chart */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Haftalık Aktivite</h2>
                <select className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm">
                  <option>Bu Ay</option>
                  <option>Geçen Ay</option>
                  <option>Bu Yıl</option>
                </select>
              </div>
              <div className="flex h-64 items-end justify-around gap-4 bg-gradient-to-b from-slate-800/20 to-transparent rounded-lg p-4">
                {[65, 78, 92, 88, 75, 85, 95].map((height, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-sky-500 to-sky-400 transition hover:from-sky-400 hover:to-sky-300"
                      style={{ height: `${height * 2}px` }}
                    ></div>
                    <span className="text-xs text-slate-500">{'PAZTTÇP'[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center justify-between pb-3 border-b border-slate-800/50 last:border-0">
                    <div>
                      <p className="text-sm font-medium">{activity.name}</p>
                      <p className="text-xs text-slate-500">{activity.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">{activity.time}</p>
                      <div className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-medium ${
                        activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                        activity.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {activity.status === 'success' ? '✓' : activity.status === 'warning' ? '⚠' : 'ℹ'}
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
              <strong>ℹ️ Demo Modu:</strong> Bu panel örnek verilerle çalışmaktadır. Gerçek verileri görmek için sisteme giriş yapın.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
