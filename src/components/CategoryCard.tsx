
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  icon?: React.ReactNode;
}

export const CategoryCard = ({ title, image, count, icon }: CategoryCardProps) => {
  return (
    <a 
      href="#" 
      className="relative overflow-hidden rounded-lg group border border-gray-200 transition-all hover:shadow-md"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-bold text-xl">{title}</h3>
            {icon && (
              <div className="bg-white rounded-full p-2">
                {icon}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">{count} товаров</span>
            <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
              Смотреть все
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
