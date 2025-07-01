import { Container } from '@/components/layout/Container'

export default function ContactPage() {
  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Besoin d'un conseil ? D'un devis personnalisé ? 
              Nos experts vous accompagnent dans votre projet solaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Demande de Devis</h2>
              <div className="text-base-content/60">
                <p>Formulaire de contact à venir...</p>
              </div>
            </section>

            {/* Informations de contact */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Adresse</h3>
                  <p className="text-base-content/80">
                    56 rue de la pommeraie<br />
                    22230 Merdrignac, France
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Contact</h3>
                  <p className="text-base-content/80">
                    Téléphone : 02 96 25 38 00<br />
                    Email : commerce@avelheol.fr
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Horaires</h3>
                  <p className="text-base-content/80">
                    Lundi - Vendredi : 9h - 18h<br />
                    Samedi : 9h - 12h
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Section accompagnement */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8">Notre Accompagnement</h2>
            <div className="text-base-content/60">
              <p>Section sur l'accompagnement et le SAV à venir...</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 