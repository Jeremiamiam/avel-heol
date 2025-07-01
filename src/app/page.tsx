'use client';

import { Container } from '@/components/layout/Container'
import { products } from '@/data/products'
import Link from 'next/link'
import { useParallax } from '@/hooks/useParallax'

export default function HomePage() {
  const scrollY = useParallax();
  
  // Produits sélectionnés selon recommandations SEO
  const seoProducts = [
    products.find(p => p.slug.includes('3kw-monocristallin-jinko')),
    products.find(p => p.slug.includes('huawei-sun2000-3kw')),
    products.find(p => p.slug.includes('pylontech-6kwh')),
    products.find(p => p.slug.includes('6kw-batterie'))
  ].filter((product): product is NonNullable<typeof product> => Boolean(product))

  // Calculs pour l'effet parallax
  const parallaxOffset = scrollY * 0.5; // Image scroll plus lentement
  const contentOffset = scrollY * 0.1; // Contenu avec effet subtil

  return (
    <main>
      <Container>

        <div className="min-h-screen py-16">
          {/* Hero Section avec Image Background */}
          <section className="mb-20 -mx-4 md:-mx-8 lg:-mx-12">
            <div className="card bg-base-100 shadow-2xl overflow-hidden">
              <div className="relative min-h-[70vh] lg:min-h-[80vh]">
                {/* Image de fond avec parallax */}
                <img 
                  src="/images/avelheol_hero.jpg" 
                  alt="Installation photovoltaïque Avel Heol"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-75 ease-out"
                  style={{
                    transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                  }}
                />
                
                {/* Overlay gradient pour lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-content/80 via-base-content/50 to-base-content/30"></div>
                
                {/* Contenu du hero avec parallax subtil */}
                <div 
                  className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 py-20 transition-transform duration-75 ease-out"
                  style={{
                    transform: `translateY(${-contentOffset}px)`,
                  }}
                >
                  <div 
                    className="badge badge-primary badge-lg mb-6 animate-pulse bg-primary/80 text-primary-content border-0 transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 0.5}px)`,
                    }}
                  >
                    🏴󠁦󠁲󠁢󠁲󠁥󠁿 Expertise Bretonne depuis 2009
                  </div>
                  
                  <h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 0.3}px)`,
                    }}
                  >
                    Avel Heol
                  </h1>
                  
                  <p 
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white/95 drop-shadow-lg transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 0.4}px)`,
                    }}
                  >
                    Solutions photovoltaïques haute performance
                  </p>
                  
                  <p 
                    className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 drop-shadow-md transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 0.6}px)`,
                    }}
                  >
                    Kits solaires MPPT, onduleurs hybrides et batteries lithium LiFePO4. 
                    Sélection technique rigoureuse pour installateurs exigeants.
                  </p>
                  
                  {/* Stats Hero intégrés */}
                  <div 
                    className="stats stats-horizontal shadow-2xl mb-12 bg-base-100/90 backdrop-blur-sm transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 0.8}px)`,
                    }}
                  >
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
                  <div 
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4 transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset}px)`,
                    }}
                  >
                    <Link href="/contact" className="btn btn-primary btn-lg hover:scale-105 transition-transform shadow-xl">
                      📋 Devis Gratuit
                    </Link>
                    <a href="tel:0296253800" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                      📞 02 96 25 38 00
                    </a>
                  </div>
                  
                  <p 
                    className="text-sm text-white/80 mt-4 drop-shadow-sm transition-transform duration-75 ease-out"
                    style={{
                      transform: `translateY(${contentOffset * 1.2}px)`,
                    }}
                  >
                    Conseil technique gratuit • Étude personnalisée • Livraison 3-15 jours
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sélection SEO Produits */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Sélection Technique Haute Performance</h2>
              <p className="text-base-content/70 max-w-4xl mx-auto">
                4 solutions photovoltaïques rigoureusement testées en conditions réelles. 
                Monocristallin, hybride MPPT et stockage LiFePO4 pour performances optimales.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {seoProducts.map((product, index) => {
                // Configuration des couleurs DaisyUI pour chaque produit
                let backgroundClass = '';
                let iconClass = '';
                
                if (product.category === 'kit') {
                  if (index === 0) {
                    backgroundClass = 'bg-primary text-primary-content';
                    iconClass = 'text-primary-content opacity-80';
                  } else {
                    backgroundClass = 'bg-secondary text-secondary-content';
                    iconClass = 'text-secondary-content opacity-80';
                  }
                } else if (product.category === 'onduleur') {
                  backgroundClass = 'bg-accent text-accent-content';
                  iconClass = 'text-accent-content opacity-80';
                } else if (product.category === 'batterie') {
                  backgroundClass = 'bg-success text-success-content';
                  iconClass = 'text-success-content opacity-80';
                } else {
                  backgroundClass = 'bg-info text-info-content';
                  iconClass = 'text-info-content opacity-80';
                }

                return (
                  <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Image Placeholder pour chaque produit */}
                    <div className="card-body p-0">
                      <div className={`aspect-video ${backgroundClass} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-center z-10">
                          <div className={`text-4xl mb-2 ${iconClass}`}>
                            {product.category === 'kit' ? '⚡' : 
                             product.category === 'onduleur' ? '🔌' : '🔋'}
                          </div>
                          <p className="text-sm font-semibold opacity-70">Photo {product.specs.marque}</p>
                          <p className="text-xs opacity-50">Image produit à venir</p>
                        </div>
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="card-body pt-4">
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
                          <div className="bg-gradient-to-r from-base-200 to-base-300 p-2 rounded">
                            <span className="font-semibold">⚡ Puissance:</span> {product.specs.puissance}
                          </div>
                        )}
                        {product.specs.capacite && (
                          <div className="bg-gradient-to-r from-base-200 to-base-300 p-2 rounded">
                            <span className="font-semibold">🔋 Capacité:</span> {product.specs.capacite}
                          </div>
                        )}
                        {product.specs.tension && (
                          <div className="bg-gradient-to-r from-base-200 to-base-300 p-2 rounded">
                            <span className="font-semibold">🔌 Tension:</span> {product.specs.tension}
                          </div>
                        )}
                        {product.specs.garantie && (
                          <div className="bg-gradient-to-r from-base-200 to-base-300 p-2 rounded">
                            <span className="font-semibold">✅ Garantie:</span> {product.specs.garantie}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Link href={`/kit/${product.slug}`} className="btn btn-primary btn-sm hover:scale-105 transition-transform">
                          Fiche Technique
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/kits" className="btn btn-outline btn-lg hover:scale-105 transition-transform">
                🔍 Catalogue Complet
              </Link>
            </div>
          </section>



          {/* Preuves Sociales Factuelles */}
          <section className="mb-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 rounded-3xl -z-10"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Expertise Reconnue</h2>
              <div className="badge badge-info badge-lg">
                🏆 15 ans d'expérience terrain
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2 animate-bounce">📊</div>
                  <div className="text-3xl font-bold">+500</div>
                  <h3 className="text-lg font-semibold">Installations Réussies</h3>
                  <p className="text-sm opacity-90">
                    Particuliers et professionnels depuis 2009
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-secondary to-secondary/80 text-secondary-content shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2 animate-pulse">⚡</div>
                  <div className="text-3xl font-bold">3-15j</div>
                  <h3 className="text-lg font-semibold">Livraison Express</h3>
                  <p className="text-sm opacity-90">
                    Stock permanent France métropolitaine
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-accent to-accent/80 text-accent-content shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-3xl font-bold">4.8/5</div>
                  <h3 className="text-lg font-semibold">Satisfaction Client</h3>
                  <p className="text-sm opacity-90">
                    SAV réactif équipe bretonne
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <h3 className="text-lg font-semibold">Normes Françaises</h3>
                  <p className="text-sm text-base-content/70">
                    Produits certifiés CE/IEC, IP65, garanties étendues
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">🔧</div>
                  <h3 className="text-lg font-semibold">Support Technique</h3>
                  <p className="text-sm text-base-content/70">
                    Équipe terrain, formation à distance, guides détaillés
                  </p>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Guides & Expertise Technique</h2>
              <div className="badge badge-warning badge-lg mb-4">
                📚 Ressources expertes
              </div>
              <p className="text-base-content/70 max-w-3xl mx-auto">
                15 ans d'expérience terrain condensés en guides pratiques. 
                De la conception au monitoring, maîtrisez votre installation photovoltaïque.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Image placeholder pour guide */}
                <div className="card-body p-0">
                  <div className="aspect-[3/2] bg-gradient-to-br from-warning/20 to-primary/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl mb-2 opacity-60">🎯</div>
                      <p className="text-sm font-semibold opacity-70">Guide Dimensionnement</p>
                      <p className="text-xs opacity-50">Illustration à venir</p>
                    </div>
                    {/* Effet brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                <div className="card-body pt-4">
                  <h3 className="font-bold mb-2">Choisir son Kit</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Autoconsommation vs autonomie, dimensionnement MPPT, choix onduleur
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline hover:scale-105 transition-transform">
                    Guide Complet
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Image placeholder pour installation */}
                <div className="card-body p-0">
                  <div className="aspect-[3/2] bg-gradient-to-br from-success/20 to-secondary/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl mb-2 opacity-60">🔧</div>
                      <p className="text-sm font-semibold opacity-70">Manuel Installation</p>
                      <p className="text-xs opacity-50">Schémas techniques</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                <div className="card-body pt-4">
                  <h3 className="font-bold mb-2">Installation</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Step-by-step, raccordement DC/AC, mise en service, sécurité
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline hover:scale-105 transition-transform">
                    Voir les Étapes
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Image placeholder pour monitoring */}
                <div className="card-body p-0">
                  <div className="aspect-[3/2] bg-gradient-to-br from-info/20 to-accent/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl mb-2 opacity-60">📊</div>
                      <p className="text-sm font-semibold opacity-70">Apps Monitoring</p>
                      <p className="text-xs opacity-50">Captures d'écran</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                <div className="card-body pt-4">
                  <h3 className="font-bold mb-2">Monitoring</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Apps mobiles, courbes de rendement, optimisation production
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline hover:scale-105 transition-transform">
                    Outils de Suivi
                  </Link>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Image placeholder pour FAQ */}
                <div className="card-body p-0">
                  <div className="aspect-[3/2] bg-gradient-to-br from-error/20 to-warning/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl mb-2 opacity-60">❓</div>
                      <p className="text-sm font-semibold opacity-70">FAQ Technique</p>
                      <p className="text-xs opacity-50">Réponses expertes</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                <div className="card-body pt-4">
                  <h3 className="font-bold mb-2">FAQ Technique</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    Garanties, démarches, THD, strings, back-up, évolutions
                  </p>
                  <Link href="/guides" className="btn btn-sm btn-outline hover:scale-105 transition-transform">
                    Questions/Réponses
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Témoignages Clients Techniques */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Retours Terrain</h2>
              <div className="badge badge-success badge-lg">
                💬 Témoignages authentiques
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body">
                  {/* Avatar placeholder */}
                  <div className="flex items-center mb-4">
                    <div className="avatar placeholder">
                      <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-12">
                        <span className="text-lg">JL</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold">Jean-Luc M.</div>
                      <div className="text-sm text-base-content/60">Électricien, Quimper</div>
                    </div>
                  </div>
                  
                  <p className="italic mb-4 text-base-content/80">
                    "Kit 6kW hybride Pylontech installé sur ma ferme. Monitoring impeccable, 
                    rendement MPPT conforme aux specs, backup nickel pendant les orages. 
                    Équipe technique au top pour le paramétrage onduleur."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" checked={i === 4} readOnly />
                      ))}
                    </div>
                    <div className="badge badge-outline">⚡ Kit 6kW</div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body">
                  {/* Avatar placeholder */}
                  <div className="flex items-center mb-4">
                    <div className="avatar placeholder">
                      <div className="bg-gradient-to-br from-secondary to-accent text-secondary-content rounded-full w-12">
                        <span className="text-lg">PD</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold">Patrick D.</div>
                      <div className="text-sm text-base-content/60">Artisan, Vannes</div>
                    </div>
                  </div>
                  
                  <p className="italic mb-4 text-base-content/80">
                    "Onduleur triphasé Deye 6kW pour mon atelier. Distribution équilibrée sur les 3 phases, 
                    double MPPT qui optimise bien mes 2 strings orientés différemment. 
                    Rapport qualité-prix imbattable, livraison en 5 jours."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" checked={i === 4} readOnly />
                      ))}
                    </div>
                    <div className="badge badge-outline">🔌 Onduleur 6kW</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section CTA pour plus de témoignages */}
            <div className="text-center mt-8">
              <div className="stats shadow bg-base-200 mb-4">
                <div className="stat place-items-center">
                  <div className="stat-title">Avis clients</div>
                  <div className="stat-value text-primary">4.8/5</div>
                  <div className="stat-desc">Sur +200 avis</div>
                </div>
              </div>
              <button className="btn btn-outline btn-sm">
                📝 Lire Tous les Avis
              </button>
            </div>
          </section>

          {/* CTA Final Commercial */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-content rounded-3xl p-12 text-center shadow-2xl">
            {/* Effets visuels de fond */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="badge badge-outline badge-lg mb-6 text-primary-content border-primary-content">
                🚀 Transformation énergétique
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-content bg-clip-text text-transparent">
                Prêt à Passer au Solaire ?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Étude personnalisée gratuite • Conseil technique expert • Devis sous 24h
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact" className="btn btn-secondary btn-lg hover:scale-105 transition-transform duration-300 shadow-xl">
                  📋 Demander un Devis Gratuit
                </Link>
                <a href="tel:0296253800" className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary hover:scale-105 transition-all duration-300">
                  👨‍💻 Parler à un Expert
                </a>
              </div>
              
              {/* Grid d'avantages */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl mb-1">💳</div>
                  <div className="text-sm font-semibold">Paiement 3x</div>
                  <div className="text-xs opacity-80">sans frais</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl mb-1">🛡️</div>
                  <div className="text-sm font-semibold">Garanties</div>
                  <div className="text-xs opacity-80">étendues</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-sm font-semibold">Livraison</div>
                  <div className="text-xs opacity-80">express</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-sm font-semibold">Support</div>
                  <div className="text-xs opacity-80">technique</div>
                </div>
              </div>
              
              <div className="border-t border-primary-content/20 pt-6 text-sm opacity-70">
                <p className="mb-2">📍 56 rue de la pommeraie – 22230 Merdrignac, France</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a href="mailto:commerce@avelheol.fr" className="hover:opacity-100 transition-opacity">
                    📧 commerce@avelheol.fr
                  </a>
                  <a href="tel:0296253800" className="hover:opacity-100 transition-opacity">
                    📞 02 96 25 38 00
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
