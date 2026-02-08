import React from 'react';
import TPTV from "../assets/media-coverage/TPTV_logo.png";
import HindustanBytes from "../assets/media-coverage/HindustanBytes.png";
import EntrepreneurHunt from "../assets/media-coverage/EntreprenuerHut.png";
import PunjabBytes from "../assets/media-coverage/PunjabBytes.png";
import TheDailyBeat from "../assets/media-coverage/TheDailyBeat.png";

const mediaCoverage = [
  {
    id: 1,
    name: 'TPTV',
    logo: TPTV,
    url: 'https://tptv.in/medikites-revolutionising-home-healthcare-throughout-india',
    alt: 'Featured on TPTV News',
    fallbackText: 'TPTV',
    accentColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Hindustan Bytes',
    logo: HindustanBytes,
    url: 'https://www.hindustanbytes.com/medikites-revolutionising-home-healthcare-throughout-india',
    alt: 'Featured in Hindustan Bytes',
    fallbackText: 'Hindustan Bytes',
    accentColor: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    name: 'Entrepreneur Hunt',
    logo: EntrepreneurHunt,
    url: 'https://entrepreneurhunt.com/tag/medikites',
    alt: 'Featured in Entrepreneur Hunt',
    fallbackText: 'Entrepreneur Hunt',
    accentColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    name: 'Punjab Bytes',
    logo: PunjabBytes,
    url: 'https://english.punjabbytes.com/tag/medikites',
    alt: 'Featured in Punjab Bytes',
    fallbackText: 'Punjab Bytes',
    accentColor: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    name: 'The Daily Beat',
    logo: TheDailyBeat,
    url: 'https://thedailybeat.in/tag/medikites',
    alt: 'Featured in The Daily Beat',
    fallbackText: 'The Daily Beat',
    accentColor: 'from-indigo-500 to-blue-500'
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
const MediaCoverage = () => {
  // Create seamless loop by tripling the array
  const infiniteLogos = [...mediaCoverage, ...mediaCoverage, ...mediaCoverage];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative pt-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* ===== HEADING ===== */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-100 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
              <span className="text-xs lg:text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
                Media Coverage
              </span>
            </div>
              
            <p className="text-sm lg:text-base text-slate-600 max-w-2xl mx-auto">
              Recognized by India's top media outlets for revolutionizing home healthcare
            </p>
          </div>

          {/* ===== LOGO SLIDER ===== */}
          <div className="relative slider-wrapper">

            {/* Scrolling Container */}
            <div className="overflow-hidden py-4">
              <div className="logo-track inline-flex gap-6 lg:gap-8">
                {infiniteLogos.map((media, index) => (
                  <LogoCard key={`${media.id}-${index}`} media={media} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== INLINE CSS (Scoped Animations) ===== */}
      <style jsx>{`
        /* Infinite Scroll Animation */
        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        /* Mobile First: Faster scroll */
        .logo-track {
          animation: slideLeft 30s linear infinite;
          will-change: transform;
        }

        /* Desktop: Slower scroll */
        @media (min-width: 768px) {
          .logo-track {
            animation-duration: 45s;
          }
        }

        /* Pause on hover */
        .slider-wrapper:hover .logo-track {
          animation-play-state: paused;
        }

        /* Smooth rendering */
        .logo-track {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

// ==========================================
// LOGO CARD COMPONENT
// ==========================================
const LogoCard = ({ media }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <a
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 group block transform transition-all duration-300 hover:-translate-y-1"
      aria-label={`Read ${media.name} article about Medikites`}
    >
      <div className="relative h-20 lg:h-24 w-40 lg:w-52">
        
        {/* Card Background with Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-transparent" />
        
        {/* Animated Gradient Border on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${media.accentColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]`}>
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-6 py-4 flex items-center justify-center w-full h-full">
          
          {/* Show logo image if available and loaded */}
          {!imageError ? (
            <img
              src={media.logo}
              alt={media.alt}
              className="h-10 lg:h-12 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            // Fallback text when image fails to load
            <div className="text-center">
              <p className="text-xs lg:text-sm font-bold text-slate-700 group-hover:text-slate-900 leading-tight transition-colors duration-300">
                {media.fallbackText}
              </p>
            </div>
          )}
        </div>

        {/* Subtle Shine Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </div>
        
        {/* Corner Accent Dot */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${media.accentColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent" />
        </div>
      </div>
    </a>
  );
};

export default MediaCoverage;