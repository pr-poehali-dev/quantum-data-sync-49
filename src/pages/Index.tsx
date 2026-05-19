import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/7678271b-9235-4f2a-849b-4c7fa8dd51ef/bucket/bdac1f1a-5fb6-42ee-9b0f-1f68acd6c6c8.png';

export default function Index() {
  const services = [
    {
      num: '01',
      title: 'Реставрация светопрозрачных конструкций',
      desc: 'Шлифовка и полировка стекла — устранение царапин, потёртостей, следов цемента и клея после строительных работ',
      meta: 'Выработка 2 600–3 000 м² в месяц',
    },
    {
      num: '02',
      title: 'Реставрация алюминиевого профиля',
      desc: 'Восстановление геометрии, удаление царапин, полировка и покраска профиля стойка-ригель и оконных систем',
      meta: 'Выработка 800–1 700 м.п в неделю',
    },
    {
      num: '03',
      title: 'Реставрация и ремонт дверных конструкций',
      desc: 'Восстановление дверных полотен и коробок: алюминий, стекло, фурнитура, регулировка',
      meta: 'Выработка 10–20 дверей в день',
    },
    {
      num: '04',
      title: 'Клининг остекления и отделочные работы',
      desc: 'Профессиональный клининг светопрозрачных конструкций и внутренние отделочные работы на объекте',
      meta: 'Жилые и коммерческие объекты',
    },
  ];

  const stats = [
    { value: '150 000+', label: 'м.п профиля выполнено' },
    { value: '13 000+', label: 'м² шлифовки стекла' },
    { value: '8+', label: 'топовых застройщиков' },
    { value: '20+', label: 'премиум-объектов' },
  ];

  const clients = [
    { name: 'Донстрой', projects: 'ЖК Остров, ЖК Река, ЖК Символ' },
    { name: 'Level Group', projects: 'Савинская, Стрешнего, Причальный, Мичуринский, Донской, Павелецкая, Войковская, Амурская, Академическая' },
    { name: 'MR Group', projects: 'Павелецкая Сити' },
    { name: 'Эталон', projects: 'ЖК Шагал' },
    { name: 'Гранель', projects: 'ЖК Май Приорити' },
    { name: 'Прайм Парк', projects: 'Премиум-объект' },
  ];

  const topProjects = [
    { name: 'Level ЖК Причальный', type: 'профиль' },
    { name: 'MR Group Павелецкая Сити', type: 'профиль' },
    { name: 'Level ЖК Савинская 17', type: 'профиль' },
    { name: 'Level ЖК Павелецкая', type: 'профиль' },
    { name: 'Level ЖК Стрешнего', type: 'профиль' },
    { name: 'Донстрой ЖК Остров 4', type: 'профиль' },
    { name: 'Донстрой ЖК Остров 4/6', type: 'стекло' },
    { name: 'Эталон ЖК Шагал', type: 'стекло' },
  ];

  return (
    <main className="min-h-screen bg-ink text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-ink/95 backdrop-blur border-b border-gold/30">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="РЕКОВЕРИ+" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-widest text-gold">РЕКОВЕРИ+</div>
              <div className="text-[10px] uppercase tracking-widest text-gold/60">Больше чем реставрация</div>
            </div>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors">
              Услуги
            </a>
            <a href="#projects" className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors">
              Объекты
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors">
              Контакты
            </a>
          </div>
          <a
            href="#contact"
            className="md:hidden px-4 py-2 bg-gold text-ink text-xs uppercase tracking-widest font-bold"
          >
            Заявка
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
              <div className="text-sm uppercase tracking-widest mb-6 text-gold">
                Москва и Московская область
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
                <span className="bg-gradient-to-b from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                  РЕКО-
                  <br />
                  ВЕРИ+
                </span>
              </h1>
              <p className="text-xl max-w-xl mb-4 text-white/90">
                Специализированные работы на объектах жилого и коммерческого назначения.
              </p>
              <p className="text-base text-white/60 max-w-xl">
                Реставрация светопрозрачных конструкций, алюминиевого профиля, дверей и клининг остекления — для застройщиков и частных клиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-gold text-ink text-sm uppercase tracking-widest font-bold hover:bg-gold-light transition-colors text-center"
                >
                  Оставить заявку
                </a>
                <a
                  href="#projects"
                  className="inline-block px-8 py-3 border-2 border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors text-center"
                >
                  Наши объекты
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-2xl" />
                <img
                  src={LOGO_URL}
                  alt="РЕКОВЕРИ+ Логотип"
                  className="relative w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-ink-soft border-y border-gold/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-gold pl-4">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-gold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 bg-ink">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">УСЛУГИ</h2>
            <p className="text-sm uppercase tracking-widest text-gold mt-4 md:mt-0">
              4 направления работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/30">
            {services.map((s, i) => (
              <div key={i} className="bg-ink-soft p-8 md:p-10 group hover:bg-ink-mid transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl font-bold tracking-tighter bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent">{s.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{s.title}</h3>
                <p className="text-white/60 mb-4">{s.desc}</p>
                <div className="text-xs uppercase tracking-widest text-gold">
                  {s.meta}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-6">
            * Стоимость обсуждается индивидуально с каждым Заказчиком.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-ink-soft">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">ОБЪЕКТЫ</h2>
            <p className="text-sm uppercase tracking-widest text-gold mt-4 md:mt-0">
              Топ работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {topProjects.map((p, i) => (
              <div key={i} className="bg-ink border border-gold/20 border-l-4 border-l-gold p-6 hover:border-gold hover:shadow-[0_0_30px_rgba(212,184,114,0.15)] transition-all">
                <div className="text-xs uppercase tracking-widest text-gold/70 mb-1">
                  {p.type}
                </div>
                <div className="font-bold text-lg text-white">{p.name}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold tracking-tighter mb-6 uppercase text-gold">Заказчики</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/30">
            {clients.map((c, i) => (
              <div key={i} className="bg-ink p-6">
                <div className="text-xl font-bold mb-2 text-gold">{c.name}</div>
                <div className="text-sm text-white/60">{c.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-ink">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white">О НАС</h2>
              <div className="aspect-[4/5] bg-ink-soft border border-gold/20 relative mb-8 md:mb-0 flex items-center justify-center p-12">
                <img
                  src={LOGO_URL}
                  alt="РЕКОВЕРИ+"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6 text-white/90">
                Компания РЕКОВЕРИ+ выполняет специализированные работы на объектах жилого и коммерческого назначения в Москве и Московской области.
              </p>
              <p className="mb-6 text-white/70">
                Работаем с топовыми застройщиками: Донстрой, Level Group, MR Group, Эталон, Гранель. Реализованы объекты на десятки тысяч метров профиля и тысячи квадратных метров остекления.
              </p>
              <p className="mb-6 text-white/70">
                Реставрация вместо замены — экономия бюджета объекта без потери качества. Работаем как с застройщиками на этапе сдачи, так и с управляющими компаниями и частными клиентами.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-gold">Принципы</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Промышленные объёмы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Соблюдение сроков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Документооборот для B2B</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Гарантия на работы</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-gold">Клиенты</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <Icon name="Building2" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Застройщики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Building2" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Управляющие компании</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Home" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Премиум-ЖК</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="User" size={16} className="mt-1 flex-shrink-0 text-gold" />
                      <span>Частные клиенты</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-ink-soft via-ink to-ink-soft border-y border-gold/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-gold">КОНТАКТЫ</h2>
              <p className="text-xl mb-8 text-white/90">
                Расскажите про объект — рассчитаем стоимость и сроки. Работаем с юр. и физ. лицами.
              </p>
              <div className="space-y-4 text-white/90">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest text-gold/70">Почта</span>
                  <a href="mailto:info@recovery-plus.ru" className="hover:text-gold transition-colors">
                    info@recovery-plus.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest text-gold/70">Телефон</span>
                  <a href="tel:+74951234567" className="hover:text-gold transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest text-gold/70">Регион</span>
                  <span>Москва и Московская область</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2 text-gold/70">
                    Имя / Компания
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-gold/40 py-2 px-0 text-white focus:outline-none focus:border-gold placeholder-white/30"
                    placeholder="ООО «Застройщик» / Иван"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2 text-gold/70">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-gold/40 py-2 px-0 text-white focus:outline-none focus:border-gold placeholder-white/30"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2 text-gold/70">
                    Объект и задача
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-gold/40 py-2 px-0 text-white focus:outline-none focus:border-gold placeholder-white/30"
                    placeholder="ЖК, площадь/метраж, что нужно сделать"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-gold text-ink text-sm uppercase tracking-widest font-bold hover:bg-gold-light transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-ink border-t border-gold/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="РЕКОВЕРИ+" className="h-8 w-8 object-contain" />
            <p className="text-sm text-white/60">© 2026 РЕКОВЕРИ+. Все права защищены.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest text-white/60 hover:text-gold transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest text-white/60 hover:text-gold transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-sm uppercase tracking-widest text-white/60 hover:text-gold transition-colors">
              ВКонтакте
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
