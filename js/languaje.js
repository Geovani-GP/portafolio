


var setlang=1;

document.getElementsByClassName('es')[0].setAttribute('style', ' opacity:0.5;transition:1s');
document.getElementsByClassName('en')[0].setAttribute('style', ' opacity:1; transition:1s');

// vars text
var load = ["Cargando","Loading"];
var spec = ["Ingeniero Senior de Software de Plataforma","Senior Platform Software Engineer"];
var prof = ["Integración empresarial y soporte de producción","Enterprise Integration & Production Support"];

var op1 = ["Principal","Home"];
var op2 = ["Objetivos","Objectives"];
var op3 = ["Experiencia","Experience"];
var op4 = ["Referencias","References"];
var op5 = ["Educación","Education"];
var op6 = ["Habilidades","Skills"];
var op7 = ["Trabajos","Jobs"];
var op8 = ["Contacto","Contact"];

var opt2_body = ["Ingeniero Senior de Software de Plataforma con más de 8 años de experiencia en integraciones empresariales, soporte de producción, tecnologías cloud y desarrollo full-stack. Mi experiencia más reciente fue en Oracle Customer Success Services (CSS), apoyando a clientes empresariales en plataformas de integración y entornos críticos.","Senior Platform Software Engineer with 8+ years of experience in enterprise integrations, production support, cloud technologies, and full-stack development. My most recent role was with Oracle Customer Success Services (CSS), supporting enterprise customers across integration platforms and critical environments."];

var data1=["Especialidades técnicas", "Technical expertise"];
var data2=["Integración, cloud y desarrollo", "Integration, cloud & development"];
var data3=["Red profesional", "Professional network"];
var data4=["Contacta conmigo","Contact me"]
var data5=["Ciudad de México, México", "Mexico City, Mexico"];

var contactTitle=["Hablemos","Let's connect"];
var contactIntro=["Estoy disponible para conversar sobre oportunidades profesionales, proyectos de integración empresarial y desarrollo de software.","I'm available to discuss professional opportunities, enterprise integration projects, and software development."];
var contactAvailability=["Disponible para oportunidades profesionales y colaboraciones.","Available for professional opportunities and collaborations."];
var contactEmail=["Correo electrónico","Email"];
var contactWhatsapp=["WhatsApp","WhatsApp"];
var contactLinkedIn=["LinkedIn","LinkedIn"];
var contactEmailAction=["Enviar correo","Send email"];
var contactWhatsappAction=["Enviar mensaje","Send message"];
var contactLinkedInAction=["Ver perfil","View profile"];
var skillsTitle=["Habilidades","Skills"];
var skillsSummaryTitle=["Competencias principales","Core competencies"];
var skillsSummaryBody=["Oracle Integration Cloud (OIC) · Managed File Transfer (MFT) · Oracle Data Integrator (ODI) · ERP · OSB · PL/SQL · BI Publisher · WebLogic · APIs · Middleware · OCI · Azure · AWS · DevOps · CI/CD · Angular · Ionic · TypeScript · Firebase · Mitek · Veridas · OCR","Oracle Integration Cloud (OIC) · Managed File Transfer (MFT) · Oracle Data Integrator (ODI) · ERP · OSB · PL/SQL · BI Publisher · WebLogic · APIs · Middleware · OCI · Azure · AWS · DevOps · CI/CD · Angular · Ionic · TypeScript · Firebase · Mitek · Veridas · OCR"];

var perf1=["Perfil profesional","Professional profile"];
var perf2=["Ubicación: Ciudad de México, México","Location: Mexico City, Mexico"];
var perf3=["Experiencia más reciente: Oracle CSS","Most recent role: Oracle CSS"];
var perf4=["Modalidad: Remoto","Work arrangement: Remote"];
var perf5=["Correo: laweb.com","Email: laweb.com"];
var perf6=["Teléfono: +52 953 109 0222","Phone: +52 953 109 0222"];
var perf7=["Resumen","Summary"];
var perf8=["Especialista en Oracle Integration Cloud, MFT, ODI, ERP, PL/SQL, WebLogic, OSB, APIs y middleware. Complemento esta experiencia con Angular, Ionic, TypeScript, Firebase, Azure, AWS y Oracle Cloud Infrastructure para analizar incidencias de extremo a extremo y entregar soluciones confiables.","Specialist in Oracle Integration Cloud, MFT, ODI, ERP, PL/SQL, WebLogic, OSB, APIs, and middleware. I complement this expertise with Angular, Ionic, TypeScript, Firebase, Azure, AWS, and Oracle Cloud Infrastructure to analyze end-to-end incidents and deliver reliable solutions."];

