const testimonials = [
  {
    name: "Emily Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am incredibly impressed with the sleek design and powerful performance of the laptops from apple. The macbook is a game-changer in the tech world, providing me with the tools I need to succeed in my work.",
  },
  {
    name: "Sophia Miller",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "dev web helped me create a stunning web site for my business. Their team was incredibly professional and efficient, delivering exactly what I needed in record time. I highly recommend dev web for anyone looking to establish a strong online presence.",
  },
  {
    name: "Jennifer Carter",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "dev web helped me create an amazing e-commerce website that exceeded all my expectations. The user-friendly interface and seamless checkout process boosted my online sales significantly. I highly recommend dev web for anyone looking to take their business online to the next level.",
  },
  {
    name: "Emma Thompson",
    photoUrl:
      "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "dev web created a fantastic website for my football team. The site is sleek, user-friendly, and perfectly captures the spirit of our sport. I highly recommend dev web for anyone looking to showcase their passion for football online.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
