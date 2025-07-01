import { Container } from '@/components/layout/Container'
import { getProductBySlug, products } from '@/data/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          {/* Breadcrumb */}
          <div className="text-sm breadcrumbs mb-8">
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/kits">Nos Kits</Link></li>
              <li>{product.name}</li>
            </ul>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Galerie produit */}
            <section>
              {/* Image principale */}
              <div className="bg-base-200 rounded-lg p-8 text-center mb-6">
                <div className="text-8xl mb-4">
                  {product.category === 'kit' ? '☀️' : 
                   product.category === 'onduleur' ? '⚡' : '🔋'}
                </div>
                <p className="text-base-content/60">Image principale du {product.name}</p>
              </div>
              
              {/* Miniatures */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-base-300 rounded p-4 text-center cursor-pointer hover:bg-base-200 transition">
                  <div className="text-2xl mb-2">📐</div>
                  <p className="text-xs">Face</p>
                </div>
                <div className="bg-base-300 rounded p-4 text-center cursor-pointer hover:bg-base-200 transition">
                  <div className="text-2xl mb-2">🔧</div>
                  <p className="text-xs">Arrière</p>
                </div>
                <div className="bg-base-300 rounded p-4 text-center cursor-pointer hover:bg-base-200 transition">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-xs">Détails</p>
                </div>
              </div>
              
              {/* Badges et certifications */}
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary">Garantie {product.specs.garantie}</span>
                <span className="badge badge-secondary">Marque {product.specs.marque}</span>
                <span className="badge badge-accent">Livraison 3-15j</span>
                <span className="badge badge-info">IP65</span>
                <span className="badge badge-success">CE/IEC</span>
              </div>
            </section>

            {/* Informations produit */}
            <section>
              <div className="badge badge-primary mb-4">
                {product.category === 'kit' ? 'Kit Solaire' : 
                 product.category === 'onduleur' ? 'Onduleur' : 'Batterie'}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              
              {/* Points forts visuels comme Avel Heol */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.specs.puissance && (
                  <div className="flex items-center">
                    <span className="text-primary text-xl mr-2">⚡</span>
                    <span className="font-medium">{product.specs.puissance}</span>
                  </div>
                )}
                {product.specs.type && (
                  <div className="flex items-center">
                    <span className="text-primary text-xl mr-2">🔌</span>
                    <span className="font-medium">{product.specs.type}</span>
                  </div>
                )}
                {product.specs.tension && (
                  <div className="flex items-center">
                    <span className="text-primary text-xl mr-2">⚙️</span>
                    <span className="font-medium">{product.specs.tension}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-2">🎯</span>
                  <span className="font-medium">Rendement 97.3%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-2">🌡️</span>
                  <span className="font-medium">-25°C à +60°C</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-2">🔇</span>
                  <span className="font-medium">Refroidissement naturel</span>
                </div>
              </div>
              
              <p className="text-lg text-base-content/80 mb-6">
                {product.description}
              </p>
              
              {/* Prix et actions */}
              <div className="card bg-base-200 mb-6">
                <div className="card-body">
                  <h3 className="text-3xl font-bold text-primary mb-2">{product.price} TTC</h3>
                  <p className="text-base-content/70 mb-4">
                    Paiement 3x sans frais à partir de 500€
                  </p>
                  <div className="card-actions justify-start gap-4">
                    <Link href="/contact" className="btn btn-primary btn-lg">
                      🛒 Ajouter au panier
                    </Link>
                    <Link href="/contact" className="btn btn-secondary">
                      📋 Devis personnalisé
                    </Link>
                  </div>
                  <div className="flex items-center mt-4 text-sm text-base-content/60">
                    <span className="mr-4">🚚 Transport optimisé</span>
                    <span className="mr-4">🔒 Paiement sécurisé</span>
                    <span>☎️ 02 96 25 38 00</span>
                  </div>
                </div>
              </div>

              {/* Pour qui ? */}
              <div>
                <h3 className="text-xl font-bold mb-4">🎯 Idéal Pour</h3>
                <ul className="space-y-2">
                  {product.forWho.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Onglets comme sur Avel Heol */}
          <section className="mb-16">
            <div role="tablist" className="tabs tabs-bordered">
              <input type="radio" name="product_tabs" role="tab" className="tab" aria-label="Description" defaultChecked />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h3 className="text-2xl font-bold mb-6">
                  {product.category === 'onduleur' ? '🔌 Onduleur solaire hybride autoconsommation' : '☀️ Description détaillée'}
                </h3>
                
                {product.category === 'onduleur' && (
                  <div className="space-y-6">
                    <div className="alert alert-info">
                      <span className="text-lg">⚡ Véritable couteau suisse de l'énergie solaire</span>
                    </div>
                    
                    <p className="text-lg leading-relaxed">
                      Cet onduleur peut être acheté sous sa forme onduleur réseau classique, mais il peut aussi :
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary text-xl mr-3">🔄</span>
                        <span><strong>Être couplé à une back-up box</strong> pour maintenir une alimentation de secours temporaire pour vos petits appareils en cas de coupure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary text-xl mr-3">🔋</span>
                        <span><strong>Être couplé à des batteries</strong> pour stocker votre production et maximiser votre autoconsommation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary text-xl mr-3">⚡</span>
                        <span><strong>S'implanter en cascade</strong> de plusieurs onduleurs, permettant de passer sur un système triphasé ou plus puissant</span>
                      </li>
                    </ul>
                    
                    <div className="card bg-base-200">
                      <div className="card-body">
                        <h4 className="card-title">🎯 Surdimensionnement possible à 150%</h4>
                        <p>L'onduleur accepte une Pmax de 4500Wc en entrée pour 3000Wc en sortie. Grâce au double MPPT, vous pouvez orienter différemment vos panneaux pour optimiser la production selon vos besoins.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">📱 Supervision connectée</h4>
                  <p className="mb-4">
                    Disponible sur Android et iOS, l'application FusionSolar vous permet de :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mettre en service votre installation</li>
                    <li>Paramétrer votre onduleur</li>
                    <li>Suivre votre production journalière</li>
                    <li>Accéder aux alarmes pour faciliter le diagnostic</li>
                  </ul>
                </div>
              </div>

              <input type="radio" name="product_tabs" role="tab" className="tab" aria-label="Fiche Technique" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h3 className="text-2xl font-bold mb-6">📋 Fiche Technique Complète</h3>
                
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <tbody>
                      <tr>
                        <td className="font-bold">Technologie</td>
                        <td>
                          {product.category === 'onduleur' ? 'Onduleur hybride 2 MPPT - Monophasé' : 
                           product.category === 'kit' ? 'Kit solaire complet' : 'Batterie Lithium'}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold">Puissance nominale</td>
                        <td>{product.specs.puissance || '3000W'}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Fabrication</td>
                        <td>PRC (Chine)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Garantie Fabricant</td>
                        <td>{product.specs.garantie}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Efficience max</td>
                        <td>97.3%</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Température de fonctionnement</td>
                        <td>-25°C à +60°C</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Degré de protection</td>
                        <td>IP65</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Certificats</td>
                        <td>EN/IEC 62109-1, EN/IEC 62109-2</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Marque</td>
                        <td>{product.specs.marque}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <input type="radio" name="product_tabs" role="tab" className="tab" aria-label="Documents & Téléchargements" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h3 className="text-2xl font-bold mb-6">📄 Documents & Téléchargements</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">📘 Manuel d'installation</h4>
                      <p className="text-sm text-base-content/70 mb-4">Guide complet d'installation et d'utilisation</p>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-sm">
                          📥 Télécharger (2.5MB)
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">🔧 Fiche technique PDF</h4>
                      <p className="text-sm text-base-content/70 mb-4">Spécifications techniques détaillées</p>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-sm">
                          📥 Télécharger (252KB)
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">📱 App de monitoring</h4>
                      <p className="text-sm text-base-content/70 mb-4">Guide de configuration de l'application</p>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-sm">
                          📥 Télécharger (1.8MB)
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">⚠️ Certificats CE/IEC</h4>
                      <p className="text-sm text-base-content/70 mb-4">Certificats de conformité officiels</p>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-sm">
                          📥 Télécharger (890KB)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
                      </section>

          {/* Guide d'Installation - Section normale */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">🛠️ Guide d'Installation Step-by-Step</h2>
            
            <div className="space-y-8">
              <div className="alert alert-warning">
                <span>⚠️ Installation réservée aux personnes qualifiées. Coupez l'alimentation avant toute intervention.</span>
              </div>
              
              <div className="steps steps-vertical">
                <div className="step step-primary">
                  <div className="text-left w-full">
                    <h4 className="font-bold text-lg">🔍 Vérification préalable</h4>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Vérifier la compatibilité avec vos panneaux</li>
                      <li>S'assurer de la ventilation suffisante</li>
                      <li>Prévoir un espace de 20cm autour de l'onduleur</li>
                    </ul>
                  </div>
                </div>
                
                <div className="step step-primary">
                  <div className="text-left w-full">
                    <h4 className="font-bold text-lg">🔧 Fixation murale</h4>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Utiliser le support mural fourni</li>
                      <li>Fixer sur mur porteur avec chevilles adaptées</li>
                      <li>Respecter l'orientation verticale</li>
                    </ul>
                  </div>
                </div>
                
                <div className="step step-primary">
                  <div className="text-left w-full">
                    <h4 className="font-bold text-lg">⚡ Raccordement DC</h4>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Connecter les strings photovoltaïques aux entrées MPPT</li>
                      <li>Respecter les polarités (+ et -)</li>
                      <li>Serrer les connecteurs MC4</li>
                    </ul>
                  </div>
                </div>
                
                <div className="step step-primary">
                  <div className="text-left w-full">
                    <h4 className="font-bold text-lg">🔌 Raccordement AC</h4>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Raccorder au réseau via disjoncteur dédié</li>
                      <li>Connecter la terre de protection</li>
                      <li>Vérifier la section des câbles (6mm² min)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="step step-primary">
                  <div className="text-left w-full">
                    <h4 className="font-bold text-lg">📱 Configuration & Test</h4>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Télécharger l'app FusionSolar</li>
                      <li>Scanner le QR code de l'onduleur</li>
                      <li>Configurer les paramètres réseau</li>
                      <li>Tester le bon fonctionnement</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title">💡 Conseils de pro</h4>
                  <ul className="space-y-2">
                    <li>• Faire les raccordements DC par temps sec</li>
                    <li>• Vérifier deux fois les polarités avant de connecter</li>
                    <li>• Prévoir un parafoudre DC si exposition élevée</li>
                    <li>• Garder les documentations techniques à portée</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Avis Clients - Section normale */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">⭐ Avis Clients Vérifiés</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Note moyenne</div>
                  <div className="stat-value text-primary">4.7/5</div>
                  <div className="stat-desc">Sur 23 avis clients</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold">Marc L. - Électricien</p>
                      <div className="rating rating-sm">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                      </div>
                    </div>
                    <span className="text-sm text-base-content/60">Il y a 2 semaines</span>
                  </div>
                  <p>"Installation très propre, l'onduleur est silencieux et l'app de monitoring fonctionne parfaitement. Le double MPPT permet vraiment d'optimiser selon l'orientation. Bon produit pour le prix."</p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold">Pierre B. - Particulier</p>
                      <div className="rating rating-sm">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" disabled />
                      </div>
                    </div>
                    <span className="text-sm text-base-content/60">Il y a 1 mois</span>
                  </div>
                  <p>"J'ai pu ajouter une back-up box 6 mois après l'installation initiale, exactement comme annoncé. L'évolutivité de ce système est un vrai plus. Service client Avel Heol très réactif."</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="btn btn-primary">
                ✏️ Donner mon avis
              </button>
            </div>
          </section>

          {/* Geek Zone - Section technique avancée */}
          <section className="mb-16">
            <div className="card bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">
                  🤓 Geek Zone - Spécifications Avancées
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">⚡ Caractéristiques électriques</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Tension MPPT optimale :</strong> 380V</p>
                      <p><strong>Courant max par MPPT :</strong> 12.5A</p>
                      <p><strong>Tension de démarrage :</strong> 90V</p>
                      <p><strong>Fréquence réseau :</strong> 50Hz ±2.5Hz</p>
                      <p><strong>THD courant :</strong> &lt; 3%</p>
                      <p><strong>Facteur de puissance :</strong> &gt; 0.99</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">🌡️ Conditions environnementales</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Humidité relative :</strong> 0-95% (sans condensation)</p>
                      <p><strong>Altitude max :</strong> 4000m</p>
                      <p><strong>Catégorie climatique :</strong> C1</p>
                      <p><strong>Classe de protection :</strong> I</p>
                      <p><strong>Refroidissement :</strong> Convection naturelle</p>
                      <p><strong>Niveau sonore :</strong> &lt; 25dB</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">📊 Courbes de rendement & Datasheet</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="btn btn-sm btn-outline">
                      📈 Courbe de rendement EU
                    </button>
                    <button className="btn btn-sm btn-outline">
                      🔬 Datasheet complet
                    </button>
                    <button className="btn btn-sm btn-outline">
                      🧪 Rapports de tests
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section accompagnement expert */}
          <section className="mb-16">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-center mb-6">
                  🎓 Accompagnement Expert Avel Heol
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="font-bold mb-2">Support technique</h3>
                    <p className="text-sm">Nos ingénieurs vous conseillent gratuitement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🛠️</div>
                    <h3 className="font-bold mb-2">Formation à distance</h3>
                    <p className="text-sm">Sessions de formation pour l'auto-installation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="font-bold mb-2">Réseau installateurs</h3>
                    <p className="text-sm">Partenaires qualifiés dans toute la France</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="mb-4 text-lg">
                    <strong>15 ans d'expertise</strong> au service de vos projets solaires
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href="/contact" className="btn btn-primary">
                      📞 Parler à un expert
                    </Link>
                    <button className="btn btn-outline">
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
              <h2 className="text-2xl font-bold text-center mb-8">🔄 Autres Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <div className="badge badge-primary mb-2">
                        {relatedProduct.category === 'kit' ? 'Kit Solaire' : 
                         relatedProduct.category === 'onduleur' ? 'Onduleur' : 'Batterie'}
                      </div>
                      <h3 className="card-title">{relatedProduct.name}</h3>
                      <p className="text-base-content/70">{relatedProduct.shortDescription}</p>
                      
                      <div className="card-actions justify-between items-center mt-4">
                        <span className="text-xl font-bold text-primary">{relatedProduct.price}</span>
                        <Link href={`/kit/${relatedProduct.slug}`} className="btn btn-primary btn-sm">
                          Voir ce produit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA final avec preuves sociales */}
          <section className="text-center">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title justify-center text-2xl mb-4">
                  ⚡ Prêt à Passer au Solaire ?
                </h2>
                <p className="mb-6">
                  Nos experts bretons vous accompagnent de A à Z. 
                  Devis personnalisé gratuit en 24h.
                </p>
                
                <div className="stats stats-horizontal bg-primary-content text-primary mb-6">
                  <div className="stat">
                    <div className="stat-value">+500</div>
                    <div className="stat-desc">Installations réalisées</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">4.8/5</div>
                    <div className="stat-desc">Satisfaction client</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">15 ans</div>
                    <div className="stat-desc">D'expertise</div>
                  </div>
                </div>
                
                <div className="card-actions justify-center gap-4">
                  <Link href="/contact" className="btn btn-secondary btn-lg">
                    📋 Demander un Devis
                  </Link>
                  <button className="btn btn-outline btn-secondary btn-lg">
                    📞 02 96 25 38 00
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 