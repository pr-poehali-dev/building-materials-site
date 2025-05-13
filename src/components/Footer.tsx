
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and social */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-red-600 flex items-center justify-center rounded-md">
                <span className="text-white font-bold text-lg">TН</span>
              </div>
              <div className="font-bold text-xl">ТЕХНОНИКОЛЬ</div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Ведущий международный производитель строительных материалов и систем. 
              Компания предлагает рынку новейшие технологии и материалы для строительства.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Category links */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Каталог</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кровельные материалы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Теплоизоляция</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гидроизоляция</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Фасадные системы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Дренажные системы</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Компания</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Производство</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Новости</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gray-400 mt-1 shrink-0" />
                <span className="text-gray-400">129110, г. Москва, ул. Гиляровского, д. 47, стр. 5</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400 shrink-0" />
                <span className="text-gray-400">8 (800) 555-87-65</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400 shrink-0" />
                <span className="text-gray-400">info@tn.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2023 ТЕХНОНИКОЛЬ. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
