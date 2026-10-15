# 🛒 Grocery Run

A simple shopping-list app built with **React Native** and **Expo**, written from an empty project as a group exercise for *Application Development 2 (Mobile)*.

One screen. Add the things you need to buy, see them in a list, and never forget the milk again.

## ✨ Features

| Week | Feature | Status |
| ---- | ------- | ------ |
| 1 | App runs on the Pixel 10 emulator | ⬜ |
| 2 | Reusable component with props, styled with `StyleSheet` + flexbox | ⬜ |
| 3 | Controlled, validated form (name, quantity, category) with typed `useState` | ⬜ |
| 4 | `FlatList` keyed by item `id`, reusable row component, empty state | ⬜ |

> Update the status column as each feature lands: ⬜ not started · 🟨 in progress · ✅ done

## 🧰 Tech stack

- [Expo](https://expo.dev) SDK 57 and [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- [React Native](https://reactnative.dev) 0.86 and React 19
- TypeScript

## 🚀 Getting started

**Requirements:** [Node.js](https://nodejs.org) (LTS, v20+), Git, and Android Studio with a **Pixel 10** virtual device.

```bash
git clone https://github.com/IsaSierra28/grocery-run.git
cd grocery-run
npm install
npx expo start
```

Boot the Pixel 10 from Android Studio's Device Manager, then press **`a`** in the terminal to open the app in the emulator. Keep that terminal open while you work: it is the bundler feeding your app.

### Handy commands

```bash
npx expo start -c   # start with a cleared cache (fixes "app never opens")
npx expo lint       # lint
npx tsc --noEmit    # type-check
```

## 📁 Project structure

```
src/
  app/          screens (file-based routing), index.tsx is the shopping list
  components/   reusable components (one per file, styles included)
  lib/          shared types
assets/         images and fonts
```

## 👥 Team

| Name | Student ID | GitHub |
| ---- | ---------- | ------ |
| Isabela Sierra | 6358655 | [@IsaSierra28](https://github.com/IsaSierra28) |
| Amina Ayad Al Halabieh | 6367025 | [@amoon-maker](https://github.com/amoon-maker) |

## 📝 Notes

This is a learning project. Part of the assignment is writing down what breaks as it breaks, so the group's struggle log lives in our shared document rather than in the code.
