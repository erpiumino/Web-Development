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
            'team-role-clarinetist': 'Clarinetist',
            'team-role-percussionist' : 'Percussionist',
            'team-role-composer' : 'Composer',
            'team-role-cellist' : 'Cellist',
            'team-role-flautist' : 'Flautist',
            'team-role-harpist' : 'Harpist',
            'team-role-violinist' : 'Violinist',
            'team-role-saxophonist' : 'Saxophonist',
            'team-role-pianist' : 'Pianist',
            'team-role-violist' : 'Violist',
            'team-role-general-manager' : 'General Manager',
            'team-role-designer' : 'Designer',
            'team-role-developer' : 'Developer',
            'team-role-artistic-director' : 'Artistic Director',
            //============================================Team(Personal Page)============================================//
            'team-pp-info' : 'Personal Info',
            'team-pp-birthday' : 'Birthday',
            'team-pp-role' : 'Role',
            'team-pp-degree' : 'Degree',
            'team-pp-date' : 'Member since',
            'team-pp-resume' : 'Resume',
            'team-pp-contact' : 'Contact',
            'team-pp-luca-giuliani-1' : "Born in L'Aquila in 1997, in 2017 he graduated brilliantly in clarinet from the 'A.Casella' conservatory in L'Aquila under the guidance of Maestro Lee YinNigh. He subsequently obtained a level II academic diploma in 'Special Instruments chamber music - clarinet' with 110 cum laude under the guidance of Maestro Roberto Petrocchi at the “A.Casella” music conservatory. He took part in high-level masterclasses in clarinet held by masters Fabrizio Meloni, Calogero Palermo, Peter Szucs, Simone Nicoletta, Angelo De Angelis, Gianmarco Casani, Gianluca Sulli, Marge Loharu.",
            'team-pp-luca-giuliani-2' : "He has participated in and won national and international competitions such as the “VIII Città di Greci Trophy Competition”, the “Giovani Musicians” of Rome, “XV International Competition P. Barrasso”, “IV National Competition “Urania”, “IX Competition Marco Dall’Aquila”. In 2015 she formed the chamber duo “Giuliani-Rizzuto” performing in various events and competitions. In October 2016 he performed for the “34th Korea International Music Festival” in South Korea in collaboration with the Seoul Orchestra at the Seoul Art Center hall, Young-in Poeun Art Center and in Suncheon Culture and Art Center. Since 2017 he has collaborated with the musical organization Società dei Concerti “B.Barattelli” participating in numerous projects including the first three editions of the “Youth Culture Experimentation” project.",
            'team-pp-alfonso-1' : "His passion for music began at a young age but he began his musical studies in 16 years under the guidance of M.Claudio Bollini, and then continuing with M.Lorenzo Polyandrous. During his training years he attended masterclasses held by renowned drummers international such as: Ian Paice, Roberto Gatto, Christian Mayer, Roberto Pistolesi, John B. Arnold.",
            'team-pp-alfonso-2' : "At 19, in parallel with his drum studies, he began his studies in Classical Percussion at the Casella dell'Aquila conservatory where he graduated brilliantly under the guidance of Maestro Massimo Di Rocco, subsequently with the M.Alessandro Tomassetti and concludes his journey with M.Gianluca Ruggeri with the top marks. He is currently attending the two-year course in the same institute specialization in ensemble music.",
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
            'team-role-clarinetist': 'Clarinettista',
            'team-role-percussionist' : 'Percussionista',
            'team-role-composer' : 'Compositore',
            'team-role-cellist' : 'Cellista',
            'team-role-flautist' : 'Flautista',
            'team-role-harpist' : 'Arpista',
            'team-role-violinist' : 'Violinista',
            'team-role-saxophonist' : 'Sassofonista',
            'team-role-pianist' : 'Pianista',
            'team-role-violist' : 'Violista',
            'team-role-general-manager' : 'General Manager',
            'team-role-designer' : 'Designer',
            'team-role-developer' : 'Developer',
            'team-role-artistic-director' : 'Direttore Artistico',
            //============================================Team(Personal Page)============================================//
            'team-pp-info' : 'Informazioni Personali',
            'team-pp-birthday' : 'Compleanno',
            'team-pp-role' : 'Ruolo',
            'team-pp-degree' : 'Qualifica',
            'team-pp-date' : 'Membro da',
            'team-pp-resume' : 'Curriculum',
            'team-pp-contact' : 'Contatto',
            'team-pp-luca-giuliani-1' : "Nato a L’Aquila nel 1997, nel 2017 si diploma brillantemente in clarinetto presso il conservatorio “A.Casella” di L’Aquila sotto la guida del Maestro Lee YinNigh.Successivamente consegue il diploma accademico di II livello in”Strumenti ad indirizzo cameristico – clarinetto” con 110 e lode sotto la guida del Maestro Roberto Petrocchi presso il conservatorio di musica “A.Casella”.Ha preso parte a Masterclass di alto perfezionamento in clarinetto tenute dai maestri Fabrizio Meloni, Calogero Palermo, Peter Szucs, Simone Nicoletta, Angelo De Angelis, Gianmarco Casani, Gianluca Sulli, Marge Loharu.",
            'team-pp-luca-giuliani-2' : "Ha partecipato e vinto concorsi nazionali e internazionali quali “VIII Concorso Trofeo Città di Greci”, concorso e rassegna “Giovani Musici” di Roma, “XV concorso Internazionale P.Barrasso”, “IV Concorso Nazionale “Urania”, “IX Concorso Marco Dall’Aquila”.Nel 2015 ha formato il duo cameristico “Giuliani-Rizzuto” esibendosi in varie manifestazioni e concorsi. Nell’Ottobre del  2016 si è esibito per il “34° Korea International Music Festival” in Corea del Sud in collaborazione con la Seul orchestra presso la salla del Seul Art Center, Young-in Poeun Art Center e nel Suncheon Culture and Art Center. Dal 2017 collabora con l’ente musicale Società dei Concerti “B.Barattelli” partecipando in numerosi progetti tra cui le prime tre edizioni del progetto “Sperimentazione Cultura Giovani”." ,
            'team-pp-alfonso-1' : "La sua passione per la musica nasce sin dalla giovane età ma inizia gli studi musicali a 16 anni sotto la guida del M.Claudio Bollini, per poi proseguire con il M.Lorenzo Poliandri. Durante gli anni di formazione segue masterclass tenute da batteristi di fama internazionale quali: Ian Paice, Roberto Gatto, Christian Mayer, Roberto Pistolesi, John B.Arnold.",
            'team-pp-alfonso-2' : "A 19 anni parallelamente allo studio della batteria intraprende il percorso di studi in Percussioni Classiche presso il conservatorio Casella dell’Aquila dove si laurea brillantemente sotto la guida del Maestro Massimo Di Rocco, successivamente con il M.Alessandro Tomassetti e conclude il suo percorso con il M.Gianluca Ruggeri con il massimo dei voti. Attualmente frequenta, nel medesimo istituto, il corso biennale di specializzazione in Musica d'insieme.",
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

        // Update elements by ID
        Object.keys(currentTexts).forEach(id => {
            updateTextElement(id, currentTexts[id]);
            updateInnerHtmlElement(id, currentTexts[id]);
        });

        // Update elements by class
        const translatableElements = document.querySelectorAll('.translatable');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (currentTexts[key]) {
                element.innerHTML = currentTexts[key];
            } else {
                console.warn(`No text found for key: ${key}`);
            }
        });

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
