import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "応募規約・参加条件 | AIアートコンテスト2025",
  description: "AIアートコンテスト2025の詳細な応募条件と規約。参加資格、作品要件、著作権、禁止事項について説明しています。",
  openGraph: {
    title: "応募規約・参加条件 | AIアートコンテスト2025",
    description: "AIアートコンテスト2025の詳細な応募条件と規約。参加資格、作品要件、著作権、禁止事項について説明しています。",
    images: ["/ogp-image.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 cursor-pointer">
            <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
            トップページに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            応募規約・参加条件
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AIアートコンテスト2025の詳細な応募条件と規約をご確認ください。
          </p>
        </div>

        {/* テーマセクション */}
        <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 p-8 rounded-2xl mb-8 text-center border-2 border-orange-300">
          <div className="mb-4">
            <i className="ri-lightbulb-fill text-orange-500 text-4xl w-12 h-12 flex items-center justify-center mx-auto mb-4"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            📝 コンテストテーマ
          </h2>
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

        {/* 参加資格 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-user-check-line text-green-500 w-8 h-8 flex items-center justify-center"></i>
            参加資格
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>年齢制限なし（どなたでもご参加いただけます）</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>個人での参加のみ（グループ作品は対象外）</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>生成AIを使用した作品であること</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>本イベントの趣旨に沿った作品であること</span>
            </li>
          </ul>
        </div>

        {/* 作品要件 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-image-line text-blue-500 w-8 h-8 flex items-center justify-center"></i>
            作品要件
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span><strong>テーマ：</strong>「暑さを忘れる魔法みたいなテクノロジー」</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span><strong>画像形式：</strong>1:1のアスペクト比でPNGまたはJPEG形式</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span><strong>ファイルサイズ：</strong>画像の容量は4MB以下</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span><strong>応募点数：</strong>1人1作品まで</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span><strong>編集について：</strong>生成AIで制作した画像に他のソフトウェアで軽微な修正を行うことは可能</span>
            </li>
          </ul>
        </div>

        {/* 著作権・利用権 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-copyright-line text-purple-500 w-8 h-8 flex items-center justify-center"></i>
            著作権・利用権
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>作品の著作権は応募者に帰属します</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>主催者は広報・宣伝目的で作品を使用する権利を有します</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>応募作品はYouTubeやSNSで公開される可能性があります</span>
            </li>
          </ul>
        </div>

        {/* 禁止事項 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-forbid-line text-red-500 w-8 h-8 flex items-center justify-center"></i>
            禁止事項
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-close-line text-red-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>他者の著作物の無断使用・模倣</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-close-line text-red-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>公序良俗に反する表現</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-close-line text-red-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>AIを使用しない作品の提出</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-close-line text-red-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>著作権違反に触れるAIツールの使用</span>
            </li>
          </ul>
        </div>

        {/* 個人情報の取り扱い */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-shield-user-line text-green-500 w-8 h-8 flex items-center justify-center"></i>
            個人情報の取り扱い
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>コンテスト運営にのみ使用し、第三者への提供はいたしません</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>適切なセキュリティ対策のもと管理いたします</span>
            </li>
          </ul>
        </div>

        {/* 賞金・賞品 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-gift-line text-yellow-500 w-8 h-8 flex items-center justify-center"></i>
            賞金・賞品
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">金賞</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">10,000円</p>
              <p className="text-sm text-gray-600">Amazonギフトカード</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">銀賞</h3>
              <p className="text-2xl font-bold text-gray-600 mb-2">5,000円</p>
              <p className="text-sm text-gray-600">Amazonギフトカード</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">銅賞</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">3,000円</p>
              <p className="text-sm text-gray-600">Amazonギフトカード</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">入賞（2名）</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">1,000円</p>
              <p className="text-sm text-gray-600">Amazonギフトカード</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4">
            入賞者にはAmazonギフト券で贈呈いたします
          </p>
        </div>

        {/* 失格・取り消し */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-alarm-warning-line text-orange-500 w-8 h-8 flex items-center justify-center"></i>
            失格・取り消し
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <i className="ri-alert-line text-orange-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>規約違反が判明した場合、入賞を取り消す場合があります</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-alert-line text-orange-500 w-5 h-5 flex items-center justify-center mt-1"></i>
              <span>虚偽の情報で応募された場合も同様です</span>
            </li>
          </ul>
        </div>

        {/* 規約の同意 */}
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-8 rounded-2xl text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">規約の同意</h2>
          <p className="text-lg text-gray-700 mb-6">
            応募をもって本規約に同意したものとみなします。<br />
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/WG1eDSDFEZPnbSbV9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              今すぐ応募する
            </a>
            <Link href="/contact" className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* スケジュール */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-calendar-event-line text-blue-500 w-8 h-8 flex items-center justify-center"></i>
            重要な日程
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <strong className="text-gray-800">応募開始:</strong>
                <span className="text-gray-600 ml-2">2025年8月1日</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div>
                <strong className="text-gray-800">応募締切:</strong>
                <span className="text-gray-600 ml-2">2025年8月24日 23:59</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <strong className="text-gray-800">審査期間:</strong>
                <span className="text-gray-600 ml-2">2025年8月25日〜8月29日</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div>
                <strong className="text-gray-800">結果発表:</strong>
                <span className="text-gray-600 ml-2">2025年8月30日（YouTubeライブ配信）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}