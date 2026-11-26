/* SONORA - Website interactions */


/* 1. Mobile navigation menu */
// Extra: Keyboard events
// I used the Escape key so users can close the mobile menu
// with their keyboard, not only by clicking the menu button.
// Reference: MDN - KeyboardEvent
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Close the mobile navigation menu.
function closeNavigationMenu() {

    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

}

if (menuToggle && navMenu) {

    // Open or close the mobile navigation menu.
    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close the menu after a navigation link is selected.
    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeNavigationMenu);

    });

    // Close the mobile menu when the Escape key is pressed.
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeNavigationMenu();
        }

    });

}


/* 2. Portfolio category filter */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFilter = button.dataset.filter;

        // Update the active filter button.
        filterButtons.forEach(function (filterButton) {

            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");

        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Show projects matching the selected category.
        projectCards.forEach(function (card) {

            const projectCategory = card.dataset.category;

            const shouldShow =
                selectedFilter === "all" ||
                selectedFilter === projectCategory;

            card.classList.toggle("hidden", !shouldShow);

        });

    });

});


/* 3. Back to top button */
// Extra: Smooth scrolling
// The scrollTo() method moves the page smoothly back to the top
// instead of jumping there immediately.
// Reference: MDN - Window.scrollTo()
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    // Show the button after scrolling down more than 400 pixels.
    window.addEventListener("scroll", function () {

        backToTop.classList.toggle("visible", window.scrollY > 400);

    }, { passive: true });

    // Smoothly scroll back to the top when clicked.
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* 4. Service information and package data */

// Store the information for each service and its three packages.
const serviceData = {

    identity: {
        number: "01 / SERVICE",
        title: "ARTIST IDENTITY",
        formValue: "Artist Identity",

        tagline: "Build a distinct visual world for your sound.",

        description:
            "We create unique visual identities that reflect your music, personality and artistic direction. From the first concept to the final visual system, we help artists build a recognizable identity.",

        image: "assets/images/service-artist-identity.jpg",

        includes: [
            "Brand Concept & Creative Direction",
            "Logo & Visual Identity",
            "Typography & Colour System",
            "Artist Lookbook / Visual Guide"
        ],

        packages: [
            {
                name: "ESSENTIAL",
                price: "$800",
                description:
                    "For emerging artists building their first visual identity.",

                features: [
                    "Creative discovery consultation",
                    "1 visual moodboard",
                    "Primary logo design",
                    "Basic colour palette",
                    "1 revision round"
                ]
            },
            {
                name: "STANDARD",
                price: "$1,500",
                description:
                    "For artists ready to develop a consistent brand.",

                features: [
                    "Creative direction and concept",
                    "Primary and secondary logo",
                    "Typography and colour system",
                    "Social media visual templates",
                    "Mini brand guidelines",
                    "2 revision rounds"
                ]
            },
            {
                name: "PREMIUM",
                price: "$2,800+",
                description:
                    "For artists developing a complete visual world.",

                features: [
                    "Full creative direction",
                    "Complete logo system",
                    "Comprehensive brand guidelines",
                    "Artist lookbook",
                    "Social media identity kit",
                    "3 revision rounds"
                ]
            }
        ]
    },

    artwork: {
        number: "02 / SERVICE",
        title: "MUSIC ARTWORK",
        formValue: "Music Artwork",

        tagline: "Give your music a visual identity.",

        description:
            "We turn music into memorable visual artwork. From single releases to complete album packaging, every design is created to reflect the sound and story behind the music.",

        image: "assets/images/service-music-artwork.jpg",

        includes: [
            "Album Cover Design",
            "Single Cover Artwork",
            "Spotify Canvas / Digital Visuals",
            "Promotional Artwork"
        ],

        packages: [
            {
                name: "SINGLE",
                price: "$250",
                description: "For one song release.",

                features: [
                    "1 single cover design",
                    "1 creative concept",
                    "Streaming-ready artwork",
                    "1 revision round"
                ]
            },
            {
                name: "ALBUM",
                price: "$650",
                description: "For an EP or album release.",

                features: [
                    "1 album cover design",
                    "2 creative concepts",
                    "Back cover and tracklist layout",
                    "Digital release graphics",
                    "2 revision rounds"
                ]
            },
            {
                name: "FULL PACKAGE",
                price: "$1,200+",
                description: "For a complete music release campaign.",

                features: [
                    "Album cover and single artwork",
                    "Complete visual concept",
                    "Digital packaging concept",
                    "3 promotional graphics",
                    "Spotify Canvas concept",
                    "3 revision rounds"
                ]
            }
        ]
    },

    campaigns: {
        number: "03 / SERVICE",
        title: "CREATIVE CAMPAIGNS",
        formValue: "Creative Campaigns",

        tagline: "Turn your next release into a visual moment.",

        description:
            "We develop creative promotional campaigns that connect artists with their audiences. Our approach combines visual storytelling, photography and digital content.",

        image: "assets/images/service-creative-campaigns.jpg",

        includes: [
            "Campaign Concept & Strategy",
            "Promotional Posters",
            "Social Media Content",
            "Artist Photography Direction"
        ],

        packages: [
            {
                name: "STARTER",
                price: "$600",
                description: "For a focused release announcement.",

                features: [
                    "Campaign concept",
                    "1 promotional poster",
                    "3 social media graphics",
                    "1 revision round"
                ]
            },
            {
                name: "STANDARD",
                price: "$1,200",
                description: "For a coordinated release rollout.",

                features: [
                    "Campaign strategy and moodboard",
                    "2 promotional posters",
                    "6 social media graphics",
                    "Photography art direction",
                    "2 revision rounds"
                ]
            },
            {
                name: "FULL CAMPAIGN",
                price: "$2,500+",
                description: "For a complete multi-platform launch.",

                features: [
                    "Full campaign creative direction",
                    "Launch content calendar",
                    "4 promotional designs",
                    "12 social media graphics",
                    "Photography shot list",
                    "3 revision rounds"
                ]
            }
        ]
    },

    live: {
        number: "04 / SERVICE",
        title: "LIVE EXPERIENCES",
        formValue: "Live Experiences",

        tagline: "Create moments that audiences remember.",

        description:
            "We design immersive visual experiences for concerts, music festivals and live events. From stage graphics to LED visuals, we help bring performances to life.",

        image: "assets/images/service-live-experiences.jpg",

        includes: [
            "Concert LED Visuals",
            "Stage Screen Graphics",
            "Event Visual Identity",
            "Live Performance Motion Graphics"
        ],

        packages: [
            {
                name: "BASIC",
                price: "$500",
                description: "For smaller live performances.",

                features: [
                    "1 event visual concept",
                    "1 static stage screen graphic",
                    "1 event poster",
                    "1 revision round"
                ]
            },
            {
                name: "STAGE PACKAGE",
                price: "$1,200",
                description: "For performances with multiple stage visuals.",

                features: [
                    "Stage visual direction",
                    "3 animated screen loops",
                    "Event visual identity",
                    "2 revision rounds"
                ]
            },
            {
                name: "FULL EXPERIENCE",
                price: "$2,500+",
                description: "For festivals and immersive performances.",

                features: [
                    "Full stage creative direction",
                    "6 animated visual loops",
                    "Multi-screen visual planning",
                    "Event branding assets",
                    "3 revision rounds"
                ]
            }
        ]
    }

};


