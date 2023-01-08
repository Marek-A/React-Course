import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      admin: "Admin view",
      shops: "Our shops",
      contact: "Contact us",
      cart: "Shopping cart",
      "added-to-cart": "Added to basket!",
      "Empty the cart": "Empty the cart",
      "Cart price:": "Cart price:",
      "Shopping cart is empty": "Shopping cart is empty",
      "Add product": "Add products",
      "Maintain products": "Maintain products",
      "unique products": "unique products",
      "quantity-of-products": "pieces",
      "Product ID:": "ID",
      "Product name:": "Name: ",
      "Price:": "Price: ",
      "Category:": "Category: ",
      "Description:": "Description: ",
      "Product is available": "Product is available",
    },
  },
  ee: {
    translation: {
      admin: "Admin vaade",
      shops: "Meie poed",
      contact: "Meie kontakt",
      cart: "Ostukorv",
      "added-to-cart": "Ostukorvi lisatud!",
      "Empty the cart": "Tühjenda ostukorv",
      "Cart price:": "Ostukorvi hind:",
      "Shopping cart is empty": "Ostukorv on tühi",
      "Add product": "Lisa tooteid",
      "Maintain products": "Muuda tooteid",
      "unique products": "erinevat toodet",
      "quantity-of-products": "tükki",
      "Product ID:": "ID",
      "Product name:": "Nimetus: ",
      "Price:": "Hind: ",
      "Category:": "Kategooria: ",
      "Description:": "Lisainfo: ",
      "Product is available": "Toode on saadaval",
    },
  },
  tr: {
    translation: {
      admin: "Yönetici görünümü",
      cart: "Alışveriş sepeti",
      shops: "Mağazalar",
      contact: "İletişim",
      "added-to-cart": "Ürün sepete eklendi!",
      "Empty the cart": "Alışveriş sepetini boşalt",
      "Cart price:": "Sepet fiyatı:",
      "Shopping cart is empty": "Alışveriş sepeti boş",
      "Add product": "Ürün ekle",
      "Maintain products": "Ürünleri bakımını yap",
      "unique products": "özel ürünler",
      "quantity-of-products": "adet",
      "Product ID:": "ID",
      "Product name:": "Ürün adı: ",
      "Price:": "Fiyat: ",
      "Category:": "Kategori: ",
      "Description:": "Açıklamaa: ",
      "Product is available": "Ürün stokta mevcut",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
