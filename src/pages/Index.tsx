
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import AdvantageSection from '@/components/AdvantageSection';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Mock data for products
const products = [
  {
    id: '1',
    name: 'Технониколь Шинглас Фазенда серо-голубой',
    category: 'Кровельные материалы',
    price: 1650,
    oldPrice: 1850,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1652507936806-93c132614829?q=80&w=2070&auto=format&fit=crop',
    isNew: true,
    isDiscounted: true
  },
  {
    id: '2',
    name: 'Экструзионный пенополистирол Технониколь CARBON ECO 1180x580x50 мм',
    category: 'Теплоизоляция',
    price: 2350,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=2071&auto=format&fit=crop',
    isNew: false
  },
  {
    id: '3',
    name: 'Мастика битумная гидроизоляционная Технониколь AquaMast 10 кг',
    category: 'Гидроизоляция',
    price: 1890,
    oldPrice: 2100,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1591019479261-1a730819ab1a?q=80&w=2070&auto=format&fit=crop',
    isDiscounted: true
  },
  {
    id: '4',
    name: 'Фасадная плитка Hauberk Технониколь Кедр 1000x250 мм',
    category: 'Фасадные системы',
    price: 2750,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?q=80&w=2069&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '5',
    name: 'Рулонная гидроизоляция Технониколь Биполь ЭПП 15x1 м',
    category: 'Гидроизоляция',
    price: 1450,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1628592102751-ba83b0314764?q=80&w=2097&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Минеральная вата Технониколь Роклайт 5.76 м² 50 мм',
    category: 'Теплоизоляция',
    price: 1870,
    oldPrice: 2050,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1574057431145-ef0d31320105?q=80&w=1780&auto=format&fit=crop',
    isDiscounted: true
  },
  {
    id: '7',
    name: 'Мембрана супердиффузионная Технониколь Альфа ТОП',
    category: 'Изоляционные материалы',
    price: 2150,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Герметик полиуретановый Технониколь PU 25 серый 310 мл',
    category: 'Клеи и герметики',
    price: 550,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=1964&auto=format&fit=crop'
  }
];

// Mock data for categories
const categories = [
  {
    title: 'Кровельные материалы',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919c41b?q=80&w=2071&auto=format&fit=crop',
    count: 148,
    icon: <Icon name="Roof" size={24} className="text-primary" />
  },
  {
    title: 'Теплоизоляция',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop',
    count: 89,
    icon: <Icon name="Snowflake" size={24} className="text-primary" />
  },
  {
    title: 'Гидроизоляция',
    image: 'https://images.unsplash.com/photo-1502194481344-89612aa4e632?q=80&w=2070&auto=format&fit=crop',
    count: 76,
    icon: <Icon name="Droplets" size={24} className="text-primary" />
  },
  {
    title: 'Фасадные системы',
    image: 'https://images.unsplash.com/photo-1622720731398-5e2f3fc10b70?q=80&w=2070&auto=format&fit=crop',
    count: 53,
    icon: <Icon name="Building" size={24} className="text-primary" />
  },
  {
    title: 'Дренажные системы',
    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=2071&auto=format&fit=crop',
    count: 41,
    icon: <Icon name="PipelineIcon" size={24} className="text-primary" />
  },
  {
    title: 'Клеи и герметики',
    image: 'https://images.unsplash.com/photo-1509479579383-07807aa36f18?q=80&w=2071&auto=format&fit=crop',
    count: 35,
    icon: <Icon name="Pipette" size={24} className="text-primary" />
  }
];

// Mock data for solutions
const solutions = [
  {
    title: 'Для частного строительства',
    items: products.slice(0, 4)
  },
  {
    title: 'Для промышленного строительства',
    items: products.slice(4, 8)
  },
  {
    title: 'Для профессионалов',
    items: [...products.slice(2, 4), ...products.slice(0, 2)]
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const filteredProducts = activeTab === 'popular'
    ? products.sort((a, b) => b.rating - a.rating).slice(0, 8)
    : activeTab === 'new'
      ? products.filter(p => p.isNew).slice(0, 8)
      : products.filter(p => p.isDiscounted).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <Banner 
          title="Строительные материалы высокого качества"
          subtitle="Современные технологии и инновационные решения для строительства и ремонта от ведущего производителя"
          image="https://images.unsplash.com/photo-1577962404620-e7c51cb89691?q=80&w=2069&auto=format&fit=crop"
          buttonText="Перейти в каталог"
          buttonLink="#catalog"
        />
        
        {/* Popular Categories */}
        <section id="catalog" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Основные категории</h2>
              <Button variant="outline" asChild>
                <a href="/catalog">
                  Весь каталог
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  title={category.title}
                  image={category.image}
                  count={category.count}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Популярные товары</h2>
              <Tabs 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="w-full md:w-auto"
              >
                <TabsList className="grid w-full md:w-auto grid-cols-3">
                  <TabsTrigger value="popular">Популярные</TabsTrigger>
                  <TabsTrigger value="new">Новинки</TabsTrigger>
                  <TabsTrigger value="sale">Со скидкой</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  image={product.image}
                  isNew={product.isNew}
                  isDiscounted={product.isDiscounted}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" asChild>
                <a href="/catalog">
                  Смотреть все товары
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Решения для разных задач</h2>
            
            <Tabs defaultValue={solutions[0].title} className="w-full">
              <TabsList className="w-full flex mb-8 overflow-x-auto">
                {solutions.map((solution, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={solution.title}
                    className="flex-1 min-w-[200px]"
                  >
                    {solution.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {solutions.map((solution, index) => (
                <TabsContent key={index} value={solution.title}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solution.items.map(product => (
                      <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        rating={product.rating}
                        image={product.image}
                        isNew={product.isNew}
                        isDiscounted={product.isDiscounted}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Advantages */}
        <AdvantageSection />
        
        {/* CTA Banner */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Нужна консультация специалиста?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Оставьте заявку и наши специалисты свяжутся с вами для подбора оптимального решения
            </p>
            <Button variant="secondary" size="lg">
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
