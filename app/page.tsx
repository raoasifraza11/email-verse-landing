import HeroSection from '@/components/home/HeroSection'
import FeaturesOverview from '@/components/home/FeaturesOverview'
import CompanyLogos from '../components/home/CompanyLogos'
import FreeToolsSection from '@/components/home/FreeToolsSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

// Curved Separator Component
const CurvedSeparator = ({
  topColor = "white",
  bottomColor = "primary-50",
  flip = false
}: {
  topColor?: "white" | "primary-50" | "primary-600" | "gray-50",
  bottomColor?: "primary-50" | "white" | "primary-600" | "gray-50" | "primary-700",
  flip?: boolean
}) => {
  const bgClasses: Record<string, string> = {
    "white": "bg-white",
    "primary-50": "bg-primary-50",
    "primary-600": "bg-primary-600",
    "gray-50": "bg-gray-50",
  };

  const textClasses: Record<string, string> = {
    "white": "text-white",
    "primary-50": "text-primary-50",
    "primary-600": "text-primary-600",
    "gray-50": "text-gray-50",
    "primary-700": "text-primary-700",
  };

  return (
    <div className={`relative h-20 ${bgClasses[topColor] || 'bg-white'}`}>
      <svg
        className={`absolute ${flip ? 'top-0' : 'bottom-0'} w-full h-20 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="currentColor"
          className={textClasses[bottomColor] || 'text-primary-50'}
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="currentColor"
          className={textClasses[bottomColor] || 'text-primary-50'}
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
          className={textClasses[bottomColor] || 'text-primary-50'}
        />
      </svg>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Curved Separator: White to Light Green */}
      <CurvedSeparator topColor="white" bottomColor="primary-50" />

      {/* Features Overview */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50">
        <FeaturesOverview />
      </div>

      {/* Curved Separator: Light Green to White */}
      <CurvedSeparator topColor="primary-50" bottomColor="white" flip={true} />

      {/* Free Tools Section */}
      <div className="bg-white">
        <FreeToolsSection />
      </div>

      {/* Company Logos Section */}
      <CompanyLogos />

      {/* Curved Separator: White to Green */}
      <CurvedSeparator topColor="white" bottomColor="primary-600" />

      {/* Stats Section */}
      <StatsSection />

      {/* Curved Separator: Green to Light */}
      <CurvedSeparator topColor="primary-600" bottomColor="gray-50" flip={true} />

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-50 to-primary-50">
        <TestimonialsSection />
      </div>

      {/* Curved Separator: Light to Dark Green */}
      <CurvedSeparator topColor="gray-50" bottomColor="primary-700" />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}