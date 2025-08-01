'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://readdy.ai/api/search-image?query=Magical%20children%20art%20contest%20scene%20with%20colorful%20paintbrushes%20floating%20in%20the%20air%2C%20rainbow%20colors%20splashing%20across%20a%20dreamy%20sky%20background%2C%20artistic%20paint%20splatters%20creating%20beautiful%20patterns%2C%20whimsical%20and%20inspiring%20atmosphere%20perfect%20for%20young%20artists%2C%20vibrant%20but%20soft%20lighting&width=1200&height=800&seq=hero001&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-pacifico bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            AI Art Contest
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            未来のアーティストたちへ
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            AIと一緒に作る、世界でひとつだけのアート作品。<br />
            君の想像力で素晴らしい作品を生み出そう！
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="https://forms.gle/WG1eDSDFEZPnbSbV9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
            今すぐ応募する
          </a>
          <Link href="#about" className="border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
            詳細を見る
          </Link>
        </div>

        <div className="flex justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-calendar-line w-5 h-5 flex items-center justify-center"></i>
            <span>応募締切: 2025年8月24日</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-trophy-line w-5 h-5 flex items-center justify-center"></i>
            <span>豪華賞品をご用意</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-group-line w-5 h-5 flex items-center justify-center"></i>
            <span>全年齢対象</span>
          </div>
        </div>
      </div>
    </section>
  );
}