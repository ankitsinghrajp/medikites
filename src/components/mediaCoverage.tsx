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
    fallbackText: 'TPTV'
  },
  {
    id: 2,
    name: 'Hindustan Bytes',
    logo: HindustanBytes,
    url: 'https://www.hindustanbytes.com/medikites-revolutionising-home-healthcare-throughout-india',
    alt: 'Featured in Hindustan Bytes',
    fallbackText: 'Hindustan Bytes'
  },
  {
    id: 3,
    name: 'Entrepreneur Hunt',
    logo: EntrepreneurHunt ,
    url: 'https://entrepreneurhunt.com/tag/medikites',
    alt: 'Featured in Entrepreneur Hunt',
    fallbackText: 'Entrepreneur Hunt'
  },
  {
    id: 4,
    name: 'Punjab Bytes',
    logo: PunjabBytes,
    url: 'https://english.punjabbytes.com/tag/medikites',
    alt: 'Featured in Punjab Bytes',
    fallbackText: 'Punjab Bytes'
  },
  {
    id: 5,
    name: 'The Daily Beat',
    logo: TheDailyBeat,
    url: 'https://thedailybeat.in/tag/medikites',
    alt: 'Featured in The Daily Beat',
    fallbackText: 'The Daily Beat'
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
const MediaCoverage = () => {
  // Create seamless loop by tripling the array
  const infiniteLogos = [...mediaCoverage, ...mediaCoverage, ...mediaCoverage];

  return (
    <section className="relative bg-white border-y border-gray-100 overflow-hidden">
      <div className="py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* ===== HEADING ===== */}
          <div className="text-center mb-8">
            <h2 className="text-xs lg:text-sm font-bold text-gray-500 uppercase tracking-[0.15em] mb-1">
              As Seen In
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300" />
              <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-300" />
            </div>
          </div>

          {/* ===== LOGO SLIDER ===== */}
          <div className="relative slider-wrapper">
            
            {/* Edge Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <div className="logo-track inline-flex gap-8 lg:gap-16">
                {infiniteLogos.map((media, index) => (
                  <LogoCard key={`${media.id}-${index}`} media={media} />
                ))}
              </div>
            </div>
          </div>

          {/* ===== TRUST CAPTION ===== */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 font-medium">
              Trusted healthcare innovation featured across leading Indian media
            </p>
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

        .logo-track {
          animation: slideLeft 50s linear infinite;
          will-change: transform;
        }

        /* Pause on hover */
        .slider-wrapper:hover .logo-track {
          animation-play-state: paused;
        }

        /* Mobile: Faster scroll */
        @media (max-width: 768px) {
          .logo-track {
            animation-duration: 35s;
          }
        }

        /* Smooth rendering */
        .logo-track {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
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
      className="flex-shrink-0 group block"
      aria-label={`Read ${media.name} article about Medikites`}
    >
      <div className="relative h-14 lg:h-16 w-32 lg:w-44 flex items-center justify-center">
        
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-cyan-300 group-hover:shadow-md transition-all duration-300" />
        
        {/* Content */}
        <div className="relative z-10 px-4 py-2 flex items-center justify-center w-full h-full">
          
          {/* Show logo image if available and loaded */}
          {!imageError ? (
            <img
              src={media.logo}
              alt={media.alt}
              className="h-8 lg:h-10 w-auto max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            // Fallback text when image fails to load
            <div className="text-center">
              <p className="text-[10px] lg:text-xs font-bold text-gray-400 group-hover:text-gray-700 leading-tight transition-colors duration-300">
                {media.fallbackText}
              </p>
            </div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:via-emerald-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300 pointer-events-none" />
        
        {/* Corner Accent (subtle premium touch) */}
        <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-cyan-400/0 to-transparent group-hover:from-cyan-400/20 rounded-xl transition-all duration-300" />
      </div>
    </a>
  );
};

export default MediaCoverage;





