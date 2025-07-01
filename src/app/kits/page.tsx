import { Container } from '@/components/layout/Container'
import { products } from '@/data/products'
import Link from 'next/link'

export default function KitsPage() {
  const kits = products.filter(p => p.category === 'kit')
  const onduleurs = products.filter(p => p.category === 'onduleur')
  const batteries = products.filter(p => p.category === 'batterie')

  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Kits Solaires
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Une sélection rigoureuse de solutions solaires, testées et approuvées par nos experts bretons. 
              Chaque produit est conçu pour répondre à des besoins spécifiques d'autoconsommation.
            </p>
          </div>

          {/* Comparatif rapide */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Trouvez Votre Solution Idéale</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Type</th>
                    <th>Puissance</th>
                    <th>Prix</th>
                    <th>Idéal pour</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="font-semibold">{product.name}</td>
                      <td>
                        <span className="badge badge-primary">
                          {product.category === 'kit' ? 'Kit' : 
                           product.category === 'onduleur' ? 'Onduleur' : 'Batterie'}
                        </span>
                      </td>
                      <td>{product.specs.puissance || product.specs.capacite || '-'}</td>
                      <td className="text-primary font-bold">{product.price}</td>
                      <td className="text-sm">{product.forWho[0]}</td>
                      <td>
                        <Link href={`/kit/${product.slug}`} className="btn btn-primary btn-xs">
                          Voir
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Kits Solaires */}
          {kits.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Kits Solaires Complets</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {kits.map((product) => (
                  <div key={product.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                      <p className="text-base-content/70">{product.shortDescription}</p>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Points clés :</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-base-content/70">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="card-actions justify-between items-center mt-6">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Link href={`/kit/${product.slug}`} className="btn btn-primary">
                          Voir le détail
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
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Onduleurs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {onduleurs.map((product) => (
                  <div key={product.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                      <p className="text-base-content/70">{product.shortDescription}</p>
                      
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="badge badge-outline">{product.specs.puissance}</span>
                          <span className="badge badge-outline">{product.specs.type}</span>
                          <span className="badge badge-outline">{product.specs.marque}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions justify-between items-center mt-6">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Link href={`/kit/${product.slug}`} className="btn btn-primary">
                          Voir le détail
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
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Batteries</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {batteries.map((product) => (
                  <div key={product.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                      <p className="text-base-content/70">{product.shortDescription}</p>
                      
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="badge badge-outline">{product.specs.capacite}</span>
                          <span className="badge badge-outline">{product.specs.type}</span>
                          <span className="badge badge-outline">{product.specs.marque}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions justify-between items-center mt-6">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Link href={`/kit/${product.slug}`} className="btn btn-primary">
                          Voir le détail
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA final */}
          <section className="text-center">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title justify-center text-2xl mb-4">
                  Besoin d'un conseil personnalisé ?
                </h2>
                <p className="mb-6">
                  Nos experts vous accompagnent dans le choix de votre solution solaire. 
                  Devis gratuit et sans engagement.
                </p>
                <div className="card-actions justify-center">
                  <Link href="/contact" className="btn btn-secondary btn-lg">
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 