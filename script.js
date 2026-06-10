const users = {
    zerahlen: {
        password: "zerahlen123",
        name: "Zerahlen Escoton",
        badge: "Student - Explorer - Dreamer",
        paletteName: "Sky Blue",
        primary: "#0284C7",
        secondary: "#38BDF8",
        accent: "#E0F2FE",
        surface: "#F0F9FF",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
        about: [
            "My name is Zerahlen Escoton.",
            "I am a student who enjoys learning new things. I am friendly, responsible, and hardworking.",
            "I always strive to do my best in everything I do. I love traveling and exploring different places.",
            "My family is very important to me because they give me love, support, and guidance."
        ],
        destinations: [
            "Paris for the Eiffel Tower and beautiful culture",
            "Singapore for modern attractions and clean city spaces",
            "South Korea for culture, food, music, and tourist spots"
        ],
        hobbies: [
            ["music_note", "Listening to Music", "Songs for focus, comfort, and good energy."],
            ["movie", "Watching Videos", "Stories, travel clips, and creative videos."],
            ["groups", "Friends", "Spending time with people who matter."],
            ["family_restroom", "Family Time", "Love, support, and guidance at home."]
        ],
        music: {
            artists: ["Taylor Swift", "Sabrina Carpenter", "Laufey"],
            songs: ["Daylight", "Feather", "From The Start"],
            playlists: ["Study Glow", "Travel Dreams", "Friends Mix"]
        },
        contact: {
            email: "zerahlen.escoton@example.com",
            phone: "+63 912 345 6789",
            facebook: "facebook.com/zerahlen.escoton",
            github: "github.com/zerahlen",
            linkedin: "linkedin.com/in/zerahlen-escoton"
        }
    },
    avril: {
        password: "avril123",
        name: "Avril Dhana Fernandez",
        badge: "Creative - Organized - Adventurer",
        paletteName: "Aqua Blue",
        primary: "#0F766E",
        secondary: "#2DD4BF",
        accent: "#CCFBF1",
        surface: "#F0FDFA",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
        about: [
            "Hi, I'm Avril Dhana Fernandez.",
            "I love finding order in chaos. I enjoy organizing workspaces, structuring projects, and learning new skills.",
            "I appreciate details and continuous learning.",
            "I believe every journey is an opportunity to grow. Let's connect and build something great together."
        ],
        destinations: [
            "Japan for city life, food, and culture",
            "Switzerland for peaceful views and mountain trips",
            "Iceland for northern lights and natural wonders"
        ],
        hobbies: [
            ["travel_explore", "Traveling", "Exploring new places and cultures."],
            ["menu_book", "Reading", "Stories that make ideas feel alive."],
            ["translate", "Languages", "Learning how people connect through words."],
            ["restaurant", "Cooking", "Trying new recipes and flavors."],
            ["pets", "Cats", "Spending time with calm and playful cats."]
        ],
        music: {
            artists: ["NIKI", "Beabadoobee", "Ariana Grande"],
            songs: ["Every Summertime", "Glue Song", "POV"],
            playlists: ["Clean Desk Focus", "Rainy Reading", "Kitchen Pop"]
        },
        contact: {
            email: "avril.fernandez@example.com",
            phone: "+63 923 456 7890",
            facebook: "facebook.com/avril.dhana",
            github: "github.com/avrilcodes",
            linkedin: "linkedin.com/in/avril-fernandez"
        }
    },
    klara: {
        password: "zerahlen123",
        name: "Zerahlen Escoton",
        badge: "Student - Explorer - Dreamer",
        paletteName: "Sky Blue",
        primary: "#0284C7",
        secondary: "#38BDF8",
        accent: "#E0F2FE",
        surface: "#F0F9FF",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
        about: [
            "My name is Zerahlen Escoton.",
            "I am a student who enjoys learning new things. I am friendly, responsible, and hardworking.",
            "I always strive to do my best in everything I do. I love traveling and exploring different places.",
            "My family is very important to me because they give me love, support, and guidance."
        ],
        destinations: [
            "Paris for the Eiffel Tower and beautiful culture",
            "Singapore for modern attractions and clean city spaces",
            "South Korea for culture, food, music, and tourist spots"
        ],
        hobbies: [
            ["music_note", "Listening to Music", "Songs for focus, comfort, and good energy."],
            ["movie", "Watching Videos", "Stories, travel clips, and creative videos."],
            ["groups", "Friends", "Spending time with people who matter."],
            ["family_restroom", "Family Time", "Love, support, and guidance at home."]
        ],
        music: {
            artists: ["Taylor Swift", "Sabrina Carpenter", "Laufey"],
            songs: ["Daylight", "Feather", "From The Start"],
            playlists: ["Study Glow", "Travel Dreams", "Friends Mix"]
        },
        contact: {
            email: "zerahlen.escoton@example.com",
            phone: "+63 912 345 6789",
            facebook: "facebook.com/zerahlen.escoton",
            github: "github.com/zerahlen",
            linkedin: "linkedin.com/in/zerahlen-escoton"
        }
    }
};

