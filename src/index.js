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

const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");

const h1Tag = document.querySelector("h1");
h1Tag.innerText = "DOM Is Awesome";

const startButton = document.querySelector("button");
startButton.innerHTML = "Get Started";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");

const topContent = document.getElementsByClassName("top-content")[0];
const firstTextContent = topContent.children[0];
const topH4Tag1 = firstTextContent.children[0];
topH4Tag1.innerText = "Features";
const topPTag1 = firstTextContent.children[1];
topPTag1.innerText =
	"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const secondTextContent = topContent.children[1];
const topH4Tag2 = secondTextContent.children[0];
topH4Tag2.innerText = "About";
const topPTag2 = secondTextContent.children[1];
topPTag2.innerText =
	"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");

//end
