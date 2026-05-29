let section_obj = [
  {
    icon: "fa-solid fa-user",
    title: "About",
    color: "text-blue-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Projects",
    color: "text-emerald-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Extra Circular",
    color: "text-purple-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Education Qualification",
    color: "text-amber-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Sample",
    color: "text-pink-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Contact",
    color: "text-cyan-500",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nobis quam harum vel consequuntur saepe pariatur reiciendis natus, at, aliquid corrupti rem quia temporibus et aspernatur, quaerat est aperiam mollitia...",
  },
];

// contact bar onject
let contact_obj = [
  {
    img: "asstes/images/linkedin.png",
    link: "",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/notes.png",
    link: "",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/profile.png",
    link: "",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/instagram.png",
    link: "",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/dribbble.png",
    link: "",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/behance.png",
    link: "",
    popup: "Linked-In",
  },
];

// icons floation icons section
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("boxes-container");

  const positions = [
    { top: "top-[22%]", side: "left-[17%]" },
    { top: "top-[45%]", side: "left-[23%]" },
    { top: "top-[52%]", side: "left-[8%]" },
    { top: "top-[12%]", side: "right-[12%]" },
    { top: "top-[27%]", side: "right-[25%]" },
    { top: "top-[40%]", side: "right-[14%]" },
  ];

  // Loop through your objects and render them
  section_obj.forEach((section, index) => {
    if (index < positions.length) {
      const pos = positions[index];

      const box = document.createElement("div");

      box.className = `absolute ${pos.top} ${pos.side} w-12 h-12 md:w-16 md:h-16 bg-[#E0E0E0]/80 rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center cursor-pointer transition-transform hover:scale-110`;

      box.setAttribute("title", section.title);

      const iconEl = document.createElement("i");

      const iconClasses = [
        ...section.icon.split(" "),
        ...section.color.split(" "),
        "text-lg",
        "md:text-2xl",
      ];
      iconEl.classList.add(...iconClasses);

      box.appendChild(iconEl);
      container.appendChild(box);
    }
  });
});

// contact js

document.addEventListener("DOMContentLoaded", () => {
  const contact = document.getElementById("contact_section");
  let html = "";
  contact_obj.map((item, index) => {
    html += `<div key=${index} class='hover:-translate-y-2'>
        <img src=${item.img} alt=${item.popup} class='h-10' />
        </div>`;
  });
  contact.innerHTML = html;
});