var exp1=["Experiencia","Experience"];
var exp2=["Trayectoria profesional en integración empresarial, soporte de producción, cloud, DevOps y desarrollo full-stack.","Professional experience across enterprise integration, production support, cloud, DevOps, and full-stack development."];
var expOracleDate=[`2025 <span>/ Noviembre</span> - 2026 <span>/ Septiembre</span>`,`2025 <span>/ November</span> - 2026 <span>/ September</span>`];
var expOracleTitle=["Ingeniero Senior de Software de Plataforma","Senior Platform Software Engineer"];
var expOracleDescription=[`<ul><li>Brindé soporte a clientes empresariales en OIC, MFT, ODI, OSB, ERP, PL/SQL, WebLogic, APIs y middleware en entornos productivos.</li><li>Investigué incidentes en interfaz, API, middleware, base de datos, transferencia de archivos e integración; realizo análisis de causa raíz y apoyo la implementación de correcciones permanentes.</li><li>Apoyé la estabilidad de producción, actividades de go-live, resolución de incidentes y ejecución controlada de cambios mediante RFC/CAB.</li><li>Colaboré con equipos técnicos y funcionales para diagnosticar fallas, validar flujos de datos y reducir el impacto operativo.</li><li>Contribuí a la renovación regional de wallets ATP: revisión de vencimientos, seguimiento en Confluence, creación de RFCs, coordinación de aprobaciones y ejecución multirregional.</li><li>Apoyé el inventario de schedulers OIC y la transición de integraciones configuradas con cuentas personales a cuentas de sistema.</li><li>Participé en el onboarding de dos compañeros de Brasil: accesos, conectividad, seguimiento de RFCs y preparación de planes de acción.</li><li>Prototipé mejoras internas de productividad para estandarizar actividades recurrentes de soporte y seguimiento de RFCs.</li></ul>`,`<ul><li>Supported enterprise customers across OIC, MFT, ODI, OSB, ERP, PL/SQL, WebLogic, APIs, and middleware in production environments.</li><li>Troubleshot incidents across UI, API, middleware, database, file-transfer, and integration layers; perform root-cause analysis and support permanent fixes.</li><li>Supported production stability, go-live activities, incident resolution, and controlled change execution through RFC/CAB processes.</li><li>Collaborated with technical and functional teams to diagnose failures, validate data flows, and reduce operational impact.</li><li>Contributed to a regional ATP wallet renewal initiative, including expiration review, Confluence tracking, RFC creation, approval coordination, and multi-region execution.</li><li>Supported the OIC scheduler inventory and the transition from personal accounts to system users for scheduled integrations.</li><li>Onboarded two teammates from Brazil on access, connectivity, RFC tracking, and action-plan preparation.</li><li>Prototyped internal productivity improvements to standardize recurring support activities and RFC follow-up.</li></ul>`];
var exp3=[`2025 <span id="exp3">/ Julio</span> - 2025 <span>/ Octubre</span>`,`2025 <span id="exp3">/ July</span> - 2025 <span>/ October</span>`];
var exp4=["Desarrollador Cloud DevOps","Cloud DevOps Developer"];
var exp5=[`<ul><li>Apoyé infraestructura cloud, procesos de despliegue y confiabilidad operativa de servicios en Azure y AWS.</li><li>Participé en despliegues, monitoreo, resolución de incidencias y soporte operativo para servicios cloud.</li><li>Colaboré con equipos de desarrollo y operaciones para mejorar la confiabilidad de releases y la resolución de problemas.</li><li>Apliqué prácticas de automatización y operaciones cloud en procesos tecnológicos críticos.</li></ul>`,`<ul><li>Supported cloud infrastructure, deployment processes, and operational reliability across Azure and AWS environments.</li><li>Worked on deployment, monitoring, incident resolution, and operational support for cloud-based services.</li><li>Collaborated with development and operations teams to improve release reliability and issue resolution.</li><li>Applied automation and cloud-operations practices to support business-critical technology processes.</li></ul>`];
var exp6=[`2022 <span>/ Junio</span> - 2025 <span>/ Abril</span>`,`2022 <span>/ June</span> - 2025 <span>/ April</span>`];
var exp7=["Ingeniero Tecnológico Senior","Senior Technological Engineer"];
var exp8=[`<ul><li>Lideré el desarrollo de más de cinco aplicaciones móviles para validación de identidad con Angular, Ionic y TypeScript.</li><li>Integré SDKs biométricos Mitek y Veridas, aumentando la precisión de captura de 90% a 98%.</li><li>Optimicé flujos OCR con lazy loading y caché, reduciendo el tiempo de respuesta aproximadamente 35%.</li><li>Implementé módulos Angular reutilizables que aceleraron el desarrollo de proyectos paralelos.</li><li>Diseñé interfaces con animaciones SVG/CSS y colaboré con backend en APIs REST para procesamiento seguro de datos.</li></ul>`,`<ul><li>Led the development of 5+ mobile identity-validation applications using Angular, Ionic, and TypeScript.</li><li>Integrated Mitek and Veridas biometric SDKs, improving capture accuracy from 90% to 98%.</li><li>Optimized OCR workflows with lazy loading and caching, reducing response time by approximately 35%.</li><li>Implemented reusable Angular modules that accelerated development across parallel projects.</li><li>Designed interfaces with SVG/CSS animations and collaborated on REST APIs for secure data processing.</li></ul>`];
var exp9=[`2021 <span>/ Mayo</span> - 2025 <span>/ Febrero</span>`,`2021 <span>/ May</span> - 2025 <span>/ February</span>`];
var exp10=["Consultor Oracle Senior y Desarrollador Full Stack","Senior Oracle Consultant & Full Stack Developer"];
var exp11=[`<ul><li>Brindé consultoría Oracle y soporte de producción para clientes empresariales en Estados Unidos, Canadá y México.</li><li>Trabajé con ERP, OSB, OIC, ODI, MFT, PL/SQL, BI Publisher y middleware en flujos de integración de extremo a extremo.</li><li>Resolví incidentes N1–N3 bajo SLA para reducir indisponibilidad y mejorar la continuidad operativa.</li><li>Configuré procesos MFT seguros entre sistemas críticos y desarrollé flujos OSB/OIC para procesos de negocio.</li><li>Actualicé lógica PL/SQL, modelos de datos ERP y reportes BI Publisher; apoyé migración, transformación y validación de datos con ODI.</li><li>Participé en procesos CAB, cambios controlados e implementación en producción.</li><li>En un programa regional de bienes de consumo, trabajé durante 36 meses como consultor Oracle PL/SQL, ERP, OSB, OIC y ODI para las regiones R1/R2 de Canadá y Estados Unidos.</li><li>En un proyecto de retail, participé ocho meses como consultor Oracle Java y ODI.</li></ul>`,`<ul><li>Provided Oracle consulting and production support for enterprise customers across the United States, Canada, and Mexico.</li><li>Worked with ERP, OSB, OIC, ODI, MFT, PL/SQL, BI Publisher, and middleware in end-to-end integration flows.</li><li>Resolved N1–N3 incidents under SLA-driven processes to reduce downtime and improve operational continuity.</li><li>Configured secure MFT processes between critical systems and developed OSB/OIC flows for business processes.</li><li>Updated PL/SQL logic, ERP data models, and BI Publisher reports; supported ODI data migration, transformation, and validation.</li><li>Participated in CAB processes, controlled changes, and production implementation.</li><li>Worked for 36 months on a regional consumer-goods program as an Oracle PL/SQL, ERP, OSB, OIC, and ODI consultant for the Canada and US R1/R2 regions.</li><li>Contributed for eight months to a retail project as an Oracle Java and ODI consultant.</li></ul>`];
var exp12=["También contribuí a iniciativas web y móviles con Angular, Ionic, Vue y Unity.","Also contributed to web and mobile initiatives using Angular, Ionic, Vue, and Unity."];
var exp13=[`2024 - 2025`,`2024 - 2025`];
var exp14=["Desarrollador Full Stack (Ionic/Angular/Firebase)","Full Stack Developer (Ionic/Angular/Firebase)"];
var exp15=[`<ul><li>Desarrollé Easymeet, una plataforma B2B/B2C de gestión de eventos con Ionic, Angular, Firebase, Stripe y Capacitor.</li><li>Lideré la migración de Flutter a Ionic/Angular para mejorar la velocidad de desarrollo y la compatibilidad multiplataforma.</li><li>Implementé panel administrativo, autenticación social, pagos, suscripciones y arquitectura Firebase.</li></ul>`,`<ul><li>Developed Easymeet, a B2B/B2C event-management platform built with Ionic, Angular, Firebase, Stripe, and Capacitor.</li><li>Led its migration from Flutter to Ionic/Angular to improve development speed and cross-platform compatibility.</li><li>Implemented an administrative panel, social authentication, payments, subscriptions, and Firebase architecture.</li></ul>`];
var exp16=[`2018 <span>/ Junio</span> - 2020 <span>/ Septiembre</span>`,`2018 <span>/ June</span> - 2020 <span>/ September</span>`];
var exp17=["Desarrollador Web","Web Developer"];
var exp18=[`<ul><li>Desarrollé aplicaciones Android nativas, soluciones Unity y herramientas internas.</li><li>Creé recursos gráficos de apoyo y colaboré bajo flujos de trabajo Scrumban.</li></ul>`,`<ul><li>Developed native Android applications, Unity solutions, and internal tools.</li><li>Created supporting graphic assets and worked under Scrumban delivery workflows.</li></ul>`];
var expDtiFullDate=[`2020 <span>/ Septiembre</span> - 2021 <span>/ Mayo</span>`,`2020 <span>/ September</span> - 2021 <span>/ May</span>`];
var expDtiFullTitle=["Desarrollador Full Stack","Full Stack Developer"];
var expDtiFullDescription=[`<ul><li>Desarrollé aplicaciones web y móviles con Angular, Ionic, Vue y JavaScript.</li><li>Trabajé con Unity, C#, PHP, MySQL, Oracle Database, HTML, CSS, Sass, SCSS y LESS.</li></ul>`,`<ul><li>Developed web and mobile applications using Angular, Ionic, Vue, and JavaScript.</li><li>Worked with Unity, C#, PHP, MySQL, Oracle Database, HTML, CSS, Sass, SCSS, and LESS.</li></ul>`];

