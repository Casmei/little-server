import { motion } from 'framer-motion';
import { Smartphone, Cpu, HardDrive, Terminal, Zap, Server, Wifi, Calendar } from 'lucide-react';

const Index = () => {
  const specs = [
    { icon: Cpu, label: 'Processador', value: 'Snapdragon 430', detail: 'Octa-core 1.4 GHz Cortex-A53' },
    { icon: HardDrive, label: 'Memória RAM', value: '2 GB', detail: 'LPDDR3' },
    { icon: Server, label: 'Armazenamento', value: '32 GB', detail: 'Interno' },
    { icon: Smartphone, label: 'Tela', value: '5.0"', detail: 'IPS 1080 x 1920' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">Online agora</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Esta página está sendo servida por um
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Motorola Moto G5
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Um smartphone de 2017 com apenas <span className="text-cyan-400 font-semibold">2GB de RAM</span> e <span className="text-violet-400 font-semibold">32GB de armazenamento</span>,
              rodando um servidor web através do <span className="text-fuchsia-400 font-semibold">Termux</span>.
            </p>

            {/* Online Since Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider">No ar desde</p>
                <p className="text-2xl font-bold text-white">31 de Janeiro de 2026</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Specs Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Especificações do Servidor
                </span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Hardware modesto, mas capaz de servir páginas web para você.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <spec.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{spec.value}</p>
                  <p className="text-sm text-slate-500">{spec.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Termux Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <Terminal className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">O que é Termux?</h3>
                    <p className="text-slate-500">O poder do Linux no seu bolso</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  O <span className="text-cyan-400 font-semibold">Termux</span> é um emulador de terminal e ambiente Linux para Android que não requer root.
                  Ele permite executar uma distribuição Linux completa diretamente no seu smartphone,
                  incluindo a capacidade de instalar pacotes como <span className="text-violet-400">Python</span>, <span className="text-fuchsia-400">Node.js</span>, <span className="text-emerald-400">PHP</span> e servidores web.
                </p>

                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-700/50 font-mono text-sm overflow-x-auto">
                  <p className="text-slate-500"># Instalação típica de um servidor web</p>
                  <p className="text-emerald-400">$ pkg install python</p>
                  <p className="text-emerald-400">$ python -m http.server 8080</p>
                  <p className="text-slate-500 mt-2"># Servidor rodando em localhost:8080</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-6">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Por que fazer isso?
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                Porque podemos! É uma demonstração de que dispositivos antigos ainda têm valor e que
                a criatividade não tem limites. Um celular "obsoleto" pode se tornar um servidor funcional,
                contribuindo para projetos de aprendizado, home lab, ou simplesmente para provar um ponto.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-400">
                  🔄 Reutilização de e-lixo
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-400">
                  📚 Aprendizado prático
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-400">
                  ⚡ Baixo consumo de energia
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-slate-400">
                  🎯 Porque é legal!
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">+</span>
              <Terminal className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">=</span>
              <Wifi className="w-5 h-5 text-cyan-500" />
            </div>
            <p className="text-slate-600 text-sm">
              Servido com ❤️ por um Moto G5 • Termux • 2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
