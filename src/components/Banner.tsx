
import { Button } from '@/components/ui/button';

interface BannerProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export const Banner = ({ title, subtitle, image, buttonText, buttonLink }: BannerProps) => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-white/90 text-base md:text-lg mb-8">{subtitle}</p>
          <Button size="lg" asChild>
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
