(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const translations = {
  uk: {
    specialBadge: "(Спеціальна пропозиція)",
    order: "Замовити",
    discountLabel: "Знижка",
    price: "Ціна:",
    learnMore: "Докладніше",
    currency: "грн.",
    volumeLabel: "(об'єм)",
    learnMore: "Докладніше",
    back: "Назад",
    patentsUA: "База патентів України",
    patentsUSSR: "База патентів СРСР"
  },
  en: {
    specialBadge: "(Special Offer)",
    order: "Order",
    discountLabel: "Discount",
    price: "Price:",
    learnMore: "Learn more",
    currency: "uah.",
    volumeLabel: "(volume)",
    learnMore: "Learn more",
    back: "Back",
    patentsUA: "Patent database of Ukraine",
    patentsUSSR: "Patent database of USSR"
  }
};
let myIndex = 0;
(() => {
  const carousel = () => {
    const slides2 = document.getElementsByClassName("hero__slide");
    Array.from(slides2).forEach((slide) => {
      slide.style.display = "none";
    });
    myIndex++;
    if (myIndex > slides2.length) {
      myIndex = 1;
    }
    slides2[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2e4);
  };
  carousel();
})();
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuNav = document.querySelector(".mobile-menu__navigation");
  const buttonIcon = document.querySelector(".mobile-menu-btn__icon");
  const header = document.querySelector(".header");
  mobileMenu.style.transform = `translateY(${header.offsetHeight}px)`;
  mobileMenuNav.style.height = `calc(100vh - ${header.offsetHeight}px)`;
  window.addEventListener("scroll", () => {
    if (header.classList.contains("hidden")) {
      mobileMenuNav.style.height = `100vh`;
    } else {
      mobileMenuNav.style.height = `calc(100vh - ${header.offsetHeight}px)`;
    }
  });
  mobileMenu.style.paddingBottom = `${header.offsetHeight}px`;
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    buttonIcon.classList.toggle("not-active", !isOpen);
    buttonIcon.classList.toggle("active", isOpen);
  });
  mobileMenu.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    buttonIcon.classList.toggle("not-active", !isOpen);
    buttonIcon.classList.toggle("active", isOpen);
  });
});
const products = [
  {
    id: "1",
    image: "images/production/item-01.webp",
    title: { uk: "ELAM Чистий екстракт", en: "ELAM Pure Extract" },
    volume: { uk: "100 Мл", en: "100 ml" },
    paragraphs: {
      uk: [
        "<strong>Спазмолітичний крем</strong> ідеально підходить як додатковий потужний засіб для зменшення спастичних компонентів будь-якого походження, посттравматичних спазмів м’язів, спазмів, спричинених перенавантаженням; м’язових контрактур будь-якого походження в період реабілітації; периферійних спазмів гладеньких м’язів судин мікроциркуляторного русла центрального та периферійного походження під час лікування артеріальної гіпертензії; спастичної форми ДЦП у комплексному лікуванні та реабілітації; м’язових спастичних станів у спортсменів під час тренувального періоду; як масажний засіб у повсякденній роботі масажистів, реабілітологів,мануальних терапевтів.",
        "<strong>Дозування та спосіб застосування</strong>",
        "Спазмолітичний крем містить високотемпературний екстракт лікувального мулу, що містить велику кількість біологічно активних речовин, тому перед використанням обов’язкова проба на індивідуальну непереносимість! Для цього нанесіть невелику кількість крему на чисту шкіру зап’ястя. Якщо через 5 хвилин не з’явилися ознаки підвищеної чутливості, такі як почервоніння, свербіж, дискомфорт та інші, крем можна використовувати за призначенням.",
        " Для зменшення вираженого спазму великих скелетних м’язів крем наноситься масажними рухами на чисту шкіру. Кратність нанесення – 5-6 разів на добу. Оскільки спазмолітичний ефект виявляється майже відразу, тривалість застосування крему вирішується індивідуально.",
        "Під час використання крему у процесі реабілітації пацієнтів із м’язовими контрактурами, потрібно ретельно контролювати баланс м’язового напруження навколо суглобу. Для цього проводиться пальпація не тільки ураженої ділянки, але й інших м’язів, які залучені до підтримання м’язового балансу суглоба.",
        "Дозування при використанні спазмолітичного крему для зменшення спастичних компонентів при ДЦП залежить від вираженості м’язового напруження. Оптимально починати нанесення з 4 разів на добу на спазмовані ділянки, уважно спостерігаючи за динамікою зменшення спазму та підвищенням координації рухів. Тривалість використання має бути не меншою за 2 тижні з перервою на 7-10 днів для спостереження за збереженням ефекту після припинення використання. Подальша тривалість застосування цього крему підбирається реабілітологом індивідуально.",
        "При використанні спазмолітичного крему як масажного засобу, слід пам’ятати про швидке розслаблення спазмованих м’язів. Тому слід обмежити силу масажних рухів, щоб уникнути травмування м’язів.",
        "Для зменшення спастичного компоненту периферійних судин, крем наноситься 3-4 рази на добу протягом тижня. Підтримуюча доза складає 2 нанесення на добу протягом періоду лікування.",
        "<strong>Застереження</strong>",
        "Спазмолітичний крем містить мінімальну кількість консервантів та штучних домішок, тому краще зберігати крем в холодильнику або в темному прохолодному місці. Термін придатності спазмолітичного крему у холодильнику не повинен перевищувати 12 місяців. Якщо крем знаходиться в теплому місці, рекомендовано використовувати його не пізніше 6 місяців з моменту виробництва. При сильному нагріванні кремова емульсія може бути нестабільною та розшаруватись, проте терапевтичні властивості при цьому не зменшуються. Крем містить понад 80% чистого високотемпературного екстракту лікувального мулу, який має специфічний запах, нагадуючи запах мулу, горілої трави та водоростей. Це повністю нормально та пов’язано з використанням натуральної сировини."
      ],
      en: [
        "<strong>Antispasmodic Cream</strong> is ideal as an additional powerful remedy for reducing spastic components of any origin, post-traumatic muscle spasms, overload-induced spasms, muscle contractures of any origin during rehabilitation, peripheral spasms of smooth vascular muscles of microcirculatory pathways of central and peripheral origin during the treatment of arterial hypertension, spastic forms of cerebral palsy in complex treatment and rehabilitation, muscle spastic conditions in athletes during training, and as a massage aid in the daily work of masseurs, rehabilitation specialists, and manual therapists.",
        "<strong>Dosage and Directions for Use</strong>",
        "Antispasmodic cream contains a high-temperature extract of therapeutic mud rich in biologically active substances. Therefore, a sensitivity test is mandatory before use! Apply a small amount of cream to clean wrist skin. If no signs of increased sensitivity, such as redness, itching, discomfort, or other reactions, appear within 5 minutes, the cream can be used as intended.",
        "For reducing severe spasms of large skeletal muscles, apply the cream with massage movements to clean skin. Frequency of application is 5-6 times a day. Since the antispasmodic effect occurs almost immediately, the duration of use is determined individually.",
        "When using the cream during the rehabilitation of patients with muscle contractures, it is essential to carefully control the balance of muscle tension around the joint. This involves palpation not only of the affected area but also of other muscles involved in maintaining joint muscle balance.",
        "The dosage for using the antispasmodic cream to reduce spastic components in cerebral palsy depends on the severity of muscle tension. Ideally, start with 4 applications per day on the spastic areas, carefully observing the dynamics of spasm reduction and improvement in movement coordination. The duration of use should be at least two weeks with a break of 7-10 days to monitor the preservation of the effect after discontinuation. Further use duration is individually determined by a rehabilitation specialist.",
        "When using the antispasmodic cream as a massage aid, remember about the rapid relaxation of spastic muscles. Therefore, limit the strength of massage movements to avoid muscle injuries.",
        "To reduce the spastic component of peripheral blood vessels, apply the cream 3-4 times a day for a week. The maintenance dose is 2 applications per day during the treatment period.",
        "<strong>Precautions</strong>",
        "The antispasmodic cream contains a minimal amount of preservatives and artificial additives, so it is better to store it in the refrigerator or a cool, dark place. The shelf life of the cream in the refrigerator should not exceed 12 months. If kept in a warm place, it is recommended to use it no later than 6 months from the date of production. Upon strong heating, the cream emulsion may become unstable and separate; however, its therapeutic properties remain unchanged.",
        "The cream contains over 80% pure high-temperature extract of therapeutic mud, which has a specific smell reminiscent of mud, burnt grass, and algae. This is completely normal and is associated with the use of natural raw materials."
      ]
    },
    price: "450",
    isSpecial: false,
    discount: null
  },
  {
    id: "2",
    image: "images/production/item-02.webp",
    title: { uk: "ELAM від болю в суглобах", en: "ELAM for joint pain" },
    volume: { uk: "100 Мл", en: "100 ml" },
    paragraphs: {
      uk: [
        "<strong>Повний екстракт лиманного мулу </strong> виробляється за патентом України «Спосіб виготовлення повної витяжки з лікувального мулу солоних озер та лиманів» № 77136 від 25.01.2013. Екстракт представляє собою продукт високотемпературної екстракції від 100 до 450 С0, при якій виділяється суміш кількох компонентів. Перший компонент – це паровий екстракт, що отриманий при температурі 100 С0. За складом це аналог препарату ФіБС, який був розроблений у минулому сторіччі акад. В.П. Філатовим. Він містить карбонові кислоти, амінокислоти, мінеральні речовини, кумаріни та ін. Це майже прозора рідина з характерним запахом. Після відгону рідкої фази лікувального мулу, температура у ємності починає підійматися до 120-180 С0. Для захисту компонентів лікувального мулу від окислення протягом подальшого нагрівання відбувається заміна атмосфери на інертну шляхом продувки ємності перегрітим азотом підвищеної чистоти. При цьому виділяється кристалічна вода в якій розчиняються високомолекулярні компоненти лікувального мулу. Ця жовтувата рідина має виражений запах лікувального мулу з нотами тютюну. Надалі мулова сировина нагрівається до 450 С0. Протягом цього циклу виділяється компоненти найвищої молекулярної маси. Це органічні смоли, які виходять у вигляді перегрітого диму що осідають та розчиняються в отриманому раніше екстракті при його барботажі. Цей компонент надає більш жовтого кольору екстракту, має специфічний запах горілої трави та тютюну. Готовий повний екстракт лиманного мулу представляє собою жовтувату рідину, що опалескує зі специфічним запахом.",
        "Повний екстракт лиманного мулу містить всі компоненти, що екстрагувалися протягом цього циклу та має виражені стимуляційні, регенераторні та загоюючі ефекти. Використання повного екстракту лиманного мулу має кілька напрямків. Ми на його основі виробляємо спазмолітичні та протизапальні креми, засоби для догляду за шкірою, порожниною рота та ін. У зв’язку з тим, що екстракт має вкрай виражену спазмолітичну дію, він використовується у косметології для зменшення спазму м’язів обличчя та зменшення мімічних зморшок. Крім того виражені стимулюючі та антисептичні властивості сприяють зменшенню запалень, а також борються з акне. Саме тому повний екстракт лиманного мулу використовують як домішок у засоби для вмивання та креми для догляду за шкірою. Для цього невелику кількість екстракту додають до відповідного засобу при щоденному використанні.",
        "<strong>Для догляду за дефектами шкіри</strong>, язвами, що повільно загоюються та іншими захворюваннями шкіри екстракт використовують як засіб для промивання та компресів. Стимуляційні властивості сприяють інтенсивному загоєнню. При цьому екстракт можна використовувати як у чистому вигляді так і у складі інших компонентів догляду за ранами.",
        "<strong>При гострому отиті </strong>екстракт використовується у вигляді крапель. Перед закапуванням слід підігріти екстракт до температури тіла і у кількості по 2-3 краплі застосовувати у кожне вухо. Увага! Екстракт не стерильний, тому не використовується у разі перфорації барабанної перетинки.",
        "<strong>При захворюваннях очей </strong>екстракт використовується для регулярного промивання, помітно полегшуючи дискомфорт, біль та зменшуючи виділення з очей.",
        "Для загальностимулюючого ефекту екстракт використовується як домішок до раціону харчування. При цьому дозування підбирається індивідуально. За нашими спостереженнями оптимальний стимулюючий ефект проявляється при двократному прийомі чайної ложки чистого екстракту на добу. Перед прийомом екстракт бажано розвести в 100 мл теплої води та приймати натще вранці та перед сном.",
        "<strong>Для зменшення проявів запалення шлунку</strong> екстракт приймають 3-4 рази на добу по 3-5 мл за 20 хвилин до їди, бажано попередньо розвести в 50 мл теплої води. При цьому поліпшення стану спостерігається протягом перших днів. Для стабілізації та закріплення ефекту приймання екстракту варто проводити протягом 3 тижнів з періодичністю 4-5 разів на рік.",
        "Для догляду за волоссям та шкірою голови екстракт додають до нейтрального засобу для миття або маски для волосся. При регулярному використанні пацієнти відмічають зникнення лупи та поліпшення густоти та стану волосся.",
        "Від кровоточивості ясен повний екстракт лиманного мулу використовується у вигляді ополіскувача. Для цього 5 мл екстракту розводять у невеликій кількості теплої води. Розбавленим екстрактом ополіскують порожнину рота протягом 1-2 хвилин після чищення зубів. В де-яких випадках при пародонтозі проводять аплікацію чистого екстракту на уражені ділянки ясен.",
        "Для створення розслаблюючих ванн екстракт додається у кількості 50 мл у воду теплу Важливо! не гарячу воду. Тривалість перших процедур варто обмежувати 15 хвилинами для уникнення раптового падіння артеріального тиску завдяки вираженій міорелаксації.",
        "<strong>Пам’ятайте! </strong>Перед застосуванням будь-яких засобів для лікування або зменшення болю в, важливо проконсультуватися з лікарем або фахівцем з медичних питань, особливо якщо у вас є які-небудь попередні медичні становища або алергічні реакції на складові крему.",
        "УВАГА! Перед використанням повного екстракту лікувального мулу ОБОВ’ЯЗКОВО проведіть тест на індивідуальну непереносимість. Це пов’язано з тим, що складові екстракту мають біологічне походження та можуть викликати непередбачувані індивідуальні реакції організму. Екстракт має величезний стимулюючий та регенеруючий потенціал, тому не відповідальне його використання може призвести до змін артеріального тиску, безсоння, шкірних та інших реакцій, що не описані в цій інструкції."
      ],
      en: [
        "<strong>Complete extract of liman mud</strong> is produced under the patent of Ukraine “Method for producing a full extract from therapeutic mud of salt lakes and limans” No. 77136 dated 25.01.2013. The extract is a product of high-temperature extraction ranging from 100 to 450°C, during which a mixture of several components is released. The first component is the steam extract obtained at 100°C. In composition, it is analogous to the preparation FIBS, developed in the past century by Acad. V.P. Filatov. It contains carboxylic acids, amino acids, minerals, coumarins, etc. This is an almost transparent liquid with a characteristic smell. After distilling the liquid phase of the therapeutic mud, the temperature in the container rises to 120-180°C. To protect the components of the therapeutic mud from oxidation during further heating, the atmosphere is replaced with an inert one by purging the container with high-purity overheated nitrogen. At this point, crystalline water is released, dissolving the high-molecular components of the therapeutic mud. This yellowish liquid has a pronounced smell of therapeutic mud with tobacco notes. Further, the mud material is heated up to 450°C. During this cycle, the components of the highest molecular weight are released. These are organic resins that emerge as overheated smoke, settling and dissolving in the previously obtained extract during its bubbling. This component gives the extract a more yellow hue and a specific smell of burnt grass and tobacco. The finished complete extract of liman mud is a yellowish liquid with opalescence and a specific smell.",
        "The complete extract of liman mud contains all components extracted during this cycle and has pronounced stimulating, regenerative, and healing effects. The use of the complete extract of liman mud has several applications. Based on it, we produce antispasmodic and anti-inflammatory creams, skincare products, oral cavity care products, and others. Due to the extremely pronounced antispasmodic effect, it is used in cosmetology to reduce facial muscle spasms and mimic wrinkles. Additionally, its pronounced stimulating and antiseptic properties help reduce inflammation and combat acne. Therefore, the complete extract of liman mud is used as an additive in face wash products and skincare creams. For this, a small amount of the extract is added to the corresponding product for daily use.",
        "<strong>For treating skin defects</strong>, ulcers that heal slowly, and other skin conditions, the extract is used as a rinsing and compress agent. Its stimulating properties contribute to intensive healing. The extract can be used either in its pure form or as part of other wound care components.",
        "<strong>For acute otitis</strong>, the extract is used in the form of drops. Before instilling, the extract should be warmed to body temperature and applied in a quantity of 2-3 drops in each ear. Attention! The extract is not sterile, so it should not be used in cases of perforation of the tympanic membrane.",
        "<strong>For eye conditions</strong>, the extract is used for regular rinsing, significantly alleviating discomfort, pain, and reducing discharge from the eyes.",
        "For general stimulating effects, the extract is used as a dietary supplement. The dosage is selected individually. According to our observations, the optimal stimulating effect occurs with a twice-daily intake of a teaspoon of pure extract. Before use, it is recommended to dilute the extract in 100 ml of warm water and take it on an empty stomach in the morning and before bedtime.",
        "<strong>To reduce manifestations of stomach inflammation</strong>, the extract is taken 3-4 times a day, 3-5 ml, 20 minutes before meals, preferably pre-diluted in 50 ml of warm water. Improvements are noticeable within the first few days. For stabilization and consolidation of the effect, taking the extract is recommended for 3 weeks, with a frequency of 4-5 times a year.",
        "For hair and scalp care, the extract is added to a neutral washing product or hair mask. With regular use, patients note the disappearance of dandruff and improved hair density and condition.",
        "To treat gum bleeding, the complete extract of liman mud is used as a rinse. For this, 5 ml of the extract is diluted in a small amount of warm water. The diluted extract is used to rinse the oral cavity for 1-2 minutes after brushing teeth. In some cases, for periodontitis, applications of pure extract are made to the affected gum areas.",
        "To create relaxing baths, 50 ml of the extract is added to warm, but not hot water. Note: the duration of the first procedures should be limited to 15 minutes to avoid sudden drops in blood pressure due to pronounced muscle relaxation.",
        "<strong>Note:</strong> Before using any treatments or remedies to reduce pain or discomfort, it is important to consult a doctor or specialist, especially if you have any pre-existing medical conditions or allergic reactions to the components of the cream.",
        "ATTENTION! Before using the complete extract of therapeutic mud, be sure to conduct a test for individual intolerance. This is due to the biological origin of the extract components, which may cause unpredictable individual reactions of the body. The extract has immense stimulating and regenerative potential, so irresponsible use may lead to changes in blood pressure, insomnia, skin, and other reactions not described in this instruction."
      ]
    },
    price: "460",
    isSpecial: false,
    discount: null
  },
  {
    id: "3",
    image: "images/production/item-03.webp",
    title: { uk: "ELAM від м'язових спазмів", en: "ELAM for muscle spasms" },
    volume: { uk: "100 Мл", en: "100 ml" },
    paragraphs: {
      uk: [
        "<strong>Спазмолітичний крем</strong> ідеально підходить як додатковий потужний засіб для зменшення спастичних компонентів будь-якого походження, посттравматичних спазмів м’язів, спазмів, спричинених перенавантаженням; м’язових контрактур будь-якого походження в період реабілітації; периферійних спазмів гладеньких м’язів судин мікроциркуляторного русла центрального та периферійного походження під час лікування артеріальної гіпертензії; спастичної форми ДЦП у комплексному лікуванні та реабілітації; м’язових спастичних станів у спортсменів під час тренувального періоду; як масажний засіб у повсякденній роботі масажистів, реабілітологів, мануальних терапевтів.",
        "<strong>Дозування та спосіб застосування</strong>",
        "Спазмолітичний крем містить високотемпературний екстракт лікувального мулу, що містить велику кількість біологічно активних речовин, тому перед використанням обов’язкова проба на індивідуальну непереносимість! Для цього нанесіть невелику кількість крему на чисту шкіру зап’ястя. Якщо через 5 хвилин не з’явилися ознаки підвищеної чутливості, такі як почервоніння, свербіж, дискомфорт та інші, крем можна використовувати за призначенням.",
        "Для зменшення вираженого спазму великих скелетних м’язів крем наноситься масажними рухами на чисту шкіру. Кратність нанесення – 5-6 разів на добу. Оскільки спазмолітичний ефект виявляється майже відразу, тривалість застосування крему вирішується індивідуально.",
        "Під час використання крему у процесі реабілітації пацієнтів із м’язовими контрактурами, потрібно ретельно контролювати баланс м’язового напруження навколо суглобу. Для цього проводиться пальпація не тільки ураженої ділянки, але й інших м’язів, які залучені до підтримання м’язового балансу суглоба.",
        "Дозування при використанні спазмолітичного крему для зменшення спастичних компонентів при ДЦП залежить від вираженості м’язового напруження. Оптимально починати нанесення з 4 разів на добу на спазмовані ділянки, уважно спостерігаючи за динамікою зменшення спазму та підвищенням координації рухів. Тривалість використання має бути не меншою за 2 тижні з перервою на 7-10 днів для спостереження за збереженням ефекту після припинення використання. Подальша тривалість застосування цього крему підбирається реабілітологом індивідуально.",
        "При використанні спазмолітичного крему як масажного засобу, слід пам’ятати про швидке розслаблення спазмованих м’язів. Тому слід обмежити силу масажних рухів, щоб уникнути травмування м’язів.",
        "Для зменшення спастичного компоненту периферійних судин, крем наноситься 3-4 рази на добу протягом тижня. Підтримуюча доза складає 2 нанесення на добу протягом періоду лікування.",
        "<strong>Застереження</strong>",
        "Спазмолітичний крем містить мінімальну кількість консервантів та штучних домішок, тому краще зберігати крем в холодильнику або в темному прохолодному місці. Термін придатності спазмолітичного крему у холодильнику не повинен перевищувати 12 місяців. Якщо крем знаходиться в теплому місці, рекомендовано використовувати його не пізніше 6 місяців з моменту виробництва. При сильному нагріванні кремова емульсія може бути нестабільною та розшаруватись, проте терапевтичні властивості при цьому не зменшуються. Крем містить понад 80% чистого високотемпературного екстракту лікувального мулу, який має специфічний запах, нагадуючи запах мулу, горілої трави та водоростей. Це повністю нормально та пов’язано з використанням натуральної сировини."
      ],
      en: [
        "<strong>Spasmolytic cream</strong> is ideal as an additional powerful tool for reducing spastic components of any origin, post-traumatic muscle spasms, spasms caused by overload; muscle contractures of any origin during rehabilitation; peripheral spasms of smooth muscles of the microcirculatory vessels of central and peripheral origin during the treatment of arterial hypertension; spastic form of cerebral palsy in complex treatment and rehabilitation; muscle spastic conditions in athletes during the training period; as a massage tool in the daily work of massage therapists, rehabilitation specialists, and chiropractors.",
        "<strong>Dosage and Directions for Use</strong>",
        "The antispasmodic cream contains a high-temperature extract of medicinal mud, which contains a large number of biologically active substances, so before use, a test for individual intolerance is mandatory! To do this, apply a small amount of cream to clean skin of the wrist. If after 5 minutes there are no signs of hypersensitivity, such as redness, itching, discomfort, etc., the cream can be used for its intended purpose.",
        "To reduce severe spasm of large skeletal muscles, the cream is applied with massage movements to clean skin. The frequency of application is 5-6 times a day. Since the antispasmodic effect is manifested almost immediately, the duration of use of the cream is decided individually.",
        "When using the cream in the rehabilitation process of patients with muscle contractures, it is necessary to carefully monitor the balance of muscle tension around the joint. To do this, palpate not only the affected area, but also other muscles that are involved in maintaining the muscle balance of the joint.",
        "The dosage when using an antispasmodic cream to reduce spastic components in cerebral palsy depends on the severity of muscle tension. It is optimal to start applying it 4 times a day to the spasmed areas, carefully observing the dynamics of reducing spasm and increasing coordination of movements. The duration of use should be at least 2 weeks with a break of 7-10 days to monitor the preservation of the effect after discontinuation of use. The further duration of use of this cream is selected individually by the rehabilitation specialist.",
        "When using antispasmodic cream as a massage agent, one should remember about the rapid relaxation of spasmed muscles. Therefore, one should limit the force of massage movements to avoid muscle injury.",
        "To reduce the spastic component of peripheral vessels, the cream is applied 3-4 times a day for a week. The maintenance dose is 2 applications per day during the treatment period.",
        "<strong>Precautions</strong>",
        "Spasmolytic cream contains a minimum amount of preservatives and artificial additives, so it is better to store the cream in the refrigerator or in a dark, cool place. The shelf life of the antispasmodic cream in the refrigerator should not exceed 12 months. If the cream is in a warm place, it is recommended to use it no later than 6 months from the date of production. When heated strongly, the cream emulsion may be unstable and stratify, but the therapeutic properties do not decrease. The cream contains more than 80% of pure high-temperature extract of medicinal mud, which has a specific smell, reminiscent of the smell of mud, burnt grass and algae. This is completely normal and is associated with the use of natural raw materials."
      ]
    },
    price: "450",
    isSpecial: false,
    discount: null
  },
  {
    id: "4",
    image: "images/production/ithem-04.webp",
    title: { uk: "ELAM від рубців", en: "ELAM for scars" },
    volume: { uk: "30 Мл", en: "30 ml" },
    paragraphs: {
      uk: [
        "Цей крем був створений під час облоги Чернігова у 2022р. Він мав діяти швидко, інтенсивно, наноситися не частіше 2 разів на добу та не мати вираженого аромату, бо в укриттях зі скупченням людей додаткові запахи були зайві. Ми скомбінували стимулюючу та спазмолітичну дію високотемпературного екстракту лікувального мулу, протизапальну дію діклофенаку натрію та знеболюючу та стимулюючу дію ментолу та капсаіцину, отримавши чудовий продукт.",
        "Основна мета використання крему від болю в суглобах – максимально ефективно зменшити м’язовий та судинний спазм, запалення, зробити більш активним кровообіг в ураженій ділянці та зменшити набряк. Для цього в рецептурі ми використовуємо кілька діючих елементів: Повний екстракт лікувального мулу забезпечує виражений спазмолітичний та знеболювальний ефект, комбінація капсаїцину та ментолу має виражену відволікаючу дію та дозволяє активувати кровообіг. Диклофенак натрію є потужним інгібітором ферменту, що стимулює розвиток запалення та створює умови для формування болю, набряку та спазму м’язових структур навколо ураженої ділянки. Додаткову активацію протизапальних компонентів та їх глибоке проникнення в джерело запалення забезпечує диметил сульфоксид.",
        "За нашими спостереженнями при використанні цього крему відбувається швидкий зігрівальний ефект з вираженим відчуттям холоду, що викликане наявністю капсаіцину та ментолу у складі. Потягом перших хвилин підвищується поверхневий кровообіг, підвищується температура в області нанесення крему. Протягом наступних 20-30 хвилин відбувається вбирання спазмолітичних та протизапальних компонентів, які поступово знижують прояви запалення та зменшують больові відчуття. Максимальний ефект спостерігається протягом трьох-п’яти годин після нанесення крему. Повторне нанесення крему від болю в суглобах варто проводити не раніше за 6 годин після першого використання. Для максимального ефекту варто місце нанесення крему захистити харчовою плівкою та накрити щільною, бажано вовняною тканиною. У разі появлення відчуття сильного печіння по-перше зніміть тканину та плівку, якщо відчуття печіння триває з високою інтенсивністю, змийте крем від болю в суглобах теплою водою з милом, просушіть та накрийте тканиною. Повторне нанесення крему від болю в суглобах варто проводити за 2-3 години, змішавши його з будь-яким нейтральним кремом для тіла у пропорції 1:1. Ефект крему від болю в суглобах збільшується протягом перших трьох днів. Більше п’яти днів поспіль використання крему від болю в суглобах не викличе більшого ефекту. Якщо біль не зменшився, його причиною може бути травма, що триває (перелам, вивих суглобу, розтягнення чи розрив зв’язок чи сухожилків та ін.). У такому разі варто терміново звернутися за допомогою до лікаря.",
        "<strong>Важливо! Крем містить біологічні похідні, тому важливо провести тест на індивідуальну непереносимість, нанесенням невеликої кількості крему від болю в суглобах на ліктьовий згин. Крем від болю в суглобах містить капсаїцин рослинного походження, тому після використання обов’язково потрібно вимити руки теплою водою з милом.</strong>"
      ],
      en: [
        "This cream was created during the siege of Chernihiv in 2022. It had to act quickly, intensively, be applied no more than 2 times a day, and not have a pronounced aroma, because in shelters with crowds of people, additional odors were unnecessary. We combined the stimulating and antispasmodic effect of high-temperature extract of medicinal mud, the anti-inflammatory effect of diclofenac sodium, and the analgesic and stimulating effect of menthol and capsaicin, resulting in a wonderful product.",
        "The main purpose of using a cream for joint pain is to reduce muscle and vascular spasm, inflammation as effectively as possible, to make blood circulation in the affected area more active and to reduce swelling. For this, we use several active elements in the recipe: The complete extract of medicinal mud provides a pronounced antispasmodic and analgesic effect, the combination of capsaicin and menthol has a pronounced distracting effect and allows you to activate blood circulation. Diclofenac sodium is a powerful inhibitor of the enzyme that stimulates the development of inflammation and creates conditions for the formation of pain, swelling and spasm of muscle structures around the affected area. Additional activation of anti-inflammatory components and their deep penetration into the source of inflammation is provided by dimethyl sulfoxide.",
        "According to our observations, when using this cream, there is a rapid warming effect with a pronounced feeling of cold, which is caused by the presence of capsaicin and menthol in the composition. During the first minutes, superficial blood circulation increases, the temperature in the area of ​​​​application of the cream increases. Over the next 20-30 minutes, antispasmodic and anti-inflammatory components are absorbed, which gradually reduce the manifestations of inflammation and reduce pain. The maximum effect is observed within three to five hours after applying the cream. Re-application of the cream for joint pain should be carried out no earlier than 6 hours after the first use. For maximum effect, it is worth protecting the place of application of the cream with cling film and covering it with a dense, preferably woolen cloth. In case of a strong burning sensation, first remove the cloth and film, if the burning sensation continues with high intensity, wash off the cream for joint pain with warm water and soap, dry and cover with a cloth. Re-application of the cream for joint pain should be done after 2-3 hours, mixing it with any neutral body cream in a 1:1 ratio. The effect of the cream for joint pain increases during the first three days. Using the cream for joint pain for more than five days in a row will not have a greater effect. If the pain has not decreased, it may be caused by an ongoing injury (fracture, dislocation of the joint, sprain or rupture of ligaments or tendons, etc.). In this case, you should urgently seek medical help.",
        "<strong>Important! The cream contains biological derivatives, so it is important to conduct a test for individual intolerance by applying a small amount of cream for joint pain to the elbow bend. The cream for joint pain contains capsaicin of plant origin, so after use, you must wash your hands with warm water and soap.</strong>"
      ]
    },
    price: "250",
    isSpecial: false,
    discount: null
  },
  {
    id: "5",
    image: "images/production/item-05.webp",
    title: { uk: "ELAM від болю в суглобах", en: "ELAM for joint pain" },
    volume: { uk: "50 Мл", en: "50 ml" },
    paragraphs: {
      uk: [
        "<strong>Повний екстракт лиманного мулу </strong> виробляється за патентом України «Спосіб виготовлення повної витяжки з лікувального мулу солоних озер та лиманів» № 77136 від 25.01.2013. Екстракт представляє собою продукт високотемпературної екстракції від 100 до 450 С0, при якій виділяється суміш кількох компонентів. Перший компонент – це паровий екстракт, що отриманий при температурі 100 С0. За складом це аналог препарату ФіБС, який був розроблений у минулому сторіччі акад. В.П. Філатовим. Він містить карбонові кислоти, амінокислоти, мінеральні речовини, кумаріни та ін. Це майже прозора рідина з характерним запахом. Після відгону рідкої фази лікувального мулу, температура у ємності починає підійматися до 120-180 С0. Для захисту компонентів лікувального мулу від окислення протягом подальшого нагрівання відбувається заміна атмосфери на інертну шляхом продувки ємності перегрітим азотом підвищеної чистоти. При цьому виділяється кристалічна вода в якій розчиняються високомолекулярні компоненти лікувального мулу. Ця жовтувата рідина має виражений запах лікувального мулу з нотами тютюну. Надалі мулова сировина нагрівається до 450 С0. Протягом цього циклу виділяється компоненти найвищої молекулярної маси. Це органічні смоли, які виходять у вигляді перегрітого диму що осідають та розчиняються в отриманому раніше екстракті при його барботажі. Цей компонент надає більш жовтого кольору екстракту, має специфічний запах горілої трави та тютюну. Готовий повний екстракт лиманного мулу представляє собою жовтувату рідину, що опалескує зі специфічним запахом.",
        "Повний екстракт лиманного мулу містить всі компоненти, що екстрагувалися протягом цього циклу та має виражені стимуляційні, регенераторні та загоюючі ефекти. Використання повного екстракту лиманного мулу має кілька напрямків. Ми на його основі виробляємо спазмолітичні та протизапальні креми, засоби для догляду за шкірою, порожниною рота та ін. У зв’язку з тим, що екстракт має вкрай виражену спазмолітичну дію, він використовується у косметології для зменшення спазму м’язів обличчя та зменшення мімічних зморшок. Крім того виражені стимулюючі та антисептичні властивості сприяють зменшенню запалень, а також борються з акне. Саме тому повний екстракт лиманного мулу використовують як домішок у засоби для вмивання та креми для догляду за шкірою. Для цього невелику кількість екстракту додають до відповідного засобу при щоденному використанні.",
        "<strong>Для догляду за дефектами шкіри</strong>, язвами, що повільно загоюються та іншими захворюваннями шкіри екстракт використовують як засіб для промивання та компресів. Стимуляційні властивості сприяють інтенсивному загоєнню. При цьому екстракт можна використовувати як у чистому вигляді так і у складі інших компонентів догляду за ранами.",
        "<strong>При гострому отиті </strong>екстракт використовується у вигляді крапель. Перед закапуванням слід підігріти екстракт до температури тіла і у кількості по 2-3 краплі застосовувати у кожне вухо. Увага! Екстракт не стерильний, тому не використовується у разі перфорації барабанної перетинки.",
        "<strong>При захворюваннях очей </strong>екстракт використовується для регулярного промивання, помітно полегшуючи дискомфорт, біль та зменшуючи виділення з очей.",
        "Для загальностимулюючого ефекту екстракт використовується як домішок до раціону харчування. При цьому дозування підбирається індивідуально. За нашими спостереженнями оптимальний стимулюючий ефект проявляється при двократному прийомі чайної ложки чистого екстракту на добу. Перед прийомом екстракт бажано розвести в 100 мл теплої води та приймати натще вранці та перед сном.",
        "<strong>Для зменшення проявів запалення шлунку</strong> екстракт приймають 3-4 рази на добу по 3-5 мл за 20 хвилин до їди, бажано попередньо розвести в 50 мл теплої води. При цьому поліпшення стану спостерігається протягом перших днів. Для стабілізації та закріплення ефекту приймання екстракту варто проводити протягом 3 тижнів з періодичністю 4-5 разів на рік.",
        "Для догляду за волоссям та шкірою голови екстракт додають до нейтрального засобу для миття або маски для волосся. При регулярному використанні пацієнти відмічають зникнення лупи та поліпшення густоти та стану волосся.",
        "Від кровоточивості ясен повний екстракт лиманного мулу використовується у вигляді ополіскувача. Для цього 5 мл екстракту розводять у невеликій кількості теплої води. Розбавленим екстрактом ополіскують порожнину рота протягом 1-2 хвилин після чищення зубів. В де-яких випадках при пародонтозі проводять аплікацію чистого екстракту на уражені ділянки ясен.",
        "Для створення розслаблюючих ванн екстракт додається у кількості 50 мл у воду теплу Важливо! не гарячу воду. Тривалість перших процедур варто обмежувати 15 хвилинами для уникнення раптового падіння артеріального тиску завдяки вираженій міорелаксації.",
        "<strong>Пам’ятайте! </strong>Перед застосуванням будь-яких засобів для лікування або зменшення болю в, важливо проконсультуватися з лікарем або фахівцем з медичних питань, особливо якщо у вас є які-небудь попередні медичні становища або алергічні реакції на складові крему.",
        "УВАГА! Перед використанням повного екстракту лікувального мулу ОБОВ’ЯЗКОВО проведіть тест на індивідуальну непереносимість. Це пов’язано з тим, що складові екстракту мають біологічне походження та можуть викликати непередбачувані індивідуальні реакції організму. Екстракт має величезний стимулюючий та регенеруючий потенціал, тому не відповідальне його використання може призвести до змін артеріального тиску, безсоння, шкірних та інших реакцій, що не описані в цій інструкції."
      ],
      en: [
        "<strong>Complete extract of liman mud</strong> is produced under the patent of Ukraine “Method for producing a full extract from therapeutic mud of salt lakes and limans” No. 77136 dated 25.01.2013. The extract is a product of high-temperature extraction ranging from 100 to 450°C, during which a mixture of several components is released. The first component is the steam extract obtained at 100°C. In composition, it is analogous to the preparation FIBS, developed in the past century by Acad. V.P. Filatov. It contains carboxylic acids, amino acids, minerals, coumarins, etc. This is an almost transparent liquid with a characteristic smell. After distilling the liquid phase of the therapeutic mud, the temperature in the container rises to 120-180°C. To protect the components of the therapeutic mud from oxidation during further heating, the atmosphere is replaced with an inert one by purging the container with high-purity overheated nitrogen. At this point, crystalline water is released, dissolving the high-molecular components of the therapeutic mud. This yellowish liquid has a pronounced smell of therapeutic mud with tobacco notes. Further, the mud material is heated up to 450°C. During this cycle, the components of the highest molecular weight are released. These are organic resins that emerge as overheated smoke, settling and dissolving in the previously obtained extract during its bubbling. This component gives the extract a more yellow hue and a specific smell of burnt grass and tobacco. The finished complete extract of liman mud is a yellowish liquid with opalescence and a specific smell.",
        "The complete extract of liman mud contains all components extracted during this cycle and has pronounced stimulating, regenerative, and healing effects. The use of the complete extract of liman mud has several applications. Based on it, we produce antispasmodic and anti-inflammatory creams, skincare products, oral cavity care products, and others. Due to the extremely pronounced antispasmodic effect, it is used in cosmetology to reduce facial muscle spasms and mimic wrinkles. Additionally, its pronounced stimulating and antiseptic properties help reduce inflammation and combat acne. Therefore, the complete extract of liman mud is used as an additive in face wash products and skincare creams. For this, a small amount of the extract is added to the corresponding product for daily use.",
        "<strong>For treating skin defects</strong>, ulcers that heal slowly, and other skin conditions, the extract is used as a rinsing and compress agent. Its stimulating properties contribute to intensive healing. The extract can be used either in its pure form or as part of other wound care components.",
        "<strong>For acute otitis</strong>, the extract is used in the form of drops. Before instilling, the extract should be warmed to body temperature and applied in a quantity of 2-3 drops in each ear. Attention! The extract is not sterile, so it should not be used in cases of perforation of the tympanic membrane.",
        "<strong>For eye conditions</strong>, the extract is used for regular rinsing, significantly alleviating discomfort, pain, and reducing discharge from the eyes.",
        "For general stimulating effects, the extract is used as a dietary supplement. The dosage is selected individually. According to our observations, the optimal stimulating effect occurs with a twice-daily intake of a teaspoon of pure extract. Before use, it is recommended to dilute the extract in 100 ml of warm water and take it on an empty stomach in the morning and before bedtime.",
        "<strong>To reduce manifestations of stomach inflammation</strong>, the extract is taken 3-4 times a day, 3-5 ml, 20 minutes before meals, preferably pre-diluted in 50 ml of warm water. Improvements are noticeable within the first few days. For stabilization and consolidation of the effect, taking the extract is recommended for 3 weeks, with a frequency of 4-5 times a year.",
        "For hair and scalp care, the extract is added to a neutral washing product or hair mask. With regular use, patients note the disappearance of dandruff and improved hair density and condition.",
        "To treat gum bleeding, the complete extract of liman mud is used as a rinse. For this, 5 ml of the extract is diluted in a small amount of warm water. The diluted extract is used to rinse the oral cavity for 1-2 minutes after brushing teeth. In some cases, for periodontitis, applications of pure extract are made to the affected gum areas.",
        "To create relaxing baths, 50 ml of the extract is added to warm, but not hot water. Note: the duration of the first procedures should be limited to 15 minutes to avoid sudden drops in blood pressure due to pronounced muscle relaxation.",
        "<strong>Note:</strong> Before using any treatments or remedies to reduce pain or discomfort, it is important to consult a doctor or specialist, especially if you have any pre-existing medical conditions or allergic reactions to the components of the cream.",
        "ATTENTION! Before using the complete extract of therapeutic mud, be sure to conduct a test for individual intolerance. This is due to the biological origin of the extract components, which may cause unpredictable individual reactions of the body. The extract has immense stimulating and regenerative potential, so irresponsible use may lead to changes in blood pressure, insomnia, skin, and other reactions not described in this instruction."
      ]
    },
    price: "285",
    isSpecial: false,
    discount: null
  },
  {
    id: "6",
    image: "images/production/item-box.webp",
    title: {
      uk: "Коробка крему для військових",
      en: "Box of cream for the military"
    },
    volume: { uk: "Коробка", en: "BOX" },
    paragraphs: {
      uk: [
        'Ці креми користуються найбільшою популярністю серед <a class="text-link" target="_blank" href="https://www.youtube.com/watch?v=omBlOKWEdcY">військових</a> завдяки своїй ефективності та якості. Вони забезпечують надійний захист та догляд у складних умовах, зберігаючи шкіру здоровою навіть під час важких випробувань.',
        "Ми регулярно формуємо та відправляємо подібні коробки з благодійною допомогою нашим захисникам. Це наш невеликий, але важливий внесок у підтримку тих, хто стоїть на передовій.",
        'Ви також можете долучитися до цієї благодійної ініціативи. Оплативши коробку кремів зі знижкою 20%, ви допоможете передати її у підрозділ, який ви самі вкажете, або в руки тих, кому ми довіряємо – до <a class="text-link" target="_blank" href="https://www.instagram.com/kira.rodkina/">Фонд Кіри Родкіної</a> чи <a class="text-link" target="_blank" href="https://www.instagram.com/berehynia.fund/">Фонд Надії Вовк</a>. Ваш внесок стане частиною великої справи допомоги нашим героям!'
      ],
      en: [
        'These creams are most popular among <a class="text-link" target="_blank" href="https://www.youtube.com/watch?v=omBlOKWEdcY">military</a> due to their effectiveness and quality. They provide reliable protection and care in difficult conditions, keeping the skin healthy even during difficult tests.',
        "We regularly create and send similar boxes of charitable aid to our defenders. This is our small but important contribution to supporting those on the front lines.",
        'You can also join this charitable initiative. By paying for a box of creams with a 20% discount, you will help transfer it to the unit you specify, or into the hands of those we trust - to the <a class="text-link" target="_blank" href="https://www.instagram.com/kira.rodkina/">Kira Rodkina Foundation</a> or <a class="text-link" target="_blank" href="https://www.instagram.com/berehynia.fund/">Nadiyya Vovk Foundation</a>. Your contribution will become part of the great cause of helping our heroes!'
      ]
    },
    price: "",
    isSpecial: true,
    discount: "20%"
  }
];
const productList = document.getElementById("product-list");
const currentLang$3 = document.documentElement.lang;
const getTranslation$2 = (key) => {
  var _a;
  return ((_a = translations[currentLang$3]) == null ? void 0 : _a[key]) || translations["uk"][key];
};
const createProductCardUk = ({
  id,
  image,
  title,
  volume,
  price,
  isSpecial,
  discount
}) => {
  const lang = currentLang$3 || "uk";
  const specialBadge = isSpecial ? `<span>${getTranslation$2("specialBadge")}</span>` : `<span>(${volume[lang] || getTranslation$2("volumeLabel")})</span>`;
  const priceInfo = isSpecial ? `<span class="product-card__button-price"></span> ${getTranslation$2(
    "order"
  )}` : `<span class="product-card__button-price">${getTranslation$2(
    "price"
  )}</span> ${price} ${getTranslation$2("currency")}`;
  const discountLabel = isSpecial && discount ? `<div class="discount">
          <p class="value">-${discount}</p>
        </div>` : "";
  return `
    <li class="production__item${isSpecial ? " production__item--special" : ""}">
      <div id="${id}" class="product-card${isSpecial ? " product-card--special" : ""}">
        <div onclick="openProductCardModal(); renderCardById('${id}')">
        ${discountLabel}
          <div class="product-card__image">
            <img
              src="${image}"
              alt="${title[lang]}"
              loading="lazy"
              data-lazy="true"
            />
          </div>
          <h3 class="product-card__title">
            ${title[lang]}
            ${specialBadge}
          </h3>
          <p class="product-card__info-more">
             ${getTranslation$2("learnMore")}...
            <span><i class="fa-solid fa-plus"></i></span>
          </p>
        </div>

        <button onclick="openProductOrderModal('${id}')" class="main-button main-button--product-card">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <p>${priceInfo}</p>
        </button>
      </div>
    </li>
  `;
};
const cards = products.map(createProductCardUk).join("");
productList.innerHTML = cards;
const currentLang$2 = document.documentElement.lang;
const productCardModalOverlay = document.getElementById("production-modal");
const productCardModalContent = document.getElementById(
  "production-modal-content"
);
const productCards = document.querySelectorAll(".product-card");
const getTranslation$1 = (key) => {
  var _a;
  return ((_a = translations[currentLang$2]) == null ? void 0 : _a[key]) || translations["uk"][key];
};
const renderCardById = (cardId) => {
  const lang = currentLang$2 || "uk";
  const { id, image, paragraphs, price, title, volume, isSpecial } = products.find((product) => product.id === `${cardId}`);
  const specialBadge = isSpecial ? `<span>${getTranslation$1("specialBadge")}</span>` : `<span>(${volume[lang] || getTranslation$1("volumeLabel")})</span>`;
  const priceInfo = isSpecial ? `<span class="product-card__button-price"></span> ${getTranslation$1(
    "order"
  )}` : `<span class="product-card__button-price">${getTranslation$1(
    "price"
  )}</span> ${price} ${getTranslation$1("currency")}`;
  productCardModalContent.innerHTML = `
  <div class="production__modal-image-box">
    <img
     src=${image}
      alt=${title[lang]}
      loading="lazy"
      data-lazy="true"
    />
    <h3 class="production__modal-title">
      ${title[lang]}
      ${specialBadge}
    </h3>
    <button onclick="openProductOrderModal('${id}')" class="main-button main-button--modal-product-card">
      <i class="fa-solid fa-cart-arrow-down"></i>
      <p>${priceInfo}</p>
    </button>
  </div>
  <div class="production__modal-description-box">
    ${paragraphs[lang].map((paragraph) => {
    return `<p class="production__modal-text">${paragraph}</p>`;
  }).join("")}
    <p
      class="production__modal-info-less"
      onclick="closeProductCardModal()"
    >
      ${getTranslation$1(
    "back"
  )}... <span><i class="fa-solid fa-minus"></i></span>
    </p>
  </div>`;
};
const openProductCardModal = () => {
  productCardModalOverlay.style.display = "block";
  productCardModalContent.scrollTop = 0;
};
const closeProductCardModal = () => {
  productCardModalContent.innerHTML = "";
  productCardModalOverlay.style.display = "none";
};
productCards.forEach((productCard) => {
  productCard.addEventListener("click", () => {
  });
});
productCardModalOverlay.addEventListener("click", (e) => {
  e.target === e.currentTarget && closeProductCardModal();
});
window.openProductCardModal = openProductCardModal;
window.closeProductCardModal = closeProductCardModal;
window.renderCardById = renderCardById;
(function() {
  const fonts = ["cursive"];
  function setCaptcha() {
    let html = "qwerty".split("").map((char) => {
      const rotate = -20 + Math.random() * 30;
      const font = Math.trunc(Math.random() * fonts.length);
      const isUppercase = Math.random() > 0.5 ? "uppercase" : "none";
      return `<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${font[font]};
            text-transform: ${isUppercase};
            "
           >${char} </span>`;
    }).join("");
    const captcha = document.querySelectorAll(".form__preview");
    captcha.forEach((c) => {
      c.innerHTML = html;
    });
  }
  setCaptcha();
})();
const modal = document.getElementById("galleryModal");
const images = document.querySelectorAll(".gallery__image");
const slides = document.getElementsByClassName("gallery__modal-slide");
const dots = document.getElementsByClassName("gallery__modal-image-demo");
const captionText = document.getElementById("caption");
let slideIndex = 1;
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
window.openModal = openModal;
window.closeModal = closeModal;
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal();
    currentSlide(index + 1);
  });
});
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});
const currentLang$1 = document.documentElement.lang;
const productOrderModalOverlay = document.getElementById("order-modal");
const form$2 = document.getElementById("orderForm");
const orderTitle = document.getElementById("productTitle");
const BASE_URL$2 = "https://meditec-landing.vercel.app";
function sendOrder(feedback) {
  fetch(`${BASE_URL$2}/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(feedback)
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }).then((data) => {
    console.log("Відповідь сервера:", data);
    alert("Success");
  }).catch((error) => {
    console.error("Помилка:", error);
  });
}
const openProductOrderModal = (productId) => {
  productOrderModalOverlay.style.display = "block";
  const { id, title, volume, price } = products.find(
    (product) => product.id === `${productId}`
  );
  const lang = currentLang$1 || "uk";
  orderTitle.innerText = `${title[lang]} (${volume[lang]})`;
  form$2.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderForm = e.target;
    const feedbackFormData = new FormData(e.target);
    feedbackFormData.append("productId", id);
    feedbackFormData.append("productTitle", title[lang]);
    feedbackFormData.append("productVolume", volume[lang]);
    feedbackFormData.append("productPrice", price);
    const feedback = Object.fromEntries(feedbackFormData);
    sendOrder(feedback);
    orderForm.reset();
    closeProductOrderModal();
  });
};
const closeProductOrderModal = () => {
  productOrderModalOverlay.style.display = "none";
};
productOrderModalOverlay.addEventListener("click", (e) => {
  e.target === e.currentTarget && closeProductOrderModal();
});
window.openProductOrderModal = openProductOrderModal;
window.closeProductOrderModal = closeProductOrderModal;
const form$1 = document.getElementById("inv-form");
const BASE_URL$1 = "https://meditec-landing.vercel.app";
const sendInvitation = (invitation) => {
  fetch(`${BASE_URL$1}/api/invitation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(invitation)
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }).then((data) => {
    console.log("Відповідь сервера:", data);
    alert("Success");
  }).catch((error) => {
    console.error("Помилка:", error);
  });
};
form$1.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Invitation");
  const invForm = e.target;
  const invFormData = new FormData(invForm);
  const invUserData = Object.fromEntries(invFormData);
  console.log(invUserData);
  sendInvitation(invUserData);
  invForm.reset();
});
const patents = [
  {
    patentsUA1: {
      uk: [
        {
          "Система для інтрамедулярного остеосинтезу та дренування": "https://ua.patents.su/4-76384-sistema-dlya-intramedulyarnogo-osteosintezu-ta-drenuvannya.html"
        },
        {
          'Ніжка протеза кульшового суглоба з функцією інтрамедулярного остеосинтезу конструкції "доннді то"': "https://ua.patents.su/2-62566-nizhka-proteza-kulshovogo-sugloba-z-funkciehyu-intramedulyarnogo-osteosintezu-konstrukci-donndi-to.html"
        },
        {
          "Спосіб діагностики психогенних парезів поперечно-смугастих м’язів людини за А.Вислим": "https://ua.patents.su/2-17556-sposib-diagnostiki-psikhogennikh-pareziv-poperechno-smugastikh-myaziv-lyudini-za-avislim.html"
        },
        {
          "Спосіб стимулювання постуральної мускулатури людини": "https://ua.patents.su/2-16284-sposib-stimulyuvannya-posturalno-muskulaturi-lyudini.html"
        },
        {
          "Спосіб виявлення первинних проявів порушень постави людини при масових дослідженнях": "https://ua.patents.su/2-15422-sposib-viyavlennya-pervinnikh-proyaviv-porushen-postavi-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "Спосіб виявлення порушень постави людини при масових дослідженнях": "https://ua.patents.su/2-15421-sposib-viyavlennya-porushen-postavi-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "Спосіб порівняння довжини нижніх кінцівок людини": "https://ua.patents.su/1-8998-sposib-porivnyannya-dovzhini-nizhnikh-kincivok-lyudini.html"
        },
        {
          "Спосіб лікування юнацького кіфозу по А.Вислому": "https://ua.patents.su/2-64249-sposib-likuvannya-yunackogo-kifozu-po-avislomu.html"
        },
        {
          "Спосіб корекції довжини нижніх кінцівок хворих на сколіоз хребта": "https://ua.patents.su/2-57397-sposib-korekci-dovzhini-nizhnikh-kincivok-khvorikh-na-skolioz-khrebta.html"
        },
        {
          "Спосіб ендогенного стимулювання захисних функцій організму людини": "https://ua.patents.su/2-46332-sposib-endogennogo-stimulyuvannya-zakhisnikh-funkcijj-organizmu-lyudini.html"
        },
        {
          "Спосіб корекції екскаваційних деформацій грудної клітки сколіотичного генезу": "https://ua.patents.su/2-44431-sposib-korekci-ekskavacijjnikh-deformacijj-grudno-klitki-skoliotichnogo-genezu.html"
        },
        {
          "Спосіб вимірювання кров’яного тиску у мікроциркуляторному кровоносному руслі": "https://ua.patents.su/2-44013-sposib-vimiryuvannya-krovyanogo-tisku-u-mikrocirkulyatornomu-krovonosnomu-rusli.html"
        },
        {
          "Спосіб корекції взаємостояння хребців": "https://ua.patents.su/5-19420-sposib-korekci-vzaehmostoyannya-khrebciv.html"
        }
      ],
      en: [
        {
          "Intramedullary osteosynthesis and drainage system": "https://ua.patents.su/4-76384-sistema-dlya-intramedulyarnogo-osteosintezu-ta-drenuvannya.html"
        },
        {
          'Hip prosthesis leg with intramedullary osteosynthesis function of the "dondi to" design': "https://ua.patents.su/2-62566-nizhka-proteza-kulshovogo-sugloba-z-funkciehyu-intramedulyarnogo-osteosintezu-konstrukci-donndi-to.html"
        },
        {
          "Method for diagnosing psychogenic paresis of human striated muscles according to A. Wysly": "https://ua.patents.su/2-17556-sposib-diagnostiki-psikhogennikh-pareziv-poperechno-smugastikh-myaziv-lyudini-za-avislim.html"
        },
        {
          "Method of stimulating human postural muscles": "https://ua.patents.su/2-16284-sposib-stimulyuvannya-posturalno-muskulaturi-lyudini.html"
        },
        {
          "A method for detecting primary manifestations of human posture disorders during mass studies": "https://ua.patents.su/2-15422-sposib-viyavlennya-pervinnikh-proyaviv-porushen-postavi-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "Method for detecting human posture disorders during mass studies": "https://ua.patents.su/2-15421-sposib-viyavlennya-porushen-postavi-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "A method for comparing the length of human lower limbs": "https://ua.patents.su/1-8998-sposib-porivnyannya-dovzhini-nizhnikh-kincivok-lyudini.html"
        },
        {
          "Method of treating juvenile kyphosis according to A. Wysly": "https://ua.patents.su/2-64249-sposib-likuvannya-yunackogo-kifozu-po-avislomu.html"
        },
        {
          "Method for correcting the length of the lower limbs of patients with spinal scoliosis": "https://ua.patents.su/2-57397-sposib-korekci-dovzhini-nizhnikh-kincivok-khvorikh-na-skolioz-khrebta.html"
        },
        {
          "Method of endogenous stimulation of the protective functions of the human body": "https://ua.patents.su/2-46332-sposib-endogennogo-stimulyuvannya-zakhisnikh-funkcijj-organizmu-lyudini.html"
        },
        {
          "Method for correcting excavation deformities of the chest of scoliotic origin": "https://ua.patents.su/2-44431-sposib-korekci-ekskavacijjnikh-deformacijj-grudno-klitki-skoliotichnogo-genezu.html"
        },
        {
          "Method for measuring blood pressure in the microcirculatory blood stream": "https://ua.patents.su/2-44013-sposib-vimiryuvannya-krovyanogo-tisku-u-mikrocirkulyatornomu-krovonosnomu-rusli.html"
        },
        {
          "Method of correcting the relationship of the vertebrae": "https://ua.patents.su/5-19420-sposib-korekci-vzaehmostoyannya-khrebciv.html"
        }
      ]
    }
  },
  {
    patentsUA2: {
      uk: [
        {
          'Спосіб виготовлення імітату лікувальної води типу "нафтуся"': "https://ua.patents.su/3-112123-sposib-vigotovlennya-imitatu-likuvalno-vodi-tipu-naftusya.html"
        },
        {
          "Спосіб виготовлення повної витяжки з лікувального мулу солоних озер та лиманів": "https://ua.patents.su/3-77136-sposib-vigotovlennya-povno-vityazhki-z-likuvalnogo-mulu-solonikh-ozer-ta-limaniv.html"
        },
        {
          "Спосіб післяпроцедурної обробки водних розчинів мулових лікувальних грязей солоних озер та лиманів": "https://ua.patents.su/3-76735-sposib-pislyaprocedurno-obrobki-vodnikh-rozchiniv-mulovikh-likuvalnikh-gryazejj-solonikh-ozer-ta-limaniv.html"
        },
        {
          "Спосіб прецизійної діагностики порушень кінематичної функції хребта людини при масових дослідженнях": "https://ua.patents.su/2-77573-sposib-precizijjno-diagnostiki-porushen-kinematichno-funkci-khrebta-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "Спосіб лікування сколіозу хребта за а. вислим": "https://ua.patents.su/2-64771-sposib-likuvannya-skoliozu-khrebta-za-a-vislim.html"
        },
        {
          "Спосіб лікування нейроостеофіброзу": "https://ua.patents.su/2-53952-sposib-likuvannya-nejjroosteofibrozu.html"
        },
        {
          "Спосіб ендогенного стимулювання захисних функцій організму людини": "https://ua.patents.su/2-46332-sposib-endogennogo-stimulyuvannya-zakhisnikh-funkcijj-organizmu-lyudini.html"
        },
        {
          "Спосіб корекції екскаваційних деформацій грудної клітки сколіотичного генезу": "https://ua.patents.su/2-44431-sposib-korekci-ekskavacijjnikh-deformacijj-grudno-klitki-skoliotichnogo-genezu.html"
        },
        {
          "Спосіб діагностики топографії ураження центральної нервової системи людини": "https://ua.patents.su/4-28163-sposib-diagnostiki-topografi-urazhennya-centralno-nervovo-sistemi-lyudini.html"
        },
        {
          "Спосіб інструментальної діагностики рефлекторної пірамідної недостатності нервової системи людини": "https://ua.patents.su/3-28142-sposib-instrumentalno-diagnostiki-reflektorno-piramidno-nedostatnosti-nervovo-sistemi-lyudini.html"
        },
        {
          "Спосіб корекції взаємостояння хребців": "https://ua.patents.su/5-19420-sposib-korekci-vzaehmostoyannya-khrebciv.html"
        },
        {
          "Спосіб лікування м’язової болі": "https://ua.patents.su/1-20367-sposib-likuvannya-myazovo-boli.html"
        },
        {
          "Спосіб виявлення порушень біомеханіки хребцевих рухових сегментів": "https://ua.patents.su/3-17320-sposib-viyavlennya-porushen-biomekhaniki-khrebcevikh-rukhovikh-segmentiv.html"
        }
      ],
      en: [
        {
          'Method for manufacturing an imitation of therapeutic water of the "naftusya" type': "https://ua.patents.su/3-112123-sposib-vigotovlennya-imitatu-likuvalno-vodi-tipu-naftusya.html"
        },
        {
          "Method for producing a complete extract from therapeutic mud of salt lakes and estuaries": "https://ua.patents.su/3-77136-sposib-vigotovlennya-povno-vityazhki-z-likuvalnogo-mulu-solonikh-ozer-ta-limaniv.html"
        },
        {
          "Method of post-procedural treatment of aqueous solutions of silt therapeutic muds of salt lakes and estuaries": "https://ua.patents.su/3-76735-sposib-pislyaprocedurno-obrobki-vodnikh-rozchiniv-mulovikh-likuvalnikh-gryazejj-solonikh-ozer-ta-limaniv.html"
        },
        {
          "Method for precise diagnosis of disorders of the kinematic function of the human spine during mass studies": "https://ua.patents.su/2-77573-sposib-precizijjno-diagnostiki-porushen-kinematichno-funkci-khrebta-lyudini-pri-masovikh-doslidzhennyakh.html"
        },
        {
          "Method of treating scoliosis of the spine according to A. Wysly": "https://ua.patents.su/2-64771-sposib-likuvannya-skoliozu-khrebta-za-a-vislim.html"
        },
        {
          "Method of treating neuroosteofibrosis": "https://ua.patents.su/2-53952-sposib-likuvannya-nejjroosteofibrozu.html"
        },
        {
          "Method of endogenous stimulation of the protective functions of the human body": "https://ua.patents.su/2-46332-sposib-endogennogo-stimulyuvannya-zakhisnikh-funkcijj-organizmu-lyudini.html"
        },
        {
          "Method for correcting excavation deformities of the chest of scoliotic origin": "https://ua.patents.su/2-44431-sposib-korekci-ekskavacijjnikh-deformacijj-grudno-klitki-skoliotichnogo-genezu.html"
        },
        {
          "Method for diagnosing the topography of lesions in the human central nervous system": "https://ua.patents.su/4-28163-sposib-diagnostiki-topografi-urazhennya-centralno-nervovo-sistemi-lyudini.html"
        },
        {
          "Method of instrumental diagnosis of reflex pyramidal insufficiency of the human nervous system": "https://ua.patents.su/3-28142-sposib-instrumentalno-diagnostiki-reflektorno-piramidno-nedostatnosti-nervovo-sistemi-lyudini.html"
        },
        {
          "Method of correcting the relationship of the vertebrae": "https://ua.patents.su/5-19420-sposib-korekci-vzaehmostoyannya-khrebciv.html"
        },
        {
          "Method of treating muscle pain": "https://ua.patents.su/1-20367-sposib-likuvannya-myazovo-boli.html"
        },
        {
          "Method for detecting violations of the biomechanics of vertebral motor segments": "https://ua.patents.su/3-17320-sposib-viyavlennya-porushen-biomekhaniki-khrebcevikh-rukhovikh-segmentiv.html"
        }
      ]
    }
  },
  {
    patentsUSSR: {
      uk: [
        {
          "Способ определения амортизационных свойств опорного аппарата человека": "https://patents.su/3-1761119-sposob-opredeleniya-amortizacionnykh-svojjstv-opornogo-apparata-cheloveka.html"
        },
        {
          "Способ диагностики повреждений тазовых сочленений": "https://patents.su/2-1629034-sposob-diagnostiki-povrezhdenijj-tazovykh-sochlenenijj.html"
        }
      ],
      en: [
        {
          "A method of determining the amortization properties of the human support apparatus": "https://patents.su/3-1761119-sposob-opredeleniya-amortizacionnykh-svojjstv-opornogo-apparata-cheloveka.html"
        },
        {
          "Method of diagnosis of damaged pelvic joints": "https://patents.su/2-1629034-sposob-diagnostiki-povrezhdenijj-tazovykh-sochlenenijj.html"
        }
      ]
    }
  }
];
const currentLang = document.documentElement.lang;
const getTranslation = (key) => {
  var _a;
  return ((_a = translations[currentLang]) == null ? void 0 : _a[key]) || translations["uk"][key];
};
const patentsList = document.querySelector(".about__patents-list");
const content = patents.reduce((acc, category) => {
  Object.entries(category).forEach(([key, patentItems]) => {
    const chapter = document.createElement("li");
    chapter.classList.add("about__patents-list-chapter");
    const title = document.createElement("h3");
    title.classList.add("chapter-title");
    title.textContent = key.includes("UA") ? getTranslation("patentsUA") : getTranslation("patentsUSSR");
    chapter.appendChild(title);
    const list = document.createElement("ul");
    list.classList.add("about__patents-links-list");
    patentItems[currentLang].forEach((item) => {
      Object.entries(item).forEach(([name, url]) => {
        const listItem = document.createElement("li");
        listItem.classList.add("about__patents-links-list-item");
        const link = document.createElement("a");
        link.classList.add("text-link");
        link.href = url;
        link.textContent = name;
        link.target = "_blank";
        listItem.appendChild(link);
        list.appendChild(listItem);
      });
    });
    chapter.appendChild(list);
    acc.push(chapter);
  });
  return acc;
}, []);
content.forEach((element) => patentsList.appendChild(element));
const form = document.getElementById("contact-form");
const BASE_URL = "https://meditec-landing.vercel.app";
const sendContact = (contact) => {
  fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }).then((data) => {
    console.log("Відповідь сервера:", data);
    alert("Success");
  }).catch((error) => {
    console.error(`Помилка: ${error}`);
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Send contact");
  const contactForm = e.target;
  console.log(contactForm);
  const contactFormData = new FormData(contactForm);
  const contactUserData = Object.fromEntries(contactFormData);
  console.log(contactUserData);
  sendContact(contactUserData);
  contactForm.reset();
});
const upBtn = document.getElementById("up-btn");
const scrollFunction = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
window.onscroll = function() {
  scrollFunction();
};
upBtn.addEventListener("click", scrollToTop);
console.log("Hello. If you see this string - code is normal");
