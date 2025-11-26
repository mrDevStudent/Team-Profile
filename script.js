const users = [
      { name: "Duro. Kaith Marky", desc: "" },
      { name: "Enguerra, Aaron C.", desc: "" },
      { name: "Marco, Tobey D.", desc: "" },
      { name: "Tenorio, Emmanuel Robert", desc: "" },
      { name: "Ombrog, Eugene", desc: "" }
    ];

    const profileBtn = document.getElementById('profileBtn');
    const dropdown = document.getElementById('dropdown');
    const contentArea = document.getElementById('contentArea');

    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });

    function showUser(index) {
      dropdown.classList.remove('show');
      const user = users[index];
      contentArea.innerHTML = `
        <h1>${user.name}</h1>
        <p>${user.desc}</p>
      `;
    }