/* 5. Service value mapping */

// Match the project type options in the HTML dropdown to service keys.
const serviceValueMap = {

    "Artist Identity": "identity",
    "Music Artwork": "artwork",
    "Creative Campaigns": "campaigns",
    "Live Experiences": "live"

};


/* 6. Dynamic package selector */
// Extra: Dynamic DOM manipulation
// I used createElement() to build the package cards with JavaScript.
// This means the packages change depending on the service selected
// by the user, instead of showing all packages at once.
// Reference: MDN - Document.createElement()
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const projectTypeInput = document.getElementById("project-type");
const packageSelection = document.getElementById("package-selection");
const packageGrid = document.getElementById("package-grid");
const selectedPackageInput = document.getElementById("selected-package");
const packageError = document.getElementById("package-error");

// Return the internal service key for the selected project type.
function getSelectedServiceKey() {

    if (!projectTypeInput) return null;

    return serviceValueMap[projectTypeInput.value] || null;

}

// Clear the previously selected package and its error message.
function clearPackageSelection() {

    if (selectedPackageInput) {
        selectedPackageInput.value = "";
    }

    if (packageError) {
        packageError.textContent = "";
    }

}

// Create package cards based on the selected service.
function updatePackages(serviceKey) {

    if (!packageSelection || !packageGrid || !selectedPackageInput) {
        return;
    }

    const selectedService = serviceData[serviceKey];

    packageGrid.innerHTML = "";
    clearPackageSelection();

    // Hide the package selector when no supported service is selected.
    if (!selectedService) {

        packageSelection.hidden = true;
        return;

    }

    packageSelection.hidden = false;

    selectedService.packages.forEach(function (packageInfo) {

        // Use a button so the package can be selected by mouse or keyboard.
        const card = document.createElement("button");

        card.type = "button";
        card.className = "package-card";
        card.setAttribute("aria-pressed", "false");

        const packageName = document.createElement("h3");
        packageName.textContent = packageInfo.name;

        const packagePrice = document.createElement("p");
        packagePrice.className = "package-price";
        packagePrice.textContent = packageInfo.price + " CAD";

        const packageDescription = document.createElement("p");
        packageDescription.className = "package-description";
        packageDescription.textContent = packageInfo.description;

        const featureHeading = document.createElement("strong");
        featureHeading.textContent = "WHAT'S INCLUDED";

        const featureList = document.createElement("ul");

        packageInfo.features.forEach(function (feature) {

            const listItem = document.createElement("li");
            listItem.textContent = feature;
            featureList.appendChild(listItem);

        });

        const selectLabel = document.createElement("span");
        selectLabel.className = "package-select-label";
        selectLabel.textContent = "SELECT PACKAGE ↗";

        card.appendChild(packageName);
        card.appendChild(packagePrice);
        card.appendChild(packageDescription);
        card.appendChild(featureHeading);
        card.appendChild(featureList);
        card.appendChild(selectLabel);

        // Save the selected package and update its visual state.
        card.addEventListener("click", function () {

            packageGrid.querySelectorAll(".package-card").forEach(
                function (otherCard) {

                    otherCard.classList.remove("selected");
                    otherCard.setAttribute("aria-pressed", "false");

                }
            );

            card.classList.add("selected");
            card.setAttribute("aria-pressed", "true");

            selectedPackageInput.value = packageInfo.name;

            if (packageError) {
                packageError.textContent = "";
            }

        });

        packageGrid.appendChild(card);

    });

}

