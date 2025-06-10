'use client'
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Maria Silva",
      location: "Lisboa",
      rating: 5,
      date: "Novembro 2024",
      comment: "Uma experiência absolutamente fantástica! A quinta é ainda mais bonita do que nas fotos. O anfitrião foi excepcional e todas as comodidades superaram as nossas expectativas. A vista é de cortar a respiração!",
      commentEn: "An absolutely fantastic experience! The quinta is even more beautiful than in the photos. The host was exceptional and all amenities exceeded our expectations. The view is breathtaking!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      location: "Porto",
      rating: 5,
      date: "Outubro 2024",
      comment: "Passámos aqui o nosso aniversário de casamento e foi perfeito. A piscina, o jardim, a tranquilidade... tudo impecável. Recomendo vivamente para quem procura relaxar em grande estilo.",
      commentEn: "We spent our wedding anniversary here and it was perfect. The pool, the garden, the tranquility... everything impeccable. I highly recommend it for those looking to relax in great style.",
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anna Mueller",
      location: "Germany",
      rating: 5,
      date: "September 2024",
      comment: "This place is a hidden gem! Perfect for a family vacation. The kids loved the pool and we adults enjoyed the wine tastings nearby. The house is spotless and very well equipped.",
      commentEn: "This place is a hidden gem! Perfect for a family vacation. The kids loved the pool and we adults enjoyed the wine tastings nearby. The house is spotless and very well equipped.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendoza",
      location: "Spain",
      rating: 5,
      date: "August 2024",
      comment: "Increíble experiencia en la costa portuguesa. La casa es espaciosa, muy limpia y con todas las comodidades. La atención al cliente es excelente. Sin duda volveremos el próximo año.",
      commentEn: "Incredible experience on the Portuguese coast. The house is spacious, very clean and with all amenities. Customer service is excellent. We will definitely return next year.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sophie Laurent",
      location: "France",
      rating: 5,
      date: "July 2024",
      comment: "Un séjour magique près d'Ericeira! La maison est parfaite pour les familles, avec une vue à couper le souffle. L'accueil était chaleureux et les recommandations d'activités très utiles.",
      commentEn: "A magical stay near Ericeira! The house is perfect for families, with a breathtaking view. The welcome was warm and the activity recommendations very useful.",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ricardo Oliveira",
      location: "Coimbra",
      rating: 5,
      date: "June 2024",
      comment: "A localização é privilegiada, perto de várias praias e com uma vista deslumbrante. A casa tem tudo o que se pode desejar para umas férias perfeitas. Voltaremos certamente!",
      commentEn: "The location is privileged, close to several beaches and with a stunning view. The house has everything you could want for a perfect vacation. We will certainly return!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('reviews.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-xl font-semibold text-gray-900">4.9</span>
            <span className="text-gray-600">(127 {t('reviews.total').toLowerCase()})</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-emerald-200" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{review.commentEn}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <div className="text-gray-600">{t('reviews.rating')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">127</div>
                <div className="text-gray-600">{t('reviews.total')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                <div className="text-gray-600">{t('reviews.recommend')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;