var quo1=[`&quot;Con un amplio criterio de responsabilidad, desempeño un
excelente trabajo para nuestro negocio, creando una página web
en la que pudo solucionar nuestras necesidades, confiamos en que
realizara su trabajo de manera eficiente&quot;`,`&quot;With a broad criterion of responsibility, I perform a
excellent work for our business, creating a website
in which he was able to solve our needs, we trust that
perform your job efficiently&quot;`];
var quo2=[` &quot;Mis expectativas fueron superadas. Estamos muy contentos
de haber trabajado con Geovani para nuestra página web, aporto
ideas geniales para nuestro club.&quot;`,`&quot;My expectations were exceeded. We are very happy
having worked with Geovani for our website, I contribute
cool ideas for our club.&quot;`];
var quo3=[`&quot;Estamos confiados que el Ing. Geovani tiene las
habilidades para administrar y sobrellevar cualquier proyecto,
además que tiene una gran visión para añadir estilos e ideas
para manipular la información, maneja una planificación efectiva
que lo hace competente para realizar sus propios trabajos.&quot;`,`&quot;We are confident that Eng. Geovani has the
skills to manage and cope with any project,
plus he has a great vision to add styles and ideas
to manipulate information, manage effective planning
that makes you competent to do your own jobs.&quot;`];



