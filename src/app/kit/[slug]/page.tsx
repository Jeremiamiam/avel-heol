import { Container } from '@/components/layout/Container'
import { getProductBySlug, products } from '@/data/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface ProductPageProps {
  params: {
    slug: string
  }
}

// Fonction nécessaire pour l'export statique
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Fonctions utilitaires pour les couleurs et icônes
const getProductColorClass = (category: string) => {
  switch (category) {
    case 'kit':
      return 'bg-primary text-primary-content'
    case 'onduleur':
      return 'bg-accent text-accent-content'
    case 'batterie':
      return 'bg-success text-success-content'
    default:
      return 'bg-secondary text-secondary-content'
  }
}

const getProductGradientClass = (category: string) => {
  switch (category) {
    case 'kit':
      return 'from-primary/20 to-primary/5'
    case 'onduleur':
      return 'from-accent/20 to-accent/5'
    case 'batterie':
      return 'from-success/20 to-success/5'
    default:
      return 'from-secondary/20 to-secondary/5'
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'kit':
      return '☀️'
    case 'onduleur':
      return '⚡'
    case 'batterie':
      return '🔋'
    default:
      return '🔧'
  }
}

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'kit':
      return 'Kit Solaire'
    case 'onduleur':
      return 'Onduleur'
    case 'batterie':
      return 'Batterie'
    default:
      return 'Produit'
  }
}

