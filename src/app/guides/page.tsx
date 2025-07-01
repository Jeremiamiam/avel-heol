import { Container } from '@/components/layout/Container'

export default function GuidesPage() {
  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Guides Solaires
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'énergie solaire : installation, 
              économies, réglementation. Nos experts partagent leurs conseils.
            </p>
          </div>

          {/* Articles piliers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Articles Essentiels</h2>
            <div className="text-center text-base-content/60">
              <p>Liste des articles piliers à venir...</p>
            </div>
          </section>

          {/* FAQ générale */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
            <div className="text-center text-base-content/60">
              <p>FAQ générale à venir...</p>
            </div>
          </section>

          {/* Simulateur ou outils */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Outils Pratiques</h2>
            <div className="text-center text-base-content/60">
              <p>Simulateurs et outils d'aide à venir...</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 