//selector html
document.getElementById('load').innerHTML=load[setlang];
document.getElementById('specialty').innerHTML=spec[setlang];
document.getElementById('profession').innerHTML=prof[setlang];

document.getElementById('profession_bar').innerHTML=prof[setlang];
document.getElementById('opt1').innerHTML=op1[setlang];
document.getElementById('opt2').innerHTML=op2[setlang];
document.getElementById('opt3').innerHTML=op3[setlang];
document.getElementById('opt4').innerHTML=op4[setlang];
document.getElementById('opt5').innerHTML=op5[setlang];
document.getElementById('opt6').innerHTML=op6[setlang];
document.getElementById('opt7').innerHTML=op7[setlang];
document.getElementById('opt8').innerHTML=op8[setlang];

document.getElementById('opt2_title').innerHTML=op2[setlang];
document.getElementById('opt2_body').innerHTML=opt2_body[setlang];

document.getElementById('data1').innerHTML=data1[setlang];
document.getElementById('data2').innerHTML=data2[setlang];
document.getElementById('data3').innerHTML=data3[setlang];
document.getElementById('data4').innerHTML=data4[setlang];
document.getElementById('data5').innerHTML=data5[setlang];
document.getElementById('contactTitle').innerHTML=contactTitle[setlang];
document.getElementById('contactIntro').innerHTML=contactIntro[setlang];
document.getElementById('contactAvailability').innerHTML=contactAvailability[setlang];
document.getElementById('contactEmail').innerHTML=contactEmail[setlang];
document.getElementById('contactWhatsapp').innerHTML=contactWhatsapp[setlang];
document.getElementById('contactLinkedIn').innerHTML=contactLinkedIn[setlang];
document.getElementById('contactEmailAction').innerHTML=contactEmailAction[setlang];
document.getElementById('contactWhatsappAction').innerHTML=contactWhatsappAction[setlang];
document.getElementById('contactLinkedInAction').innerHTML=contactLinkedInAction[setlang];
document.getElementById('skillsTitle').innerHTML=skillsTitle[setlang];
document.getElementById('skillsSummaryTitle').innerHTML=skillsSummaryTitle[setlang];
document.getElementById('skillsSummaryBody').innerHTML=skillsSummaryBody[setlang];

