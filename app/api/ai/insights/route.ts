import { NextResponse } from 'next/server';

export async function GET() {
  const insights = {
    summary: 'AI güvenlik analizi: normal akışta, iki kritik uyarı izleniyor.',
    riskScore: 34,
    recommendations: [
      'Yetkili erişim pencerelerini güncelleyin.',
      'Gece vardiyası için ek kamera izleme planlayın.',
      'Şüpheli giriş davranışlarını günlük raporlamaya ekleyin.',
    ],
  };

  return NextResponse.json(insights);
}

export async function POST(request: Request) {
  const body = await request.json();
  const employeeCount = Number(body?.employeeCount ?? 0);
  const riskScore = Math.min(100, 20 + employeeCount * 2);

  return NextResponse.json({
    summary: 'AI tabanlı öneri üretildi.',
    riskScore,
    recommendations: [
      'Giriş noktalarına ek kontrol ekleyin.',
      `Toplam ${employeeCount} personel için erişim izni kontrolü yapın.`,
    ],
  });
}
