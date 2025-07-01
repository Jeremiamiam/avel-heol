# UX Prototyping Template (Next.js + DaisyUI)

**⚠️ IMPORTANT : Après avoir copié ce template pour un nouveau projet, ouvrez un terminal dans le nouveau dossier et exécutez `npm install` pour installer les dépendances nécessaires !**

---

Ce projet est un template réutilisable conçu pour accélérer la création de maquettes web interactives et de prototypes UX/UI. Il utilise Next.js (App Router), TypeScript, Tailwind CSS et DaisyUI.

**Objectif Principal :** Permettre à un designer (ou une IA) de construire rapidement des interfaces fonctionnelles, de tester différentes variations de design (A/B testing), et de personnaliser facilement l'apparence via un système de thèmes basé sur DaisyUI.

## Fonctionnalités Clés

1.  **Système de Thème Dynamique (via Import CSS)**
    *   **Contexte :** `src/context/ThemeContext.tsx`
    *   **Gestion :** La page `/theme` permet d'importer un fichier CSS généré par l'outil [DaisyUI Theme Generator](https://daisyui.com/theme-generator/).
    *   **Application :** Le CSS importé est injecté dynamiquement et l'attribut `data-theme` est mis à jour sur l'élément `<html>`.
    *   **Persistance :** Le thème importé et son CSS sont sauvegardés dans `localStorage`.
    *   **Thèmes Intégrés :** Le bouton "Appliquer Thème 'Lofi'" et le toggle Light/Dark sur la page `/theme` permettent de basculer vers des thèmes définis dans `tailwind.config.ts`. Le bouton "Réinitialiser" efface le thème importé et revient au thème par défaut (light ou dark selon les préférences système).
    *   **Thèmes Permanents :** Pour ajouter un thème de manière permanente, il doit être défini dans la section `daisyui.themes` du fichier `tailwind.config.ts` (généralement avec des couleurs HEX).

2.  **Système A/B Testing Simple**
    *   **Contexte :** `src/context/ABTestingContext.tsx` (gère l'état `activeVariant: 'A' | 'B'`).
    *   **Convention de Structure :** Pour une route donnée (ex: `/mapage`), la page principale est `src/app/mapage/page.tsx`. Les variantes sont dans `src/app/mapage/variants/PageA.tsx` et `src/app/mapage/variants/PageB.tsx`.
    *   **Convention de Création (pour IA) :** Toute nouvelle page doit être créée initialement comme `Variante A`. La `Variante B` est optionnelle.
    *   **Logique d'Affichage :** Le fichier `page.tsx` principal importe les variantes A (et B si elle existe), utilise le hook `useABTesting`, et affiche conditionnellement A ou B.
    *   **Toggle Conditionnel :** Le composant `src/components/ui/ABTestingToggle.tsx` accepte une prop `show: boolean`. Le fichier `page.tsx` parent doit passer `showToggleButton={true}` aux variantes A et B *uniquement si la variante B existe*. Les composants variantes rendent ensuite `<ABTestingToggle show={showToggleButton} />`.

3.  **Structure de Composants (Atomic Design)**
    *   `src/components/atoms/` : Éléments UI de base (Button, Input, etc.).
    *   `src/components/molecules/` : Combinaisons d'atomes.
    *   `src/components/organisms/` : Sections plus complexes (Header, Footer).
    *   Utilisation **obligatoire** des classes DaisyUI pour le style.

4.  **Providers Essentiels (`src/app/providers.tsx`)**
    *   `UISettingsProvider` : **Contexte principal.** Gère le thème appliqué (intégré ou importé via CSS), le mode light/dark, l'état des valeurs personnalisables (couleurs HEX, typo, etc.) pour l'export/import JSON.
    *   `ABTestingProvider` : Gère la variante A/B active.
    *   **Ne pas supprimer ou modifier l'ordre de ces providers.** (`UISettingsProvider` doit envelopper `ABTestingProvider`).

## Workflow Typique (avec IA)

1.  **Définir le Thème :**
    *   Utiliser le générateur DaisyUI.
    *   Importer le CSS via la page `/theme` pour tester.
    *   (Optionnel) Ajouter le thème à `tailwind.config.ts` pour le rendre permanent.
2.  **Créer une Page :**
    *   Demander à l'IA : "Crée la page '/[nom]' en utilisant DaisyUI. Crée le contenu dans `src/app/[nom]/variants/PageA.tsx` et le routeur dans `src/app/[nom]/page.tsx`."
3.  **Créer une Variante B (Optionnel) :**
    *   Demander à l'IA : "Crée une Variante B pour la page '/[nom]' dans `src/app/[nom]/variants/PageB.tsx` avec [description des changements]."
    *   Demander à l'IA : "Modifie `src/app/[nom]/page.tsx` pour importer PageB et passer `showToggleButton={true}` aux deux variantes."
4.  **Ajouter/Modifier Contenu :** Demander à l'IA d'ajouter des sections ou composants DaisyUI aux fichiers `PageA.tsx` ou `PageB.tsx`.

## Démarrage Rapide (Après `npm install`)

```bash
# Lancer le serveur de développement
npm run dev 
```
Ouvrez [http://localhost:3000](http://localhost:3000) (ou le port indiqué).
