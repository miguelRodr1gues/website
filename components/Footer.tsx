'use client'
import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              Quinta Bela Vista
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-3 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-3 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-3 rounded-lg transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <div>
                  <p className="text-gray-300">+351 259 123 456</p>
                  <p className="text-gray-400 text-sm">{t('footer.hours')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <div>
                  <p className="text-gray-300">info@quintabelavista.pt</p>
                  <p className="text-gray-400 text-sm">{t('footer.response')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Estrada da Calada</p>
                  <p className="text-gray-300">2655-319 Ericeira</p>
                  <p className="text-gray-400 text-sm">Mafra, Portugal</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.home')}
              </a>
              <a href="#fotos" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.galeria')}
              </a>
              <a href="#comodidades" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.comodidades')}
              </a>
              <a href="#reviews" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.reviews')}
              </a>
              <a href="#atividades" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.atividades')}
              </a>
              <a href="#localizacao" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                {t('nav.localizacao')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.rights')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                {t('footer.cancellation')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-semibold">
            {t('footer.promo')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;