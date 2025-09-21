// import React from "react";
// import data from "../data/Home.json";

// const Home = () => {
//   const { hero, coreServices, services, about, team, contact } = data;

//   return (
//     <div className="bg-gray-50 text-gray-900">

//       {/* Hero */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
//         <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
//           <div className="md:w-1/2 space-y-6">
//             <h1 className="text-4xl font-bold">{hero.title}</h1>
//             <p className="text-lg">{hero.subtitle}</p>
//             <button className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md">
//               {hero.cta}
//             </button>
//           </div>
//           <div className="md:w-1/2">
//             <img src={hero.image} alt="Hero" className="rounded-xl shadow-xl" />
//           </div>
//         </div>
//       </section>

//       {/* Core Services */}
//       <section className="py-16 px-6">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">{coreServices.title}</h2>
//           <p className="mb-8 max-w-2xl mx-auto">{coreServices.description}</p>
//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//             {coreServices.items.map((item, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-white py-16 px-6">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-10">{services.title}</h2>
//           {services.sections.map((section, idx) => (
//             <div key={idx} className="mb-12">
//               <h3 className="text-2xl font-semibold mb-4">{section.category}</h3>
//               <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//                 {section.items.map((item, i) => (
//                   <div key={i} className="bg-gray-100 p-5 rounded-lg shadow-sm">
//                     <h4 className="text-lg font-medium">{item.title}</h4>
//                     <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About */}
//       <section className="bg-gray-100 py-16 px-6">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">{about.title}</h2>
//           <p className="max-w-3xl mx-auto mb-6">{about.desc}</p>
//           <p className="italic mb-6">"{about.mission}"</p>
//           <h4 className="text-xl font-semibold mb-4">Our Values</h4>
//           <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
//             {about.values.map((val, i) => (
//               <li key={i} className="bg-white p-4 rounded shadow-md">{val}</li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-16 px-6 bg-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">{team.title}</h2>
//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {team.members.map((member, i) => (
//               <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
//                 <h4 className="font-bold text-lg">{member.name}</h4>
//                 <p className="text-sm text-gray-700">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section className="bg-purple-600 text-white py-16 px-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">{contact.title}</h2>
//         <p className="mb-6">{contact.desc}</p>
//         <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium shadow-md">
//           Contact Us
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { motion } from "framer-motion";
// import data from "../data/Home.json";

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.8 } }
// };

// const Home = () => {
//   const { hero, coreServices, services, about, team, contact } = data;

//   return (
//     <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
//         <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
//           <motion.div 
//             className="md:w-1/2 space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">{hero.title}</h1>
//             <p className="text-lg md:text-xl opacity-90">{hero.subtitle}</p>
//             <motion.button 
//               className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow-md font-medium hover:bg-blue-50 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {hero.cta}
//             </motion.button>
//           </motion.div>
//           <motion.div 
//             className="md:w-1/2"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <img 
//               src={hero.image} 
//               alt="Hero" 
//               className="rounded-xl shadow-xl w-full h-auto object-cover transition-all duration-500 hover:shadow-2xl" 
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Core Services */}
//       <section className="py-20 px-6">
//         <div className="container mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {coreServices.title}
//           </motion.h2>
//           <motion.p 
//             className="mb-12 max-w-2xl mx-auto text-gray-600"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             {coreServices.description}
//           </motion.p>
          
//           <motion.div 
//             className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             {coreServices.items.map((item, idx) => (
//               <motion.div 
//                 key={idx} 
//                 className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
//                 variants={item}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-white py-20 px-6">
//         <div className="container mx-auto">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {services.title}
//           </motion.h2>
          
//           {services.sections.map((section, idx) => (
//             <motion.div 
//               key={idx} 
//               className="mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//             >
//               <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{section.category}</h3>
//               <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//                 {section.items.map((item, i) => (
//                   <motion.div 
//                     key={i} 
//                     className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
//                     whileHover={{ y: -3 }}
//                   >
//                     <h4 className="text-lg font-medium mb-2 flex items-center">
//                       <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
//                     <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200">
//                       Learn more →
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* About */}
//       <section className="bg-gray-100 py-20 px-6">
//         <motion.div 
//           className="container mx-auto text-center"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <h2 className="text-3xl font-bold mb-8">{about.title}</h2>
//           <p className="max-w-3xl mx-auto mb-8 text-gray-700 leading-relaxed">{about.desc}</p>
//           <motion.p 
//             className="relative text-lg italic mb-12 py-4 px-8 bg-white rounded-lg shadow-sm max-w-2xl mx-auto"
//             initial={{ scale: 0.95 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="absolute top-0 left-0 text-4xl text-gray-300">"</span>
//             {about.mission}
//             <span className="absolute bottom-0 right-0 text-4xl text-gray-300">"</span>
//           </motion.p>
//           <h4 className="text-xl font-semibold mb-8">Our Values</h4>
//           <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
//             {about.values.map((val, i) => (
//               <motion.li 
//                 key={i} 
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//                 variants={item}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <span className="text-blue-600 font-bold">{i + 1}</span>
//                 </div>
//                 {val}
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </section>

