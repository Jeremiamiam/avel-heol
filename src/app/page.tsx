import { Container } from '@/components/layout/Container'
import { products } from '@/data/products'
import Link from 'next/link'

export default function HomePage() {
  // Produits sélectionnés selon recommandations SEO
  const seoProducts = [
    products.find(p => p.slug.includes('3kw-monocristallin-jinko')),
    products.find(p => p.slug.includes('huawei-sun2000-3kw')),
    products.find(p => p.slug.includes('pylontech-6kwh')),
    products.find(p => p.slug.includes('6kw-batterie'))
  ].filter((product): product is NonNullable<typeof product> => Boolean(product))

  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          {/* Hero Section Impactant */}
          <section className="text-center mb-20">
            <div className="badge badge-primary badge-lg mb-4">🏴󠁦󠁲󠁢󠁲󠁥󠁿 Expertise Bretonne depuis 2009</div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Avel Heol
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-base-content/90 mb-4">
              Solutions photovoltaïques haute performance
            </p>
            <p className="text-lg text-base-content/70 max-w-3xl mx-auto mb-8">
              Kits solaires MPPT, onduleurs hybrides et batteries lithium LiFePO4. 
              Sélection technique rigoureuse pour installateurs exigeants.
            </p>
            
            {/* Stats Hero */}
            <div className="stats stats-horizontal shadow mb-8 bg-base-200">
              <div className="stat">
                <div className="stat-figure text-primary">⚡</div>
                <div className="stat-title">Installations</div>
                <div className="stat-value text-primary">+500</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">🏆</div>
                <div className="stat-title">Expérience</div>
                <div className="stat-value text-primary">15 ans</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">⭐</div>
                <div className="stat-title">Satisfaction</div>
                <div className="stat-value text-primary">4.8/5</div>
              </div>
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                📋 Devis Gratuit
              </Link>
              <a href="tel:0296253800" className="btn btn-outline btn-lg">
                📞 02 96 25 38 00
              </a>
            </div>
            <p className="text-sm text-base-content/60 mt-2">
              Conseil technique gratuit • Étude personnalisée • Livraison 3-15 jours
            </p>
          </section>

          {/* Sélection SEO Produits */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Sélection Technique Haute Performance</h2>
              <div className="badge badge-secondary badge-lg mb-4">
                🎯 Basée sur vos recherches les plus fréquentes
              </div>
              <p className="text-base-content/70 max-w-4xl mx-auto">
                4 solutions photovoltaïques rigoureusement testées en conditions réelles. 
                Monocristallin, hybride MPPT et stockage LiFePO4 pour performances optimales.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {seoProducts.map((product) => (
                <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="card-body">
                    <div className="flex justify-between items-center mb-2">
                      <div className="badge badge-primary">
                        {product.category === 'kit' ? '⚡ Kit Solaire' : 
                         product.category === 'onduleur' ? '🔌 Onduleur' : '🔋 Batterie'}
                      </div>
                      <div className="badge badge-outline">
                        {product.specs.marque}
                      </div>
                    </div>
                    
                    <h3 className="card-title text-lg leading-tight">{product.name}</h3>
                    <p className="text-base-content/70 text-sm">{product.shortDescription}</p>
                    
                    {/* Specs techniques */}
                    <div className="grid grid-cols-2 gap-2 my-3 text-xs">
                      {product.specs.puissance && (
                        <div className="bg-base-200 p-2 rounded">
                          <span className="font-semibold">⚡ Puissance:</span> {product.specs.puissance}
                        </div>
                      )}
                      {product.specs.capacite && (
                        <div className="bg-base-200 p-2 rounded">
                          <span className="font-semibold">🔋 Capacité:</span> {product.specs.capacite}
                        </div>
                      )}
                      {product.specs.tension && (
                        <div className="bg-base-200 p-2 rounded">
                          <span className="font-semibold">🔌 Tension:</span> {product.specs.tension}
                        </div>
                      )}
                      {product.specs.garantie && (
                        <div className="bg-base-200 p-2 rounded">
                          <span className="font-semibold">✅ Garantie:</span> {product.specs.garantie}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <Link href={`/kit/${product.slug}`} className="btn btn-primary btn-sm">
                        Fiche Technique
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/kits" className="btn btn-outline btn-lg">
                🔍 Catalogue Complet
              </Link>
            </div>
          </section>

          {/* Preuves Sociales Factuelles */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Expertise Reconnue</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card bg-primary text-primary-content">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-3xl font-bold">+500</div>
                  <h3 className="text-lg font-semibold">Installations Réussies</h3>
                  <p className="text-sm opacity-90">
                    Particuliers et professionnels depuis 2009
                  </p>
                </div>
              </div>
              
              <div className="card bg-secondary text-secondary-content">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-3xl font-bold">3-15j</div>
                  <h3 className="text-lg font-semibold">Livraison Express</h3>
                  <p className="text-sm opacity-90">
                    Stock permanent France métropolitaine
                  </p>
                </div>
              </div>
              
              <div className="card bg-accent text-accent-content">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-3xl font-bold">4.8/5</div>
                  <h3 className="text-lg font-semibold">Satisfaction Client</h3>
                  <p className="text-sm opacity-90">
                    SAV réactif équipe bretonne
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <h3 className="text-lg font-semibold">Normes Françaises</h3>
                  <p className="text-sm text-base-content/70">
                    Produits certifiés CE/IEC, IP65, garanties étendues
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🔧</div>
                  <h3 className="text-lg font-semibold">Support Technique</h3>
                  <p className="text-sm text-base-content/70">
                    Équipe terrain, formation à distance, guides détaillés
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">💳</div>
                  <h3 className="text-lg font-semibold">Paiement 3x</h3>
                  <p className="text-sm text-base-content/70">
                    Sans frais, sécurisé, devis gratuit
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Guide & Conseils */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4">Guides & Expertise Technique</h2>
            <p className="text-center text-base-content/70 mb-12 max-w-3xl mx-auto">
              15 ans d'expérience terrain condensés en guides pratiques. 
              De la conception au monitoring, maîtrisez votre installation photovoltaïque.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
                <div className="card-body text-center">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="font-bold mb-2">Choisir son Kit</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Autoconsommation vs autonomie, dimensionnement MPPT, choix onduleur
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline">
                    Guide Complet
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
                <div className="card-body text-center">
                  <div className="text-3xl mb-4">🔧</div>
                  <h3 className="font-bold mb-2">Installation</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Step-by-step, raccordement DC/AC, mise en service, sécurité
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline">
                    Voir les Étapes
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
                <div className="card-body text-center">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-bold mb-2">Monitoring</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Apps mobiles, courbes de rendement, optimisation production
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline">
                    Outils de Suivi
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
                <div className="card-body text-center">
                  <div className="text-3xl mb-4">❓</div>
                  <h3 className="font-bold mb-2">FAQ Technique</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Garanties, démarches, THD, strings, back-up, évolutions
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline">
                    Questions/Réponses
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Témoignages Clients Techniques */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Retours Terrain</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-base-200">
                <div className="card-body">
                  <p className="italic mb-4">
                    "Kit 6kW hybride Pylontech installé sur ma ferme. Monitoring impeccable, 
                    rendement MPPT conforme aux specs, backup nickel pendant les orages. 
                    Équipe technique au top pour le paramétrage onduleur."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rating rating-sm">
                        {[...Array(5)].map((_, i) => (
                          <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" checked={i === 4} readOnly />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">Jean-Luc M. - Électricien, Quimper</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <p className="italic mb-4">
                    "Onduleur triphasé Deye 6kW pour mon atelier. Distribution équilibrée sur les 3 phases, 
                    double MPPT qui optimise bien mes 2 strings orientés différemment. 
                    Rapport qualité-prix imbattable, livraison en 5 jours."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rating rating-sm">
                        {[...Array(5)].map((_, i) => (
                          <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" checked={i === 4} readOnly />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">Patrick D. - Artisan, Vannes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final Commercial */}
          <section className="bg-primary text-primary-content rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Prêt à Passer au Solaire ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Étude personnalisée gratuite • Conseil technique expert • Devis sous 24h
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                📋 Demander un Devis Gratuit
              </Link>
              <a href="tel:0296253800" className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
                👨‍💻 Parler à un Expert
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <span>✅ Paiement 3x sans frais</span>
              <span>✅ Garanties étendues</span>
              <span>✅ Livraison express</span>
              <span>✅ Support technique</span>
            </div>
            
            <div className="mt-8 text-xs opacity-70">
              <p>📍 56 rue de la pommeraie – 22230 Merdrignac, France</p>
              <p>📧 commerce@avelheol.fr • 📞 02 96 25 38 00</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
