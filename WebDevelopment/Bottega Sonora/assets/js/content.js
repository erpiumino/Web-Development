document.addEventListener('DOMContentLoaded', () => {
  const storedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no language is stored
  console.log(`Page loaded. Stored language is: ${storedLanguage}`);
  setLanguage(storedLanguage);
});

function setLanguage(language) {
  console.log(`Setting language to: ${language}`);
  
  const buttons = document.querySelectorAll('.language-btn');
  buttons.forEach(btn => btn.classList.remove('btn-active'));
  document.getElementById(`${language}-btn`).classList.add('btn-active');

  const texts = {
      'en': {
          'upper_text': 'We are',
          'lower_text': 'A contemporary music Ensemble. Musicians and Composers, together',
          'about2': 'about',
          'team': 'team',
          'events': 'events',
          'projects': 'projects',
          'repertoire': 'repertoire',
          'contacts': 'contacts',
          'follow': 'FOLLOW US',
          'about-side': '&nbsp About',
          'team-side': '&nbsp Team',
          'events-side': '&nbsp Events',
          'projects-side': '&nbsp Projects',
          'repertoire-side': '&nbsp Repertoire',
          'contacts-side': '&nbsp Contacts',
          'follow-side': '&nbsp FOLLOW US'
      },
      'it': {
          'upper_text': 'Noi siamo',
          'lower_text': 'Un Ensemble di musica contemporanea. Esecutori e Compositori, insieme',
          'about2': 'chi siamo',
          'team': 'team',
          'events': 'eventi',
          'projects': 'progetti',
          'repertoire': 'repertorio',
          'contacts': 'contatti',
          'follow': 'SEGUICI',
          'about-side': '&nbsp Chi siamo',
          'team-side': '&nbsp Team',
          'events-side': '&nbsp Eventi',
          'projects-side': '&nbsp Progetti',
          'repertoire-side': '&nbsp Repertorio',
          'contacts-side': '&nbsp Contatti',
          'follow-side': '&nbsp SEGUICI'
      }
  };

  const currentTexts = texts[language];

  if (currentTexts) {
      console.log(`Updating text elements for language: ${language}`);
      
      updateTextElement('upper_text', currentTexts['upper_text']);
      updateTextElement('lower_text', currentTexts['lower_text']);
      updateTextElement('about2', currentTexts['about2']);
      updateTextElement('team', currentTexts['team']);
      updateTextElement('events', currentTexts['events']);
      updateTextElement('projects', currentTexts['projects']);
      updateTextElement('repertoire', currentTexts['repertoire']);
      updateTextElement('contacts', currentTexts['contacts']);
      updateTextElement('follow', currentTexts['follow']);
      updateInnerHtmlElement('about-side', currentTexts['about-side']);
      updateInnerHtmlElement('team-side', currentTexts['team-side']);
      updateInnerHtmlElement('events-side', currentTexts['events-side']);
      updateInnerHtmlElement('projects-side', currentTexts['projects-side']);
      updateInnerHtmlElement('repertoire-side', currentTexts['repertoire-side']);
      updateInnerHtmlElement('contacts-side', currentTexts['contacts-side']);
      updateInnerHtmlElement('follow-side', currentTexts['follow-side']);

      // Store selected language in localStorage
      localStorage.setItem('language', language);
      console.log(`Language set to ${language} and stored in localStorage.`);
  } else {
      console.error(`No text found for language: ${language}`);
  }
}

function updateTextElement(id, text) {
  const element = document.getElementById(id);
  if (element) {
      element.textContent = text;
  } else {
      console.warn(`Element with ID '${id}' not found.`);
  }
}

function updateInnerHtmlElement(id, html) {
  const element = document.getElementById(id);
  if (element) {
      element.innerHTML = html;
  } else {
      console.warn(`Element with ID '${id}' not found.`);
  }
}