// Update package cards whenever the project type changes.
if (projectTypeInput) {

    projectTypeInput.addEventListener("change", function () {

        updatePackages(getSelectedServiceKey());

        projectTypeInput.removeAttribute("aria-invalid");

        const projectError = document.getElementById("project-error");

        if (projectError) {
            projectError.textContent = "";
        }

    });

}


/* 7. Contact form validation */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // This is a front-end demonstration form only.
        // It validates the fields and displays a confirmation,
        // but does not send or store the form data.
        // Prevent the page from reloading while the demo validation runs.
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const projectError = document.getElementById("project-error");
        const messageError = document.getElementById("message-error");
        const successMessage = document.getElementById("success-message");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const projectType = projectTypeInput ? projectTypeInput.value : "";
        const message = messageInput ? messageInput.value.trim() : "";

        // Remove previous validation messages before checking again.
        [
            nameError,
            emailError,
            projectError,
            messageError,
            packageError
        ].forEach(function (errorElement) {

            if (errorElement) {
                errorElement.textContent = "";
            }

        });

        if (successMessage) {
            successMessage.textContent = "";
            successMessage.classList.remove("show");
        }

        // Reset invalid states from the previous submission.
        [
            nameInput,
            emailInput,
            projectTypeInput,
            messageInput
        ].forEach(function (input) {

            if (input) {
                input.removeAttribute("aria-invalid");
            }

        });

        let isValid = true;

        // Check that the name field is not empty.
        if (!name) {

            if (nameError) {
                nameError.textContent = "Please enter your name.";
            }

            if (nameInput) {
                nameInput.setAttribute("aria-invalid", "true");
            }

            isValid = false;

        }

        // Extra: Regular expressions (Regex)
        // I used a regular expression to check if the email
        // follows a basic email format before accepting the form.
        // Reference: MDN - Regular Expressions
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {

            if (emailError) {
                emailError.textContent = "Please enter your email address.";
            }

            if (emailInput) {
                emailInput.setAttribute("aria-invalid", "true");
            }

            isValid = false;

        } else if (!emailPattern.test(email)) {

            if (emailError) {
                emailError.textContent = "Please enter a valid email address.";
            }

            if (emailInput) {
                emailInput.setAttribute("aria-invalid", "true");
            }

            isValid = false;

        }

        // Check that a project type has been selected.
        if (!projectType) {

            if (projectError) {
                projectError.textContent = "Please select a project type.";
            }

            if (projectTypeInput) {
                projectTypeInput.setAttribute("aria-invalid", "true");
            }

            isValid = false;

        }

        // Require a package when one of the four main services is selected.
        const selectedServiceKey = getSelectedServiceKey();

        if (selectedServiceKey) {

            if (!selectedPackageInput || !selectedPackageInput.value) {

                if (packageError) {
                    packageError.textContent = "Please select a package.";
                }

                isValid = false;

            }

        }

        // Check that the project description has been entered.
        if (!message) {

            if (messageError) {
                messageError.textContent = "Please tell us about your project.";
            }

            if (messageInput) {
                messageInput.setAttribute("aria-invalid", "true");
            }

            isValid = false;

        }

        // Display a confirmation only after all required fields are valid.
        if (isValid) {

            const chosenPackage =
                selectedPackageInput && selectedPackageInput.value
                    ? " Package: " + selectedPackageInput.value + "."
                    : "";

            if (successMessage) {
                successMessage.textContent =
                    "YOUR NOTE IS IN." + chosenPackage;

                successMessage.classList.add("show");
            }

            // Reset the form after successful validation.
            contactForm.reset();

            // Remove the previous package cards and selection.
            if (packageSelection) {
                packageSelection.hidden = true;
            }

            if (packageGrid) {
                packageGrid.innerHTML = "";
            }

            clearPackageSelection();

        }

    });

}


