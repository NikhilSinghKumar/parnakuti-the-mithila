import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      {/* Fade-in Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-10 bg-secondary text-accent"
      >
        <p className="font-serif text-sm tracking-wide">
          © {new Date().getFullYear()} Parnakuti — Crafted with elegance and
          care.
        </p>
      </motion.footer>
    </>
  );
}
