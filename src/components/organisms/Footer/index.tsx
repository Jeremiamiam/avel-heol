import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <Container>
        <div className="footer py-10">
          <div>
            <span className="footer-title text-primary font-bold text-lg">Avel Heol</span>
            <p className="text-base-content/80 max-w-xs">
              Expert solaire breton depuis 2009. 
              Une sélection rigoureuse de kits haute performance 
              pour votre indépendance énergétique.
            </p>
          </div>
          
          <div>
            <span className="footer-title">Navigation</span>
            <Link href="/" className="link link-hover">Accueil</Link>
            <Link href="/kits" className="link link-hover">Nos Kits</Link>
            <Link href="/a-propos" className="link link-hover">À propos</Link>
            <Link href="/guides" className="link link-hover">Guides</Link>
            <Link href="/contact" className="link link-hover">Contact</Link>
          </div>
          
          <div>
            <span className="footer-title">Contact</span>
            <p className="text-base-content/80">
              56 rue de la pommeraie<br />
              22230 Merdrignac, France
            </p>
            <p className="text-base-content/80">
              02 96 25 38 00<br />
              commerce@avelheol.fr
            </p>
          </div>
          
          <div>
            <span className="footer-title">Expertise</span>
            <p className="text-base-content/80">15+ ans d'expérience</p>
            <p className="text-base-content/80">Livraison 3-15 jours</p>
            <p className="text-base-content/80">Garanties jusqu'à 25 ans</p>
            <p className="text-base-content/80">SAV réactif</p>
          </div>
        </div>
        
        <div className="border-t border-base-300 py-6">
          <div className="footer footer-center">
            <div>
              <p className="text-base-content/60">
                © 2024 Avel Heol - Tous droits réservés | 
                <Link href="#" className="link link-hover ml-2">Mentions légales</Link> | 
                <Link href="#" className="link link-hover ml-2">CGV</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
