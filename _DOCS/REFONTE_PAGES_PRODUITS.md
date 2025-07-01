# Refonte Pages Produits - Inspiration Avel Heol

## 🎯 Objectif
Refondre les pages produits du site Avel Heol en s'inspirant de la structure de leur page existante : 
`https://avelheol.fr/onduleurs-solaires-reseau/1590-onduleur-hybride-huawei-sun2000-3-ktl-l1.html`

## 👥 Cible
**"Méga geeks techos limite électriciens"** qui installent eux-mêmes, avec un angle "super matos" rassurant, ludique et pédagogique.

## 📐 Architecture Réalisée

### 📸 Section Galerie Produit
- **Image principale** grande et claire
- **Miniatures interactives** (Face/Arrière/Détails)
- **Badges de certification** (IP65, CE/IEC, Garantie, Marque, Livraison)

### 🎯 Section Infos Produit (colonne droite)
- **Badge catégorie** (Kit Solaire/Onduleur/Batterie)
- **Titre produit** en gros
- **Points forts visuels** avec icônes (⚡ Puissance, 🔌 Type, ⚙️ Tension, etc.)
- **Description** détaillée
- **Prix et CTA** avec paiement 3x sans frais
- **Pour qui ?** liste des usages

### 📑 Système d'Onglets (3 onglets seulement)
1. **Description** 
   - Contenu adapté par type de produit
   - Spécial onduleur : "couteau suisse de l'énergie"
   - Supervision connectée avec app mobile

2. **Fiche Technique**
   - Tableau complet des spécifications
   - Dynamique selon le type de produit
   - Normes et certifications

3. **Documents & Téléchargements**
   - Manuel d'installation (2.5MB)
   - Fiche technique PDF (252KB)
   - App de monitoring (1.8MB)
   - Certificats CE/IEC (890KB)

### 📄 Sections Normales (flux naturel)

#### 🛠️ Guide d'Installation Step-by-Step
- **Alerte sécurité** en haut
- **5 étapes visuelles** avec composant `steps steps-vertical` :
  1. 🔍 Vérification préalable
  2. 🔧 Fixation murale
  3. ⚡ Raccordement DC
  4. 🔌 Raccordement AC
  5. 📱 Configuration & Test
- **Conseils de pro** en card à la fin

#### ⭐ Avis Clients Vérifiés
- **Stats** note moyenne 4.7/5 sur 23 avis
- **Témoignages** avec nom, métier, notation étoiles, date
- **CTA** "Donner mon avis"

#### 🤓 Geek Zone - Spécifications Avancées
- **Caractéristiques électriques** (Tension MPPT, Courant max, THD, etc.)
- **Conditions environnementales** (Humidité, Altitude, Niveau sonore, etc.)
- **Liens documents** (Courbes de rendement, Datasheet, Rapports de tests)

#### 🎓 Accompagnement Expert Avel Heol
- **3 services** : Support technique, Formation à distance, Réseau installateurs
- **Preuves sociales** : 15 ans d'expertise
- **CTA contact** : Parler à un expert + email support

#### 🔄 Produits Similaires
- **Filtrage par catégorie** (même type de produit)
- **Cards** avec badge, titre, description, prix, CTA

#### ⚡ CTA Final avec Preuves Sociales
- **Stats** : +500 installations, 4.8/5 satisfaction, 15 ans d'expertise
- **Double CTA** : Devis + Téléphone

## 🎨 Ton et Style
- **Vocabulaire technique** : MPPT, THD, back-up box, strings photovoltaïques
- **Emojis techniques** : ⚡⚙️🔌🎯🌡️🔇📊🧪
- **Approche rassurante** : certifications, garanties, accompagnement
- **Aspect ludique** : "couteau suisse", "super matos", conseils de pro

## 🔧 Implémentation Technique
- **Fichier** : `src/app/kit/[slug]/page.tsx`
- **Données** : `src/data/products.ts` avec 5 produits SEO
- **Composants** : DaisyUI (tabs, steps, cards, stats, badges, alerts)
- **Responsive** : grids adaptatifs, mobile-first

## 📝 Points d'Amélioration Future
- [ ] Vraies images produits (actuellement emojis)
- [ ] Téléchargements PDF fonctionnels
- [ ] Système d'avis clients interactif
- [ ] Calculs de dimensionnement dynamiques
- [ ] Intégration panier e-commerce

## 🚀 Résultat
Page produit moderne, technique et complète qui inspire confiance aux "geeks électriciens" tout en gardant une approche pédagogique et un design clean avec DaisyUI.

---
*Créé le : Décembre 2024*  
*Contexte : Template UX Next.js + DaisyUI + TypeScript + Tailwind CSS* 