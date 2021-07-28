


var setlang=1;

document.getElementsByClassName('es')[0].setAttribute('style', ' opacity:0.5;transition:1s');
document.getElementsByClassName('en')[0].setAttribute('style', ' opacity:1; transition:1s');

// vars text
var load = ["Cargando","Loading"];
var spec = ["Ingeniero de Software","Software Enginner"];
var prof = ["Ingeniero Informático","Computer Enginner"];

var op1 = ["Principal","Home"];
var op2 = ["Objetivos","Objectives"];
var op3 = ["Experiencia","Experience"];
var op4 = ["Referencias","References"];
var op5 = ["Educación","Education"];
var op6 = ["Habilidades","Skills"];
var op7 = ["Trabajos","Jobs"];
var op8 = ["Contacto","Contact"];

var opt2_body = ["Superarme de manera profesional ya sea escolarizado o autodidacta en el campo de la informática y de la tecnología de información (TI), de esa manera lograr las metas en el lugar de trabajo que me encuentre desempeñando, asi como adquirir experiencia y poder aportar mis conocimientos en los diferentes ámbitos de la vida laboral.",
                 "To improve myself in a professional way, whether schooled or self-taught in the field of computer science and information technology (IT), in this way to achieve the goals in the workplace that I find myself performing, as well as to acquire experience and be able to contribute my knowledge in the different areas of working life"];

var data1=["Mis Habilidades", "My Abilities"];
var data2=["¿Cuales son?","Which are?"];
var data3=["Mis Redes Sociales","My social networks"];
var data4=["Contacta conmigo","Contact me"]
var data5=["Soy de Huajuapan","I'm from Huajuapan"];

var perf1=["Mi Perfil","My profile"];
var perf2=["Nombre: Geovani Gómez Pérez","Name: Geovani Gómez Pérez"];
var perf3=["Fecha de Nacimiento: 6 Febrero de 1986","Date of Birth: 6 Febrero de 1986"];
var perf4=["Nacionalidad: Mexicana","Mexican nationality"];
var perf5=["E-mail: l.a.web@hotmail.com","E-mail: l.a.web@hotmail.com"];
var perf6=["Telefóno: (953) 10 90 222","Phone: (953) 10 90 222"];
var perf7=["¿Quien soy?","Who I am?"];
var perf8=["Soy una persona alegre, amigable, y responsable, la cual busca superarse profesionalmente, para ofrecer un mejor estado de vida a mi familia, me siento comprometido con las tareas que me encomiendan, soy una persona en la que se puede confiar y contar además de que siempre estoy estudiando y esforzándome para sobrellevar los retos que me ofrezcan, soy una persona con gusto en las ciencias de cálculo, autodidacta, y siempre estoy buscando la manera de ampliar mis habilidades para ofrecerlas en donde tenga oportunidad de practicarlas.","I am a happy, friendly, and responsible person, who seeks to improve professionally, to offer a better state of life to my family, I feel committed to the tasks entrusted to me, I am a person who can be trusted and counted on in addition to that I am always studying and striving to overcome the challenges that they offer me, I am a person with taste in calculus sciences, self-taught, and I am always looking for a way to expand my skills to offer them where I have the opportunity to practice them."];

var exp1=["Experiencia","Experience"];
var exp2=["Desarrollador de Aplicaciones, Web, Móvil, de escritorio, planificador de tareas utilizando metodologías de desarrollo tanto completas como agiles, con experiencia en el desarrollo y planificación de software.","Developer of Applications, Web, Mobile, desktop, task planner using both complete and agile development methodologies, with experience in software development and planning."];
var exp3=[`2020 <span id="exp3">/ Agosto</span> - Actual`,`2020 <span id="exp3">/ August</span> - Current`];
var exp4=["Desarrollador Web/Movil/Consultor","Web / Mobile Developer / Consultant"];
var exp5=["Empresa en donde desepempeñe como desarrollador Web, Movil, usando tecnologias como : Angular, Ionic, Vue, Unity, Además de ser consultor Oracle ODI (Oracle Data Integration)","Company where I work as a Web, Mobile developer, using technologies such as: Angular, Ionic, Vue, Unity, in addition to being an Oracle ODI (Oracle Data Integration) consultant"];
var exp6=[`2019 <span>/ Junio</span> - 2019 <span>/ Sep</span>`,`2019 <span>/ June</span> - 2019 <span>/ Sep</span>`];
var exp7=["Desarrollador","Developer"];
var exp8=["Empresa donde trabaje para la finalizacion de proyecto desarrollado en WPF, tambien como Analista de datos usando ETL de Microsoft SSIS.","Company where I worked for the completion of the project developed in WPF, also as a Data Analyst using Microsoft SSIS ETL."];
var exp9=[`2018 <span>/ Mayo</span> - 2019 <span>/ Julio</span>`,`2018 <span>/ May</span> - 2019 <span>/ July</span>`];
var exp10=["Desarrollador Web","Web Developer"];
var exp11=["Empresa donde trabaje como desarrollador web, en la cual controlaba las tareas o sprints de desarrollo usando diversas metodologías agiles para poder ofrecer soluciones tecnológicas que el cliente solicita. Utilizando herramientas y diversas tecnologías de desarrollo que se utilizan actualmente.","Company where I worked as a web developer, in which I controlled development tasks or sprints using various agile methodologies to be able to offer technological solutions that the client requests. Using tools and various development technologies that are currently used."];
var exp12=["Independientemente al desarrollo, también trabaje como diseñador e Instructor.","Regardless of development, I also worked as a designer and Instructor."];
var exp13=[`2017 <span>/ Agosto</span> - 2018 <span>/ Julio</span>`,`2017 <span>/ August</span> - 2019 <span>/ July</span>`];
var exp14=["Desarrollador","Developer"];
var exp15=["Trabaje con múltiples proyectos, tanto web, móviles y de escritorio para diferentes instituciones, y empresas privadas, de manera paralela a los estudios de Ingeniería.","Work with multiple projects, both web, mobile and desktop for different institutions and private companies, in parallel with Engineering studies."];
var exp16=[`2008 <span>/ Marzo</span> - 2017 <span>/ Julio</span>`,`2008 <span>/ March</span> - 2017 <span>/ Sep</span>`];
var exp17=[`Administrador <small>(5 años)</small><br />Soporte y Atención <small>(4 años)</small>`,`Administrator <small>(5 years)</small><br />Support and Attention <small>(4 years)</small>`];
var exp18=["Empresa en donde desempeñe múltiples funciones técnicas de reparación de computadoras y soporte técnico a diferentes  dispositivos electrónicos, además de ser instructor de computación a clientes de diferentes edades, también organice y lleve el control administrativo del negocio, me brindaron la oportunidad de aprender otros temas relacionados con la edición de video, audio asi como de brindarme cursos de diseño grafico en las cuales pude aprender y praaacticar el tratamiento de imágenes y creación de logotipos. ","Company where I perform multiple technical functions of computer repair and technical support to different electronic devices, in addition to being a computer instructor to clients of different ages, I also organize and take administrative control of the business, they gave me the opportunity to learn other related topics with video and audio editing as well as giving me graphic design courses in which I could learn and practice the treatment of images and creation of logos."];

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
