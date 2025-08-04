import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const AboutPage: React.FC = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex flex-col justify-center items-center px-6 md:px-20">
        <motion.div
          style={{ y: y1 }}
          className="absolute w-[600px] h-[600px] bg-green-100 rounded-full top-[-100px] left-[-100px] z-0"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute w-[400px] h-[400px] bg-emerald-200 rounded-full bottom-[-100px] right-[-80px] z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-4">
            Welcome to Prompt Playground
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Shape the future of prompt engineering with clarity, creativity, and AI collaboration.
          </p>
        </motion.div>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-br from-lime-50 via-green-50 to-white">
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-800 mb-4"
          >
            Shape-First Thinking
          </motion.h2>
          <p className="text-gray-700 text-lg">
            Just like Apple’s product design, our platform begins with visual clarity. You’ll experience seamless UI with purposeful layout and layers of guidance.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="w-full h-[300px] bg-green-100 rounded-3xl shadow-inner"></div>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-20 py-20">
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-800 mb-4"
          >
            Your AI Lab
          </motion.h2>
          <p className="text-gray-700 text-lg">
            Prompt Playground is a space to explore AI responses, iterate your thinking, and see how your words influence results. It’s a hands-on lab for prompt innovation.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="w-full h-[300px] bg-gradient-to-tr from-green-200 to-emerald-100 rounded-3xl shadow-lg"></div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white py-24 px-6 md:px-20 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Master Prompt Engineering?</h2>
          <p className="text-lg mb-8">Jump into the Playground and let your ideas shape the AI world.</p>
          <a
            href="/playground"
            className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
          >
            Launch Playground
          </a>
        </motion.div>
      </section>

     
    </div>
  );
};

export default AboutPage;
