'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutContact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    empresa: '',
    cargo: '',
    email: '',
    mensaje: '',
    privacidad: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by parent or API
  };

  return (
    <section className="bg-primary py-16 md:py-20 lg:py-[77px] px-6 md:px-10 lg:px-[134px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[84px]">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="w-full lg:w-auto"
          >
            <div className="flex flex-col gap-2.5">
              {/* Row 1: Nombre y Apellidos */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre*"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full sm:w-[216px] h-[55px] bg-white/30 border border-white rounded-[20px] px-6 text-white placeholder-white/80 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Apellidos*"
                  required
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="w-full sm:w-[216px] h-[55px] bg-white/30 border border-white rounded-[20px] px-6 text-white placeholder-white/80 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Row 2: Empresa y Cargo */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa*"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full sm:w-[216px] h-[55px] bg-white/30 border border-white rounded-[20px] px-6 text-white placeholder-white/80 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="text"
                  name="cargo"
                  placeholder="Cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full sm:w-[216px] h-[55px] bg-white/30 border border-white rounded-[20px] px-6 text-white placeholder-white/80 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:w-[442px] h-[55px] bg-white/30 border border-white rounded-[20px] px-6 text-white placeholder-white/80 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50"
              />

              {/* Mensaje */}
              <textarea
                name="mensaje"
                placeholder="Mensaje*"
                required
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full sm:w-[442px] h-[115px] bg-white/30 border border-white rounded-[20px] px-6 py-5 text-white placeholder-white/80 text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
              />

              {/* Checkbox */}
              <label className="flex items-center gap-2.5 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 border border-white rounded bg-transparent appearance-none checked:bg-white checked:border-white cursor-pointer"
                />
                <span className="text-white text-[16px] leading-[22px]">
                  He leído y acepto la política de privacidad y aviso legal.
                </span>
              </label>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center bg-white rounded-[20px] py-[5px] px-[6px] group hover:opacity-95 transition-all"
                >
                  <span className="text-dark text-base pl-[19px] pr-[25px]">
                    Contactar
                  </span>
                  <span className="w-[45px] h-[45px] bg-primary rounded-[14px] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 6h9v9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </motion.form>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-[680px]"
          >
            <h2 className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[34px] md:leading-[38px] lg:leading-[40px] mb-8 lg:mb-10">
              Confía en la Ingeniería que hace crecer tu producción.
            </h2>

            <div className="text-white text-[16px] leading-[22px] space-y-4">
              <p>
                En FERDIALE INGENIERÍA, S.L. creemos que la verdadera innovación nace del compromiso con las personas y los procesos.
              </p>
              <p>
                Cada proyecto que desarrollamos es una oportunidad para aportar valor, eficiencia y fiabilidad a la producción de nuestros clientes.
              </p>
              <p>
                Nuestro compromiso va más allá del diseño o la fabricación: nos involucramos en cada etapa, asegurando una colaboración transparente, un soporte técnico constante y una respuesta ágil ante cualquier necesidad. Porque sabemos que en tu industria, cada minuto cuenta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