//       {/* Team */}
//       <section className="py-20 px-6 bg-white">
//         <div className="container mx-auto text-center">
//           <motion.h2 
//             className="text-3xl font-bold mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             {team.title}
//           </motion.h2>
//           <motion.div 
//             className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             {team.members.map((member, i) => (
//               <motion.div 
//                 key={i} 
//                 className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 group overflow-hidden"
//                 variants={item}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden group-hover:ring-4 group-hover:ring-blue-100 transition-all duration-300">
//                   {/* Replace with actual image */}
//                   <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
//                     {member.name.charAt(0)}
//                   </div>
//                 </div>
//                 <h4 className="font-bold text-lg mb-1">{member.name}</h4>
//                 <p className="text-sm text-gray-700 mb-3">{member.role}</p>
//                 <div className="flex justify-center space-x-3">
//                   <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold mb-6">{contact.title}</h2>
//           <p className="mb-8 max-w-2xl mx-auto text-blue-100">{contact.desc}</p>
//           <motion.button 
//             className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {contact.cta || "Contact Us"}
//           </motion.button>
//           <div className="mt-8 flex justify-center space-x-6">
//             <a href="#" className="text-white hover:text-blue-200 transition-colors">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
//               </svg>
//             </a>
//             <a href="#" className="text-white hover:text-blue-200 transition-colors">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
//               </svg>
//             </a>
//             <a href="#" className="text-white hover:text-blue-200 transition-colors">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data/Home.json";
import HeroImg from '../assets/HeroImage.jpg'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const Home = () => {
  const { hero, coreServices, services, about, team, contact } = data;
  const [activeService, setActiveService] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="contianer-padding relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTM2IDM0VjE0aDR2MjB6TTE0IDM2VjE4aDR2MTh6TTI0IDQyVjEwaDR2MzJ6TTQyIDI2di00aDR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                {hero.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
              <motion.button 
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
            <div className="flex items-center mt-8 text-sm text-blue-200">
              <div className="flex items-center mr-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Rated 4.9/5 by clients</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
            <img 
              src={HeroImg} 
              alt="Digital Transformation" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-all duration-500 hover:scale-105" 
            />
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      {/* <section className="contianer-padding py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
            {["Google", "Microsoft", "Amazon", "Netflix", "Spotify"].map((company, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-700 grayscale hover:grayscale-0 transition-all duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Core Services */}
      <section className="contianer-padding py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {coreServices.title}
          </motion.h2>
          <motion.p 
            className="mb-12 max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {coreServices.description}
          </motion.p>
          
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {coreServices.items.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveService(idx)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6 text-blue-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="contianer-padding py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {services.title}
          </motion.h2>
          <motion.p 
            className="text-center mb-12 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive solutions tailored to your business needs
          </motion.p>
          
          {services.sections.map((section, idx) => (
            <motion.div 
              key={idx} 
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center md:text-left flex items-center">
                <span className="w-12 h-0.5 bg-blue-500 mr-4 hidden md:block"></span>
                {section.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-lg font-medium mb-3 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                    <button className="mt-5 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200 flex items-center group-hover:translate-x-1 transition-transform">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="contianer-padding py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Projects Completed" },
              { value: "90%", label: "Client Satisfaction" },
              { value: "3+", label: "Years Experience" },
              { value: "5+", label: "Experts Team" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="contianer-padding py-20 px-6 bg-gray-50">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{about.title}</h2>
              <p className="mb-8 text-gray-700 leading-relaxed text-lg">{about.desc}</p>
              <motion.div 
                className="relative bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-blue-500"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="absolute top-0 left-0 text-4xl text-blue-300 pl-4">"</span>
                <p className="text-lg italic text-gray-800 z-10 relative pl-6">
                  {about.mission}
                </p>
                <span className="absolute bottom-0 right-0 text-4xl text-blue-300 pr-4">"</span>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <h4 className="text-xl font-semibold mb-8 text-center md:text-left">Our Values</h4>
              <div className="grid gap-6 sm:grid-cols-2">
                {about.values.map((val, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">{i + 1}</span>
                    </div>
                    <h5 className="font-semibold mb-2 text-blue-800">{val.split(':')[0]}</h5>
                    <p className="text-sm text-gray-600">{val.split(':')[1] || val}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="contianer-padding py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {team.title}
          </motion.h2>
          <motion.p 
            className="text-center mb-12 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet our talented team of experts driving innovation and success
          </motion.p>
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.members.map((member, i) => (
              <motion.div 
                key={i} 
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300 group overflow-hidden text-center"
                variants={item}
                whileHover={{ y: -8 }}
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden group-hover:ring-4 group-hover:ring-blue-100 transition-all duration-300 relative">
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
                <h4 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h4>
                <p className="text-sm text-gray-700 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  {[
                    { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", color: "blue" },
                    { icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", color: "blue" },
                    { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z", color: "blue" }
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx}
                      href="#" 
                      className={`text-gray-400 hover:text-${social.color}-500 transition-colors duration-300 p-2 bg-white rounded-full shadow-sm hover:shadow-md`}
                      whileHover={{ y: -3 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}></path>
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contianer-padding py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{contact.title}</h2>
          <p className="mb-10 max-w-2xl mx-auto text-blue-100 text-lg">{contact.desc}</p>
          
          {/* <div className="max-w-md mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.button 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {contact.cta || "Get Started"}
              </motion.button>
            </div>
            <p className="text-sm text-blue-200 mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div> */}
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z", 
                color: "hover:text-blue-300" },
              { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", 
                color: "hover:text-pink-300" },
              { icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z", 
                color: "hover:text-red-300" }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href="#" 
                className={`text-white ${social.color} transition-colors duration-300 bg-white/10 p-3 rounded-full backdrop-blur-sm`}
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}></path>
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;