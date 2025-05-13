
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Factory',
    title: 'Собственное производство',
    description: 'Контроль качества на всех этапах производства'
  },
  {
    icon: 'Truck',
    title: 'Доставка по всей России',
    description: 'Быстрая и надежная доставка в любой регион'
  },
  {
    icon: 'HeartHandshake',
    title: 'Гарантия качества',
    description: 'Все материалы сертифицированы и проходят испытания'
  },
  {
    icon: 'Wrench',
    title: 'Техническая поддержка',
    description: 'Консультации экспертов и обучение монтажу'
  }
];

export const AdvantageSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают Технониколь</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                <Icon name={advantage.icon} className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
