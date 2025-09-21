import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const servicesData = {
    categories: [
        
      {
        title: "Web Development",
        icon: "💻",
        description: "Professional websites and web applications tailored to your needs",
        services: [
          {
            title: "E-commerce Website Development",
            description: "Complete online store solutions with payment integration",
            duration: "4-8 weeks",
            price: "Starting at ₹25,000",
            features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Admin Panel"]
          },
          {
            title: "Corporate Website Design",
            description: "Professional websites that represent your brand effectively",
            duration: "2-4 weeks",
            price: "Starting at ₹15,000",
            features: ["Responsive Design", "SEO Optimization", "Content Management", "Contact Forms"]
          },
          {
            title: "Personal Portfolio Websites",
            description: "Showcase your work and skills with a custom portfolio",
            duration: "1-2 weeks",
            price: "Starting at ₹8,000",
            features: ["Custom Design", "Project Showcase", "Contact Integration", "Social Media Links"]
          }
        ]
      },
      {
        title: "Internship Programs",
        icon: "🎓",
        description: "Hands-on learning experiences for students to gain real-world skills",
        services: [
          {
            title: "Front-end Development Internship",
            description: "Learn modern front-end technologies through real projects",
            duration: "3-6 months",
            price: "Free with certification",
            features: ["HTML/CSS/JavaScript", "React.js", "Responsive Design", "Git Version Control"]
          },
          {
            title: "Back-end Development Internship",
            description: "Master server-side programming and database management",
            duration: "3-6 months",
            price: "Free with certification",
            features: ["Node.js", "Databases", "API Development", "Authentication"]
          }
        ]
      },
      {
        title: "Photo & Videography",
        icon: "📸",
        description: "Professional visual content creation for all your needs",
        services: [
          {
            title: "Event Photography",
            description: "Capture your special moments with professional photography",
            duration: "Custom",
            price: "Starting at ₹5,000",
            features: ["High-Resolution Images", "Photo Editing", "Digital Delivery", "Print Options"]
          },
          {
            title: "Product Photography",
            description: "Showcase your products with stunning professional images",
            duration: "Varies by volume",
            price: "Starting at ₹300/product",
            features: ["Studio Lighting", "Multiple Angles", "Background Options", "Editing"]
          }
        ]
      },
      {
        title: "Video Editing",
        icon: "🎬",
        description: "Transform your raw footage into compelling visual stories",
        services: [
          {
            title: "Promotional Video Editing",
            description: "Create engaging promotional content for your business",
            duration: "1-2 weeks",
            price: "Starting at ₹10,000",
            features: ["Color Grading", "Motion Graphics", "Sound Design", "Multiple Revisions"]
          },
          {
            title: "Event Video Editing",
            description: "Professional editing for weddings, conferences, and special events",
            duration: "2-3 weeks",
            price: "Starting at ₹8,000",
            features: ["Highlights Reel", "Multi-camera Editing", "Titles & Effects", "Music Integration"]
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 contianer-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to empower students and businesses alike
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicesData.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Services List */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.categories[activeCategory].services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">{service.duration}</span>
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                </div>
                
                <ul className="mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in tailoring our services to meet your specific requirements
          </p>
          <Link to="/contact">
            <motion.button 
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;