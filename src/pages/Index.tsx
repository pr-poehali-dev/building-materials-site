
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Добро пожаловать</h1>
      <p className="text-center mb-8 max-w-md">
        Это стартовая страница вашего проекта. Здесь вы можете начать создавать свое приложение.
      </p>
      <Button>Начать</Button>
    </div>
  );
};

export default Index;
