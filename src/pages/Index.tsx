import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    participants: '',
    eventType: '',
    budget: '',
    message: ''
  });

  const [calculatorData, setCalculatorData] = useState({
    eventType: '',
    participants: '',
    options: [] as string[]
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculatorChange = (field: string, value: string | string[]) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Корпоративы, которые<br />объединяют команды
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              От экстремальных приключений на квадроциклах до изысканных мероприятий в городе. Индивидуальный подход для любого бюджета.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto mb-8">
              <p className="text-lg font-medium text-gray-900 mb-2">
                Никаких шаблонов. Только индивидуальные сценарии под цели вашей компании и бюджет.
              </p>
              <p className="text-primary font-medium">Разрабатываем бесплатно.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Рассчитать программу
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Смотреть примеры
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Более 5 лет создаем события, которые запоминаются на годы. Ваш корпоратив — с нашей организацией.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Под ключ и в срок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Полный цикл организации: от идеи до реализации. Вы отдыхаете, мы всё делаем.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mountain" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Природа и город</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Собственные загородные площадки или организация мероприятия в любом месте города.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Бесплатная разработка сценария</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Не продаем вам типовые пакеты. Погружаемся в задачи вашей компании и создаем мероприятие с нуля.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Контроль бюджета</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Вы платите только за те опции, которые нужны вам. Адаптируем любой сценарий под ваш бюджет.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">100% вовлеченность команды</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Мероприятие, созданное с учетом интересов и возраста ваших сотрудников, пройдет в разы эффективнее.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Formats Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные форматы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/img/eaf8081a-ebe3-434d-b831-33a86aabda04.jpg')"}}></div>
              <CardHeader>
                <CardTitle>Тимбилдинг на природе</CardTitle>
                <CardDescription>
                  Активные игры, квадроциклы, веревочные курсы. Идеально для сплочения коллектива.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/teambuilding">
                  <Button className="w-full">Узнать подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/img/d8323db3-3e80-4034-b94e-3d51d9c0fc54.jpg')"}}></div>
              <CardHeader>
                <CardTitle>Корпоратив в городе</CardTitle>
                <CardDescription>
                  Квесты, творческие мастер-классы, гастрономические вечера. Для тех, кто ценит комфорт.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/corporate-events">
                  <Button className="w-full">Узнать подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/img/50376d1a-25f5-42d2-8405-a18e9f161aa5.jpg')"}}></div>
              <CardHeader>
                <CardTitle>Новогодний корпоратив</CardTitle>
                <CardDescription>
                  Яркие тематические программы, которые создают новогоднее настроение.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/new-year">
                  <Button className="w-full">Узнать подробнее</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как мы создаем ваш уникальный корпоратив</h2>
            <p className="text-xl text-gray-600">
              Мы не проводим два одинаковых корпоратива. Расскажите о своей команде, а мы бесплатно предложим 2-3 варианта сценария и точную стоимость.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Заявка",
                description: "Вы оставляете заявку или звоните нам"
              },
              {
                step: "02", 
                title: "Консультация",
                description: "Наш сценарист связывается с вами для бесплатной консультации. Мы задаем вопросы о команде, целях и бюджете"
              },
              {
                step: "03",
                title: "Предложение", 
                description: "В течение 24 часов мы готовим для вас персональное коммерческое предложение с вариантами программ"
              },
              {
                step: "04",
                title: "Реализация",
                description: "Выбирайте, утверждайте и наслаждайтесь мероприятием. Мы берем на себя всю организацию"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Прозрачные тарифы с полным комплектом услуг</h2>
            <p className="text-xl text-gray-600">
              Вам не нужно ничего придумывать и искать. Мы работаем по понятным тарифам, куда уже входит разработка индивидуального сценария.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Базовый",
                price: "от 2 000 ₽/чел.",
                description: "Идеально для: Небольших teams, выезда на природу, бюджетных мероприятий",
                features: [
                  "Разработка сценария",
                  "Базовая площадка", 
                  "Простой реквизит для игр",
                  "Организатор на точке"
                ]
              },
              {
                name: "Оптимальный",
                price: "от 4 000 ₽/чел.",
                description: "Идеально для: Классического корпоратива или тимбилдинга с глубокой программой",
                features: [
                  "Всё из тарифа 'Базовый'",
                  "Профессиональный ведущий",
                  "Активный реквизит (квадроциклы, веревочный курс)",
                  "Фотограф (1 час)",
                  "Организация кейтеринга"
                ],
                popular: true
              },
              {
                name: "Премиум Все включено",
                price: "от 5 000 ₽/чел.",
                description: "Идеально для: Крупных событий, празднования Нового года, мероприятий высшего уровня",
                features: [
                  "Всё из тарифа 'Оптимальный'",
                  "Сложный реквизит и шоу-программы",
                  "Аниматоры",
                  "Кейтеринг 'под ключ'",
                  "Фото- и видеосъемка на протяжении всего события"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Рассчитать точно</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calculator */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Онлайн-калькулятор стоимости</CardTitle>
              <CardDescription>Получите предварительный расчет стоимости мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="event-type">Тип мероприятия</Label>
                <Select onValueChange={(value) => handleCalculatorChange('eventType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип мероприятия" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nature">На природе</SelectItem>
                    <SelectItem value="city">В городе</SelectItem>
                    <SelectItem value="newyear">Новогодний</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="participants">Количество человек</Label>
                <Input 
                  id="participants"
                  placeholder="Введите количество участников"
                  onChange={(e) => handleCalculatorChange('participants', e.target.value)}
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Рассчитать предварительную стоимость
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша задача — решить вашу</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                task: "Хотим сплотить новый отдел",
                solution: "Активный тимбилдинг с элементами гонок на квадроциклах и совместными заданиями"
              },
              {
                task: "Нужно отблагодарить team за год",
                solution: "Премиальный гала-ужин с шоу-программой и награждением сотрудников"
              },
              {
                task: "Разрядить обстановку и просто классно отдохнуть",
                solution: "Неформальный пикник с играми в волейбол и творческими мастер-классами"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Задача:</CardTitle>
                  <CardDescription className="text-base">"{item.task}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900 mb-2">Наше решение:</p>
                  <p className="text-gray-600">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Почему разработка сценария бесплатна?
              </AccordionTrigger>
              <AccordionContent>
                Потому что мы уверены, что индивидуальный подход — это необходимость. Мы закладываем эту работу в итоговую стоимость мероприятия, только если вы его заказываете.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Что если у меня свой реквизит или фотограф?
              </AccordionTrigger>
              <AccordionContent>
                Отлично! Мы легко исключим эти опции из расчета и сделаем стоимость еще выгоднее.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Можете ли вы провести мероприятие для большой компании?
              </AccordionTrigger>
              <AccordionContent>
                Да, мы работаем с группами любого размера — от 10 до 500+ человек. У нас есть опыт организации крупных корпоративных мероприятий.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Получите индивидуальный расчет за 24 часа</h2>
            <p className="text-xl text-gray-600">
              Расскажите о вашей команде, а мы сделаем все остальное. Бесплатно разработаем сценарий и просчитаем стоимость.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Заявка на расчет</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в течение часа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="participants">Количество человек</Label>
                  <Input 
                    id="participants"
                    placeholder="20"
                    value={formData.participants}
                    onChange={(e) => handleFormChange('participants', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="budget">Примерный бюджет</Label>
                  <Select onValueChange={(value) => handleFormChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите бюджет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50000">До 50 000 ₽</SelectItem>
                      <SelectItem value="100000">50 000 - 100 000 ₽</SelectItem>
                      <SelectItem value="200000">100 000 - 200 000 ₽</SelectItem>
                      <SelectItem value="500000">200 000 - 500 000 ₽</SelectItem>
                      <SelectItem value="more">Более 500 000 ₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Комментарий</Label>
                <Textarea 
                  id="message"
                  placeholder="Расскажите о ваших идеях, особых пожеланиях или задачах мероприятия"
                  value={formData.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Получить предложение
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">CORPORATE EVENTS</h3>
              <p className="text-gray-400">
                Корпоративные мероприятия с индивидуальным подходом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Тимбилдинг на природе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративы в городе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новогодние мероприятия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@corporate-events.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Corporate Events. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}