/* 8. Scroll reveal animation */
// Extra: Intersection Observer API
// I used IntersectionObserver to check when
// an element enters the screen while the user is scrolling.
// It triggers the reveal animation only when the element is visible.
// Reference: MDN - Intersection Observer API
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// Select the elements that should appear as the user scrolls.
const revealElements = document.querySelectorAll(
    ".about-content, .about-image, .project-card, " +
    ".service-item, .process-image, .process-step, .contact-content"
);

// Add the reveal class so CSS can animate these elements.
revealElements.forEach(function (element) {

    element.classList.add("reveal");

});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    // Stop observing an element after it becomes visible.
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    // Keep all content visible in older browsers without IntersectionObserver.
    revealElements.forEach(function (element) {

        element.classList.add("active");

    });

}


/* 9. Service detail modal */
// Extra: Interactive modal with dynamic content
// I used JavaScript events to open the modal and update its content
// based on which service the user selects.
// Users can also click different packages to see more details.
// Reference: MDN - Introduction to Events
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events


const serviceModal = document.getElementById("service-modal");
const modalClose = document.getElementById("modal-close");

const modalOverlay = serviceModal
    ? serviceModal.querySelector(".modal-overlay")
    : null;

const modalCTA = document.getElementById("modal-cta");

let previousServiceButton = null;
let selectedServiceKey = null;

// Update the modal content using the selected service information.
function openServiceModal(serviceKey, serviceButton) {

    const selectedService = serviceData[serviceKey];

    if (!selectedService || !serviceModal) return;

    const modalNumber = document.getElementById("modal-number");
    const modalTitle = document.getElementById("modal-title");
    const modalTagline = document.getElementById("modal-tagline");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const includesList = document.getElementById("modal-includes");
    const pricingContainer = document.getElementById("modal-pricing");

    if (
        !modalNumber ||
        !modalTitle ||
        !modalTagline ||
        !modalDescription ||
        !modalImage ||
        !includesList ||
        !pricingContainer
    ) {
        return;
    }

    previousServiceButton = serviceButton;
    selectedServiceKey = serviceKey;

    modalNumber.textContent = selectedService.number;
    modalTitle.textContent = selectedService.title;
    modalTagline.textContent = selectedService.tagline;
    modalDescription.textContent = selectedService.description;

    // Update the service image and its alternative text.
    modalImage.src = selectedService.image;
    modalImage.alt = selectedService.title + " service example";

    // Build the list of services included in this category.
    includesList.innerHTML = "";

    selectedService.includes.forEach(function (feature) {

        const listItem = document.createElement("li");
        listItem.textContent = feature;
        includesList.appendChild(listItem);

    });

    // Rebuild the pricing cards whenever a different service is opened.
    pricingContainer.innerHTML = "";

    const packageDetails = document.createElement("div");
    packageDetails.id = "modal-package-details";
    packageDetails.className = "modal-package-details";
    packageDetails.setAttribute("aria-live", "polite");
    packageDetails.setAttribute("aria-hidden", "true");

    selectedService.packages.forEach(function (packageInfo) {

        const priceCard = document.createElement("button");

        priceCard.type = "button";
        priceCard.className = "price-card";
        priceCard.setAttribute("aria-pressed", "false");
        priceCard.setAttribute("aria-controls", "modal-package-details");

        const packageName = document.createElement("h4");
        packageName.textContent = packageInfo.name;

        const packagePrice = document.createElement("p");
        packagePrice.textContent = packageInfo.price + " CAD";

        priceCard.appendChild(packageName);
        priceCard.appendChild(packagePrice);

        // Display the selected package information underneath the cards.
        priceCard.addEventListener("click", function () {

            pricingContainer.querySelectorAll(".price-card").forEach(
                function (otherCard) {

                    otherCard.classList.remove("selected");
                    otherCard.setAttribute("aria-pressed", "false");

                }
            );

            priceCard.classList.add("selected");
            priceCard.setAttribute("aria-pressed", "true");

            packageDetails.innerHTML = "";

            const detailHeading = document.createElement("h4");
            detailHeading.textContent =
                packageInfo.name + " — " + packageInfo.price + " CAD";

            const detailDescription = document.createElement("p");
            detailDescription.textContent = packageInfo.description;

            const featureList = document.createElement("ul");

            packageInfo.features.forEach(function (feature) {

                const listItem = document.createElement("li");
                listItem.textContent = feature;
                featureList.appendChild(listItem);

            });

            packageDetails.appendChild(detailHeading);
            packageDetails.appendChild(detailDescription);
            packageDetails.appendChild(featureList);

            packageDetails.classList.add("active");
            packageDetails.setAttribute("aria-hidden", "false");

        });

        pricingContainer.appendChild(priceCard);

    });

    // Place the expandable details after all pricing cards.
    pricingContainer.appendChild(packageDetails);

    serviceModal.classList.add("active");
    serviceModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Move keyboard focus to the close button when the modal opens.
    if (modalClose) {
        modalClose.focus();
    }

}

