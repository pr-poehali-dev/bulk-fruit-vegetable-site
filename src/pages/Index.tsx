import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      category: "Овощи",
      items: ["Томаты", "Огурцы", "Перец", "Баклажаны", "Кабачки", "Картофель"],
      icon: "Carrot",
    },
    {
      category: "Фрукты",
      items: ["Яблоки", "Груши", "Апельсины", "Мандарины", "Бананы", "Виноград"],
      icon: "Apple",
    },
    {
      category: "Зелень",
      items: ["Салат", "Укроп", "Петрушка", "Кинза", "Базилик", "Шпинат"],
      icon: "Leaf",
    },
  ];

  const partners = [
    "Магнит",
    "Пятёрочка",
    "Перекрёсток",
    "Лента",
    "Дикси",
    "Ашан",
  ];

  const advantages = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Собственный автопарк — доставка по всей России",
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Все продукты проходят контроль качества",
    },
    {
      icon: "Percent",
      title: "Оптовые цены",
      description: "Выгодные условия для постоянных клиентов",
    },
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Прием заказов круглосуточно",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ФрешОпт</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === "home" ? "text-primary" : "text-gray-600"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("catalog")}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === "catalog" ? "text-primary" : "text-gray-600"
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === "about" ? "text-primary" : "text-gray-600"
                }`}
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === "partners" ? "text-primary" : "text-gray-600"
                }`}
              >
                Партнеры
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === "contacts" ? "text-primary" : "text-gray-600"
                }`}
              >
                Контакты
              </button>
            </div>
            <Button className="hidden md:flex" onClick={() => scrollToSection("contacts")}>
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Свежие овощи и фрукты{" "}
                <span className="text-primary">оптом</span>
              </h1>
              <p className="text-xl text-gray-600">
                Прямые поставки от производителей. Гарантия качества и свежести.
                Выгодные условия для бизнеса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection("catalog")}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection("contacts")}>
                  Получить прайс
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/5b22b2cd-8f62-4b69-8576-c0dc4746ac43/files/5b103d5c-f67c-468d-aa5d-4714786a7f2f.jpg"
                alt="Свежие овощи и фрукты"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon name={advantage.icon} className="text-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш ассортимент</h2>
            <p className="text-xl text-gray-600">
              Широкий выбор свежих продуктов для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-8 flex justify-center">
                    <div className="bg-white p-6 rounded-full shadow-lg">
                      <Icon name={product.icon} className="text-primary" size={48} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">{product.category}</h3>
                    <ul className="space-y-2">
                      {product.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Icon name="Check" className="text-primary" size={20} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/5b22b2cd-8f62-4b69-8576-c0dc4746ac43/files/378ca771-739d-4ef9-bd0d-c0a2c32d487f.jpg"
                alt="Наш склад"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">О компании</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>ФрешОпт</strong> — надежный поставщик свежих овощей и фруктов
                для розничных сетей, ресторанов и предприятий общественного питания.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Мы работаем напрямую с производителями и фермерскими хозяйствами,
                что позволяет нам гарантировать высокое качество продукции и
                конкурентные цены.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">позиций</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-xl text-gray-600">
              Нам доверяют крупнейшие розничные сети России
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="flex items-center justify-center p-8 hover:shadow-lg transition-shadow"
              >
                <span className="text-xl font-semibold text-gray-700">{partner}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-lg text-gray-700">
                Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Адрес склада:</div>
                    <div className="text-gray-600">
                      Москва, ул. Складская, д. 25, стр. 1
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Телефон:</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Email:</div>
                    <div className="text-gray-600">info@freshopt.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы:</div>
                    <div className="text-gray-600">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@company.ru" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем бизнесе и интересующей продукции"
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" className="text-primary" size={32} />
                <span className="text-2xl font-bold">ФрешОпт</span>
              </div>
              <p className="text-gray-400">
                Свежие овощи и фрукты оптом по всей России
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("catalog")} className="hover:text-white transition-colors">
                    Каталог
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    О компании
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@freshopt.ru</li>
                <li>Москва, ул. Складская, 25</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Режим работы</h3>
              <p className="text-gray-400">
                Круглосуточно<br />
                Без выходных
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 ФрешОпт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
