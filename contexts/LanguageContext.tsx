'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Definir o tipo das traduções
type TranslationKeys = {
  [key: string]: string;
};

const translations: Record<Language, TranslationKeys> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.gallery': 'Galeria',
    'nav.amenities': 'Comodidades',
    'nav.reviews': 'Avaliações',
    'nav.activities': 'Atividades',
    'nav.location': 'Localização',

    // Hero Section
    'hero.title': 'Quinta Bela Vista',
    'hero.subtitle': 'O seu refúgio perfeito perto das melhores praias portuguesas',
    'hero.location': 'Ericeira, Portugal',
    'hero.rating': '4.9 (127 avaliações)',
    'hero.availability': 'Disponível todo o ano',
    'hero.book': 'Reservar Agora',
    'hero.photos': 'Ver Galeria',

    // Gallery
    'gallery.title': 'Galeria de Fotos',
    'gallery.subtitle': 'Descubra cada cantinho da Quinta Bela Vista através das nossas fotografias',
    'gallery.exterior': 'Vista Exterior',
    'gallery.living': 'Sala de Estar',
    'gallery.bedroom': 'Quarto Principal',
    'gallery.kitchen': 'Cozinha',
    'gallery.garden': 'Jardim',
    'gallery.pool': 'Piscina',
    'gallery.terrace': 'Terraço',
    'gallery.landscape': 'Paisagem',

    // Amenities
    'amenities.title': 'Comodidades',
    'amenities.subtitle': 'Tudo o que precisa para uma estadia inesquecível',
    'amenities.wifi': 'Wi-Fi Gratuito',
    'amenities.wifi.desc': 'Internet de alta velocidade em toda a propriedade',
    'amenities.pool': 'Piscina Privada',
    'amenities.pool.desc': 'Piscina aquecida com vista panorâmica',
    'amenities.parking': 'Estacionamento',
    'amenities.parking.desc': 'Estacionamento privado para 4 carros',
    'amenities.kitchen': 'Cozinha Completa',
    'amenities.kitchen.desc': 'Equipada com todos os eletrodomésticos modernos',
    'amenities.tv': 'Smart TV',
    'amenities.tv.desc': 'TV de 65 polegadas com Netflix e streaming',
    'amenities.ac': 'Ar Condicionado',
    'amenities.ac.desc': 'Climatização em todos os quartos',
    'amenities.garden': 'Jardim Privado',
    'amenities.garden.desc': '2 hectares de jardim paisagístico',
    'amenities.bbq': 'Churrasqueira',
    'amenities.bbq.desc': 'Zona de barbecue com mesa e bancos',
    'amenities.shelter': 'Telheiro',
    'amenities.shelter.desc': 'Área coberta para refeições ao ar livre',
    'amenities.capacity': 'Capacidade para 10 Pessoas',
    'amenities.details': '4 quartos • 2 casas de banho • 2 salas de estar • Cozinha gourmet',
    'amenities.rooms': 'Quartos',
    'amenities.bathrooms': 'Casas de Banho',
    'amenities.area': 'Área Interior',
    'amenities.garden.area': 'Jardim',

    // Reviews
    'reviews.title': 'O que dizem os nossos hóspedes',
    'reviews.subtitle': 'Experiências autênticas partilhadas pelos nossos hóspedes',
    'reviews.rating': 'Classificação Geral',
    'reviews.total': 'Avaliações',
    'reviews.recommend': 'Recomendam',

    // Activities
    'activities.title': 'Atividades & Experiências',
    'activities.subtitle': 'Descubra as maravilhas da costa portuguesa e da região de Sintra',
    'activities.beaches': 'Praias',
    'activities.nature': 'Natureza & Aventura',
    'activities.culture': 'Cultura & História',
    'activities.gastronomy': 'Gastronomia',
    'activities.events': 'Eventos Sazonais',
    'activities.info': 'Precisa de Mais Informações?',
    'activities.info.desc': 'Temos um guia completo de atividades e podemos ajudar a organizar as suas experiências',
    'activities.contact': 'Contactar para Reservas',

    // Location
    'location.title': 'Localização',
    'location.subtitle': 'Na costa oeste de Portugal, perto das melhores praias e atracções',
    'location.address': 'Endereço',
    'location.distances': 'Distâncias',
    'location.nearby': 'Nas Proximidades',
    'location.map': 'Ver no Google Maps',
    'location.open': 'Abrir Mapa',
    'location.how': 'Como Chegar',
    'location.car': 'De Carro',
    'location.car.desc': 'A8 saída Ericeira, seguir direção Calada durante 10km',
    'location.public': 'Transporte Público',
    'location.public.desc': 'Comboio até Sintra + autocarro para Ericeira',
    'location.plane': 'De Avião',
    'location.plane.desc': 'Aeroporto de Lisboa + transfer privado (disponível)',

    // Footer
    'footer.description': 'O seu refúgio perfeito no coração do Douro. Oferecemos uma experiência única de alojamento local, combinando o conforto moderno com a autenticidade portuguesa.',
    'footer.contacts': 'Contactos',
    'footer.hours': '9h-19h todos os dias',
    'footer.response': 'Resposta em 2h',
    'footer.links': 'Links Rápidos',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.cancellation': 'Política de Cancelamento',
    'footer.rights': '© 2024 Quinta Bela Vista. Todos os direitos reservados.',
    'footer.promo': '✨ Reservas diretas têm 10% de desconto • Contacte-nos para condições especiais',

    // Common
    'common.free': 'Gratuito',
    'common.person': 'pessoa',
    'common.min': 'min',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.amenities': 'Amenities',
    'nav.reviews': 'Reviews',
    'nav.activities': 'Activities',
    'nav.location': 'Location',

    // Hero Section
    'hero.title': 'Quinta Bela Vista',
    'hero.subtitle': 'Your perfect retreat near Portugal\'s best beaches',
    'hero.location': 'Ericeira, Portugal',
    'hero.rating': '4.9 (127 reviews)',
    'hero.availability': 'Available year-round',
    'hero.book': 'Book Now',
    'hero.photos': 'View Gallery',

    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Discover every corner of Quinta Bela Vista through our photographs',
    'gallery.exterior': 'Exterior View',
    'gallery.living': 'Living Room',
    'gallery.bedroom': 'Master Bedroom',
    'gallery.kitchen': 'Kitchen',
    'gallery.garden': 'Garden',
    'gallery.pool': 'Pool',
    'gallery.terrace': 'Terrace',
    'gallery.landscape': 'Landscape',

    // Amenities
    'amenities.title': 'Amenities',
    'amenities.subtitle': 'Everything you need for an unforgettable stay',
    'amenities.wifi': 'Free Wi-Fi',
    'amenities.wifi.desc': 'High-speed internet throughout the property',
    'amenities.pool': 'Private Pool',
    'amenities.pool.desc': 'Heated pool with panoramic views',
    'amenities.parking': 'Parking',
    'amenities.parking.desc': 'Private parking for 4 cars',
    'amenities.kitchen': 'Full Kitchen',
    'amenities.kitchen.desc': 'Equipped with all modern appliances',
    'amenities.tv': 'Smart TV',
    'amenities.tv.desc': '65-inch TV with Netflix and streaming',
    'amenities.ac': 'Air Conditioning',
    'amenities.ac.desc': 'Climate control in all bedrooms',
    'amenities.garden': 'Private Garden',
    'amenities.garden.desc': '2 hectares of landscaped garden',
    'amenities.bbq': 'BBQ Area',
    'amenities.bbq.desc': 'Barbecue area with table and benches',
    'amenities.shelter': 'Covered Area',
    'amenities.shelter.desc': 'Covered area for outdoor dining',
    'amenities.capacity': 'Capacity for 10 People',
    'amenities.details': '4 bedrooms • 2 bathrooms • 2 living rooms • Gourmet kitchen',
    'amenities.rooms': 'Bedrooms',
    'amenities.bathrooms': 'Bathrooms',
    'amenities.area': 'Interior Area',
    'amenities.garden.area': 'Garden',

    // Reviews
    'reviews.title': 'What our guests say',
    'reviews.subtitle': 'Authentic experiences shared by our guests',
    'reviews.rating': 'Overall Rating',
    'reviews.total': 'Reviews',
    'reviews.recommend': 'Recommend',

    // Activities
    'activities.title': 'Activities & Experiences',
    'activities.subtitle': 'Discover the wonders of the Portuguese coast and Sintra region',
    'activities.beaches': 'Beaches',
    'activities.nature': 'Nature & Adventure',
    'activities.culture': 'Culture & History',
    'activities.gastronomy': 'Gastronomy',
    'activities.events': 'Seasonal Events',
    'activities.info': 'Need More Information?',
    'activities.info.desc': 'We have a complete activity guide and can help organize your experiences',
    'activities.contact': 'Contact for Bookings',

    // Location
    'location.title': 'Location',
    'location.subtitle': 'On Portugal\'s west coast, near the best beaches and attractions',
    'location.address': 'Address',
    'location.distances': 'Distances',
    'location.nearby': 'Nearby',
    'location.map': 'View on Google Maps',
    'location.open': 'Open Map',
    'location.how': 'How to Get Here',
    'location.car': 'By Car',
    'location.car.desc': 'A8 exit Ericeira, follow direction Calada for 10km',
    'location.public': 'Public Transport',
    'location.public.desc': 'Train to Sintra + bus to Ericeira',
    'location.plane': 'By Plane',
    'location.plane.desc': 'Lisbon Airport + private transfer (available)',

    // Footer
    'footer.description': 'Your perfect retreat in the heart of Douro. We offer a unique local accommodation experience, combining modern comfort with Portuguese authenticity.',
    'footer.contacts': 'Contacts',
    'footer.hours': '9am-7pm every day',
    'footer.response': 'Response within 2h',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cancellation': 'Cancellation Policy',
    'footer.rights': '© 2024 Quinta Bela Vista. All rights reserved.',
    'footer.promo': '✨ Direct bookings get 10% discount • Contact us for special conditions',

    // Common
    'common.free': 'Free',
    'common.person': 'person',
    'common.min': 'min',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const languageTranslations = translations[language];
    return languageTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) { // Simplificação da verificação
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
