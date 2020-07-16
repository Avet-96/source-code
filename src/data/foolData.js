import React from "react";
import img from "../assets/images/launch.gif";
import Armine from "../assets/images/Armine.png";
import Lili from "../assets/images/Lili.png";
import Ervand from "../assets/images/Ervand.png";
import Arus from "../assets/images/Arus.png";
import Avet from "../assets/images/Avet.png";
import Nara from "../assets/images/Nara.png";
import Mikael from "../assets/images/Mikayel.png";
import Segey from "../assets/images/testimonial-image.png";
import Eduard from "../assets/images/testimonial-image-2.png";
import Liana from "../assets/images/testimonial-image-3.png";
import logo from '../assets/images/logo.png'
import NavBar from "../component/header-pages/NavBar";
import HomeBanner from "../component/home-pages/home-banner/HomeBanner";
import AboutUs from "../component/home-pages/AboutUs";
import OurSteps from "../component/home-pages/our-steps/OurSteps";
import OuterStep from "../component/home-pages/our-service/OuterStep";
import Pricing from "../component/home-pages/priting-pages/Pricing";
import TestimonialsSection from "../component/home-pages/TestimonialsSection";
import Members from "../component/home-pages/Members";
import ContactUs from "../component/home-pages/ContactUs";
import ContactUsSection from "../component/home-pages/ContactUsSection";
import Footer from "../component/footer/Footer";

