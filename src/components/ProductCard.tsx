
import { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isDiscounted?: boolean;
}

export const ProductCard = ({
  id,
  name,
  category,
  price,
  oldPrice,
  rating,
  image,
  isNew = false,
  isDiscounted = false
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product image with badges */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-green-600">Новинка</Badge>
          )}
          {isDiscounted && (
            <Badge className="bg-red-600">Скидка</Badge>
          )}
        </div>
        
        {/* Wishlist button */}
        <button 
          className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            size={18} 
            className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"} 
          />
        </button>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
        </div>
        
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10">{name}</h3>
        
        <div className="flex items-end gap-2 mb-3">
          <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">{oldPrice.toLocaleString()} ₽</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button className="w-full text-sm py-1.5 h-auto">
            <ShoppingCart size={16} className="mr-1" />
            В корзину
          </Button>
          <Button variant="outline" className="px-2 py-1.5 h-auto">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
