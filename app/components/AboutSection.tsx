'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AIアートコンテストとは？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            最新のAI技術を使って、あなただけのオリジナルアート作品を作るコンテストです。
            プログラミングの知識は不要！アイデアと想像力だけで参加できます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-lightbulb-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">アイデアを入力</h3>
            <p className="text-gray-600 leading-relaxed">
              あなたの頭の中にある素晴らしいアイデアを文章で表現してください。どんな絵を描きたいか、詳しく教えてください。
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-magic-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">AIが作品を生成</h3>
            <p className="text-gray-600 leading-relaxed">
              最新のAI技術があなたのアイデアを美しいアート作品に変換します。まるで魔法のような体験をお楽しみください。
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-trophy-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">コンテストに応募</h3>
            <p className="text-gray-600 leading-relaxed">
              完成した作品をコンテストに応募しましょう。素晴らしい賞品と認知度アップのチャンスが待っています。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">誰でも参加可能！</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
                  <span>年齢制限なし（保護者の同意が必要な場合があります）</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
                  <span>プログラミング知識不要</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
                  <span>参加費完全無料</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
                  <span>世界中どこからでも参加OK</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20diverse%20children%20of%20different%20ages%20creating%20colorful%20digital%20art%20together%2C%20smiling%20and%20excited%20about%20technology%20and%20creativity%2C%20modern%20bright%20classroom%20setting%20with%20tablets%20and%20digital%20art%20tools%2C%20inspiring%20educational%20atmosphere&width=500&height=400&seq=about001&orientation=landscape"
                alt="子どもたちがデジタルアートを作成している様子"
                className="rounded-xl shadow-lg w-full h-64 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}