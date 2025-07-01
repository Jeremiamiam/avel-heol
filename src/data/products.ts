export interface Product {
  id: string
  slug: string
  name: string
  category: 'kit' | 'onduleur' | 'batterie'
  shortDescription: string
  description: string
  price: string
  image: string
  features: string[]
  specs: {
    puissance?: string
    tension?: string
    capacite?: string
    garantie?: string
    marque?: string
    type?: string
  }
  forWho: string[]
  benefits: string[]
  seoKeywords: string[]
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'kit-solaire-autoconsommation-3kw-monocristallin-jinko',
    name: 'Kit Solaire Autoconsommation 3kW Monocristallin Jinko',
    category: 'kit',
    shortDescription: 'Kit solaire 3kW idéal pour débuter en autoconsommation. Panneaux monocristallins Jinko haute performance.',
    description: 'Ce kit solaire de 3kW avec panneaux monocristallins Jinko est parfait pour une première installation d\'autoconsommation. Il permet de réduire significativement votre facture d\'électricité tout en étant facile à installer.',
    price: 'À partir de 2 450€',
    image: '/images/kit-jinko-3kw.jpg',
    features: [
      'Panneaux monocristallins Jinko Solar 410Wc',
      'Onduleur string réseau',
      'Système de fixation inclus',
      'Monitoring intégré',
      'Installation simple',
      'Garantie 25 ans panneaux'
    ],
    specs: {
      puissance: '3000Wc',
      tension: 'Monophasé 230V',
      garantie: '25 ans panneaux / 10 ans onduleur',
      marque: 'Jinko Solar',
      type: 'Monocristallin'
    },
    forWho: [
      'Particuliers débutants en solaire',
      'Maisons avec consommation modérée',
      'Budget maîtrisé',
      'Installation sur toiture standard'
    ],
    benefits: [
      'Réduction facture électricité de 30-50%',
      'Installation en une journée',
      'Retour sur investissement 8-10 ans',
      'Maintenance quasi-nulle'
    ],
    seoKeywords: ['kit solaire 3kw', 'monocristallin', 'jinko solar', 'autoconsommation', 'panneaux solaires']
  },
  {
    id: '2',
    slug: 'kit-solaire-autoconsommation-6kw-batterie-lithium',
    name: 'Kit Solaire Autoconsommation 6kW avec Batterie Lithium',
    category: 'kit',
    shortDescription: 'Kit solaire 6kW avec stockage lithium pour maximiser votre autonomie énergétique.',
    description: 'Solution complète d\'autoconsommation avec stockage. Ce kit 6kW avec batterie lithium vous permet de stocker l\'énergie produite la journée pour la consommer le soir.',
    price: 'À partir de 8 950€',
    image: '/images/kit-6kw-batterie.jpg',
    features: [
      'Panneaux monocristallins 6kWc',
      'Onduleur hybride intégré',
      'Batterie Lithium 5.1kWh',
      'Système de backup inclus',
      'Monitoring avancé',
      'Installation clé en main'
    ],
    specs: {
      puissance: '6000Wc',
      capacite: '5.1kWh stockage',
      tension: 'Monophasé 230V',
      garantie: '25 ans panneaux / 10 ans batterie',
      marque: 'Pylontech + Jinko',
      type: 'Hybride avec stockage'
    },
    forWho: [
      'Familles avec forte consommation',
      'Recherche d\'autonomie maximale',
      'Maisons avec piscine/pompe à chaleur',
      'Zones avec coupures fréquentes'
    ],
    benefits: [
      'Autonomie énergétique 70-80%',
      'Backup en cas de coupure',
      'Optimisation totale de la production',
      'Évolution possible du stockage'
    ],
    seoKeywords: ['kit solaire 6kw', 'batterie lithium', 'autoconsommation stockage', 'hybride', 'pylontech']
  },
  {
    id: '3',
    slug: 'onduleur-hybride-huawei-sun2000-3kw',
    name: 'Onduleur Hybride Huawei Sun2000 3kW',
    category: 'onduleur',
    shortDescription: 'Onduleur hybride Huawei Sun2000 3kW, référence du marché pour installations avec stockage.',
    description: 'L\'onduleur hybride Huawei Sun2000 3kW est la solution idéale pour gérer production solaire et stockage batterie. Technologie de pointe et fiabilité reconnue.',
    price: 'À partir de 1 250€',
    image: '/images/huawei-sun2000-3kw.jpg',
    features: [
      'Technologie hybride avancée',
      'Compatible batteries haute tension',
      'Monitoring Wi-Fi intégré',
      'Protection IP65',
      'Installation intérieure/extérieure',
      'Garantie constructeur 10 ans'
    ],
    specs: {
      puissance: '3000W',
      tension: 'Monophasé 230V',
      garantie: '10 ans',
      marque: 'Huawei',
      type: 'Hybride'
    },
    forWho: [
      'Installations avec stockage',
      'Projets d\'extension solaire',
      'Recherche de qualité premium',
      'Monitoring avancé souhaité'
    ],
    benefits: [
      'Rendement >97%',
      'Gestion intelligente batterie',
      'Évolutivité garantie',
      'SAV constructeur premium'
    ],
    seoKeywords: ['onduleur hybride', 'huawei sun2000', '3kw', 'stockage batterie', 'monitoring']
  },
  {
    id: '4',
    slug: 'onduleur-triphase-deye-6kw',
    name: 'Onduleur Triphasé Deye 6kW',
    category: 'onduleur',
    shortDescription: 'Onduleur triphasé Deye 6kW pour installations professionnelles et grandes maisons.',
    description: 'Solution triphasée robuste pour les installations de moyenne puissance. L\'onduleur Deye 6kW triphasé offre un excellent rapport qualité-prix pour les projets exigeants.',
    price: 'À partir de 890€',
    image: '/images/deye-triphase-6kw.jpg',
    features: [
      'Technologie triphasée équilibrée',
      'Double MPPT',
      'Écran LCD intégré',
      'Protection IP65',
      'Compatible extension',
      'Rapport qualité-prix optimal'
    ],
    specs: {
      puissance: '6000W',
      tension: 'Triphasé 400V',
      garantie: '5 ans',
      marque: 'Deye',
      type: 'String triphasé'
    },
    forWho: [
      'Installations triphasées',
      'Professionnels et agriculteurs',
      'Grandes maisons (>150m²)',
      'Budget optimisé'
    ],
    benefits: [
      'Distribution équilibrée sur 3 phases',
      'Rendement optimisé',
      'Installation flexible',
      'Prix compétitif'
    ],
    seoKeywords: ['onduleur triphasé', 'deye', '6kw', 'professionnel', 'agricole']
  },
  {
    id: '5',
    slug: 'batterie-lithium-pylontech-6kwh',
    name: 'Batterie Lithium Pylontech 6kWh',
    category: 'batterie',
    shortDescription: 'Batterie Lithium Pylontech 6kWh, la référence du stockage résidentiel.',
    description: 'Batterie lithium Pylontech 6kWh, leader mondial du stockage résidentiel. Technologie LiFePO4 sûre et durable pour votre indépendance énergétique.',
    price: 'À partir de 3 200€',
    image: '/images/pylontech-6kwh.jpg',
    features: [
      'Technologie LiFePO4 sûre',
      'Modularité et évolutivité',
      'BMS intégré intelligent',
      'Installation plug & play',
      'Design compact et silencieux',
      'Garantie 10 ans'
    ],
    specs: {
      capacite: '6000Wh utilisables',
      tension: '48V',
      garantie: '10 ans ou 6000 cycles',
      marque: 'Pylontech',
      type: 'Lithium LiFePO4'
    },
    forWho: [
      'Ajout stockage installation existante',
      'Recherche d\'autonomie nocturne',
      'Évolution progressive du stockage',
      'Sécurité et fiabilité prioritaires'
    ],
    benefits: [
      'Stockage 1-2 jours d\'autonomie',
      'Technologie la plus sûre',
      'Extension possible jusqu\'à 48kWh',
      'Leader mondial reconnu'
    ],
    seoKeywords: ['batterie lithium', 'pylontech', '6kwh', 'stockage solaire', 'lifepo4']
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category)
} 