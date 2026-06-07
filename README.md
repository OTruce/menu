# Drafthaus Menu System

## Overview

Drafthaus Menu System is a React-based restaurant menu management application designed for both customers and administrators.

Customers can browse menu items from either the Bar or Kitchen sections, search for menu items, and view items organized by category in a modern card-based interface.

Administrators can manage categories and menu items through an admin dashboard that supports creating, updating, and deleting menu entries.

---

## Features

### Customer Features

* Landing page with Bar and Kitchen selection
* Category-based menu navigation
* Search menu items by name
* Responsive card-based menu display
* Dedicated Bar and Kitchen menu sections
* Modern restaurant-themed user interface

### Admin Features

* Add new categories
* Add new menu items
* Edit item prices
* Delete menu items
* Real-time updates using React state management



## Technologies Used

* React
* React Router DOM
* Vite
* JSON Server
* JavaScript
* CSS

---

## Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Admin.jsx
│
├── context/
│   ├── MenuContext.jsx
│
├── hooks/
│   ├── useMenu.jsx
│
├── services/
│   ├── api.js
│
├── tests/
│   ├── Menu.test.jsx
│   ├── Admin.test.jsx
│   ├── Search.test.jsx
│
├── App.jsx
├── main.jsx
├── styles.css

---

## Data Structure

### Categories

Each category belongs to either the Bar or Kitchen section.

Example:

{
  "id": 1,
  "name": "Beer",
  "section": "bar"
}


### Items

Each item is linked to a category using `categoryId`.

Example:

{
  "id": 1,
  "name": "Tusker Lager",
  "price": 250,
  "categoryId": 1
}

Once the Admin makes changes to items or adds new items, it reflects in the db.json file.

---

## Installation

### Clone the repository

git clone https://github.com/OTruce/menu.git
cd drafthaus-menu


### Install dependencies

npm install


### Start JSON Server, This is important for the app to load already saved data from the file db.json

npx json-server --watch db.json --port 3001


### Start the React application

npm run dev


---

## Usage

### Customer

1. Open the application.
2. Select either Bar or Kitchen.
3. Browse menu categories.
4. Search for menu items using the search field.

### Administrator

1. Navigate to the Admin page.
2. Add new categories.
3. Add new menu items.
4. Edit existing item prices.
5. Delete menu items when necessary.

---

Stephen Njenga