// Open the corresponding modal when a service row is selected.
document.querySelectorAll(".service-item").forEach(function (item) {

    item.addEventListener("click", function () {

        openServiceModal(item.dataset.service, item);

    });

});

// Close the modal and return focus to the service that opened it.
function closeServiceModal() {

    if (!serviceModal) return;

    serviceModal.classList.remove("active");
    serviceModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (previousServiceButton) {
        previousServiceButton.focus();
    }

}

// Close the modal using its close button.
if (modalClose) {

    modalClose.addEventListener("click", closeServiceModal);

}

// Close the modal when the dark background is clicked.
if (modalOverlay) {

    modalOverlay.addEventListener("click", closeServiceModal);

}

// Close the modal when Escape is pressed.
document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        serviceModal &&
        serviceModal.classList.contains("active")
    ) {

        closeServiceModal();

    }

});

// Transfer the selected service to the contact form.
if (modalCTA) {

    modalCTA.addEventListener("click", function () {

        if (projectTypeInput && selectedServiceKey) {

            const selectedService = serviceData[selectedServiceKey];

            projectTypeInput.value = selectedService.formValue;

            // Trigger the change event to display the matching packages.
            projectTypeInput.dispatchEvent(
                new Event("change", { bubbles: true })
            );

        }

        closeServiceModal();

    });

}


/* 10. Hero typewriter effect */
// Extra: Typing animation with setTimeout()
// I used setTimeout() to add a short delay between each character.
// This makes the hero heading look like someone is typing it.
// Reference: MDN - Window.setTimeout()
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout

const typingLines = document.querySelectorAll(".typing-line");

const typingSpeed = 75;
const lineDelay = 350;

// Type one character at a time to create the animated headline.
function typeLine(line, text, characterIndex = 0) {

    if (!line || !text) return;

    line.classList.add("is-typing");

    if (characterIndex < text.length) {

        line.textContent += text.charAt(characterIndex);

        setTimeout(function () {

            typeLine(line, text, characterIndex + 1);

        }, typingSpeed);

    } else {

        const currentIndex = Array.from(typingLines).indexOf(line);
        const nextLine = typingLines[currentIndex + 1];

        if (nextLine) {

            // Remove the cursor from the completed line.
            line.classList.remove("is-typing");

            // Start typing the next line after a short delay.
            setTimeout(function () {

                typeLine(nextLine, nextLine.dataset.text);

            }, lineDelay);

        } else {

            // Remove the cursor after the final headline line is completed.
            line.classList.remove("is-typing");

        }

    }

}

// Start the typing animation after the page content is available.
if (typingLines.length > 0) {

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Clear the original text before starting the animation.
    typingLines.forEach(function (line) {

        line.textContent = "";
        line.classList.remove("is-typing");

    });

    // Show the full headline immediately if reduced motion is preferred.
    if (reducedMotion) {

        typingLines.forEach(function (line) {

            line.textContent = line.dataset.text || "";

        });

    } else {

        // Start typing from the first headline line.
        typeLine(typingLines[0], typingLines[0].dataset.text);

    }

}