export const foolData = {
    outerStepData: [
        {
            id: 0, icon: <i className="icon-screen-desktop fa-2x"/>,
            style: {borderImage: "linear-gradient(to right, #4458dc 17%, #00FFD5 99%) 1"},
            dod: 400, title: 'Graphic Design', text: ' We\'ll make your Logo, graphic components\n' +
                '                                and all the needed mockups according\n' +
                '                                to your preferences.'
        },
        {
            id: 1,
            icon: <i className="icon-plane fa-2x"/>,
            style: {borderImage: "linear-gradient(to right, #4458dc 17%, #00FFD5 99%) 1"},
            dod: 600,
            title: 'Web Development',
            text: ' Your web app will be capable, reliable and fast! Using Agile Project Management methodology we ll deliver best result in shortest deadlines.'
        },
        {
            id: 2,
            icon: <i className="icon-wallet fa-2x"/>,
            style: {borderImage: 'linear-gradient(to right, #4458dc 17%, #00FFD5 99%) 1'},
            dod: 800,
            title: 'App Development',
            text: ' Our team will build and support an elegant app that’s tailored specifically to your business needs.'
        }
    ],
    ourStepsData: [
        {
            id: 0, dad: 400, stepNumber: '0.1', title: 'Tell us about your ideas.',
            text: 'Do you want to create a web-site, mobile app or update the current one?Let\'s go <span className="text-primary">step by step</span> to realize your plans.'
        },
        {
            id: 1, dad: 500, stepNumber: '0.2', title: 'What is your project for?',
            text: 'We like to listen to you, understand what are your needs and\n' +
                '<span className="text-primary">define our goals.</span>\n' +
                'Each our coversation will give us clearer idea about the final product.\n' +
                'We\'ll document our key converstaions and follow the progress during this steps.'
        },
        {
            id: 2, dad: 600, stepNumber: '0.3', title: 'Market research',
            text: 'Our market research varies from\n' +
                '  simple comparable products analysis\n' +
                '  to full product, cunsumer, competitor\n' +
                '  analytics. We do pay attention to select\n' +
                '  your target audience and offer appropriate solutions!'
        },
        {
            id: 3,
            dad: 700,
            stepNumber: '0.4',
            title: 'UX technologies<br/>Wireframing',
            text: 'This step is helping us to define your requitements, to understand the basic\n' +
                ' structure of your project and what are the features that we plan to\n' +
                ' develop.'
        },
        {
            id: 4, dad: 800, stepNumber: '0.5', title: 'Design',
            text: 'We\'ll designing your project according to your preferences, using UI technologies.\n' +
                '  It won\'t be only<span className="text-primary">eye catching,</span>\n' +
                ' but also easy to use and super convinient.\n' +
                '  We don\'t forget to and ask ourselves - Would I actually use this?'
        },
        {
            id: 5, dad: 900, stepNumber: '0.6', title: 'Development',
            text: ' Our development team will take care of building and maintaining\n' +
                '    efficient, reusable, and reliable code. Using best practices we\'ll deliver the\n' +
                '    project\n' +
                '    in the shortest time possible.'
        },
        {
            id: 6, dad: 1000, stepNumber: '0.7', title: 'Let\'s launch it together!',
            text: <img src={img} alt=""/>
        }],
    singlePricingData: [
        {
            id: 0,
            dad: 300,
            title: 'Beginner - Full stack',
            titleBr: 'web development',
            titleTo: '/ monthly',
            price: '40000 AMD',
            navTitle: 'Programming languages',
            nav: [
                {id: '01', icon: <i className="icon-check text-primary"/>, title: 'HTML5, CSS3'},
                {id: '02', icon: <i className="icon-check text-primary"/>, title: 'Responsive design,Bootstrap'},
                {id: '03', icon: <i className="icon-check text-primary"/>, title: 'JavaScript, jQuery'},
                {id: '04', icon: <i className="icon-check text-primary"/>, title: 'PHP'},
                {id: '05', icon: <i className="icon-check text-primary"/>, title: 'Ajax, MySQL'},
                {id: '06', icon: <i className="icon-check text-primary"/>, title: 'OOP/MVC'},
            ],
            navLi: [
                {id: '07', strongTitle: '6', title: ' months'},
                {id: '08', strongTitle: '3', title: ' times a week - 2 hours of courses'},
                {id: '09', strongTitle: 'In total', title: '144 hours'},
            ]

        },
        {
            id: 1,
            dad: 300,
            title: 'Front-end',
            titleBr: 'web development',
            titleTo: '/ monthly',
            price: '40000 AMD',
            navTitle: 'Programming languages',
            nav: [
                {id: '11', icon: <i className="icon-check text-primary"/>, title: ' HTML5, CSS3'},
                {id: '12', icon: <i className="icon-check text-primary"/>, title: 'Responsive design, Bootstrap'},
                {id: '13', icon: <i className="icon-check text-primary"/>, title: ' JavaScript, jQuery'},
                {id: '14', icon: <i className="icon-check text-primary"/>, title: 'React.js / Redux (additional)'},

            ],
            navLi: [
                {id: '16', strongTitle: '2', title: ' months'},
                {id: '17', strongTitle: '3', title: ' times a week - 2 hours of courses'},
                {id: '18', strongTitle: 'In total', title: ' 36 hours'},
                {id: '19', strongTitle: '*', title: 'For additional course 24 more hours'},
            ]

        },
        {
            id: 2,
            dad: 300,
            title: 'Back-end PHP',
            titleBr: 'web development',
            titleTo: '/ Monthly',
            price: '50000 AMD',
            navTitle: 'Programming languages',
            nav: [
                {id: '11', icon: <i className="icon-check text-primary"/>, title: 'PHP/OOP'},
                {id: '12', icon: <i className="icon-check text-primary"/>, title: 'Ajax,MySQL'},
                {id: '13', icon: <i className="icon-check text-primary"/>, title: 'MVC'},
                {id: '14', icon: <i className="icon-check text-primary"/>, title: ' Laravel / Vue.js (additional)'},

            ],
            navLi: [
                {id: '15', strongTitle: '2', title: ' months'},
                {id: '16', strongTitle: '3', title: 'times a week - 2 hours of courses'},
                {id: '17', strongTitle: 'In total', title: '24 hours'},
                {id: '18', strongTitle: '*', title: 'For additional course 12 more hours'},
            ]

        }

    ],
    singlePricingDataFooter: [
        {
            id: 0,
            dad: 300,
            title: 'Back-end Node',
            titleBr: 'web & mobile development',
            titleTo: '/monthly',
            price: '50000 AMD',
            navTitle: 'Programming languages',
            nav: [
                {id: '01', icon: <i className="icon-check text-primary"/>, title: 'Node.js'},
                {id: '02', icon: <i className="icon-check text-primary"/>, title: 'Express'},
                {id: '03', icon: <i className="icon-check text-primary"/>, title: 'Mongo DB'},
                {id: '04', icon: <i className="icon-check text-primary"/>, title: 'Real-Time Chat App (additional)'},
                {id: '05', icon: <i className="icon-check text-primary"/>, title: 'Socket.io (additional)'},

            ],
            navLi: [
                {id: '07', strongTitle: "2", title: 'months'},
                {id: '08', strongTitle: "3", title: 'times a week - 2 hours of courses'},
                {id: '09', strongTitle: "In total", title: ' 24 hours'},
                {id: '10', strongTitle: "*", title: 'For additional course 12 more hours'},

            ]

        },
        {
            id: 1,
            dad: 300,
            title: 'React.js',
            titleBr: 'web  development',
            titleTo: '/monthly',
            price: '40000 AMD',
            navTitle: 'Programming languages',
            nav: [
                {id: '11', icon: <i className="icon-check text-primary"/>, title: 'React'},
                {id: '12', icon: <i className="icon-check text-primary"/>, title: 'React-Redux'},
                {id: '13', icon: <i className="icon-check text-primary"/>, title: 'Redux-Saga'},
                {id: '14', icon: <i className="icon-check text-primary"/>, title: 'React-Native'},

            ],
            navLi: [
                {id: '15', strongTitle: '4', title: 'months'},
                {id: '16', strongTitle: '3', title: 'times a week - 2 hours of courses'},
                {id: '17', strongTitle: 'In total', title: ' 36 hours'},

            ]

        },
        {
            id: 2,
            dad: 300,
            title: 'JAVA / Android ',
            titleBr: 'mobile development',
            titleTo: '/ Monthly',
            price: '50000AMD',
            navTitle: '<strong>Programming languages</strong>',
            nav: [
                {id: '11', icon: <i className="icon-check text-primary"/>, title: 'PHP/OOP'},
                {id: '12', icon: <i className="icon-check text-primary"/>, title: 'Ajax,MySQL'},
                {id: '13', icon: <i className="icon-check text-primary"/>, title: 'MVC'},
                {id: '14', icon: <i className="icon-check text-primary"/>, title: ' Laravel / Vue.js (additional)'},

            ],
            navLi: [
                {id: '17', strongTitle: '2', title: 'months'},
                {id: '18', strongTitle: '3', title: ' times a week - 2 hours of courses'},
                {id: '19', strongTitle: 'in total', title: ' 84 hours'},
            ]

        }
    ],
    membersData: [
        {id: 0, dad: 400, img: Armine, name: 'Armine Simonyan', status: 'Directress'},
        {id: 1, dad: 400, img: Lili, name: 'Lili Danielyan', status: 'Manager'},
        {id: 2, dad: 600, img: Ervand, name: 'Yervand Soghomonyan', status: 'Full-stack developer'},
        {id: 3, dad: 500, img: Arus, name: 'Arus Martirosyan', status: 'Back-end develope'},
        {id: 4, dad: 600, img: Avet, name: 'Avet Khanoyan', status: 'Front-end developer'},
        {id: 5, dad: 600, img: Nara, name: 'Gyulnara Zadoyan', status: 'Front-end developer'},
        {id: 6, dad: 600, img: Mikael, name: 'Mikayel Ghevondyan', status: 'Mobile developer'},
    ],
    singleTotalItem: [
        {
            id: 0,
            text: 'Source Code training center successfully organizes the educational process,shows a professional approach. Here I have acquired a large group of friends. Thank you․․'
        },
        {
            id: 2,
            text: 'Thank you to Source Code training center for providing me with basic and valuable knowledge. They helped me to achieve success in the professional field.'

        },
        {
            id: 3,
            text: 'I am very grateful to the staff of Source Code training center,first of all for such a warm attitude, and secondly, for the high quality knowledge given.I hope my practical knowledge and experience will take me to the heights.'
        },
    ],
    testimonialNavItem: [
        {id: 11, img: Segey, s_name: 'Baghdilyan', name: 'Segey'},
        {id: 12, img: Eduard, s_name: 'Hakobyan', name: 'Eduard'},
        {id: 13, img: Liana, s_name: 'Baleyan', name: 'Liana'},
        {id: 14, img: Segey, s_name: 'Baghdilyan', name: 'Segey'},
    ],
    navBarDataOne: [
        {id: 0, href: '#', title: 'Documentation'},
        {id: 1, href: '#', title: 'FAQ'},
        {id: 2, href: '#', title: 'Privacy Policy'},
        {id: 3, href: '#', title: 'Support Forum'},
        {id: 4, href: '#', title: 'Themes'},
        {id: 5, href: '#', title: 'Account'},],
    navBarDataTow: [
        {id: 0, href: '#', title: 'About us'},
        {id: 1, href: '#', title: 'News'},
        {id: 2, href: '#', title: 'Blog'},
        {id: 3, href: '#', title: 'Plugins'},
        {id: 4, href: '#', title: 'Customers'},
        {id: 5, href: '#', title: 'Testimonials'},],
    footerTextData: [
        {
            id: 0, to: '#', img: logo, text: 'We have solution', textBr: 'for all your needs!', links: [
                {
                    id: '01',
                    icon: <i className="fa fa-facebook"/>,
                    ref: 'https://www.facebook.com/my.source.code.center'
                },
                {
                    id: '02',
                    icon: <i className="fa fa-linkedin"/>,
                    ref: 'https://www.linkedin.com/company/sourcecode-development-company/'
                },
                {id: '11', icon: <i className="fa fa-google-plus"/>, ref: '#'},
                {id: '12', icon: <i className="fa fa-dribbble"/>, ref: '#'}
            ]
        }
    ],
    tweetData: [
        {
            id: 1,
            icon: <i className="fa fa-facebook text-primary"/>,
            ref: '#',
            title: '@my.source.code.center',
            text: ' We post news every week!',
            textTow: 'Follow us on facebook!'
        },
        {
            id: 2,
            icon: <i className="fa fa-linkedin text-primary"/>,
            ref: 'https://www.linkedin.com/company/sourcecode-development-company/',
            title: '@Source Code',
            text: '  Follow us on linkedIn and be  aware of our healthy workplace environment and job postings!',
            textTow: 'Join us!'
        }
    ]
}

export const components = [
    NavBar,
    HomeBanner,
    AboutUs,
    OurSteps,
    OuterStep,
    Pricing,
    TestimonialsSection,
    Members,
    ContactUs,
    ContactUsSection,
    Footer
]