document.getElementById('perf1').innerHTML=perf1[setlang];
document.getElementById('perf2').innerHTML=perf2[setlang];
document.getElementById('perf3').innerHTML=perf3[setlang];
document.getElementById('perf4').innerHTML=perf4[setlang];
document.getElementById('perf5').innerHTML=perf5[setlang];
document.getElementById('perf6').innerHTML=perf6[setlang];
document.getElementById('perf7').innerHTML=perf7[setlang];
document.getElementById('perf8').innerHTML=perf8[setlang];

document.getElementById('exp1').innerHTML=exp1[setlang];
document.getElementById('exp2').innerHTML=exp2[setlang];
document.getElementById('expOracleDate').innerHTML=expOracleDate[setlang];
document.getElementById('expOracleTitle').innerHTML=expOracleTitle[setlang];
document.getElementById('expOracleDescription').innerHTML=expOracleDescription[setlang];
document.getElementById('exp3').innerHTML=exp3[setlang];
document.getElementById('exp4').innerHTML=exp4[setlang];
document.getElementById('exp5').innerHTML=exp5[setlang];
document.getElementById('exp6').innerHTML=exp6[setlang];
document.getElementById('exp7').innerHTML=exp7[setlang];
document.getElementById('exp8').innerHTML=exp8[setlang];
document.getElementById('exp9').innerHTML=exp9[setlang];
document.getElementById('exp10').innerHTML=exp10[setlang];
document.getElementById('exp11').innerHTML=exp11[setlang];
document.getElementById('exp12').innerHTML=exp12[setlang];
document.getElementById('exp13').innerHTML=exp13[setlang];
document.getElementById('exp14').innerHTML=exp14[setlang];
document.getElementById('exp15').innerHTML=exp15[setlang];
document.getElementById('exp16').innerHTML=exp16[setlang];
document.getElementById('exp17').innerHTML=exp17[setlang];
document.getElementById('exp18').innerHTML=exp18[setlang];
document.getElementById('expDtiFullDate').innerHTML=expDtiFullDate[setlang];
document.getElementById('expDtiFullTitle').innerHTML=expDtiFullTitle[setlang];
document.getElementById('expDtiFullDescription').innerHTML=expDtiFullDescription[setlang];

