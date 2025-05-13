
import { useState } from 'react';
import { Search, Menu, X, ShoppingCart, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Москва
            </span>
            <a href="#" className="hover:text-orange-200">Наши филиалы</a>
            <a href="#" className="hover:text-orange-200">Для партнеров</a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+78005558765" className="flex items-center gap-1">
              <Phone size={16} />
              8 (800) 555-87-65
            </a>
            <a href="#" className="hover:text-orange-200">Обратный звонок</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="mr-4 md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-red-600 flex items-center justify-center rounded-md">
                  <span className="text-white font-bold text-lg">TН</span>
                </div>
                <div className="font-bold text-xl text-primary">ТЕХНОНИКОЛЬ</div>
              </div>
            </a>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="font-medium text-sm hover:text-primary">О компании</a>
            <a href="#" className="font-medium text-sm hover:text-primary">Каталог</a>
            <a href="#" className="font-medium text-sm hover:text-primary">Решения</a>
            <a href="#" className="font-medium text-sm hover:text-primary">Сервисы</a>
            <a href="#" className="font-medium text-sm hover:text-primary">Контакты</a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full hidden md:flex">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-4 py-6">
              <a href="#" className="py-2 text-lg font-medium border-b border-gray-100">О компании</a>
              <a href="#" className="py-2 text-lg font-medium border-b border-gray-100">Каталог</a>
              <a href="#" className="py-2 text-lg font-medium border-b border-gray-100">Решения</a>
              <a href="#" className="py-2 text-lg font-medium border-b border-gray-100">Сервисы</a>
              <a href="#" className="py-2 text-lg font-medium border-b border-gray-100">Контакты</a>
              <div className="py-4">
                <a href="tel:+78005558765" className="flex items-center gap-2 text-lg">
                  <Phone size={20} />
                  8 (800) 555-87-65
                </a>
                <p className="text-sm text-gray-500 mt-1">Звонок бесплатный</p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