const getThemeColor = (category: string) => {
  switch (category) {
    case 'kit':
      return 'primary'
    case 'onduleur':
      return 'accent'
    case 'batterie':
      return 'success'
    default:
      return 'secondary'
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Autres produits similaires
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 2)

  const themeColor = getThemeColor(product.category)

  return (
    <main className="min-h-screen">
      {/* Hero Section avec dégradé de la couleur du produit */}
      <section className={`relative bg-gradient-to-br ${getProductGradientClass(product.category)} py-20`}>
        <div className="absolute inset-0 bg-gradient-to-r from-base-100/50 to-transparent"></div>
        <Container>
          <div className="relative z-10">
            {/* Breadcrumb moderne */}
            <div className="flex items-center gap-2 text-sm mb-8 text-base-content/70">
              <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
              <span>›</span>
              <Link href="/kits" className="hover:text-primary transition-colors">Nos Solutions</Link>
              <span>›</span>
              <span className="text-base-content">{product.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image produit réelle */}
              <div className="card bg-base-200 shadow-2xl relative overflow-hidden">
                <div className="card-body p-8">
                  <div className="relative aspect-square w-full max-w-md mx-auto">
                    <Image
                      src="images/produit.png"
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Badges de certifications */}
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    <span className="badge badge-neutral badge-sm">
                      Garantie {product.specs.garantie}
                    </span>
                    <span className="badge badge-neutral badge-sm">
                      CE/IEC
                    </span>
                    <span className="badge badge-neutral badge-sm">
                      {product.specs.marque}
                    </span>
                  </div>
                </div>
              </div>

              {/* Informations produit */}
              <div className="space-y-6">
                <div className={`badge badge-${themeColor} badge-lg`}>
                  {getCategoryLabel(product.category)}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-base-content">
                  {product.name}
                </h1>
                
                <p className="text-xl text-base-content/80 leading-relaxed">
                  {product.description}
                </p>

                {/* Prix et CTA principale - Mieux équilibré */}
                <div className="card bg-base-200/50 backdrop-blur-sm border border-white/10">
                  <div className="card-body">
                    {/* Prix principal centré */}
                    <div className="text-center mb-6">
                      <span className={`text-5xl font-bold text-${themeColor} block`}>{product.price}</span>
                      <div className="text-base text-base-content/70 mt-2">TTC, installation comprise</div>
                      <div className="text-sm text-base-content/60 mt-1">
                        Financement 3x sans frais à partir de 500€
                      </div>
                    </div>
                    
                    {/* Boutons CTA */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <Link 
                        href="/contact" 
                        className={`btn btn-${themeColor} btn-lg shadow-lg hover:shadow-${themeColor}/25`}
                      >
                        🛒 Commander maintenant
                      </Link>
                      <Link 
                        href="/contact" 
                        className="btn btn-outline btn-lg"
                      >
                        📋 Devis personnalisé
                      </Link>
                    </div>
                    
                    {/* Points forts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-base-content/70">
                      <div className="flex items-center justify-center gap-2 p-2 bg-base-100/50 rounded">
                        <span className={`text-${themeColor}`}>✓</span>
                        <span>Livraison 3-15 jours</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 p-2 bg-base-100/50 rounded">
                        <span className={`text-${themeColor}`}>✓</span>
                        <span>Installation incluse</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 p-2 bg-base-100/50 rounded">
                        <span className={`text-${themeColor}`}>✓</span>
                        <span>SAV local Bretagne</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Points forts visuels */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.specs.puissance && (
                    <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                      <span className={`text-${themeColor} text-xl`}>⚡</span>
                      <div>
                        <div className="font-medium text-sm">{product.specs.puissance}</div>
                        <div className="text-xs text-base-content/60">Puissance</div>
                      </div>
                    </div>
                  )}
                  {product.specs.capacite && (
                    <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                      <span className={`text-${themeColor} text-xl`}>🔋</span>
                      <div>
                        <div className="font-medium text-sm">{product.specs.capacite}</div>
                        <div className="text-xs text-base-content/60">Capacité</div>
                      </div>
                    </div>
                  )}
                  {product.specs.tension && (
                    <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                      <span className={`text-${themeColor} text-xl`}>🔌</span>
                      <div>
                        <div className="font-medium text-sm">{product.specs.tension}</div>
                        <div className="text-xs text-base-content/60">Tension</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                    <span className={`text-${themeColor} text-xl`}>🎯</span>
                    <div>
                      <div className="font-medium text-sm">97.3%</div>
                      <div className="text-xs text-base-content/60">Rendement</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                    <span className={`text-${themeColor} text-xl`}>🌡️</span>
                    <div>
                      <div className="font-medium text-sm">-25°C/+60°C</div>
                      <div className="text-xs text-base-content/60">Température</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-base-200/50 rounded-lg">
                    <span className={`text-${themeColor} text-xl`}>🔇</span>
                    <div>
                      <div className="font-medium text-sm">Silencieux</div>
                      <div className="text-xs text-base-content/60">Refroidissement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-16 space-y-16">
          
          {/* Section Description et Avantages */}
          <section>
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold text-${themeColor} mb-4`}>
                {getCategoryIcon(product.category)} {getCategoryLabel(product.category)} Haute Performance
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.category === 'onduleur' && (
              <div className="space-y-8">
                <div className="alert alert-info shadow-lg max-w-4xl mx-auto">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <span className="text-lg font-medium">Véritable couteau suisse de l'énergie solaire</span>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  Cet onduleur peut être acheté sous sa forme onduleur réseau classique, mais il peut aussi :
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  <div className="card bg-base-200/50 border border-accent/20">
                    <div className="card-body text-center">
                      <div className="text-4xl mb-4">🔄</div>
                      <h4 className="font-bold mb-2">Back-up intégré</h4>
                      <p className="text-sm">Maintient une alimentation de secours temporaire pour vos petits appareils en cas de coupure</p>
                    </div>
                  </div>
                  <div className="card bg-base-200/50 border border-accent/20">
                    <div className="card-body text-center">
                      <div className="text-4xl mb-4">🔋</div>
                      <h4 className="font-bold mb-2">Stockage batterie</h4>
                      <p className="text-sm">Se couple à des batteries pour stocker votre production et maximiser votre autoconsommation</p>
                    </div>
                  </div>
                  <div className="card bg-base-200/50 border border-accent/20">
                    <div className="card-body text-center">
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="font-bold mb-2">Installation cascade</h4>
                      <p className="text-sm">S'implante en cascade de plusieurs onduleurs, permettant le passage sur un système triphasé ou plus puissant</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Caractéristiques et avantages */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">✨ Caractéristiques Techniques</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-base-200/30 rounded-lg hover:bg-base-200/50 transition-colors">
                      <span className="capitalize font-medium">{key}:</span>
                      <span className="text-base-content/80 font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">🎯 Idéal Pour</h3>
                <ul className="space-y-3">
                  {product.forWho.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-base-200/20 rounded-lg">
                      <span className={`text-${themeColor} mt-1 text-lg`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section Vidéo Placeholder */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🎬 Présentation Vidéo</h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Découvrez le {product.name} en action avec notre vidéo de démonstration
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className={`card bg-gradient-to-br ${getProductGradientClass(product.category)} shadow-2xl aspect-video cursor-pointer group`}>
                <div className="card-body flex items-center justify-center relative">
                  <div className="text-center">
                    <div className={`text-8xl mb-4 opacity-60 group-hover:scale-110 transition-transform duration-300`}>
                      ▶
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Installation avec stepper horizontal */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">🔧 Guide d'Installation</h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                5 étapes simples pour installer votre {product.name}
              </p>
              <div className="alert alert-warning mt-6 max-w-3xl mx-auto">
                <span>⚠️ Installation réservée aux personnes qualifiées. Coupez l'alimentation avant toute intervention.</span>
              </div>
            </div>
            
            {/* Stepper horizontal */}
            <div className="max-w-6xl mx-auto">
              <ul className="steps w-full">
                <li className={`step step-${themeColor}`}>
                  <div className="text-center mt-4">
                    <div className="text-3xl mb-2">🔍</div>
                    <h4 className="font-bold text-sm">Vérification</h4>
                    <p className="text-xs text-base-content/60">Compatibilité & ventilation</p>
                  </div>
                </li>
                <li className={`step step-${themeColor}`}>
                  <div className="text-center mt-4">
                    <div className="text-3xl mb-2">🔧</div>
                    <h4 className="font-bold text-sm">Fixation</h4>
                    <p className="text-xs text-base-content/60">Support mural sécurisé</p>
                  </div>
                </li>
                <li className={`step step-${themeColor}`}>
                  <div className="text-center mt-4">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-bold text-sm">Raccordement DC</h4>
                    <p className="text-xs text-base-content/60">Panneaux vers onduleur</p>
                  </div>
                </li>
                <li className={`step step-${themeColor}`}>
                  <div className="text-center mt-4">
                    <div className="text-3xl mb-2">🔌</div>
                    <h4 className="font-bold text-sm">Raccordement AC</h4>
                    <p className="text-xs text-base-content/60">Connexion au réseau</p>
                  </div>
                </li>
                <li className={`step step-${themeColor}`}>
                  <div className="text-center mt-4">
                    <div className="text-3xl mb-2">📱</div>
                    <h4 className="font-bold text-sm">Configuration</h4>
                    <p className="text-xs text-base-content/60">Mise en service & test</p>
                  </div>
                </li>
              </ul>
              
              {/* Support expert */}
              <div className="card bg-base-200/50 mt-12 max-w-4xl mx-auto">
                <div className="card-body text-center">
                  <h3 className="text-xl font-bold mb-4">🎓 Accompagnement Expert Avel Heol</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📞</div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm">Support technique</h5>
                        <p className="text-xs text-base-content/60">Conseils gratuits de nos ingénieurs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🛠️</div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm">Formation à distance</h5>
                        <p className="text-xs text-base-content/60">Sessions pour l'auto-installation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🤝</div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm">Réseau installateurs</h5>
                        <p className="text-xs text-base-content/60">Partenaires qualifiés en France</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Link href="/contact" className={`btn btn-${themeColor} btn-sm`}>
                      📞 Parler à un expert
                    </Link>
                    <button className="btn btn-outline btn-sm">
                      📧 support@avelheol.fr
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Produits similaires */}
          {relatedProducts.length > 0 && (
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Produits Similaires</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="card bg-base-100 shadow-lg hover:scale-105 transition-transform">
                    <figure className={`${getProductColorClass(relatedProduct.category)} p-6`}>
                      <div className="text-5xl">{getCategoryIcon(relatedProduct.category)}</div>
                    </figure>
                    <div className="card-body">
                      <h4 className="card-title text-lg">{relatedProduct.name}</h4>
                      <p className="text-sm text-base-content/70">{relatedProduct.shortDescription}</p>
                      <div className="card-actions justify-between items-center mt-4">
                        <span className={`text-lg font-bold text-${getThemeColor(relatedProduct.category)}`}>
                          {relatedProduct.price}
                        </span>
                        <Link 
                          href={`/kit/${relatedProduct.slug}`} 
                          className={`btn btn-${getThemeColor(relatedProduct.category)} btn-sm`}
                        >
                          Découvrir
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA final avec couleur thématique */}
          <section className="text-center">
            <div className={`card bg-gradient-to-br ${getProductGradientClass(product.category)} backdrop-blur-sm border border-white/10 shadow-2xl`}>
              <div className="card-body py-12">
                <div className="text-6xl mb-6">{getCategoryIcon(product.category)}</div>
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à passer à l'énergie solaire ?
                </h2>
                <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                  Nos experts vous accompagnent de A à Z : étude personnalisée, installation qualifiée et suivi long terme. 
                  Rejoignez les milliers de foyers bretons qui ont fait le choix de l'autonomie énergétique.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className={`btn btn-${themeColor} btn-lg shadow-lg hover:shadow-${themeColor}/25`}
                  >
                    📞 Démarrer mon projet
                  </Link>
                  <Link href="/guides" className="btn btn-outline btn-lg">
                    📚 En savoir plus
                  </Link>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-base-content/60">
                  <span className="flex items-center gap-1">
                    <span className={`text-${themeColor}`}>✓</span>
                    Devis sous 24h
                  </span>
                  <span className="flex items-center gap-1">
                    <span className={`text-${themeColor}`}>✓</span>
                    Installation certifiée RGE
                  </span>
                  <span className="flex items-center gap-1">
                    <span className={`text-${themeColor}`}>✓</span>
                    Garantie constructeur
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 