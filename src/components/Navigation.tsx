import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              CORPORATE EVENTS
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Главная
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-primary transition-colors flex items-center">
                Услуги
                <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/teambuilding">Тимбилдинг на природе и в городе</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/corporate-events">Корпоративы на природе и в городе</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/new-year">Новогодние корпоративы</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">
              Портфолио
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
              Цены
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
              Блог
            </Link>
            <Link to="/contacts" className="text-gray-600 hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-white hidden sm:block">
              Заказать звонок
            </Button>
            
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Услуги</div>
                <div className="ml-4 space-y-1">
                  <Link
                    to="/teambuilding"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Тимбилдинг на природе и в городе
                  </Link>
                  <Link
                    to="/corporate-events"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Корпоративы на природе и в городе
                  </Link>
                  <Link
                    to="/new-year"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Новогодние корпоративы
                  </Link>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Цены
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Блог
              </Link>
              <Link
                to="/contacts"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}