import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      num: '01',
      title: 'Реставрация светопрозрачных конструкций',
      desc: 'Шлифовка и полировка стекла — устранение царапин, потёртостей, следов цемента и клея после строительных работ',
      price: 'от 6 900 ₽/м²',
      meta: 'Выработка 2 600–3 000 м² в месяц',
    },
    {
      num: '02',
      title: 'Реставрация алюминиевого профиля',
      desc: 'Восстановление геометрии, удаление царапин, полировка и покраска профиля стойка-ригель и оконных систем',
      price: 'от 1 450 ₽/п.м',
      meta: 'Выработка 800–1 700 м.п в неделю',
    },
    {
      num: '03',
      title: 'Реставрация и ремонт дверных конструкций',
      desc: 'Восстановление дверных полотен и коробок: алюминий, стекло, фурнитура, регулировка',
      price: 'индивидуально',
      meta: 'Выработка 10–20 дверей в день',
    },
    {
      num: '04',
      title: 'Клининг остекления и отделочные работы',
      desc: 'Профессиональный клининг светопрозрачных конструкций и внутренние отделочные работы на объекте',
      price: 'индивидуально',
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
    { name: 'MR Group', projects: 'Павелецкая Сити — 41 600 м.п' },
    { name: 'Эталон', projects: 'ЖК Шагал — 3 150 м²' },
    { name: 'Гранель', projects: 'ЖК Май Приорити — 2 500 м²' },
    { name: 'Прайм Парк', projects: '500 м²' },
  ];

  const topProjects = [
    { name: 'Level ЖК Причальный', volume: '48 000', unit: 'м.п', type: 'профиль' },
    { name: 'MR Group Павелецкая Сити', volume: '41 600', unit: 'м.п', type: 'профиль' },
    { name: 'Level ЖК Савинская 17', volume: '13 300', unit: 'м.п', type: 'профиль' },
    { name: 'Level ЖК Павелецкая', volume: '12 400', unit: 'м.п', type: 'профиль' },
    { name: 'Level ЖК Стрешнего', volume: '9 500', unit: 'м.п', type: 'профиль' },
    { name: 'Донстрой ЖК Остров 4', volume: '7 000', unit: 'м.п', type: 'профиль' },
    { name: 'Донстрой ЖК Остров 4/6', volume: '4 200', unit: 'м²', type: 'стекло' },
    { name: 'Эталон ЖК Шагал', volume: '3 150', unit: 'м²', type: 'стекло' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            РЕКОВЕРИ<span className="text-red-600">+</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Услуги
            </a>
            <a href="#projects" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Объекты
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
          <a
            href="#contact"
            className="md:hidden px-4 py-2 bg-black text-white text-xs uppercase tracking-widest"
          >
            Заявка
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="text-sm uppercase tracking-widest mb-6 text-red-600">
              Москва и Московская область
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              РЕКО-
              <br />
              ВЕРИ
              <span className="text-red-600">+</span>
            </h1>
            <p className="text-xl max-w-xl mb-4">
              Специализированные работы на объектах жилого и коммерческого назначения.
            </p>
            <p className="text-base text-neutral-600 max-w-xl">
              Реставрация светопрозрачных конструкций, алюминиевого профиля, дверей и клининг остекления — для застройщиков и частных клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors text-center"
              >
                Оставить заявку
              </a>
              <a
                href="#projects"
                className="inline-block px-8 py-3 border-2 border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
              >
                Наши объекты
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/7678271b-9235-4f2a-849b-4c7fa8dd51ef/files/9fc42ec3-ba98-4882-9aba-95767489637f.jpg"
                alt="Реставрация стеклопакетов"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-red-600 pl-4">
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">УСЛУГИ</h2>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-4 md:mt-0">
              4 направления работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 md:p-10 group hover:bg-black hover:text-white transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl font-bold tracking-tighter text-red-600">{s.num}</span>
                  <span className="text-sm uppercase tracking-widest border border-current px-3 py-1">
                    {s.price}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-neutral-600 group-hover:text-neutral-300 mb-4">{s.desc}</p>
                <div className="text-xs uppercase tracking-widest text-red-600">
                  {s.meta}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-6">
            * НДС не облагается. Конечная стоимость обсуждается индивидуально с каждым Заказчиком.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">ОБЪЕКТЫ</h2>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-4 md:mt-0">
              Топ работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {topProjects.map((p, i) => (
              <div key={i} className="bg-white border-l-4 border-red-600 p-6 flex justify-between items-center hover:shadow-lg transition-shadow">
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                    {p.type}
                  </div>
                  <div className="font-bold text-lg">{p.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold tracking-tighter">{p.volume}</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{p.unit}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold tracking-tighter mb-6 uppercase">Заказчики</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black">
            {clients.map((c, i) => (
              <div key={i} className="bg-white p-6">
                <div className="text-xl font-bold mb-2">{c.name}</div>
                <div className="text-sm text-neutral-600">{c.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-black/10 tracking-tighter">РЕКОВЕРИ+</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Компания РЕКОВЕРИ+ выполняет специализированные работы на объектах жилого и коммерческого назначения в Москве и Московской области.
              </p>
              <p className="mb-6 text-neutral-700">
                Работаем с топовыми застройщиками: Донстрой, Level Group, MR Group, Эталон, Гранель. Реализованы объекты на десятки тысяч метров профиля и тысячи квадратных метров остекления.
              </p>
              <p className="mb-6 text-neutral-700">
                Реставрация вместо замены — экономия бюджета объекта без потери качества. Работаем как с застройщиками на этапе сдачи, так и с управляющими компаниями и частными клиентами.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-red-600">Принципы</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                      <span>Промышленные объёмы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                      <span>Соблюдение сроков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                      <span>Документооборот для B2B</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-1 flex-shrink-0" />
                      <span>Гарантия на работы</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-3 text-red-600">Клиенты</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Building2" size={16} className="mt-1 flex-shrink-0" />
                      <span>Застройщики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Building2" size={16} className="mt-1 flex-shrink-0" />
                      <span>Управляющие компании</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Home" size={16} className="mt-1 flex-shrink-0" />
                      <span>Премиум-ЖК</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="User" size={16} className="mt-1 flex-shrink-0" />
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
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">
                Расскажите про объект — рассчитаем стоимость и сроки. Работаем с юр. и физ. лицами.
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@recovery-plus.ru" className="hover:underline">
                    info@recovery-plus.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Регион</span>
                  <span>Москва и Московская область</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя / Компания
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="ООО «Застройщик» / Иван"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Объект и задача
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="ЖК, площадь/метраж, что нужно сделать"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2026 РЕКОВЕРИ+. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              ВКонтакте
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
