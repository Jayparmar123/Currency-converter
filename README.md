# 🌍 Currency Converter

A simple, responsive web-based currency converter that allows users to convert between different currencies using real-time exchange rates. It also displays country flags based on selected currencies.

## 🔧 Features

- Real-time exchange rates using [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)
- Dynamic flag updates for selected currencies
- Pre-filled default currencies: INR (From) → USD (To)
- Clean, modern UI built with HTML and CSS
- Fully responsive and user-friendly interface

## 🔗 Live Demo
👉 Visit the live version here: [Currency Converter by Jay Parmar](https://Jayparmar123.github.io/Currency-converter)

## 🧠 How It Works

1. The user enters an amount and selects two currencies (from and to).
2. Currency options are dynamically populated using the `countryList` object.
3. Upon clicking "Exchange currency", the app:
   - Fetches conversion rates via API.
   - Calculates the converted amount.
   - Displays the result in the format: `100 INR = 1.20 USD`.
4. Flags update automatically based on currency selection.

## 📦 API Used

**Currency API**  
Endpoint format: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json

Example:  
To convert from INR to USD, the API endpoint used will be: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter