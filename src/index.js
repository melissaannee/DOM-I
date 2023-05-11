const siteContent = {
	// DO NOT CHANGE THIS OBJECT
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2021",
	},
	images: {
		"logo-img": "http://localhost:9000/img/logo.png",
		"cta-img": "http://localhost:9000/img/cta.png",
		"accent-img": "http://localhost:9000/img/accent.png",
	},
};

console.log("project wired!");

///top nav///
const nav = document.querySelector("nav");
const navLinks = nav.getElementsByTagName("a");
const objNav = siteContent.nav;

let index = 0;
for (let aTag of navLinks) {
	aTag.className = "italic";
	index += 1;
}

let servicesNav = (nav.children[0].innerHTML = "Services");
let productNav = (nav.children[1].innerHTML = "Product");
let visionNav = (nav.children[2].innerHTML = "Vision");
let featuresNav = (nav.children[3].innerHTML = "Features");
let aboutNav = (nav.children[4].innerHTML = "About");
let contactNav = (nav.children[5].innerHTML = "Contact");
///top nav end///

///logo img///
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
///logo img end///

///cta section start///
const h1Tag = document.getElementsByTagName("h1")[0];
h1Tag.textContent = "DOM Is Awesome";

const startButton = document.querySelector("button");
startButton.textContent = "Get Started";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");
///cta section end///

///top content 1 start///
const topContent = document.getElementsByClassName("top-content")[0];
const firstTextContent = topContent.children[0];
const topH4Tag1 = firstTextContent.children[0];
topH4Tag1.textContent = "Features";
const topPTag1 = firstTextContent.children[1];
topPTag1.textContent =
	"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
///top content 1 end///

///top content 2 start///
const secondTextContent = topContent.children[1];
const topH4Tag2 = secondTextContent.children[0];
topH4Tag2.textContent = "About";
const topPTag2 = secondTextContent.children[1];
topPTag2.textContent =
	"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
///top content 2 end///

///middle img/content start///
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");
///middle img/content end///

///bottom content 1 start///
const bottomContent = document.getElementsByClassName("bottom-content")[0];
const bottomTextContent = bottomContent.children[0];
const bottomH4Tag1 = bottomTextContent.children[0];
bottomH4Tag1.textContent = "Services";
const bottomPTag1 = bottomTextContent.children[1];
bottomPTag1.textContent =
	"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
///bottom content 1 end///

///bottom content 2 start///
const bottomTextContent2 = bottomContent.children[1];
const bottomH4Tag2 = bottomTextContent2.children[0];
bottomH4Tag2.textContent = "Product";
const bottomPTag2 = bottomTextContent2.children[1];
bottomPTag2.textContent =
	"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// ///bottom content 2 end///

// ///bottom content 3 start///
const bottomTextContent3 = bottomContent.children[2];
const bottomH4Tag3 = bottomTextContent3.children[0];
bottomH4Tag3.textContent = "Vision";
const bottomPTag3 = bottomTextContent3.children[1];
bottomPTag3.textContent =
	"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// ///bottom content 3 end///

// ///contact section start///
const contactSection = document.getElementsByClassName("contact")[0];
const contactH4Tag = contactSection.children[0];
contactH4Tag.textContent = "Contact";
const contactPTag1 = contactSection.children[1];
contactPTag1.textContent = "123 Way 456 Street Somewhere, USA";
const contactPTag2 = contactSection.children[2];
contactPTag2.textContent = "1 (888) 888-8888";
const contactPTag3 = contactSection.children[3];
contactPTag3.textContent = "sales@greatidea.io";
// ///contact section end///

// ///footer start///
const footer = document.querySelector("footer");
const footerATag = footer.children[0];
footerATag.setAttribute("class", "bold");
footerATag.textContent = "Copyright Great Idea! 2021";
// ///footer end///