const galleryItems = [
    ["best_friends.jpg", "Best Friends", "A warm memory with the people who make ordinary days brighter."],
    ["classmate.jpg", "Classmate", "Shared learning moments and school experiences."],
    ["friends.jpg", "Friends", "Small adventures, big laughs, and meaningful support."],
    ["outing_with_friends.jpg", "Outing With Friends", "A day outside filled with stories and connection."]
];

const pageTitles = {
    about: "About Me",
    gallery: "Gallery",
    hobbies: "Hobbies",
    music: "Music",
    contact: "Contact"
};

let activeUserKey = null;
let currentPage = "about";

const app = document.getElementById("app");
const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");
const content = document.getElementById("content");
const drawer = document.getElementById("drawer");
const logoutDialog = document.getElementById("logout-dialog");

document.addEventListener("DOMContentLoaded", () => {
    bindLogin();
    bindNavigation();

    const remembered = localStorage.getItem("portfolio_connect_user");
    if (remembered && users[remembered]) {
        signIn(remembered, true);
    }
});

function bindLogin() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const privacyInput = document.getElementById("privacy-policy");

    document.getElementById("login-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        const error = document.getElementById("login-error");

        if (!users[username] || users[username].password !== password) {
            error.textContent = "Incorrect username or password.";
            setLoginMessage("error", "lock", "That login did not match. Try Zerahlen or Avril, or tap an account button to auto-fill.");
            return;
        }

        error.textContent = "";
        setLoginMessage("success", "verified_user", `Welcome, ${users[username].name}. Loading your ${users[username].paletteName.toLowerCase()} portfolio.`);
        signIn(username, document.getElementById("remember-me").checked);
    });

    document.getElementById("toggle-password").addEventListener("click", () => {
        const icon = document.querySelector("#toggle-password .material-symbols-rounded");
        const show = passwordInput.type === "password";
        passwordInput.type = show ? "text" : "password";
        icon.textContent = show ? "visibility_off" : "visibility";
        setLoginMessage("", show ? "visibility" : "visibility_off", show ? "Password is visible so you can check it." : "Password is hidden again.");
    });

    usernameInput.addEventListener("input", () => {
        const key = usernameInput.value.trim().toLowerCase();
        if (users[key]) {
            setLoginMessage("success", "account_circle", `${users[key].name} uses the ${users[key].paletteName.toLowerCase()} palette.`);
        } else if (key.length > 0) {
            setLoginMessage("", "search", "Keep typing, or choose one of the two portfolio accounts below.");
        } else {
            setLoginMessage("", "tips_and_updates", "Select an account below or sign in with your username and password.");
        }
    });

    privacyInput.addEventListener("change", () => {
        setLoginMessage("", privacyInput.checked ? "task_alt" : "privacy_tip", privacyInput.checked ? "Privacy confirmed. You can sign in now." : "Please agree to the Privacy Policy before signing in.");
    });

    document.querySelectorAll("[data-fill-user]").forEach((button) => {
        button.addEventListener("click", () => {
            const key = button.dataset.fillUser;
            usernameInput.value = key;
            passwordInput.value = users[key].password;
            privacyInput.checked = true;
            setLoginMessage("success", "palette", `${users[key].name} selected. This account opens with the ${users[key].paletteName.toLowerCase()} color palette.`);
        });
    });
}

