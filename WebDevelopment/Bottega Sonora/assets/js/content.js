document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no language is stored
    console.log(`Page loaded. Stored language is: ${storedLanguage}`);
    setLanguage(storedLanguage);


    // Add event listeners for language buttons
    document.querySelectorAll('.language-btn').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.id.includes('en') ? 'en' : 'it';
            setLanguage(language);
        });
    });

});

function setLanguage(language) {
    console.log(`Setting language to: ${language}`);

    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(btn => btn.classList.remove('btn-active'));

    // Set active button based on language
    document.getElementById(`${language}-btn-top`).classList.add('btn-active');
    document.getElementById(`${language}-btn-sidebar`).classList.add('btn-active');

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
            'follow-side': '&nbsp FOLLOW US',
            //============================================Team============================================//
            'team-title' : 'the Team',
            'team-subtitle' : 'Meet our Team... bla bla bla',
            'team-filter-all' : 'All',
            'team-filter-musician' : 'Musician',
            'team-filter-composer' : 'Composer',
            'team-filter-staff' : 'Staff',
            'team-role-clarinetist' : 'Clarinetist',
            'team-role-percussionist' : 'Percussionist',
            'team-role-composer' : 'Composer',
            'team-role-cellist' : 'Cellist',
            'team-role-composer/cellist' : 'Composer/Cellist',
            //============================================About============================================//
            'about-title' : 'About us',
            'about-subtitle-1' : 'OVERVIEW',
            'about-subtitle-2' : 'MAIN OBJECTIVES',
            'about-subsubtitle-1' : 'Definition of an initial group of performers/composers',
            'about-subsubtitle-2' : 'Position within the institutional context',
            'about-subsubtitle-3' : 'Stylistic and logistical specialization',
            'about-paragraph1.1' : 'It is intended to demonstrate the desire and need to form a collective made up of young musicians, performers and composers, whose main objectives are the dissemination and awareness of contemporary music through concert activities, audio/video recordings and promotion on social media. The project aims to establish a climate of discussion, which favors opportunities for artistic enrichment through continuous stimuli and, ultimately, which presents effective feedback in the field of newly created art music.',
            'about-paragraph1.2' : 'The ensemble of performers is made up of young musicians interested in the contemporary repertoire who wish to undertake a journey of exploration of new music in all its forms, styles and languages. The composers are also an integral part of the ensemble: their presence within the collective gives them the possibility of working in a climate of discussion and continuous artistic stimulation, creating their works in close contact with the performers, who will be able to lead them to a more conscious and idiomatic writing of the instruments themselves.',
            'about-paragraph1.3' : 'This collective does not present itself as an associative reality of the Third Sector. This choice derives mainly from the fact that setting up an association from scratch would have caused, at least in an initial phase, a considerable expenditure of time and energy which can and must be invested in composing and playing. However, the collective aims to establish solid contacts with existing associations that have common objectives and that express themselves favorably in collaborating with the ensemble and in providing any economic/financial support (adhesion to tenders/fund requests).',
            'about-paragraph1.4' : 'The need to promote ensembles specialized in contemporary repertoire, even more so if they push composers to produce new music, is becoming increasingly evident in recent times. In fact, contemporary music presents specific difficulties that are very different from those of the "classical" repertoire, just think of the increase in a sound vocabulary resulting from the birth of new performance techniques, requiring a high degree of specialization and interest. To restore to this music the greater respect and care that it requires, it appears essential that the ensembles dedicate themselves to it in a targeted manner, working in close contact with the composers for the time necessary to assimilate their creative thought. Furthermore, the Bottega Sonora Ensemble project starts from the idea of ​​first involving the main cultural centers of central Italy, where contemporary music does not always find fertile ground, but indeed often plays a rather marginal role. Fighting the ideal that this type of music can only be made outside our country will be one of our first concerns, without however precluding possible collaborations with institutions/composers everywhere.',
            'about-objectives-1' : "Build a repertoire of contemporary music varied in aesthetics and forms of composition;",
            'about-objectives-2' : "Stimulate and encourage the composition of unpublished works;",
            'about-objectives-3' : 'Disseminate and raise awareness regarding issues related to "new music";',
            'about-objectives-4' : "Creation of a network of contacts and collaborations with contemporary music companies present on the national territory.",
            'about-bullet-1' : 'One of the primary objectives of the ensemble lies in the study and in-depth analysis of a vast already existing repertoire such as that of "contemporary cultured music" (art music of the 20th and 21st centuries); this is in order to promote greater historical awareness and to contribute to contextualising the present through the execution of new works. Furthermore, the possibility of carrying out work on the recovery and valorisation of lesser-known scores from the last century is not excluded.',
            'about-bullet-2' : "The creation of new unpublished works by composers represents a further crucial prerogative in the ensemble's activities. In addition to the constant work with the composers of the collective, new works will be requested from composers already included in the national and international scene, through direct knowledge or by publishing 'call for scores' for recordings and/or concerts and events proposed by them.",
            'about-bullet-3' : "Dissemination represents a fundamental aspect within the collective's artistic activity and aims to facilitate accessibility to contemporary music, both in terms of availability of the repertoire and the offer of new interpretations). The intention is to disseminate as much as possible the works carried out by the ensemble in the various forms provided by the media and spaces used for cultural activities: content on social media, podcasts, conferences and interventions during concerts, listening guides and training activities further within schools and conservatories. In fact, we believe that this awareness must start from the educational system itself, starting from the AFAM institutes, where young people too often are not introduced to and/or educated about contemporary music (in some situations they are even discouraged) if not by mere chance.",
            'about-bullet-4' : "The support of contemporary music bodies and institutions operating on national soil will be fundamental for the organization and realization of concerts, events, recordings and research projects. The objective is to create a union of intentions in order to establish profitable and long-lasting relationships with the aforementioned bodies, offering them professionalism and quality in exchange for opportunities to express themselves, both for the performers and for the composers.",
            'about-bullet-title-1' : '1. Build a repertoire of "contemporary music"',
            'about-bullet-title-2' : "2. Stimulate and encourage the composition of new unpublished works",
            'about-bullet-title-3' : '3. Dissemination and awareness on issues related to "new music"',
            'about-bullet-title-4' : "4. Creation of contacts and collaborations with contemporary music companies",
            //============================================Projects============================================//
            'projects-title' : "Projects",
            'projects-subtitle' : "Be sure to check out our projects!",
            'projects-description-1' : "Prime Esecuzioni project consists of one (or more) meetings, to be held with a view to a regular annual, within which it will be possible to listen exclusively to unreleased works created by composers.",
            'projects-description-2' : "Coming Soon...",
            //============================================Footer============================================//
            'footer-top' : "Back on Top",
            'footer-col-name-1' : "Useful Links",
            'footer-col-name-2' : "Rapid Contacts",
            'footer-col-name-3' : "Legal",
            'footer-home' : "Home",
            'footer-team' : "Team",
            'footer-events' : "Events",
            'footer-contacts' : "Contacts",
            'footer-mail-1' : "Our Company Email",
            'footer-mail-2' : "General Manager",
            'footer-mail-3' : "Event Manager",
            'footer-mail-4' : "Graphic Designer",
            'footer-legal-1' : "Privacy",
            'footer-legal-2' : "Copyright",
            'footer-legal-3' : "Credits",
            'footer-credits' : 'Designed and developed with <a class="bi bi-heart-fill"></a> by <a href="https://riccardomordente.com/" target="_blank">Riccardo Mordente</a> using <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>',
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
            'follow-side': '&nbsp SEGUICI',
            //============================================Team============================================//
            'team-title' : 'Il Team',
            'team-subtitle' : 'Incontra il nostro Team... bla bla bla',
            'team-filter-all' : 'Tutti',
            'team-filter-musician' : 'Esecutori',
            'team-filter-composer' : 'Compositori',
            'team-filter-staff' : 'Staff',
            'team-role-clarinetist' : 'Clarinettista',
            'team-role-percussionist' : 'Percussionista',
            'team-role-composer' : 'Compositore',
            'team-role-cellist' : 'Cellista',
            'team-role-composer/cellist' : 'Compositore/Cellista',
            //============================================About============================================//
            'about-title' : 'Su di Noi',
            'about-subtitle-1' : 'PANORAMICA',
            'about-subtitle-2' : 'OBIETTIVI PRINCIPALI',
            'about-subsubtitle-1' : 'Definizione di un nucleo iniziale di interpreti/compositori',
            'about-subsubtitle-2' : 'Posizione all’interno del contesto istituzionale',
            'about-subsubtitle-3' : 'Specializzazione stilistica e logistica',
            'about-paragraph1.1' : 'Si intende manifestare la volontà e la necessità di costituire un collettivo formato da di giovani musicisti, interpreti e compositori, che si ponga come principali obiettivi la divulgazione e la sensibilizzazione della musica contemporanea attraverso attività concertistica, registrazioni audio/video e promozione sui social media. Il progetto mira ad instaurare un clima di confronto, che favorisca delle opportunità di arricchimento artistico mediante continui stimoli e, in ultimo,  che presenti dei riscontri effettivi nel campo della musica d’arte di nuova realizzazione .',
            'about-paragraph1.2' : "L’ensemble di esecutori è costituito da giovani musicisti interessati al repertorio contemporaneo che  desiderano intraprendere un percorso di esplorazione della nuova musica in tutte le sue forme, stili e linguaggi. Anche i compositori  sono parte integrante dell'ensemble: la loro presenza all’interno del  collettivo  da infatti loro la possibilità di lavorare in un clima di confronto e di continua stimolazione artistica  realizzando le proprie opere a stretto contatto con gli esecutori, i quali potranno condurli a una scrittura più consapevole e  idiomatica degli strumenti stessi.",
            'about-paragraph1.3' : 'Tale collettivo non si pone come realtà associativa del Terzo Settore. Questa scelta deriva principalmente dal fatto che  costituire un’associazione da zero avrebbe causato, almeno in una fase iniziale, un notevole dispendio di tempo ed energie che possono e devono essere investiti per comporre e per suonare. Tuttavia il collettivo mira ad instaurare solidi contatti con realtà associative esistenti che abbiano obiettivi comuni e che si esprimano favorevolmente nel collaborare con l’ensemble e nel fornire eventuale supporto economico/finanziario (adesione bandi/richieste fondi).',
            'about-paragraph1.4' : "La necessità di promuovere ensemble specializzati nel repertorio contemporaneo, ancora di più se spingono i compositori a produrre musica nuova, si sta palesando sempre di più negli ultimi tempi. La musica contemporanea infatti presenta difficoltà specifiche anche molto diverse da quelle del repertorio “classico”, si pensi solo all’incremento di un vocabolario sonoro scaturito dalla nascita di nuove tecniche esecutive, richiedendo un alto grado di specializzazione ed interesse. Per restituire a questa musica il maggior rispetto e la cura che essa necessita, appare  indispensabile che gli ensemble vi si dedichino in maniera mirata, lavorando a stretto contatto con i compositori per il tempo necessario ad  assimilare il loro pensiero creativo. Inoltre, il progetto del Bottega Sonora Ensemble parte dall'idea di coinvolgere in primo luogo i principali poli culturali dell’Italia centrale, dove la musica contemporanea non sempre trova terreno fertile, ma anzi spesso ricopre un ruolo piuttosto marginale. Combattere l’ideale che questo tipo di musica si possa fare solo fuori dal nostro paese sarà una delle nostre prime preoccupazioni, senza però precludere eventuali collaborazioni con enti/compositori di ogni dove.",
            'about-paragraph1.4' : 'The need to promote ensembles specialized in contemporary repertoire, even more so if they push composers to produce new music, is becoming increasingly evident in recent times. In fact, contemporary music presents specific difficulties that are very different from those of the "classical" repertoire, just think of the increase in a sound vocabulary resulting from the birth of new performance techniques, requiring a high degree of specialization and interest. To restore to this music the greater respect and care that it requires, it appears essential that the ensembles dedicate themselves to it in a targeted manner, working in close contact with the composers for the time necessary to assimilate their creative thought. Furthermore, the Bottega Sonora Ensemble project starts from the idea of ​​first involving the main cultural centers of central Italy, where contemporary music does not always find fertile ground, but indeed often plays a rather marginal role. Fighting the ideal that this type of music can only be made outside our country will be one of our first concerns, without however precluding possible collaborations with institutions/composers everywhere.',
            'about-objectives-1' : "Costituire un repertorio di musica contemporanea variegato nelle estetiche e nelle forme del comporre;",
            'about-objectives-2' : "Stimolare e favorire la composizione di  opere inedite;",
            'about-objectives-3' : 'Divulgare e sensibilizzare riguardo tematiche legate alla “nuova musica”;',
            'about-objectives-4' : "Creazione di una rete di contatti e collaborazioni con le società di musica contemporanea presenti sul territorio nazionale.",
            'about-bullet-1' : "Uno degli obiettivi primari dell’ensemble  risiede nello studio e nell’approfondimento di un vasto repertorio già esistente  come quello della “musica colta contemporanea” (musica d’arte del XX e XXI secolo); ciò al fine di favorire una maggiore consapevolezza storica e di contribuire a contestualizzare il presente mediante l’esecuzione di nuove opere.  Non si esclude poi la possibilità di effettuare un lavoro di recupero e di valorizzazione di partiture meno conosciute del secolo scorso.",
            'about-bullet-2' : "La  creazione di  nuove opere inedite da parte dei compositori rappresenta un’ulteriore prerogativa cruciale nelle attività dell’ensemble. Oltre al costante lavoro con i compositori del collettivo, verranno richieste nuove opere a compositori già inseriti nella scena nazionale e internazionale, per conoscenza diretta o   pubblicando “call for scores” per registrazioni e/o concerti ed eventi da loro proposti.",
            'about-bullet-3' : "La divulgazione rappresenta un aspetto fondamentale all’interno dell’attività artistica del collettivo e si pone con l'obiettivo di facilitare l'accessibilità alla musica contemporanea, sia in termini di reperibilità del repertorio che di offerta di nuove chiavi di lettura). L’intenzione è quella di divulgare il più possibile i lavori svolti dall’ensemble  nelle varie forme fornite dai media e dagli spazi adibiti ad attività culturali: contenuti sui social, podcast, conferenze ed interventi durante i concerti, guide all’ascolto ed attività formative ulteriori all’interno di scuole e conservatori. Riteniamo infatti che tale sensibilizzazione debba partire proprio dal sistema educativo, iniziando dagli istituti AFAM, dove i ragazzi troppo spesso non vengono avvicinati e/o educati alla musica contemporanea (in alcune realtà sono persino disincentivati) se non per mera casualità..",
            'about-bullet-4' : "Il supporto di enti ed istituzioni di musica contemporanea che operano sul suolo nazionale sarà fondamentale per l’organizzazione e la realizzazione di concerti, eventi, registrazioni e progetti di ricerca. L'obiettivo è quello di creare un’unione di intenti al fine di instaurare dei rapporti proficui e duraturi con suddetti enti, offrendo loro professionalità e qualità in cambio di opportunità per esprimersi, tanto per gli esecutori quanto per i compositori.",
            'about-bullet-title-1' : '1. Costituire un repertorio di “musica contemporanea”',
            'about-bullet-title-2' : "2. Stimolare e favorire la composizione di nuove opere inedite",
            'about-bullet-title-3' : '3. Divulgazione  e sensibilizzazione su tematiche legate alla “nuova musica”',
            'about-bullet-title-4' : "4. Creazione di contatti e collaborazioni con le società di musica contemporanea",
            //============================================Projects============================================//
            'projects-title' : "Progetti",
            'projects-subtitle' : "Scopri i nostri progetti!",
            'projects-description-1' : "Il progetto “Prime esecuzioni” consiste in uno (o più) incontri, da tenersi nell’ottica di una cadenza annuale, all’interno del quale sarà possibile ascoltare esclusivamente lavori inediti realizzati da compositori.",
            'projects-description-2' : "Ci stiamo lavorando...",
            //============================================Footer============================================//
            'footer-top' : "Torna su",
            'footer-col-name-1' : "Link Utili",
            'footer-col-name-2' : "Contatti Rapidi",
            'footer-col-name-3' : "Legal",
            'footer-home' : "Home",
            'footer-team' : "Team",
            'footer-events' : "Eventi",
            'footer-contacts' : "Contatti",
            'footer-mail-1' : "Email Aziendale",
            'footer-mail-2' : "General Manager",
            'footer-mail-3' : "Event Manager",
            'footer-mail-4' : "Graphic Designer",
            'footer-legal-1' : "Privacy",
            'footer-legal-2' : "Copyright",
            'footer-legal-3' : "Crediti",
            'footer-credits' : 'Disegnato e sviluppato con <a class="bi bi-heart-fill"></a> da <a href="https://riccardomordente.com/" target="_blank">Riccardo Mordente</a> con il supporto della libreria <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>',
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
        updateInnerHtmlElement('team-title', currentTexts['team-title']);
        updateInnerHtmlElement('team-subtitle', currentTexts['team-subtitle']);
        updateInnerHtmlElement('team-filter-musician', currentTexts['team-filter-musician']);
        updateInnerHtmlElement('team-filter-composer', currentTexts['team-filter-composer']);
        updateInnerHtmlElement('team-filter-staff', currentTexts['team-filter-staff']);
        updateInnerHtmlElement('team-filter-all', currentTexts['team-filter-all']);
        updateInnerHtmlElement('team-role-clarinetist', currentTexts['team-role-clarinetist']);
        updateInnerHtmlElement('team-role-percussionist', currentTexts['team-role-percussionist']);
        updateInnerHtmlElement('team-role-composer', currentTexts['team-role-composer']);
        updateInnerHtmlElement('team-role-cellist', currentTexts['team-role-cellist']);
        updateInnerHtmlElement('about-title', currentTexts['about-title']);
        updateInnerHtmlElement('about-subtitle-1', currentTexts['about-subtitle-1']);
        updateInnerHtmlElement('about-subtitle-2', currentTexts['about-subtitle-2']);
        updateInnerHtmlElement('about-subsubtitle-1', currentTexts['about-subsubtitle-1']);
        updateInnerHtmlElement('about-subsubtitle-2', currentTexts['about-subsubtitle-2']);
        updateInnerHtmlElement('about-subsubtitle-3', currentTexts['about-subsubtitle-3']);
        updateInnerHtmlElement('about-subsubtitle-4', currentTexts['about-subsubtitle-4']);
        updateInnerHtmlElement('about-paragraph1.1', currentTexts['about-paragraph1.1']);
        updateInnerHtmlElement('about-paragraph1.2', currentTexts['about-paragraph1.2']);
        updateInnerHtmlElement('about-paragraph1.3', currentTexts['about-paragraph1.3']);
        updateInnerHtmlElement('about-paragraph1.4', currentTexts['about-paragraph1.4']);
        updateInnerHtmlElement('about-objectives-1', currentTexts['about-objectives-1']);
        updateInnerHtmlElement('about-objectives-2', currentTexts['about-objectives-2']);
        updateInnerHtmlElement('about-objectives-3', currentTexts['about-objectives-3']);
        updateInnerHtmlElement('about-objectives-4', currentTexts['about-objectives-4']);
        updateInnerHtmlElement('about-bullet-1', currentTexts['about-bullet-1']);
        updateInnerHtmlElement('about-bullet-2', currentTexts['about-bullet-2']);
        updateInnerHtmlElement('about-bullet-3', currentTexts['about-bullet-3']);
        updateInnerHtmlElement('about-bullet-4', currentTexts['about-bullet-4']);
        updateInnerHtmlElement('about-bullet-title-1', currentTexts['about-bullet-title-1']);
        updateInnerHtmlElement('about-bullet-title-2', currentTexts['about-bullet-title-2']);
        updateInnerHtmlElement('about-bullet-title-3', currentTexts['about-bullet-title-3']);
        updateInnerHtmlElement('about-bullet-title-4', currentTexts['about-bullet-title-4']);
        updateInnerHtmlElement('footer-top', currentTexts['footer-top']);
        updateInnerHtmlElement('footer-col-name-1', currentTexts['footer-col-name-1']);
        updateInnerHtmlElement('footer-col-name-2', currentTexts['footer-col-name-2']);
        updateInnerHtmlElement('footer-col-name-3', currentTexts['footer-col-name-3']);
        updateInnerHtmlElement('footer-home', currentTexts['footer-home']);
        updateInnerHtmlElement('footer-events', currentTexts['footer-events']);
        updateInnerHtmlElement('footer-team', currentTexts['footer-team']);
        updateInnerHtmlElement('footer-contacts', currentTexts['footer-contacts']);
        updateInnerHtmlElement('footer-mail-1', currentTexts['footer-mail-1']);
        updateInnerHtmlElement('footer-mail-2', currentTexts['footer-mail-2']);
        updateInnerHtmlElement('footer-mail-3', currentTexts['footer-mail-3']);
        updateInnerHtmlElement('footer-mail-4', currentTexts['footer-mail-4']);
        updateInnerHtmlElement('footer-legal-1', currentTexts['footer-legal-1']);
        updateInnerHtmlElement('footer-legal-2', currentTexts['footer-legal-2']);
        updateInnerHtmlElement('footer-legal-3', currentTexts['footer-legal-3']);
        updateInnerHtmlElement('footer-credits', currentTexts['footer-credits']);
        updateInnerHtmlElement('projects-title', currentTexts['projects-title']);
        updateInnerHtmlElement('projects-subtitle', currentTexts['projects-subtitle']);
        updateInnerHtmlElement('projects-description-1', currentTexts['projects-description-1']);
        updateInnerHtmlElement('projects-description-2', currentTexts['projects-description-2']);

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
