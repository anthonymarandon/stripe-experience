# Stripe Test - Application Next.js

Ce projet est une application Next.js avec intégration Stripe pour les paiements.

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Un compte Stripe (pour obtenir les clés API)

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/anthonymarandon/stripe-experience.git
   cd stripe-test
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuration des variables d'environnement**
   
   Créez un fichier `.env` à la racine du projet avec les variables suivantes :
   
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publique_stripe
   STRIPE_SECRET_KEY=votre_clé_secrète_stripe
   ```
   
   **Important :** 
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` : Votre clé publique Stripe (commence par `pk_test_` ou `pk_live_`)
   - `STRIPE_SECRET_KEY` : Votre clé secrète Stripe (commence par `sk_test_` ou `sk_live_`)

4. **Obtenir vos clés Stripe**
   
   1. Connectez-vous à votre [tableau de bord Stripe](https://dashboard.stripe.com/)
   2. Allez dans **Développeurs** > **Clés API**
   3. Copiez votre **clé publique** dans `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   4. Copiez votre **clé secrète** dans `STRIPE_SECRET_KEY`
   
   ⚠️ **Attention** : Pour les tests, utilisez les clés de test. Ne jamais exposer votre clé secrète côté client !

## 🏃‍♂️ Lancement du projet

1. **Mode développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

2. **Build de production**
   ```bash
   npm run build
   npm run start
   # ou
   yarn build
   yarn start
   ```

## 🔧 Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Langage de programmation
- **Stripe** - Plateforme de paiement
- **Tailwind CSS** - Framework CSS
- **React 19** - Bibliothèque UI

## 📁 Structure du projet

```
stripe-test/
├── app/                    # Pages et composants Next.js (App Router)
│   ├── marketplace/        # Page marketplace
│   ├── payment/           # Page de paiement
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── public/                # Fichiers statiques
├── .env                   # Variables d'environnement (à créer)
├── package.json           # Dépendances du projet
└── README.md             # Ce fichier
```

## 🔒 Sécurité

- Ne jamais commit le fichier `.env` (il est dans le `.gitignore`)
- Utilisez les clés de test pendant le développement
- En production, utilisez les clés live de Stripe
- La clé secrète ne doit jamais être exposée côté client

## ⚡ Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Build l'application pour la production
- `npm run start` : Lance l'application en mode production
- `npm run lint` : Vérifie le code avec ESLint

## 🆘 Aide

Si vous rencontrez des problèmes :

1. Vérifiez que vos clés Stripe sont correctement configurées
2. Assurez-vous que le fichier `.env` est à la racine du projet
3. Redémarrez le serveur de développement après avoir modifié les variables d'environnement
4. Consultez la [documentation Stripe](https://stripe.com/docs) pour plus d'informations

## 📝 Notes

- Ce projet utilise l'App Router de Next.js 15
- Les paiements sont configurés pour le mode test par défaut
- Pour passer en production, remplacez les clés de test par les clés live