document.getElementById('quo1').innerHTML=quo1[setlang];
document.getElementById('quo2').innerHTML=quo2[setlang];
document.getElementById('quo3').innerHTML=quo3[setlang];
//function change languaje
function changeLanguaje(lang){
  var setlang=lang;
  //set language
  document.getElementById('load').innerHTML=load[setlang];
  document.getElementById('specialty').innerHTML=spec[setlang];
  document.getElementById('profession').innerHTML=prof[setlang];
  
  document.getElementById('profession_bar').innerHTML=prof[setlang];
  document.getElementById('opt1').innerHTML=op1[setlang];
  document.getElementById('opt2').innerHTML=op2[setlang];
  document.getElementById('opt3').innerHTML=op3[setlang];
  document.getElementById('opt4').innerHTML=op4[setlang];
  document.getElementById('opt5').innerHTML=op5[setlang];
  document.getElementById('opt6').innerHTML=op6[setlang];
  document.getElementById('opt7').innerHTML=op7[setlang];
  document.getElementById('opt8').innerHTML=op8[setlang];
  
  document.getElementById('opt2_title').innerHTML=op2[setlang];
  document.getElementById('opt2_body').innerHTML=opt2_body[setlang];

  document.getElementById('data1').innerHTML=data1[setlang];
document.getElementById('data2').innerHTML=data2[setlang];
document.getElementById('data3').innerHTML=data3[setlang];
document.getElementById('data4').innerHTML=data4[setlang];
document.getElementById('data5').innerHTML=data5[setlang];
document.getElementById('contactTitle').innerHTML=contactTitle[setlang];
document.getElementById('contactIntro').innerHTML=contactIntro[setlang];
document.getElementById('contactAvailability').innerHTML=contactAvailability[setlang];
document.getElementById('contactEmail').innerHTML=contactEmail[setlang];
document.getElementById('contactWhatsapp').innerHTML=contactWhatsapp[setlang];
document.getElementById('contactLinkedIn').innerHTML=contactLinkedIn[setlang];
document.getElementById('contactEmailAction').innerHTML=contactEmailAction[setlang];
document.getElementById('contactWhatsappAction').innerHTML=contactWhatsappAction[setlang];
document.getElementById('contactLinkedInAction').innerHTML=contactLinkedInAction[setlang];
document.getElementById('skillsTitle').innerHTML=skillsTitle[setlang];
document.getElementById('skillsSummaryTitle').innerHTML=skillsSummaryTitle[setlang];
document.getElementById('skillsSummaryBody').innerHTML=skillsSummaryBody[setlang];

document.getElementById('perf1').innerHTML=perf1[setlang];
document.getElementById('perf2').innerHTML=perf2[setlang];
document.getElementById('perf3').innerHTML=perf3[setlang];
document.getElementById('perf4').innerHTML=perf4[setlang];
document.getElementById('perf5').innerHTML=perf5[setlang];
document.getElementById('perf6').innerHTML=perf6[setlang];
document.getElementById('perf7').innerHTML=perf7[setlang];
document.getElementById('perf8').innerHTML=perf8[setlang];

document.getElementById('exp1').innerHTML=exp1[setlang];
document.getElementById('exp2').innerHTML=exp2[setlang];
document.getElementById('expOracleDate').innerHTML=expOracleDate[setlang];
document.getElementById('expOracleTitle').innerHTML=expOracleTitle[setlang];
document.getElementById('expOracleDescription').innerHTML=expOracleDescription[setlang];
document.getElementById('exp3').innerHTML=exp3[setlang];
document.getElementById('exp4').innerHTML=exp4[setlang];
document.getElementById('exp5').innerHTML=exp5[setlang];
document.getElementById('exp6').innerHTML=exp6[setlang];
document.getElementById('exp7').innerHTML=exp7[setlang];
document.getElementById('exp8').innerHTML=exp8[setlang];
document.getElementById('exp9').innerHTML=exp9[setlang];
document.getElementById('exp10').innerHTML=exp10[setlang];
document.getElementById('exp11').innerHTML=exp11[setlang];
document.getElementById('exp12').innerHTML=exp12[setlang];
document.getElementById('exp13').innerHTML=exp13[setlang];
document.getElementById('exp14').innerHTML=exp14[setlang];
document.getElementById('exp15').innerHTML=exp15[setlang];
document.getElementById('exp16').innerHTML=exp16[setlang];
document.getElementById('exp17').innerHTML=exp17[setlang];
document.getElementById('exp18').innerHTML=exp18[setlang];
document.getElementById('expDtiFullDate').innerHTML=expDtiFullDate[setlang];
document.getElementById('expDtiFullTitle').innerHTML=expDtiFullTitle[setlang];
document.getElementById('expDtiFullDescription').innerHTML=expDtiFullDescription[setlang];

document.getElementById('quo1').innerHTML=quo1[setlang];
document.getElementById('quo2').innerHTML=quo2[setlang];
document.getElementById('quo3').innerHTML=quo3[setlang];


  if(lang==0){
    document.getElementsByClassName('en')[0].setAttribute('style', 'opacity:0.5;transition:1s');
    document.getElementsByClassName('es')[0].setAttribute('style', 'opacity:1;transition:1s');
  }else{
    document.getElementsByClassName('es')[0].setAttribute('style', ' opacity:0.5;transition:1s');
    document.getElementsByClassName('en')[0].setAttribute('style', ' opacity:1; transition:1s');
  }
}
