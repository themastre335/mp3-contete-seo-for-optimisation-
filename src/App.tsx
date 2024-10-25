import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { ConverterForm } from './components/ConverterForm';
import { FeatureGrid } from './components/FeatureGrid';
import { LanguageSelector } from './components/LanguageSelector';
import { SEOContent } from './components/SEOContent';
import { useLanguage } from './contexts/LanguageContext';
import { convertVideo } from './lib/api';

interface VideoDetails {
  title: string;
  thumbnail: string;
  duration: string;
  channelTitle: string;
  publishedAt: string;
}

function App() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState('');
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);

  const handleConvert = async (url: string) => {
    try {
      setLoading(true);
      setError('');
      setVideoDetails(null);
      const result = await convertVideo(url);
      setDownloadUrl(result.downloadUrl);
      setVideoDetails(result.videoDetails);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t('error');
      setError(errorMessage);
      setDownloadUrl('');
      setVideoDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('seoTitle')}</title>
        <meta name="description" content={t('seoDescription')} />
        <meta name="keywords" content="youtube to mp3, youtube converter, mp3 converter, youtube to mp3 converter, youtube mp3 download, yt to mp3, youtube audio download" />
        <meta property="og:title" content={t('seoTitle')} />
        <meta property="og:description" content={t('seoDescription')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seoTitle')} />
        <meta name="twitter:description" content={t('seoDescription')} />
        <link rel="canonical" href={`${window.location.origin}/${t('language')}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          
          <Header />
          
          <ConverterForm
            onSubmit={handleConvert}
            loading={loading}
            downloadUrl={downloadUrl}
            videoDetails={videoDetails}
            error={error}
          />

          <FeatureGrid />
          
          <SEOContent />
        </div>
      </div>
    </>
  );
}

export default App;