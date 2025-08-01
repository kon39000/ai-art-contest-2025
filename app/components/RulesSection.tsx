'use client';

import Link from 'next/link';

export default function RulesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            参加ルール
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            簡単なルールを守って、楽しくコンテストに参加しましょう。<br />
            分からないことがあれば、いつでもお気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 p-8 rounded-2xl mb-12 text-center border-2 border-orange-300">
          <div className="mb-4">
            <i className="ri-lightbulb-fill text-orange-500 text-4xl w-12 h-12 flex items-center justify-center mx-auto mb-4"></i>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            📝 コンテストテーマ
          </h3>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-orange-200">
            <p className="text-2xl md:text-3xl font-bold text-orange-800 mb-2">
              「暑さを忘れる魔法みたいなテクノロジー」
            </p>
            <p className="text-lg text-gray-700">
              暑い夏を涼しく快適に過ごせる未来の技術をイメージして<br />
              あなただけの魔法のような作品を作ってください！
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              <i className="ri-user-line text-green-500 w-8 h-8 flex items-center justify-center"></i>
              参加条件
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>年齢制限なし</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>生成AIを使用した作品</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>本イベントの趣旨に沿った作品</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>1人1作品まで</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              <i className="ri-image-line text-blue-500 w-8 h-8 flex items-center justify-center"></i>
              作品について
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>1:1のアスペクト比でPNGまたはJPEG形式</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>画像の容量は4MB以下</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>生成AIで制作した画像に軽微な修正はOK</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                <span>どの生成AIツールでも使用可能</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-trophy-line text-yellow-500 w-8 h-8 flex items-center justify-center"></i>
            審査基準
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">創造性</h4>
              <p className="text-sm text-gray-600">独創的でユニークなアイデア</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-palette-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">芸術性</h4>
              <p className="text-sm text-gray-600">美しさと表現力</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">技術性</h4>
              <p className="text-sm text-gray-600">AIツールの効果的な活用</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">魅力度</h4>
              <p className="text-sm text-gray-600">見る人の心を動かす力</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
          <h3 className="text-xl font-bold mb-3 text-red-800 flex items-center gap-2">
            <i className="ri-alert-line w-6 h-6 flex items-center justify-center"></i>
            注意事項
          </h3>
          <ul className="space-y-2 text-red-700 text-sm">
            <li>• 作品の著作権は応募者に帰属</li>
            <li>• 主催者は広報・宣伝目的で作品を使用する権利を有する</li>
            <li>• 他者の著作物の無断使用・模倣禁止</li>
            <li>• 応募作品はYouTubeやSNSで公開される可能性あり</li>
            <li>• 規約違反が判明した場合、入賞を取り消す場合あり</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-3">
            <i className="ri-file-text-line text-blue-500 w-8 h-8 flex items-center justify-center"></i>
            詳細な応募規約
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            参加資格、作品要件、著作権、禁止事項など<br />
            詳しい応募条件と規約はこちらをご確認ください。
          </p>
          <Link href="/terms" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
            詳細な規約を確認する
          </Link>
        </div>
      </div>
    </section>
  );
}