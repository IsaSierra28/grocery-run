# 🛒 Grocery Run

A simple grocery-list mobile app built with **React Native**, **Expo**, and **TypeScript** as a group project for *Application Development 2 (Mobile)*.

Add the groceries you need, organize them by category, and keep track of quantities in one simple list.

## ✨ Features

| Week | Feature | Status |
|---|---|---|
| 1 | App runs on the Pixel 10 emulator | 🟨 Verify on emulator |
| 2 | Reusable component using props, `StyleSheet`, and flexbox | ✅ Done |
| 3 | Controlled, validated form for name, quantity, and category, with typed `useState` | ✅ Done |
| 4 | `FlatList` using each item's `id`, reusable row component, and empty state | ✅ Done |

The app is a learning project, so the feature list reflects the techniques implemented rather than a fully finished shopping application.

## 🧰 Tech Stack

- [Expo](https://expo.dev/) and [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- TypeScript
- React hooks, including `useState`
- `FlatList` for displaying grocery items
- `StyleSheet` and flexbox for layout and styling

## 🚀 Getting Started

### Requirements

- [Node.js](https://nodejs.org/) (LTS, v20 or later)
- Git
- [Android Studio](https://developer.android.com/studio) with a Pixel 10 virtual device

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/IsaSierra28/grocery-run.git
cd grocery-run
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Boot the Pixel 10 virtual device using Android Studio's Device Manager. Once the development server is running, press `a` in the terminal to open the app in the Android emulator.

Keep the development server running while using the app.

### Handy Commands

```bash
# Start Expo with a cleared cache
npx expo start -c

# Check TypeScript
npx tsc --noEmit
```

**Note:** ESLint has not yet been configured in this repository, so linting has not been verified.

## 📁 Project Structure

```text
src/
  app/
    index.tsx              # Main grocery-list screen
    _layout.tsx            # App navigation layout
  components/
    GroceryItemRow.tsx     # Reusable grocery-item row
  lib/
    types.ts               # Shared TypeScript types

assets/                    # Images and fonts
```

## 👥 Team

| Name | Student ID | GitHub |
|---|---|---|
| Isabela Sierra | 6358655 | [@IsaSierra28](https://github.com/IsaSierra28) |
| Amina Ayad Al Halabieh | 6367025 | [@amoon-maker](https://github.com/amoon-maker) |

## 📝 Project Notes

This project was developed as a group learning exercise. The focus is on practicing reusable components, props, form validation, typed state, and list rendering in React Native.

Grocery items are currently stored in React state, so they do not persist after the app is reloaded. Editing and deleting items are not currently implemented.

As part of the assignment, the group also documents development challenges, what was tried, and how each issue was resolved in the shared reflection document.
