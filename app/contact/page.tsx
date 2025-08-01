import ContactForm from './ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "お問い合わせ | AIアートコンテスト2025",
  description: "AIアートコンテスト2025に関するご質問やお問い合わせはこちらから。よくある質問もご確認いただけます。",
  openGraph: {
    title: "お問い合わせ | AIアートコンテスト2025",
    description: "AIアートコンテスト2025に関するご質問やお問い合わせはこちらから。よくある質問もご確認いただけます。",
    images: ["/ogp-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <ContactForm />
    </div>
  );
}