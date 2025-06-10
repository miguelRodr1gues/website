'use client'
import React from 'react';
import { MapPin, Car, Plane, Train, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Location = () => {
  const { t, language } = useLanguage();

  const distances = [
    { 
      city: "Lisboa", 
      cityEn: "Lisbon",
      distance: "50 km", 
      time: "45min", 
      icon: <Car className="h-5 w-5" /> 
    },
    { 
      city: "Ericeira", 
      cityEn: "Ericeira",
      distance: "15 km", 
      time: "20min", 
      icon: <Car className="h-5 w-5" /> 
    },
    { 
      city: "Aeroporto de Lisboa", 
      cityEn: "Lisbon Airport",
      distance: "60 km", 
      time: "50min", 
      icon: <Plane className="h-5 w-5" /> 
    },
    { 
      city: "Sintra", 
      cityEn: "Sintra",
      distance: "25 km", 
      time: "30min", 
      icon: <Train className="h-5 w-5" /> 
    },
  ];

  const nearbyAttractions = [
    { name: "Praia da Calada", nameEn: "Praia da Calada", distance: "10 km" },
    { name: "Ericeira", nameEn: "Ericeira", distance: "15 km" },
    { name: "Palácio de Sintra", nameEn: "Sintra Palace", distance: "25 km" },
    { name: "Cabo da Roca", nameEn: "Cabo da Roca", distance: "35 km" },
    { name: "Cascais", nameEn: "Cascais", distance: "40 km" },
    { name: "Óbidos", nameEn: "Óbidos", distance: "45 km" },
  ];

  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('location.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('location.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">{t('location.address')}</h3>
              </div>
              <div className="text-gray-600 mb-6">
                <p className="text-lg font-semibold">Quinta Bela Vista</p>
                <p>Estrada da Calada</p>
                <p>2655-319 Ericeira</p>
                <p>Mafra, Portugal</p>
              </div>
              <div className="flex items-center text-emerald-600">
                <Navigation className="h-5 w-5 mr-2" />
                <span className="font-semibold">38.9642° N, 9.4156° W</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('location.distances')}</h3>
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-emerald-600 mr-3">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-900">
                        {language === 'pt' ? item.city : item.cityEn}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.distance}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="h-80 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24081.45123456789!2d-9.4156!3d38.9642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f12345678901%3A0x123456789abcdef!2sEriceira%2C%20Portugal!5e0!3m2!1sen!2spt!4v1234567890123!5m2!1sen!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{t('location.map')}</h4>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    {t('location.open')}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('location.nearby')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900 text-sm font-medium">
                      {language === 'pt' ? attraction.name : attraction.nameEn}
                    </span>
                    <span className="text-emerald-600 text-sm font-semibold">{attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('location.how')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <Car className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">{t('location.car')}</h4>
              <p className="text-emerald-100 text-sm">
                {t('location.car.desc')}
              </p>
            </div>
            <div className="text-center">
              <Train className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">{t('location.public')}</h4>
              <p className="text-emerald-100 text-sm">
                {t('location.public.desc')}
              </p>
            </div>
            <div className="text-center">
              <Plane className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">{t('location.plane')}</h4>
              <p className="text-emerald-100 text-sm">
                {t('location.plane.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;