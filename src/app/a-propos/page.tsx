import { Container } from '@/components/layout/Container'

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="min-h-screen py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              À propos d'Avel Heol
            </h1>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Experts bretons du solaire depuis 2009, nous avons sélectionné pour vous 
              les kits les plus performants du marché.
            </p>
          </div>

          {/* Notre histoire */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Notre Histoire</h2>
            <div className="text-center text-base-content/60">
              <p>Section histoire de l'entreprise à venir...</p>
            </div>
          </section>

          {/* Notre expertise */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Notre Expertise</h2>
            <div className="text-center text-base-content/60">
              <p>Section expertise et valeurs à venir...</p>
            </div>
          </section>

          {/* L'équipe */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">L'Équipe</h2>
            <div className="text-center text-base-content/60">
              <p>Section équipe à venir...</p>
            </div>
          </section>

          {/* Pourquoi cette sélection */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8">Pourquoi Cette Sélection ?</h2>
            <div className="text-center text-base-content/60">
              <p>Section explication de la sélection de produits à venir...</p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
} 