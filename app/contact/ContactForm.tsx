'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('お問い合わせ内容は500文字以内で入力してください。');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('送信中...');

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('お問い合わせを受け付けました。ご連絡ありがとうございます。');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          お問い合わせ
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          AIアートコンテストに関するご質問やご不明な点がございましたら、<br />
          お気軽にお問い合わせください。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-question-line text-blue-500 w-8 h-8 flex items-center justify-center"></i>
            よくある質問
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Q. 参加費はかかりますか？</h3>
              <p className="text-gray-600 text-sm">A. 参加費は完全無料です。どなたでもお気軽にご参加いただけます。</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Q. 年齢制限はありますか？</h3>
              <p className="text-gray-600 text-sm">A. 年齢制限はありません。どなたでもご参加いただけます。</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Q. 複数作品の応募はできますか？</h3>
              <p className="text-gray-600 text-sm">A. 1人1作品までとなっております。</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Q. 結果発表はいつですか？</h3>
              <p className="text-gray-600 text-sm">A. 2025年8月30日にYouTubeライブで発表予定です。</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <i className="ri-mail-line text-green-500 w-8 h-8 flex items-center justify-center"></i>
            連絡先情報
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="ri-mail-line text-blue-500 w-6 h-6 flex items-center justify-center mt-1"></i>
              <div>
                <p className="font-semibold text-gray-800">メール</p>
                <p className="text-gray-600">info@nft-orchestra.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-time-line text-green-500 w-6 h-6 flex items-center justify-center mt-1"></i>
              <div>
                <p className="font-semibold text-gray-800">対応時間</p>
                <p className="text-gray-600">平日 10:00-18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-calendar-line text-purple-500 w-6 h-6 flex items-center justify-center mt-1"></i>
              <div>
                <p className="font-semibold text-gray-800">応募期間</p>
                <p className="text-gray-600">2025年8月1日 - 8月24日</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          お問い合わせ
        </h2>
        
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            コンテストに関するご質問やご不明な点がございましたら、<br />
            下記のメールアドレスまでお気軽にお問い合わせください。
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <i className="ri-mail-line text-blue-500 text-2xl w-8 h-8 flex items-center justify-center"></i>
              <span className="text-lg font-semibold text-gray-800">メールでお問い合わせ</span>
            </div>
            <a 
              href="mailto:info@nft-orchestra.com?subject=AIアートコンテストに関するお問い合わせ"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              info@nft-orchestra.com
            </a>
          </div>
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>● 上記リンクをクリックすると、お使いのメールアプリが起動します</p>
            <p>● 平日 10:00-18:00 にお返事いたします</p>
          </div>
        </div>
      </div>
    </div>
  );
}