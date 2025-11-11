import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import {
  Menu,
  School,
  Phone,
  MapPin,
  BookOpen,
  GraduationCap,
  Globe,
  Leaf,
  Mail
} from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Campus', href: '#campus' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-slate-800">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 grid place-items-center text-white shadow-md">
              <School size={18} />
            </div>
            <span className="whitespace-nowrap">Cauvery Polytechnic, Gonikoppal</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">
              <Phone size={16} />
              Call
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
              <MapPin size={16} />
              Visit
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md border border-slate-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="px-3 py-2 rounded-md hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white">
                <Phone size={16} /> Call
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300">
                <MapPin size={16} /> Visit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero with 3D Spline */}
      <section className="relative h-[92vh] overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid place-items-center text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Cauvery Polytechnic, Gonikoppal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto"
            >
              A future-ready campus blending technology, craftsmanship, and community. Explore dynamic diploma programs, hands-on labs, and an inspiring environment in Coorg.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a href="#programs" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
                <BookOpen size={18} /> Explore Programs
              </a>
              <a href="#admissions" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 transition">
                <GraduationCap size={18} /> Apply Now
              </a>
            </motion.div>
          </div>

          {/* Floating quick stats */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {["Industry Mentors", "Green Campus", "Smart Labs"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-3 py-2 rounded-full bg-white/80 backdrop-blur border border-white/60 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Where curiosity meets craftsmanship</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We offer an immersive learning experience rooted in strong fundamentals and practical exposure. Our students build, test, and iterate — guided by committed faculty and industry advisors.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-center gap-2"><Globe className="text-indigo-600" size={18}/> Industry-linked curriculum</li>
                <li className="flex items-center gap-2"><Leaf className="text-emerald-600" size={18}/> Eco-conscious campus in Coorg</li>
                <li className="flex items-center gap-2"><BookOpen className="text-sky-600" size={18}/> Modern workshops and labs</li>
                <li className="flex items-center gap-2"><GraduationCap className="text-violet-600" size={18}/> Outcome-driven mentorship</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="h-80 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-slate-200 shadow-inner grid place-items-center">
              <div className="text-center">
                <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">25+</div>
                <div className="mt-2 text-slate-600">Years of shaping careers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Diploma Programs</h2>
            <p className="mt-3 text-slate-600">Built for real-world impact with hands-on learning.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Computer Science', desc: 'Software fundamentals, web, AI basics, cloud-native tools.' },
              { title: 'Electronics & Communication', desc: 'Digital systems, IoT, FPGA, embedded design.' },
              { title: 'Mechanical Engineering', desc: 'Design, manufacturing, CAD/CAM, robotics basics.' },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:shadow-xl transition overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <a href="#admissions" className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">A serene, tech-forward campus</h2>
              <p className="mt-4 text-slate-700">Nestled in the lush landscapes of Gonikoppal, our campus blends calm surroundings with modern infrastructure — perfect for focused learning.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  ['Digital Library', '24/7 access with e-resources'],
                  ['Innovation Lab', 'Rapid prototyping and robotics'],
                  ['Sports & Culture', 'Balanced growth and wellbeing'],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-lg border border-slate-200 p-4 bg-white/70">
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="text-sm text-slate-600">{subtitle}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 lg:order-2">
              <div className="h-80 rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-lg border border-slate-200" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Admissions 2025</h2>
            <p className="mt-3 text-slate-600">Join a community of builders and problem-solvers. Merit-based entries with guidance at every step.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Check Eligibility', 'Review program-wise requirements and documents.'],
              ['Apply Online', 'Fill the application and upload documents.'],
              ['Counselling', 'Attend counselling and secure your seat.'],
            ].map(([title, desc], i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-slate-900">{title}</div>
                <div className="mt-2 text-slate-600">{desc}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow">
              Get Guidance
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-t from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Contact us</h2>
              <p className="mt-3 text-slate-600">We’d love to hear from you. Reach out for admissions, collaborations, or campus visits.</p>
              <div className="mt-6 grid gap-3">
                <a href="tel:+910000000000" className="inline-flex items-center gap-3 text-slate-800">
                  <Phone size={18} /> +91 00000 00000
                </a>
                <a href="mailto:info@cauverypolytechnic.edu" className="inline-flex items-center gap-3 text-slate-800">
                  <Mail size={18} /> info@cauverypolytechnic.edu
                </a>
                <div className="inline-flex items-start gap-3 text-slate-800">
                  <MapPin size={18} className="mt-1" />
                  <span>
                    Cauvery Polytechnic, Gonikoppal, Kodagu, Karnataka
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Full name</label>
                  <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-600">Email</label>
                    <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Phone</label>
                    <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+91" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-600">Message</label>
                  <textarea rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" />
                </div>
                <button className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500 grid place-items-center text-white">
              <School size={16} />
            </div>
            <span className="font-semibold">Cauvery Polytechnic</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