function setLoginMessage(state, icon, text) {
    const message = document.getElementById("login-message");
    message.classList.remove("error", "success");
    if (state) message.classList.add(state);
    message.querySelector(".material-symbols-rounded").textContent = icon;
    message.querySelector("p").textContent = text;
}

function bindNavigation() {
    document.querySelectorAll("[data-page]").forEach((button) => {
        button.addEventListener("click", () => setPage(button.dataset.page));
    });

    document.querySelectorAll("[data-drawer-page]").forEach((button) => {
        button.addEventListener("click", () => {
            closeDrawer();
            setPage(button.dataset.drawerPage);
        });
    });

    document.getElementById("menu-button").addEventListener("click", openDrawer);
    document.getElementById("avatar-button").addEventListener("click", openDrawer);
    document.getElementById("close-drawer").addEventListener("click", closeDrawer);
    drawer.addEventListener("click", (event) => {
        if (event.target === drawer) closeDrawer();
    });

    document.getElementById("drawer-logout").addEventListener("click", () => {
        closeDrawer();
        openLogoutDialog();
    });

    document.getElementById("cancel-logout").addEventListener("click", closeLogoutDialog);
    document.getElementById("confirm-logout").addEventListener("click", signOut);
    logoutDialog.addEventListener("click", (event) => {
        if (event.target === logoutDialog) closeLogoutDialog();
    });
}

function signIn(userKey, remember) {
    activeUserKey = userKey;
    currentPage = "about";

    if (remember) {
        localStorage.setItem("portfolio_connect_user", userKey);
    } else {
        localStorage.removeItem("portfolio_connect_user");
    }

    applyTheme();
    hydrateChrome();
    loginScreen.classList.remove("active");
    mainScreen.classList.add("active");
    setPage("about");
}

function switchAccount(userKey) {
    activeUserKey = userKey;
    currentPage = "about";
    localStorage.setItem("portfolio_connect_user", userKey);
    applyTheme();
    hydrateChrome();
    setPage("about");
    closeDrawer();
}

function signOut() {
    activeUserKey = null;
    localStorage.removeItem("portfolio_connect_user");
    closeLogoutDialog();
    mainScreen.classList.remove("active");
    loginScreen.classList.add("active");
    document.getElementById("login-form").reset();
    document.getElementById("login-error").textContent = "";
    setLoginMessage("", "tips_and_updates", "Select an account below or sign in with your username and password.");
}

function activeUser() {
    return users[activeUserKey];
}

function applyTheme() {
    const user = activeUser();
    app.style.setProperty("--primary", user.primary);
    app.style.setProperty("--secondary", user.secondary);
    app.style.setProperty("--accent", user.accent);
    app.style.setProperty("--app-bg", user.surface);
}

function hydrateChrome() {
    const user = activeUser();
    document.getElementById("top-avatar").src = user.avatar;
    document.getElementById("top-avatar").alt = user.name;
    document.getElementById("drawer-avatar").src = user.avatar;
    document.getElementById("drawer-avatar").alt = user.name;
    document.getElementById("drawer-name").textContent = user.name;
    document.getElementById("drawer-badge").textContent = user.badge;
    document.getElementById("account-switcher").innerHTML = Object.entries(users).map(([key, account]) => `
        <button class="${key === activeUserKey ? "active" : ""}" type="button" data-switch-account="${key}">
            <img src="${account.avatar}" alt="">
            <span>
                <strong>${account.name.split(" ")[0]}</strong>
                <small>${account.paletteName}</small>
            </span>
        </button>
    `).join("");

    document.querySelectorAll("[data-switch-account]").forEach((button) => {
        button.addEventListener("click", () => switchAccount(button.dataset.switchAccount));
    });
}

