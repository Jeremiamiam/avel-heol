import { Container } from '@/components/layout/Container'
import { products } from '@/data/products'
import Link from 'next/link'

// Fonction pour obtenir la couleur selon le type de produit
const getProductColorClass = (category: string) => {
  switch (category) {
    case 'kit':
      return 'bg-primary text-primary-content hover:shadow-primary/25'
    case 'onduleur':
      return 'bg-accent text-accent-content hover:shadow-accent/25'
    case 'batterie':
      return 'bg-success text-success-content hover:shadow-success/25'
    default:
      return 'bg-secondary text-secondary-content hover:shadow-secondary/25'
  }
}

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case 'kit':
      return 'badge-primary'
    case 'onduleur':
      return 'badge-accent'
    case 'batterie':
      return 'badge-success'
    default:
      return 'badge-secondary'
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

export default function KitsPage() {
  const kits = products.filter(p => p.category === 'kit')
  const onduleurs = products.filter(p => p.category === 'onduleur')
  const batteries = products.filter(p => p.category === 'batterie')

  return (
    <main className="min-h-screen">
      <Container>
        <div className="py-16">
          {/* Navigation rapide */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#kits" className="btn btn-primary btn-outline">
                ☀️ Kits Solaires
              </a>
              <a href="#onduleurs" className="btn btn-accent btn-outline">
                ⚡ Onduleurs
              </a>
              <a href="#batteries" className="btn btn-success btn-outline">
                🔋 Batteries
              </a>
            </div>
          </section>

          {/* Kits Solaires */}
          {kits.length > 0 && (
            <section id="kits" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  ☀️ Kits Solaires Complets
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                  Solutions complètes pour débuter ou agrandir votre installation photovoltaïque
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {kits.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="card bg-base-100 shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Image placeholder avec couleur du produit */}
                    <figure className={`${getProductColorClass(product.category)} p-8 relative overflow-hidden`}>
                      <div className="text-8xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                        {getCategoryIcon(product.category)}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4">{getCategoryIcon(product.category)}</div>
                        <div className="text-sm opacity-80">Kit {product.specs.puissance}</div>
                      </div>
                    </figure>
                    
                    <div className="card-body">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`badge ${getCategoryBadgeClass(product.category)}`}>
                          Kit Solaire
                        </span>
                        <span className="badge badge-outline">{product.specs.puissance}</span>
                      </div>
                      
                      <h3 className="card-title text-lg mb-2">{product.name}</h3>
                      <p className="text-base-content/70 text-sm mb-4">{product.shortDescription}</p>
                      
                      {/* Points clés avec icônes */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {product.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <span className="text-primary mr-2 text-xs">✓</span>
                              <span className="text-base-content/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="card-actions justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <div className="text-xs text-base-content/60">TTC, pose comprise</div>
                        </div>
                        <Link 
                          href={`/kit/${product.slug}`} 
                          className="btn btn-primary group-hover:scale-105 transition-transform"
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

          {/* Onduleurs */}
          {onduleurs.length > 0 && (
            <section id="onduleurs" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                  ⚡ Onduleurs Haute Performance
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                  Le cœur de votre installation : onduleurs hybrides et string pour tous vos projets
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {onduleurs.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="card bg-base-100 shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <figure className={`${getProductColorClass(product.category)} p-8 relative overflow-hidden`}>
                      <div className="text-8xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                        {getCategoryIcon(product.category)}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4">{getCategoryIcon(product.category)}</div>
                        <div className="text-sm opacity-80">{product.specs.puissance}</div>
                      </div>
                    </figure>
                    
                    <div className="card-body">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`badge ${getCategoryBadgeClass(product.category)}`}>
                          Onduleur
                        </span>
                        <span className="badge badge-outline">{product.specs.type}</span>
                        <span className="badge badge-outline">{product.specs.marque}</span>
                      </div>
                      
                      <h3 className="card-title text-lg mb-2">{product.name}</h3>
                      <p className="text-base-content/70 text-sm mb-4">{product.shortDescription}</p>
                      
                      {/* Specs techniques */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center text-xs">
                          <span className="text-accent mr-1">⚡</span>
                          <span>{product.specs.puissance}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-accent mr-1">🔌</span>
                          <span>{product.specs.tension}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-accent mr-1">🛡️</span>
                          <span>{product.specs.garantie}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-accent mr-1">🏭</span>
                          <span>{product.specs.marque}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-accent">{product.price}</span>
                          <div className="text-xs text-base-content/60">TTC, hors pose</div>
                        </div>
                        <Link 
                          href={`/kit/${product.slug}`} 
                          className="btn btn-accent group-hover:scale-105 transition-transform"
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

          {/* Batteries */}
          {batteries.length > 0 && (
            <section id="batteries" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-success mb-4">
                  🔋 Batteries de Stockage
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                  Stockez votre énergie solaire pour une autonomie maximale jour et nuit
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {batteries.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="card bg-base-100 shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <figure className={`${getProductColorClass(product.category)} p-8 relative overflow-hidden`}>
                      <div className="text-8xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                        {getCategoryIcon(product.category)}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4">{getCategoryIcon(product.category)}</div>
                        <div className="text-sm opacity-80">{product.specs.capacite}</div>
                      </div>
                    </figure>
                    
                    <div className="card-body">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`badge ${getCategoryBadgeClass(product.category)}`}>
                          Batterie
                        </span>
                        <span className="badge badge-outline">{product.specs.type}</span>
                        <span className="badge badge-outline">{product.specs.marque}</span>
                      </div>
                      
                      <h3 className="card-title text-lg mb-2">{product.name}</h3>
                      <p className="text-base-content/70 text-sm mb-4">{product.shortDescription}</p>
                      
                      {/* Specs batteries */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center text-xs">
                          <span className="text-success mr-1">🔋</span>
                          <span>{product.specs.capacite}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-success mr-1">⚡</span>
                          <span>{product.specs.tension}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-success mr-1">🛡️</span>
                          <span>{product.specs.garantie}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span className="text-success mr-1">🏭</span>
                          <span>{product.specs.marque}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-success">{product.price}</span>
                          <div className="text-xs text-base-content/60">TTC, hors pose</div>
                        </div>
                        <Link 
                          href={`/kit/${product.slug}`} 
                          className="btn btn-success group-hover:scale-105 transition-transform"
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

          {/* CTA final avec glassmorphism */}
          <section className="text-center">
            <div className="card bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="card-body py-12">
                <div className="text-5xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold mb-4">
                  Besoin d'un Conseil Personnalisé ?
                </h2>
                <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                  Nos experts bretons vous accompagnent dans le choix de votre solution solaire. 
                  Étude personnalisée, devis gratuit et installation par nos équipes qualifiées.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/25">
                    📞 Demander un Devis Gratuit
                  </Link>
                  <Link href="/guides" className="btn btn-secondary btn-lg shadow-lg hover:shadow-secondary/25">
                    📚 Consulter nos Guides
                  </Link>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-base-content/60">
                  <span className="flex items-center gap-1">
                    <span className="text-primary">✓</span>
                    Devis gratuit sous 24h
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-primary">✓</span>
                    Installation par équipes qualifiées
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-primary">✓</span>
                    SAV local en Bretagne
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