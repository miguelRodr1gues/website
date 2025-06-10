'use client'
import React from 'react';
import { 
  Wifi, 
  Car, 
  Waves, 
  Utensils, 
  Tv, 
  AirVent, 
  TreePine, 
  Bath, 
  Sun, 
  Flame,
  Home
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: <Wifi className="h-8 w-8" />,
      titleKey: "amenities.wifi",
      descKey: "amenities.wifi.desc"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      titleKey: "amenities.pool",
      descKey: "amenities.pool.desc"
    },
    {
      icon: <Car className="h-8 w-8" />,
      titleKey: "amenities.parking",
      descKey: "amenities.parking.desc"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      titleKey: "amenities.kitchen",
      descKey: "amenities.kitchen.desc"
    },
    {
      icon: <Tv className="h-8 w-8" />,
      titleKey: "amenities.tv",
      descKey: "amenities.tv.desc"
    },
    {
      icon: <AirVent className="h-8 w-8" />,
      titleKey: "amenities.ac",
      descKey: "amenities.ac.desc"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      titleKey: "amenities.garden",
      descKey: "amenities.garden.desc"
    },
    {
      icon: <Flame className="h-8 w-8" />,
      titleKey: "amenities.bbq",
      descKey: "amenities.bbq.desc"
    },
    {
      icon: <Home className="h-8 w-8" />,
      titleKey: "amenities.shelter",
      descKey: "amenities.shelter.desc"
    }
  ];

  return (
    <section id="comodidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('amenities.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('amenities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-emerald-200"
            >
              <div className="text-emerald-600 group-hover:text-emerald-700 mb-4 transition-colors duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(amenity.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(amenity.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('amenities.capacity')}
          </h3>
          <p className="text-lg opacity-90 mb-6">
            {t('amenities.details')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-80">{t('amenities.rooms')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2</div>
              <div className="text-sm opacity-80">{t('amenities.bathrooms')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">280m²</div>
              <div className="text-sm opacity-80">{t('amenities.area')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2ha</div>
              <div className="text-sm opacity-80">{t('amenities.garden.area')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;