const text = `
Contact: user@example.com or firstname.lastname@company.co.uk
Visit: https://www.example.com and https://sub.example.org/page
Call me at (123) 456-7890, 123-456-7890, 123.456.7890
Card: 1234-5678-9012-3456 or 1234 5678 9012 3456
Meeting at 14:30 or 2:30 PM
`;

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
const phoneRegex = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g;
const cardRegex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APap][Mm])?\b/g;

console.log("📧 Emails:", text.match(emailRegex));
console.log("🌐 URLs:", text.match(urlRegex));
console.log("📞 Phones:", text.match(phoneRegex));
console.log("💳 Cards:", text.match(cardRegex));
console.log("⏰ Time:", text.match(timeRegex));
