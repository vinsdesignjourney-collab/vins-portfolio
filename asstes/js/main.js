// Section ojt
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

// Contact ojt
let contact_obj = [
  {
    img: "asstes/images/linkedin.png",
    link: "#",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/notes.png",
    link: "#",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/profile.png",
    link: "#",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/instagram.png",
    link: "#",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/dribbble.png",
    link: "#",
    popup: "Linked-In",
  },
  {
    img: "asstes/images/behance.png",
    link: "#",
    popup: "Linked-In",
  },
];

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

  section_obj.forEach((section, index) => {
    if (index < positions.length) {
      const pos = positions[index];

      const wrapper = document.createElement("div");
      wrapper.className = `absolute ${pos.top} ${pos.side} flex flex-col items-center gap-1.5 w-16 md:w-20 group`;

      const box = document.createElement("div");
      box.className = `w-12 h-12 md:w-16 md:h-16 bg-[#E0E0E0]/80 rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110`;

      const box_title = document.createElement("p");
      box_title.innerText = section.title;
      box_title.className =
        `text-[11px] italic md:text-xs text-[#000] font-medium text-center max-w-full select-none pointer-events-none break-words leading-tight`;

      box.addEventListener("click", () => {
        const tempDiv = document.createElement("div");

        tempDiv.innerHTML = `
        <div id="modal" class="fixed inset-0 z-50 transition-opacity duration-200 ease-in-out">
          <div id="modalOverlay" class="absolute inset-0 bg-black/40"></div>

          <div
            id="modalBox"
            class="absolute bg-white rounded-bl-2xl rounded-br-2xl shadow-2xl max-w-md w-full border-t-5 border-black/70"
            style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
          >
            <div
              id="modalHeader"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-t-xl border-b border-gray-200 cursor-move select-none"
            >
              <div class="flex items-center space-x-2">
                <div class="flex justify-between gap-1.5 mr-2">
                  <span class="closeModalAction w-3 h-3 rounded-full bg-red-500 cursor-pointer inline-block hover:opacity-80"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span class="closeModalAction w-3 h-3 rounded-full bg-green-500 inline-block cursor-pointer"></span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">
                  ${section.title}
                </h3>
              </div>
            </div>

            <div class="p-6">
              <p class="text-sm text-gray-600 font-serif">
                ${section.content}
              </p>
            </div>
          </div>
        </div>
      `;

        const modalInstance = tempDiv.firstElementChild;
        document.body.appendChild(modalInstance);

        const modalBox = modalInstance.querySelector("#modalBox");
        const modalHeader = modalInstance.querySelector("#modalHeader");
        const overlay = modalInstance.querySelector("#modalOverlay");
        const closeActions =
          modalInstance.querySelectorAll(".closeModalAction");

        function destroyModal() {
          modalInstance.classList.add("opacity-0");
          setTimeout(() => {
            modalInstance.remove();
          }, 200);
        }

        overlay.addEventListener("click", destroyModal);
        closeActions.forEach((btn) =>
          btn.addEventListener("click", destroyModal),
        );

        let isDragging = false;
        let offsetX, offsetY;

        modalHeader.addEventListener("mousedown", (e) => {
          if (e.target.classList.contains("closeModalAction")) return;

          isDragging = true;
          const rect = modalBox.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;

          modalBox.style.transform = "none";
          modalBox.style.left = `${rect.left}px`;
          modalBox.style.top = `${rect.top}px`;
        });

        const handleMouseMove = (e) => {
          if (!isDragging) return;

          let newX = e.clientX - offsetX;
          let newY = e.clientY - offsetY;

          const minX = 0;
          const minY = 0;
          const maxX = window.innerWidth - modalBox.offsetWidth;
          const maxY = window.innerHeight - modalBox.offsetHeight;

          if (newX < minX) newX = minX;
          if (newY < minY) newY = minY;
          if (newX > maxX) newX = maxX;
          if (newY > maxY) newY = maxY;

          modalBox.style.left = `${newX}px`;
          modalBox.style.top = `${newY}px`;
        };

        const handleMouseUp = () => {
          isDragging = false;
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });

      // Icon parsing structure
      const iconEl = document.createElement("i");
      const iconClasses = [
        ...section.icon.split(" "),
        ...section.color.split(" "),
        "text-lg",
        "md:text-2xl",
      ];
      iconEl.classList.add(...iconClasses);

      // Assemble everything
      box.appendChild(iconEl);
      wrapper.appendChild(box);
      wrapper.appendChild(box_title);

      if (container) {
        container.appendChild(wrapper);
      }
    }
  });

  const contact = document.getElementById("contact_section");
  if (contact) {
    let html = "";
    contact_obj.forEach((item, index) => {
      html += `<div key="${index}" class='hover:-translate-y-2'>
      <a href="${item.link}">
          <img src="${item.img}" alt="${item.popup}" class='h-10' />
          </a>
          </div>`;
    });
    contact.innerHTML = html;
  }
});
