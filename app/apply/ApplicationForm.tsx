'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    guardianEmail: '',
    phone: '',
    title: '',
    description: '',
    inspiration: '',
    category: '',
    agreeTerms: false,
    agreePrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      setSubmitStatus('利用規約とプライバシーポリシーに同意してください。');
      return;
    }

    if (formData.description.length > 500) {
      setSubmitStatus('作品の説明は500文字以内で入力してください。');
      return;
    }

    if (formData.inspiration.length > 500) {
      setSubmitStatus('制作のきっかけは500文字以内で入力してください。');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('応募を受け付けています...');

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          age: formData.age,
          email: formData.email,
          guardianEmail: formData.guardianEmail,
          phone: formData.phone,
          title: formData.title,
          description: formData.description,
          inspiration: formData.inspiration,
          category: formData.category,
          agreeTerms: formData.agreeTerms.toString(),
          agreePrivacy: formData.agreePrivacy.toString()
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('応募が完了しました！ご参加ありがとうございます。');
        setFormData({
          name: '',
          age: '',
          email: '',
          guardianEmail: '',
          phone: '',
          title: '',
          description: '',
          inspiration: '',
          category: '',
          agreeTerms: false,
          agreePrivacy: false
        });
      } else {
        setSubmitStatus('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      setSubmitStatus('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 cursor-pointer">
          <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
          トップページに戻る
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          AIアートコンテスト応募フォーム
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          あなたの素晴らしい作品をお待ちしています！<br />
          すべての項目をご記入の上、ご応募ください。
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form id="ai-art-contest-form" onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                お名前 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-lg font-semibold text-gray-700 mb-2">
                年齢 *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="1"
                max="100"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
                placeholder="15"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
              メールアドレス *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="guardianEmail" className="block text-lg font-semibold text-gray-700 mb-2">
              保護者のメールアドレス（18歳未満の場合）
            </label>
            <input
              type="email"
              id="guardianEmail"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
              placeholder="guardian@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
              placeholder="090-1234-5678"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
              作品タイトル *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm"
              placeholder="宇宙の花園"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
              作品カテゴリー *
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm pr-8 appearance-none cursor-pointer"
              >
                <option value="">カテゴリーを選択してください</option>
                <option value="fantasy">ファンタジー</option>
                <option value="nature">自然・風景</option>
                <option value="space">宇宙・SF</option>
                <option value="animal">動物</option>
                <option value="abstract">抽象アート</option>
                <option value="character">キャラクター</option>
                <option value="other">その他</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">
              作品の説明 * (500文字以内)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              maxLength={500}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm resize-none"
              placeholder="この作品のテーマや表現したかったことを教えてください..."
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.description.length}/500文字
            </div>
          </div>

          <div>
            <label htmlFor="inspiration" className="block text-lg font-semibold text-gray-700 mb-2">
              制作のきっかけ・アイデアの源 (500文字以内)
            </label>
            <textarea
              id="inspiration"
              name="inspiration"
              value={formData.inspiration}
              onChange={handleInputChange}
              maxLength={500}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-sm resize-none"
              placeholder="この作品を作ろうと思ったきっかけや、どこからアイデアを得たかを教えてください..."
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.inspiration.length}/500文字
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="ri-upload-line text-yellow-600 w-6 h-6 flex items-center justify-center"></i>
              作品アップロード
            </h3>
            <p className="text-gray-600 mb-4">
              作品画像は後日、受賞者にのみアップロード方法をご案内いたします。<br />
              まずはこちらのフォームでご応募ください。
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 text-center">
              <i className="ri-image-line text-gray-400 text-4xl w-12 h-12 flex items-center justify-center mx-auto mb-2"></i>
              <p className="text-gray-500">作品アップロード: 後日ご案内</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                required
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="text-gray-700 cursor-pointer">
                <Link href="/terms" className="text-purple-600 hover:underline cursor-pointer">利用規約</Link>に同意します *
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreePrivacy"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleInputChange}
                required
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="agreePrivacy" className="text-gray-700 cursor-pointer">
                <Link href="/privacy" className="text-purple-600 hover:underline cursor-pointer">プライバシーポリシー</Link>に同意します *
              </label>
            </div>
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? '送信中...' : '応募する'}
            </button>
          </div>

          {submitStatus && (
            <div className={`text-center p-4 rounded-xl ${submitStatus.includes('完了') ? 'bg-green-50 text-green-800 border border-green-200' : submitStatus.includes('失敗') || submitStatus.includes('同意') || submitStatus.includes('文字以内') ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}`}>
              {submitStatus}
            </div>
          )}
        </form>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-3 text-gray-800">ご質問・お問い合わせ</h3>
          <p className="text-gray-600 mb-4">
            応募に関してご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="ri-mail-line w-5 h-5 flex items-center justify-center"></i>
            お問い合わせフォーム
          </Link>
        </div>
      </div>
    </div>
  );
}