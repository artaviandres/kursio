import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          home_welcome: "Hello",
          home_success_rate: "Success Rate",
          search_bar_placeholder: "Search Courses",
          search_bar_category: "Category",
          log_in_text: "Log In",
          sign_up_text: "Sign Up",
          category_3d_print: "3D Printing Concept",
          category_architectural: 'Architectural',
          category_art_and_design: 'Art & Design',
          category_audio_and_music: 'Audio & Music',
          category_communication: 'Communication',
          category_conceptual_art: 'Conceptual Art',
          category_development: 'Development',
          category_health_and_fitness: 'Health & Fitness',
          category_material_design: 'Material Design',
          category_photography: 'Photography',
          category_shapes: 'Shapes',
          category_theatre: 'Theatre',
        }
      },
      ru: {
        translations: {
          home_welcome: "Привет",
          home_success_rate: "Шанс успеха",
          search_bar_placeholder: "Поиск курсов",
          search_bar_category: "категория",
          log_in_text: "авторизоваться",
          sign_up_text: "Подписаться",
          category_3d_print: "Концепция 3D-печати",
          category_architectural: 'архитектурный',
          category_art_and_design: 'Арт и Дизайн',
          category_audio_and_music: 'аудио и музыка',
          category_communication: 'связь',
          category_conceptual_art: 'искусство',
          category_development: 'разработка',
          category_health_and_fitness: 'здоровье и Фитнесс',
          category_material_design: 'дизайн материала',
          category_photography: 'фотография',
          category_shapes: 'формы',
          category_theatre: 'театр',
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;