import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
              <li>
                <Link to="/teambuilding" className="hover:text-white transition-colors">
                  Тимбилдинг на природе
                </Link>
              </li>
              <li>
                <Link to="/corporate-events" className="hover:text-white transition-colors">
                  Корпоративы в городе
                </Link>
              </li>
              <li>
                <Link to="/new-year" className="hover:text-white transition-colors">
                  Новогодние мероприятия
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Цены
                </Link>
              </li>
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
  );
}