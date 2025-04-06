# 🔍 Gym Finder

**Gym Finder** is a location-based web application that helps users discover businesses (like gyms, cafés, or any category supported by Yelp) near a specified location.

---

## 🚀 Features

- Search for nearby businesses using the **Yelp API**
- Interactive **Google Maps** with **markers**, **autocomplete**, and **distance matrix**
- Easily customizable to search for any business type
- Built with modern web technologies and deployed on **Heroku**

---

## 🧰 Tech Stack

- **Frontend:** ReactJS, Redux  
- **Backend:** Node.js  
- **APIs & Services:** Yelp Fusion API, Google Maps API  
- **Features:** Autocomplete, Markers, Distance Matrix  
- **Deployment:** Heroku

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/bhprtk/somethingFinder.git
cd somethingFinder
npm install
```

---

## ⚙️ Usage

To start the development environment:

```bash
npm start
```

Then open your browser and navigate to:

```
http://localhost:3000
```

---

## 🛠 Customization

You can change what type of business is searched by editing the `term` parameter in:

```
tools/controllers/yelp.js
```

For example, change `"gyms"` to `"cafes"`, `"restaurants"`, or anything supported by Yelp.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built by [Pratik Bhandari](https://bhprtk.com)

---