function setPage(page) {
    currentPage = page;
    document.getElementById("page-title").textContent = pageTitles[page];

    document.querySelectorAll("[data-page]").forEach((button) => {
        button.classList.toggle("active", button.dataset.page === page);
    });

    content.innerHTML = renderPage(page);
    content.scrollTop = 0;
    content.focus({ preventScroll: true });
    attachImageFallbacks();
}

function renderPage(page) {
    const renderers = {
        about: renderAbout,
        gallery: renderGallery,
        hobbies: renderHobbies,
        music: renderMusic,
        contact: renderContact
    };

    return `<div class="page">${renderers[page]()}</div>`;
}

function renderAbout() {
    const user = activeUser();
    return `
        <section class="profile-hero">
            <img src="${user.avatar}" alt="${user.name}">
            <h1>${user.name}</h1>
            <p>${user.badge}</p>
            <div class="badge-row">
                ${user.badge.split(" - ").map((badge) => `<span>${badge}</span>`).join("")}
                <span>${user.paletteName} Palette</span>
            </div>
        </section>

        <section class="card">
            <h2>About Me</h2>
            ${user.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>

        <section class="card">
            <h2>Dream Destinations</h2>
            <div class="destination-list">
                ${user.destinations.map((destination) => `
                    <div><span class="material-symbols-rounded">travel_explore</span>${destination}</div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderGallery() {
    return `
        <div class="gallery-grid">
            ${galleryItems.map(([src, title, description]) => `
                <article class="gallery-card">
                    <div class="gallery-image">
                        <img src="${src}" alt="${title}">
                        <div class="image-fallback">${title}</div>
                    </div>
                    <div class="gallery-copy">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function renderHobbies() {
    return `
        <div class="hobby-list">
            ${activeUser().hobbies.map(([icon, title, description]) => `
                <article class="hobby-item">
                    <span class="material-symbols-rounded">${icon}</span>
                    <div>
                        <strong>${title}</strong>
                        <p>${description}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function renderMusic() {
    const music = activeUser().music;
    return `
        <section class="mini-player">
            <strong>Now Previewing</strong>
            <p>${music.playlists[0]} - ${music.songs[0]}</p>
        </section>
        <div class="music-list">
            ${music.artists.map((artist, index) => `
                <article class="music-card">
                    <div class="album-art">
                        <span class="material-symbols-rounded">music_note</span>
                    </div>
                    <div>
                        <h3>${artist}</h3>
                        <p>${music.songs[index]} - ${music.playlists[index]}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function renderContact() {
    const contact = activeUser().contact;
    const items = [
        ["mail", "Email", contact.email],
        ["phone", "Phone Number", contact.phone],
        ["public", "Facebook", contact.facebook],
        ["code", "GitHub", contact.github],
        ["work", "LinkedIn", contact.linkedin]
    ];

    return `
        <div class="contact-list">
            ${items.map(([icon, label, value]) => `
                <article class="contact-card">
                    <div class="contact-icon">
                        <span class="material-symbols-rounded">${icon}</span>
                    </div>
                    <div>
                        <h3>${label}</h3>
                        <p>${value}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function attachImageFallbacks() {
    document.querySelectorAll(".gallery-image img").forEach((image) => {
        image.addEventListener("error", () => {
            image.style.display = "none";
        });
    });
}

function openDrawer() {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
}

function openLogoutDialog() {
    logoutDialog.classList.add("open");
    logoutDialog.setAttribute("aria-hidden", "false");
}

function closeLogoutDialog() {
    logoutDialog.classList.remove("open");
    logoutDialog.setAttribute("aria-hidden", "true");
}
