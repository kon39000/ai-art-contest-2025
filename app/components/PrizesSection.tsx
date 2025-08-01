'use client';

export default function PrizesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            豪華賞品をゲット！
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            優秀な作品には素晴らしい賞品をご用意しています。あなたの創造力を評価します！
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i className="ri-trophy-fill text-4xl w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">金賞</h3>
              <p className="text-4xl font-bold mb-4">1万円</p>
              <p className="text-sm opacity-90">最も創造的で美しい作品に贈られる最高賞</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/20 rounded-full translate-y-10 -translate-x-10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i className="ri-medal-fill text-4xl w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">銀賞</h3>
              <p className="text-4xl font-bold mb-4">5千円</p>
              <p className="text-sm opacity-90">優秀な作品に贈られる</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-2xl text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-18 h-18 bg-white/20 rounded-full -translate-y-9 translate-x-9"></div>
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-white/20 rounded-full translate-y-7 -translate-x-7"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i className="ri-award-fill text-4xl w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">銅賞</h3>
              <p className="text-4xl font-bold mb-4">3千円</p>
              <p className="text-sm opacity-90">優秀作品に贈られる</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 rounded-2xl text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-18 h-18 bg-white/20 rounded-full translate-y-9 -translate-x-9"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <i className="ri-star-fill text-4xl w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">入賞</h3>
              <p className="text-4xl font-bold mb-4">1千円</p>
              <p className="text-sm opacity-90">優秀作品2名に贈られる</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              <i className="ri-calendar-event-line text-green-500 w-8 h-8 flex items-center justify-center"></i>
              重要な日程
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <strong>応募開始:</strong> 2025年8月1日
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div>
                  <strong>応募締切:</strong> 2025年8月24日 23:59
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <strong>審査期間:</strong> 2025年8月25日～8月29日
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <strong>結果発表:</strong> 2025年8月30日（YouTubeライブ配信）
                </div>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}