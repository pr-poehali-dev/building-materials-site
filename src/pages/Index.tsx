
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    id: "otdelka",
    title: "Отделочные материалы",
    description: "Материалы для внутренней и внешней отделки",
    icon: "Brush",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
    items: [
      { name: "Краска стеновая", price: "от 1200 ₽", rating: 4.8, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop" },
      { name: "Обои виниловые", price: "от 890 ₽", rating: 4.6, image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=2574&auto=format&fit=crop" },
      { name: "Ламинат 33 класс", price: "от 1450 ₽", rating: 4.9, image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2574&auto=format&fit=crop" },
    ]
  },
  {
    id: "stroy",
    title: "Строительные материалы",
    description: "Основные материалы для строительства",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2670&auto=format&fit=crop",
    items: [
      { name: "Цемент М500", price: "от 380 ₽", rating: 4.7, image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=2670&auto=format&fit=crop" },
      { name: "Кирпич облицовочный", price: "от 28 ₽", rating: a4.5, image: "https://images.unsplash.com/photo-1573998609998-f5b8dc570a91?q=80&w=2670&auto=format&fit=crop" },
      { name: "Брус строганный", price: "от 350 ₽", rating: 4.6, image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2670&auto=format&fit=crop" },
    ]
  },
  {
    id: "insulation",
    title: "Изоляционные материалы",
    description: "Тепло и звукоизоляция для дома",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1616093091326-0dbd26df e2be?q=80&w=2574&auto=format&fit=crop",
    items: [
      { name: "Минеральная вата", price: "от 1250 ₽", rating: 4.7, image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2670&auto=format&fit=crop" },
      { name: "Пенополистирол", price: "от 240 ₽", rating: 4.4, image: "https://images.unsplash.com/photo-1572051175184-5254c2eaccc6?q=80&w=2574&auto=format&fit=crop" },
      { name: "Пенофол", price: "от 150 ₽", rating: 4.3, image: "https://images.unsplash.com/photo-1634149540670-dfc11fc15cc9?q=80&w=2670&auto=format&fit=crop" },
    ]
  },
  {
    id: "krepezh",
    title: "Крепеж и фурнитура",
    description: "Всё для надежного крепления",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2669&auto=format&fit=crop",
    items: [
      { name: "Саморезы универсальные", price: "от 12 ₽", rating: 4.8, image: "https://images.unsplash.com/photo-1509396591411-549811e332fa?q=80&w=2574&auto=format&fit=crop" },
      { name: "Анкерные болты", price: "от 45 ₽", rating: 4.6, image: "https://images.unsplash.com/photo-1572051323585-2af4bfc57e2a?q=80&w=2574&auto=format&fit=crop" },
      { name: "Дюбели распорные", price: "от 5 ₽", rating: 4.5, image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=2670&auto=format&fit=crop" },
    ]
  },
];

const ProductCard = ({ item }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{item.name}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between p-4 pt-0">
        <span className="font-bold text-orange-500">{item.price}</span>
        <div className="flex items-center gap-1 text-amber-500">
          <Icon name="Star" size={16} />
          <span>{item.rating}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex h-96 w-full items-center justify-center bg-gray-900 bg-opacity-70 bg-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container px-4 text-center text-white">
          <h1 className="mb-4 font-montserrat text-5xl font-bold">СтройМаркет</h1>
          <p className="mb-8 text-xl">Все необходимые материалы для строительства и ремонта</p>
          <Button className="bg-orange-500 px-8 py-6 text-lg hover:bg-orange-600">
            Каталог материалов
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-16">
        <h2 className="mb-10 text-center font-montserrat text-3xl font-bold">Наши категории</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Icon name={category.icon} size={24} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">Смотреть товары</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Products Tabs */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="mb-10 text-center font-montserrat text-3xl font-bold">Популярные материалы</h2>
          
          <Tabs defaultValue="otdelka" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <Icon name={category.icon} size={16} />
                    <span className="hidden md:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, idx) => (
                    <ProductCard key={idx} item={item} />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button>Все товары в категории</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-montserrat text-3xl font-bold">Нужна консультация специалиста?</h2>
          <p className="mb-8 mx-auto max-w-2xl">Наши эксперты помогут подобрать строительные материалы для вашего проекта с учетом всех требований и особенностей</p>
          <Button className="bg-white px-8 py-6 text-lg font-semibold text-orange-500 hover:bg-gray-100">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">СтройМаркет</h3>
            <p>Все необходимые материалы для строительства и ремонта в одном месте. Качество, проверенное временем.</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Контакты</h3>
            <p>г. Москва, ул. Строителей, 15</p>
            <p>+7 (800) 555-35-35</p>
            <p>info@stroymarket.ru</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Время работы</h3>
            <p>Пн-Пт: 8:00 - 20:00</p>
            <p>Сб-Вс: 9:00 - 18:00</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 СтройМаркет. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
