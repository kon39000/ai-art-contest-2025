'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-pacifico">
          さあ、始めよう！
        </h2>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          あなたの想像力で世界を変える<br />
          素晴らしいアート作品を作りませんか？
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a href="https://forms.gle/WG1eDSDFEZPnbSbV9" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
            今すぐ応募する
          </a>
          <Link href="/terms" className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
            応募規約を確認
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
            お問い合わせ
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">8月24日</div>
            <div className="text-lg opacity-90">応募締切</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">無料</div>
            <div className="text-lg opacity-90">参加費</div>
          </div>
        </div>
      </div>
    </section>
  );
}