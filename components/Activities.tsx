'use client'
import React from 'react';
import { 
  Waves, 
  Camera, 
  Mountain, 
  MapPin, 
  Utensils, 
  TreePine, 
  Car, 
  Music, 
  Calendar,
  Clock,
  ArrowRight,
  Castle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Activities = () => {
  const { t, language } = useLanguage();

  const activities = [
    {
      categoryKey: "activities.beaches",
      icon: <Waves className="h-6 w-6" />,
      items: [
        {
          name: "Praia da Calada",
          nameEn: "Praia da Calada",
          description: "Praia selvagem com paisagens deslumbrantes",
          descriptionEn: "Wild beach with stunning landscapes",
          distance: "10 min",
          price: t('common.free')
        },
        {
          name: "Praia de Ribeira d'Ilhas",
          nameEn: "Ribeira d'Ilhas Beach",
          description: "Famosa praia de surf na Ericeira",
          descriptionEn: "Famous surf beach in Ericeira",
          distance: "15 min",
          price: t('common.free')
        },
        {
          name: "Praia do Sul",
          nameEn: "Praia do Sul",
          description: "Praia urbana com todas as comodidades",
          descriptionEn: "Urban beach with all amenities",
          distance: "20 min",
          price: t('common.free')
        }
      ]
    },
    {
      categoryKey: "activities.nature",
      icon: <Mountain className="h-6 w-6" />,
      items: [
        {
          name: "Trilhos da Costa",
          nameEn: "Coastal Trails",
          description: "Caminhadas com vistas para o oceano",
          descriptionEn: "Walks with ocean views",
          distance: "5 min",
          price: t('common.free')
        },
        {
          name: "Surf na Ericeira",
          nameEn: "Surfing in Ericeira",
          description: "Aulas de surf para todos os níveis",
          descriptionEn: "Surf lessons for all levels",
          distance: "20 min",
          price: `€35/${t('common.person')}`
        },
        {
          name: "Observação de Aves",
          nameEn: "Bird Watching",
          description: "Tour pela fauna costeira",
          descriptionEn: "Coastal wildlife tour",
          distance: "15 min",
          price: `€25/${t('common.person')}`
        }
      ]
    },
    {
      categoryKey: "activities.culture",
      icon: <Castle className="h-6 w-6" />,
      items: [
        {
          name: "Palácio de Sintra",
          nameEn: "Sintra Palace",
          description: "Palácio Nacional com arquitetura única",
          descriptionEn: "National Palace with unique architecture",
          distance: "45 min",
          price: `€10/${t('common.person')}`
        },
        {
          name: "Centro Histórico da Ericeira",
          nameEn: "Ericeira Historic Center",
          description: "Vila piscatória com tradição",
          descriptionEn: "Traditional fishing village",
          distance: "20 min",
          price: t('common.free')
        },
        {
          name: "Mafra",
          nameEn: "Mafra",
          description: "Palácio e Convento de Mafra",
          descriptionEn: "Mafra Palace and Convent",
          distance: "30 min",
          price: `€6/${t('common.person')}`
        }
      ]
    },
    {
      categoryKey: "activities.gastronomy",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Ponto Final",
          nameEn: "Ponto Final",
          description: "Restaurante com vista panorâmica",
          descriptionEn: "Restaurant with panoramic view",
          distance: "25 min",
          price: `€30-45/${t('common.person')}`
        },
        {
          name: "Marisqueira Furnas",
          nameEn: "Marisqueira Furnas",
          description: "Especialidades de marisco na Ericeira",
          descriptionEn: "Seafood specialties in Ericeira",
          distance: "20 min",
          price: `€25-40/${t('common.person')}`
        },
        {
          name: "Tik Tapas",
          nameEn: "Tik Tapas",
          description: "Tapas modernas na Ericeira",
          descriptionEn: "Modern tapas in Ericeira",
          distance: "18 min",
          price: `€20-30/${t('common.person')}`
        }
      ]
    }
  ];

  const seasonalEvents = [
    {
      month: language === 'pt' ? "Julho" : "July",
      event: language === 'pt' ? "Festival de Verão" : "Summer Festival",
      description: language === 'pt' ? "Música e cultura na Ericeira" : "Music and culture in Ericeira"
    },
    {
      month: language === 'pt' ? "Agosto" : "August",
      event: language === 'pt' ? "Campeonato de Surf" : "Surf Championship",
      description: language === 'pt' ? "Competições internacionais" : "International competitions"
    },
    {
      month: language === 'pt' ? "Setembro" : "September",
      event: language === 'pt' ? "Festival do Marisco" : "Seafood Festival",
      description: language === 'pt' ? "Gastronomia tradicional" : "Traditional gastronomy"
    }
  ];

  return (
    <section id="atividades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('activities.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {activities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-emerald-600 text-white p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t(category.categoryKey)}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((activity, activityIndex) => (
                  <div 
                    key={activityIndex}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'pt' ? activity.name : activity.nameEn}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {language === 'pt' ? activity.description : activity.descriptionEn}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.distance}
                      </div>
                      <div className="text-sm font-semibold text-emerald-600">
                        {activity.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('activities.events')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl p-6 text-white text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 mr-2" />
                  <span className="font-semibold">{event.month}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{event.event}</h4>
                <p className="text-emerald-100 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('activities.info')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('activities.info.desc')}
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
            {t('activities.contact')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;