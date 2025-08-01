
'use client';

import Link from 'next/link';

export default function GallerySection() {
  const artworks = [
    {
      title: "『未来の空を彩る夏休み』",
      artist: "ショウさん",
      description: "空を美しく彩る未来的な夏休みの風景",
      image: "/images/gallery/syou.png",
      award: "金賞"
    },
    {
      title: "『ボクの自由研究』",
      artist: "tadaoさん",
      description: "子どもの想像力あふれる夏休み研究の世界",
      image: "/images/gallery/tadao.jpg",
      award: "銀賞"
    },
    {
      title: "『デジタル化ドライブで安全な海旅へ』",
      artist: "ひとのなさん",
      description: "テクノロジーで安全に楽しむ夏の海旅",
      image: "/images/gallery/hitonona.jpeg",
      award: "銅賞"
    },
    {
      title: "『夏休み中に友だちと空中サイクリング』",
      artist: "にいなさん",
      description: "友情と冷しさを感じる空中サイクリングの冒険",
      image: "/images/gallery/niina.png",
      award: "銅賞"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            過去の受賞作品
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            これまでのコンテストで生まれた素晴らしい作品たちをご紹介します。<br />
            あなたの作品も次回のギャラリーに登場するかもしれません！
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                  {artwork.award}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{artwork.title}</h3>
                <p className="text-purple-600 font-semibold mb-3">{artwork.artist}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center flex items-center justify-center gap-3">
            <i className="ri-play-circle-line text-red-500 w-8 h-8 flex items-center justify-center"></i>
            前回の結果発表ライブ
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/_mbNA8ClXec"
                title="AIアートコンテスト結果発表ライブ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4 leading-relaxed">
              前回のコンテスト結果発表の様子をご覧いただけます。<br />
              今回も同様にYouTubeライブで結果発表を行う予定です！
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">あなたの作品もここに展示されるかも！</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            素晴らしい作品は公式ギャラリーに永久展示され、多くの人に見てもらえます。<br />
            あなたの創造力を世界に向けて発信してみませんか？
          </p>
          <div className="flex justify-center">
            <a href="https://forms.gle/WG1eDSDFEZPnbSbV9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              今すぐ応募する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
