
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');

const EIL={"mun": "<svg class=\"ei\" viewBox=\"0 0 120 96\" aria-hidden=\"true\"><path d=\"M14 44L60 20l46 24z\" fill=\"#464345\"/><rect x=\"20\" y=\"45\" width=\"80\" height=\"6\" fill=\"#231f20\"/><g fill=\"#dedede\" stroke=\"#98989a\"><rect x=\"26\" y=\"51\" width=\"10\" height=\"31\"/><rect x=\"45\" y=\"51\" width=\"10\" height=\"31\"/><rect x=\"65\" y=\"51\" width=\"10\" height=\"31\"/><rect x=\"84\" y=\"51\" width=\"10\" height=\"31\"/></g><rect x=\"16\" y=\"82\" width=\"88\" height=\"5\" fill=\"#98989a\"/><rect x=\"10\" y=\"87\" width=\"100\" height=\"6\" rx=\"2\" fill=\"#d9d9d9\"/><circle cx=\"60\" cy=\"36\" r=\"4\" fill=\"#fcb429\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"3\" stroke=\"#231f20\" stroke-width=\"2\"/><path class=\"wave\" style=\"transform-origin:60px 9px\" d=\"M60 3h24l-7 6 7 6H60z\" fill=\"#b21f24\"/></svg>", "rn": "<svg class=\"ei\" viewBox=\"0 0 120 96\" aria-hidden=\"true\"><rect x=\"34\" y=\"30\" width=\"58\" height=\"56\" rx=\"5\" fill=\"#e6c9cb\"/><rect x=\"28\" y=\"24\" width=\"58\" height=\"56\" rx=\"5\" fill=\"#fff\" stroke=\"#b21f24\" stroke-width=\"2\"/><g stroke=\"#d3d3d3\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M38 38h30M38 46h38M38 54h24M38 70h20\"/></g><g class=\"mark\"><circle cx=\"66\" cy=\"66\" r=\"11\" fill=\"none\" stroke=\"#b21f24\" stroke-width=\"3\"/><path d=\"M60 66l4 4 8-9\" fill=\"none\" stroke=\"#b21f24\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g class=\"stamp\"><rect x=\"59\" y=\"14\" width=\"14\" height=\"22\" rx=\"4\" fill=\"#231f20\"/><rect x=\"54\" y=\"36\" width=\"24\" height=\"7\" rx=\"2\" fill=\"#b21f24\"/></g></svg>", "oi": "<svg class=\"ei\" viewBox=\"0 0 120 96\" aria-hidden=\"true\"><g class=\"orb\" style=\"transform-origin:60px 54px\"><circle cx=\"60\" cy=\"54\" r=\"42\" fill=\"none\" stroke=\"#d99000\" stroke-opacity=\".45\" stroke-dasharray=\"3 6\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"12\" r=\"5\" fill=\"#d99000\"/><circle cx=\"96\" cy=\"75\" r=\"5\" fill=\"#b21f24\"/><circle cx=\"24\" cy=\"75\" r=\"5\" fill=\"#464345\"/></g><path d=\"M42 54a18 18 0 0 1 36 0z\" fill=\"#d99000\"/><line x1=\"60\" y1=\"36\" x2=\"60\" y2=\"26\" stroke=\"#231f20\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"25\" r=\"2.5\" fill=\"#231f20\"/><rect x=\"38\" y=\"54\" width=\"44\" height=\"5\" fill=\"#231f20\"/><g fill=\"#dedede\" stroke=\"#98989a\"><rect x=\"42\" y=\"59\" width=\"7\" height=\"18\"/><rect x=\"56.5\" y=\"59\" width=\"7\" height=\"18\"/><rect x=\"71\" y=\"59\" width=\"7\" height=\"18\"/></g><rect x=\"36\" y=\"77\" width=\"48\" height=\"5\" fill=\"#98989a\"/></svg>", "fin": "<svg class=\"ei\" viewBox=\"0 0 120 96\" aria-hidden=\"true\"><path d=\"M10 46L42 28l32 18z\" fill=\"#b21f24\"/><rect x=\"14\" y=\"47\" width=\"56\" height=\"5\" fill=\"#872026\"/><g fill=\"#dedede\" stroke=\"#98989a\"><rect x=\"18\" y=\"52\" width=\"8\" height=\"26\"/><rect x=\"34\" y=\"52\" width=\"8\" height=\"26\"/><rect x=\"50\" y=\"52\" width=\"8\" height=\"26\"/></g><rect x=\"10\" y=\"78\" width=\"64\" height=\"6\" fill=\"#98989a\"/><rect x=\"5\" y=\"84\" width=\"74\" height=\"6\" rx=\"2\" fill=\"#d9d9d9\"/><g class=\"coin\" style=\"transform-origin:96px 42px\"><circle cx=\"96\" cy=\"42\" r=\"17\" fill=\"#fcb429\" stroke=\"#e59d0c\" stroke-width=\"3\"/><text x=\"96\" y=\"49\" text-anchor=\"middle\" font-family=\"Arial\" font-weight=\"700\" font-size=\"20\" fill=\"#231f20\">₡</text></g><circle class=\"drop d1\" cx=\"90\" cy=\"6\" r=\"4\" fill=\"#fcb429\"/><circle class=\"drop d2\" cx=\"104\" cy=\"6\" r=\"3.5\" fill=\"#fcb429\"/></svg>"};
const ILP=`<iframe src="assets/animacion-ingenieria_2.html" title="Animación de ingeniería" tabindex="-1" style="border:0;width:min(270px,70vw);aspect-ratio:640/600;pointer-events:none"></iframe>`,ILE=`<svg class="il" viewBox="0 0 260 270" aria-hidden="true"><circle cx="130" cy="135" r="112" fill="#fff"/><circle class="spin" cx="130" cy="135" r="124" fill="none" stroke="#231f20" stroke-opacity=".18" stroke-dasharray="3 9" stroke-width="2"/>
<g class="cloud"><ellipse cx="60" cy="52" rx="26" ry="9" fill="#f0f0f0"/><ellipse cx="74" cy="46" rx="16" ry="9" fill="#f0f0f0"/></g><circle cx="214" cy="48" r="14" fill="#fcb429" class="sunp"/>
<rect x="14" y="248" width="232" height="8" rx="4" fill="#98989a"/><rect x="22" y="170" width="34" height="80" rx="3" fill="#231f20"/><rect class="wn" style="animation-delay:0.9s;animation-duration:2.8s" x="26.0" y="180" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.6s;animation-duration:3.0s" x="44.0" y="180" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.3s;animation-duration:3.7s" x="26.0" y="200" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.7s;animation-duration:4.9s" x="44.0" y="200" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.1s;animation-duration:3.2s" x="26.0" y="220" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.1s;animation-duration:3.3s" x="44.0" y="220" width="8" height="10" rx="1.5" fill="#fcb429"/><rect x="60" y="92" width="56" height="158" rx="3" fill="#464345"/><rect class="wn" style="animation-delay:0.7s;animation-duration:2.8s" x="64.0" y="102" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.9s;animation-duration:5.3s" x="84.0" y="102" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.3s;animation-duration:4.9s" x="104.0" y="102" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.2s;animation-duration:3.1s" x="64.0" y="122" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.2s;animation-duration:4.4s" x="84.0" y="122" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.9s;animation-duration:5.1s" x="104.0" y="122" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.5s;animation-duration:2.8s" x="64.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.4s;animation-duration:4.5s" x="84.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.0s;animation-duration:3.0s" x="104.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.9s;animation-duration:2.8s" x="64.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.7s;animation-duration:5.1s" x="84.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.2s;animation-duration:3.4s" x="104.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.6s;animation-duration:4.2s" x="64.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.5s;animation-duration:5.0s" x="84.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.0s;animation-duration:3.7s" x="104.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.4s;animation-duration:3.8s" x="64.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.6s;animation-duration:3.4s" x="84.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.3s;animation-duration:2.6s" x="104.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.2s;animation-duration:4.4s" x="64.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.1s;animation-duration:4.1s" x="84.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.9s;animation-duration:3.5s" x="104.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect x="122" y="132" width="50" height="118" rx="3" fill="#575659"/><rect class="wn" style="animation-delay:4.0s;animation-duration:3.1s" x="126.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.7s;animation-duration:3.1s" x="143.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.5s;animation-duration:3.3s" x="160.0" y="142" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.4s;animation-duration:4.7s" x="126.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.3s;animation-duration:4.2s" x="143.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.6s;animation-duration:2.8s" x="160.0" y="162" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.2s;animation-duration:3.2s" x="126.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.1s;animation-duration:4.3s" x="143.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.9s;animation-duration:3.5s" x="160.0" y="182" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.7s;animation-duration:3.9s" x="126.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.2s;animation-duration:4.6s" x="143.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.6s;animation-duration:5.4s" x="160.0" y="202" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.9s;animation-duration:5.4s" x="126.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:0.1s;animation-duration:3.4s" x="143.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:3.9s;animation-duration:4.8s" x="160.0" y="222" width="8" height="10" rx="1.5" fill="#fcb429"/><rect x="178" y="160" width="44" height="90" rx="3" fill="#231f20"/><rect class="wn" style="animation-delay:1.6s;animation-duration:5.3s" x="182.0" y="170" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:2.5s;animation-duration:5.0s" x="210.0" y="170" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.2s;animation-duration:3.1s" x="182.0" y="190" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.8s;animation-duration:2.9s" x="210.0" y="190" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.5s;animation-duration:5.4s" x="182.0" y="210" width="8" height="10" rx="1.5" fill="#fcb429"/><rect class="wn" style="animation-delay:1.3s;animation-duration:2.5s" x="210.0" y="210" width="8" height="10" rx="1.5" fill="#fcb429"/>
<path class="draw" d="M30 150L88 112 120 126 188 76" fill="none" stroke="#b21f24" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/><path class="arw" d="M174 72l20-2-4 20z" fill="#b21f24"/></svg>`,ILG=`<svg class="il" viewBox="0 0 260 270" aria-hidden="true"><circle cx="130" cy="135" r="112" fill="#fff"/><circle class="spin" cx="130" cy="135" r="124" fill="none" stroke="#231f20" stroke-opacity=".18" stroke-dasharray="3 9" stroke-width="2"/><g transform="translate(30 52) scale(1.67)"><g class="orb" style="transform-origin:60px 54px"><circle cx="60" cy="54" r="42" fill="none" stroke="#d99000" stroke-opacity=".45" stroke-dasharray="3 6" stroke-width="1.5"/><circle cx="60" cy="12" r="5" fill="#d99000"/><circle cx="96" cy="75" r="5" fill="#b21f24"/><circle cx="24" cy="75" r="5" fill="#464345"/></g><path d="M42 54a18 18 0 0 1 36 0z" fill="#d99000"/><line x1="60" y1="36" x2="60" y2="26" stroke="#231f20" stroke-width="2"/><circle cx="60" cy="25" r="2.5" fill="#231f20"/><rect x="38" y="54" width="44" height="5" fill="#231f20"/><g fill="#dedede" stroke="#98989a"><rect x="42" y="59" width="7" height="18"/><rect x="56.5" y="59" width="7" height="18"/><rect x="71" y="59" width="7" height="18"/></g><rect x="36" y="77" width="48" height="5" fill="#98989a"/></g></svg>`;
const CH='<svg class="chv" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#231f20" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
/* ---- datos ---- */
const ACC_CONT=['Trámites técnicos',[['Proyectos de construcción','APC'],['Proyectos de consultoría','APC'],['Proyectos de topografía','APT'],['Proyectos de agrimensura','APT'],['Registro y renuncia de responsabilidad','APC'],['Constancias para conexión eléctrica provisional y final','APC'],['Inscripción de fiscalizadores de inversión','APC'],['Revisión y tasación de planos','Tasación'],['Registrar la bitácora de construcción','Bitácora Digital']]];
const ACC_REQ=['Presentar requisitos de proyectos',[['Trámite de accesos vehiculares','APC Requisitos'],['Disponibilidad de agua','APC Requisitos'],['Uso de suelo','APC Requisitos']]];
const ACC={
 p:[['Incorporación',[['Registro previo para incorporarse (graduados)','Plataforma de Registro Previo']]],
    ['Membresía',[['Solicitar certificaciones digitales','Certificaciones Digitales'],['Actualizar mis datos','Actualización de datos'],['Mostrar el carnet digital','APP CFIA'],['Actualizar el grado académico','Miembros'],['Solicitar miembro ausente o retiro voluntario','Miembros'],['Solicitar la habilitación profesional','Miembros']]],
    ACC_CONT,ACC_REQ,
    ['Gestión Financiera',[['Consultar el estado de cuenta','Estado de Cuenta Profesional'],['Pagar en línea','Ventanilla de Pagos'],['Facturación electrónica','Facturación Electrónica'],['Comprar la licencia de Microsoft 365','Ventanilla de Pagos'],['Pagar la colegiatura','Ventanilla de Pagos · Facturación'],['Arreglos de pago','Ventanilla de Pagos · Facturación'],['Deducción de planilla','Ventanilla de Pagos · Facturación'],['Cargo automático','Ventanilla de Pagos · Facturación']]],
    ['Resolución de conflictos y sanciones',[['Centro de Resolución de Conflictos','WorkSpace'],['Centro de Análisis y Verificación','WorkSpace'],['Tribunales de Honor','WorkSpace']]],
    ['Otros servicios',[['Reservar en Uxarrací','Reservaciones Uxarrací'],['Capacitaciones','Moodle'],['Inscribirse a eventos','CFIA Eventos'],['Recibir novedades en el celular','APP CFIA']]]],
 e:[['Registro de la empresa',[['Revalidar la empresa (descuento a pymes con certificado del MEIC)','Sistema de Revalidación de Empresas'],['Actualizar los datos de la empresa','Actualización de datos']]],
    ACC_CONT,ACC_REQ,
    ['Gestión Financiera',[['Pagar en línea','Ventanilla de Pagos'],['Facturación electrónica','Facturación Electrónica']]],
    ['Otros servicios',[['Inscribirse a eventos','CFIA Eventos']]]]
};
const TT={
 'Plataformas Digitales':['APC','APT','APC Requisitos','Bitácora Digital','Sitio web Trámites de Construcción','Ventanilla de Pagos CFIA','Consulta de Datos del Proyecto y sus Sellos','APP CFIA'],
 'Ejercicio Profesional':['Certificaciones Digitales de Membresía y de Proyectos','Formularios','Inspecciones y Verificaciones Especiales','Buscador de Profesionales y Empresas','Perfiles Profesionales','Hora Profesional','Proceso de Actualización Profesional'],
 'Servicios Técnicos CFIA':['Solicitud de Peritajes y Avalúos','Agencia de Acreditación (AAPIA)']
};
const MB={
 'Trámites Frecuentes':['Certificaciones Digitales de Membresía y de Proyectos','Ventanilla de Pagos','Sistema de Actualización de Datos','Consulta de Estado de Cuenta'],
 'Trámites de Colegiatura':['Pago de Colegiatura','Carnet del CFIA','Actualización de Grado Académico','Miembro Ausente','Retiro Voluntario','Habilitación Profesional','Actualización de Cédula o Documento de Identidad','Reposición de Certificado de Incorporación'],
 'Trámites para Empresas':['Inscripción de Empresas','Revalidación Digital de Empresas','Inclusión, Renuncia o Exclusión de Profesionales Responsables','Actualización de Representantes Legales','Actualización de Nombre o Razón Social','Solicitud de Inhabilitación Temporal Voluntaria','Desinscripción de Empresas']
};
const SG=['Mutualidad CFIA / INTUS','Uxarrací','Anuncios de Empleo','Tienda Virtual','Capacitaciones, Eventos y Anuncios','Servicio de Alimentos y Bebidas Andamios Bistró','Agencia de Acreditación de Programas de Ingeniería y de Arquitectura (AAPIA)','Programa de Responsabilidad Solidaria','Centro de Resolución de Conflictos (CRC)','COFEIA','Solicitud de Kit de Firma Digital','Licencia de Microsoft 365','Horario y Tarifas de Parqueo','APP CFIA'];
const WEB={
 p:[['Trámites Técnicos',[['Plataformas Digitales',TT['Plataformas Digitales']],['Ejercicio Profesional',TT['Ejercicio Profesional']],['Servicios Técnicos CFIA',TT['Servicios Técnicos CFIA']]]],
    ['Membresía',[['Trámites Frecuentes',MB['Trámites Frecuentes']],['Trámites de Colegiatura',MB['Trámites de Colegiatura']]]],
    ['Servicios Generales',[['',SG]]]],
 e:[['Trámites Técnicos',[['Plataformas Digitales',TT['Plataformas Digitales']],['Ejercicio Profesional',TT['Ejercicio Profesional'].slice(0,4)],['Servicios Técnicos CFIA',TT['Servicios Técnicos CFIA']]]],
    ['Membresía',[['Trámites Frecuentes',MB['Trámites Frecuentes']],['Trámites para Empresas',MB['Trámites para Empresas']]]],
    ['Servicios Generales',[['',SG]]]]
};
const GOV=[
 ['mun','Municipalidades',['Todas las municipalidades tienen convenio para usar APC.','Sus inspectores usan la Bitácora Digital.'],['APC','APC Municipal','Bitácora Digital']],
 ['rn','Registro Nacional','Envío de planos.',['APT']],
 ['oi','Otras instituciones','Sus inspectores usan la Bitácora Digital.',['APC','APC Municipal','APC Requisitos','APC Institucional','Bitácora Digital','Encuesta de inspección de obras (BCCR)'],['Ministerio de Salud','Bomberos','INVU','AyA','ICT','Patrimonio Cultural','MOPT (alineamientos y accesos vehiculares)','DIEE','Edificaciones Nacionales MOPT','BANVHI','Entidades autorizadoras de bono de interés social','Fiscalizadores de inversión de bancos u otros','Ministerio de Hacienda','BCCR','CGR','CNFL']],
 ['fin','Banca',['Banca en línea: BN Pagos, BCR en línea y Sucursal Electrónica de BAC.','Transferencia o depósito: BN, BCR, BAC Credomatic y Coopenae.','Cargo automático a tarjeta.'],['Ventanilla de Pagos','Servicios de pago']]
];
const MODES={p:{n:'Población colegiada',il:ILP},e:{n:'Empresa inscrita',il:ILE},g:{n:'Instituciones y gobiernos locales',il:ILG}};
/* ---- render ---- */
const bx=(h,b,open,cls='')=>`<div class="bx ${cls} ${open?'open':''}"><button class="bh" type="button" aria-expanded="${!!open}">${h}${CH}</button><div class="bb"><div>${b}</div></div></div>`;
const chips=a=>`<div class="chp">${a.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
function branches(k){
  if(k==='g')return `<div class="bgrid n4">${GOV.map(([e,t,d,s,inst])=>bx(`${EIL[e]}<h3>${esc(t)}</h3><span class="badge">${s.length+(inst?inst.length:0)}</span>`,`<div class="bi"><p class="bd2">${[].concat(d).map(esc).join('<br>')}</p>${inst?`<h5 class="gh">Instituciones</h5>${chips(inst)}<h5 class="gh">Sistemas</h5>`:''}${chips(s)}</div>`,true)).join('')}</div>`;
  const acc=ACC[k],web=WEB[k];
  const A=bx(`<h3>Sistemas digitales CFIA</h3><span class="badge">${acc.reduce((n,x)=>n+x[1].length,0)}</span>`,`<div class="bi"><p class="bd2">Servicios a los que accede con su usuario del CFIA.</p>${acc.map(([t,l])=>bx(`<h3>${esc(t)}</h3><span class="badge">${l.length}</span>`,`<div class="bi"><div class="lvs">${l.map(([a,sy])=>`<span class="lf">${esc(a)}${sy?`<small>${esc(sy)}</small>`:''}</span>`).join('')}</div></div>`,true,'sx')).join('')}</div>`,true);
  const W=bx(`<h3>Sitio Web</h3><span class="badge">${web.length+1}</span>`,`<div class="bi">${bx(`<h3>Consultar proyectos</h3>`,`<div class="bi"><div class="lvs"><span class="lf">Consultar proyectos, boleta eléctrica y sus sellos (público en general)<small>Consulta de Proyectos</small></span><span class="lf">Ver pasos y requisitos para un permiso de construcción<small>Sitio de Trámites de Construcción</small></span></div></div>`,false,'sx')}${web.map(([t,g])=>bx(`<h3>${esc(t)}</h3>`,`<div class="bi">${g.map(([h,l])=>(h?`<h5 class="gh">${esc(h)}</h5>`:'')+chips(l)).join('')}</div>`,false,'sx')).join('')}</div>`,true);
  return `<div class="bgrid n2">${A}${W}</div>`;
}
function render(k){
  const m=MODES[k];
  $('#stage').innerHTML=`<div class="hero2">${m.il}<small>Servicios digitales</small><b>${m.n}</b></div><div class="trunk"></div>${branches(k)}`;
  $$('.bgrid>.bx').forEach((x,i)=>x.style.animationDelay=(.15+i*.1)+'s');
  $$('#seg button').forEach(x=>{x.classList.toggle('on',x.dataset.k===k);x.setAttribute('aria-selected',x.dataset.k===k)});
}
$('#seg').innerHTML=Object.entries(MODES).map(([k,v])=>`<button data-k="${k}">${v.n}</button>`).join('');
$$('#seg button').forEach(b=>b.onclick=()=>render(b.dataset.k));
$('#stage').addEventListener('click',e=>{const h=e.target.closest('.bh');if(!h)return;const x=h.parentElement;x.classList.toggle('open');h.setAttribute('aria-expanded',x.classList.contains('open'))});
render('p');
/* ---- App CFIA ---- */
const IC=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const DOC='<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>';
const USERS='<circle cx="12" cy="8" r="3"/><path d="M6 20c0-4 3-6 6-6s6 2 6 6"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/>';
const ICO={
 pers:'<path d="M5 4v16M12 4v16M19 4v16"/><circle cx="5" cy="14" r="2.4" fill="#fff"/><circle cx="12" cy="8" r="2.4" fill="#fff"/><circle cx="19" cy="15" r="2.4" fill="#fff"/>',
 carnet:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.8-2 4.2-2 6 0M14 10h4M14 14h4"/>',
 doc:DOC,
 pago:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h3"/>',
 cal:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/>',
 finger:'<path d="M12 11v3c0 2-.5 4-1.5 6M8 11a4 4 0 0 1 8 0v2M5 12a7 7 0 0 1 14 0c0 3-.5 5-1.5 7M9 20c.8-1.6 1.2-3.2 1.3-5M4.5 8.5A9 9 0 0 1 12 4a9 9 0 0 1 7.5 4.5"/>',
 users:USERS,
 docchk:'<path d="M7 3h8l4 4v6M7 3v18h6M15 3v4h4M10 11h5"/><circle cx="17" cy="17" r="4"/><path d="M15.3 17l1.2 1.2 2.3-2.4"/>',
 gift:'<rect x="4" y="11" width="16" height="9" rx="1"/><rect x="3" y="8" width="18" height="3" rx="1"/><path d="M12 8v12M12 8c-2-4-6-3-5 0M12 8c2-4 6-3 5 0"/>'
};
const STG=[
 {n:'01',t:'Etapa I',c:[
  ['Personalización','pers',['Intereses','Configuración de accesos rápidos']],
  ['Carnet digital','carnet',['Datos de membresía',['Autorizaciones especiales',['Verificación de Instalaciones Eléctricas','Inspección de instalaciones de Gas LP','Inspección de Calderas']]]],
  ['Trámites y servicios','doc',['Ventanilla de Pagos CFIA','Pago de Colegiatura','Consulta de Proyectos APC','Consulta de Contratos APT','Bitácora Digital','Normativa y Documentación Técnica','Estadísticas CFIA']],
  ['Pagos','pago',['Estado de cuenta','Fecha de pago','Configuración de pago','Historial de pagos']],
  ['Novedades CFIA','cal',['Capacitaciones','Eventos','Beneficios']],
  ['Perfil','user',['Consulta y actualización de datos']]]},
 {n:'02',t:'Etapa II',c:[
  ['Acceso seguro','finger',['Inicio de sesión con datos biométricos','Huella digital','Reconocimiento facial']],
  ['Nuevos Trámites y servicios','users',['Directorio de Profesionales y Empresas','Directorio de Convenios de Mutualidad CFIA','Bolsa de Empleo CFIA']],
  ['Nuevas autorizaciones especiales','docchk',['Fiscalización de Inversiones','RESET','Estudios de Estanqueidad y Hermeticidad','Gestión Técnica de Unidades de Transporte de Combustible']]]},
 {n:'03',t:'Etapa III',up:1,c:[
  ['Nuevos Trámites y servicios','doc',['Certificaciones Digitales de Membresía','Certificaciones Digitales de Proyectos']],
  ['Colegios Miembros','users',['Acceso al sitio web de los Colegios Miembros','Acceso al sitio web de Mutualidad']],
  ['Regalías de Colegios Miembros','gift',['Anuncio o campaña temporal','Notificación de lanzamiento','Consulta de la regalía','Reserva de la regalía del Colegio respectivo']],
  ['Sitio Administrativo','admin',['Nuevos trámites','Sedes','Colegios','Logos']]]}
];
const apLi=x=>Array.isArray(x)?`<li>${esc(x[0])}<ul>${x[1].map(apLi).join('')}</ul></li>`:`<li>${esc(x)}</li>`;
const apCard=(c,up)=>`<article class="apc ${up?'up':''}"><div class="apic">${IC(ICO[c[1]])}</div><div><h4>${esc(c[0])}</h4><ul>${c[2].map(apLi).join('')}</ul></div></article>`;
const apStage=s=>`<div class="apst"><div class="apsh"><span class="apn ${s.up?'up':''}">${s.n}</span><h3>${s.t}</h3><span class="apbd ${s.up?'up':''}">${s.up?'Próximamente':'Implementada'}</span></div><div class="apgrid">${s.c.map(c=>apCard(c,s.up)).join('')}</div></div>`;
ICO.admin='<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><circle cx="12" cy="10" r="2.2"/><path d="M12 6.6v1.2M12 12.2v1.2M8.6 10h1.2M14.2 10h1.2"/>';
function appView(k){
  $('#fts').innerHTML=STG.filter(s=>k==='f'?s.up:!s.up).map(apStage).join('');
  $$('#fts .apc').forEach((x,i)=>x.style.animationDelay=(i*.06)+'s');
  $$('#aseg button').forEach(x=>x.classList.toggle('on',x.dataset.k===k));
}
$$('#aseg button').forEach(b=>b.onclick=()=>appView(b.dataset.k));
appView('a');
/* ---- navegación ---- */
const chipsEl=$$('#chips .chip'),tabs=$$('.tab');
let at=-1;
function go(i){
  at=i;const cover=i<0;
  $('#cover').hidden=!cover;$('#app').hidden=cover;
  chipsEl.forEach(c=>{const on=+c.dataset.i===i;c.classList.toggle('on',on);c.setAttribute('aria-selected',on)});
  tabs.forEach((t,j)=>t.classList.toggle('on',j===i));
  scrollTo({top:0,behavior:'instant'});
  chipsEl.find(c=>+c.dataset.i===i).scrollIntoView({inline:'center',block:'nearest'});
}
chipsEl.forEach(c=>c.onclick=()=>go(+c.dataset.i));
$('#start').onclick=()=>go(0);
$('#home').onclick=()=>go(-1);
function fs(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}
$('#fs').onclick=fs;
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight')go(Math.min(at+1,1));
  if(e.key==='ArrowLeft')go(Math.max(at-1,-1));
  if(e.key==='f'||e.key==='F')fs();
});

(function(){
  const svg=$('#art'),C=[280,260],R=186;
  const ic={
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/>',
    building:'<rect x="5" y="3" width="10" height="18" rx="1"/><path d="M15 9h4v12h-4M8 7h4M8 11h4M8 15h4"/>',
    gov:'<path d="M3 10l9-6 9 6z"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    bank:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/>',
    phone:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
    doc:'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>'
  };

  const nodes=[['user',-90],['building',-30],['gov',30],['bank',90],['phone',150],['doc',210]].map(([k,a],i)=>{
    const r=a*Math.PI/180;return {k,i,x:C[0]+R*Math.cos(r),y:C[1]+R*Math.sin(r)};
  });
  let h='<defs><radialGradient id="hg" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="#464345"/><stop offset="1" stop-color="#231f20"/></radialGradient></defs>';
  // anillos
  h+=`<circle class="spin" cx="${C[0]}" cy="${C[1]}" r="122" fill="none" stroke="#231f20" stroke-opacity=".18" stroke-dasharray="2 9" stroke-width="2"/>`;
  h+=`<circle class="spin rev" cx="${C[0]}" cy="${C[1]}" r="228" fill="none" stroke="#231f20" stroke-opacity=".12" stroke-dasharray="6 12"/>`;
  // enlaces entre nodos vecinos
  nodes.forEach((n,i)=>{const m=nodes[(i+1)%6];h+=`<path d="M${n.x} ${n.y} L${m.x} ${m.y}" stroke="#231f20" stroke-opacity=".10" stroke-width="1.5" fill="none"/>`});
  // enlaces al hub + paquetes
  nodes.forEach((n,i)=>{
    const id='ln'+i,rev=i%2;
    h+=`<path id="${id}" class="flow ${rev?'r':''}" d="M${C[0]} ${C[1]} L${n.x} ${n.y}" stroke="#231f20" stroke-opacity=".35" stroke-width="2" fill="none"/>`;
    const kp=rev?'1;0':'0;1';
    h+=`<circle r="5" fill="#b21f24"><animateMotion dur="8s" begin="-${(i*.55+.3).toFixed(2)}s" repeatCount="indefinite" keyPoints="${kp}" keyTimes="0;1" calcMode="linear"><mpath href="#${id}"/></animateMotion></circle>`;
    h+=`<circle r="3.5" fill="#fcb429"><animateMotion dur="8s" begin="-${(i*.55+2).toFixed(2)}s" repeatCount="indefinite" keyPoints="${kp}" keyTimes="0;1" calcMode="linear"><mpath href="#${id}"/></animateMotion></circle>`;
  });
  // hub
  h+=`<circle class="pulse" cx="${C[0]}" cy="${C[1]}" r="46" fill="none" stroke="#b21f24" stroke-width="2"/><circle class="pulse p2" cx="${C[0]}" cy="${C[1]}" r="46" fill="none" stroke="#b21f24" stroke-width="2"/>`;
  h+=`<g style="filter:drop-shadow(0 10px 18px rgba(35,31,32,.35))"><rect x="${C[0]-48}" y="${C[1]-48}" width="96" height="96" rx="24" fill="url(#hg)"/></g>`;
  h+=`<rect x="${C[0]-48}" y="${C[1]-48}" width="96" height="96" rx="24" fill="none" stroke="#fff" stroke-opacity=".25"/>`;
  h+=`<g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><rect x="${C[0]-26}" y="${C[1]-26}" width="52" height="36" rx="5"/><path d="M${C[0]-10} ${C[1]+22}h20M${C[0]} ${C[1]+10}v12"/></g>`;
  h+=`<circle class="clk" cx="${C[0]+10}" cy="${C[1]-4}" r="9" fill="none" stroke="#fcb429" stroke-width="2.5"/><path d="M${C[0]+6} ${C[1]-10}v26l7-6 5 11 5-2-5-11h9z" fill="#fcb429" stroke="#231f20" stroke-width="2" stroke-linejoin="round"/>`;
  // nodos
  nodes.forEach(n=>{
    h+=`<g class="node" style="animation-delay:${(n.i*.7).toFixed(1)}s"><circle cx="${n.x}" cy="${n.y}" r="36" fill="#fff" stroke="#dedede" stroke-width="2"/>`+
       `<g transform="translate(${n.x-15} ${n.y-15}) scale(1.25)" fill="none" stroke="#231f20" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ic[n.k]}</g>`+
       `<circle class="dot" cx="${n.x+25}" cy="${n.y-25}" r="5" fill="#b21f24" style="animation-delay:${(n.i*.4).toFixed(1)}s"/></g>`;
  });
  // fragmentos de código flotando
  [['APC',60,120],['APT',500,90],['SSO',520,330],['App',40,400],['Web',470,470],['QR',110,480],['Pago',300,28]].forEach(([t,x,y],i)=>{
    h+=`<text class="tok" x="${x}" y="${y}" style="animation-delay:${(i*1.1).toFixed(1)}s">${t.replace('<','&lt;').replace('>','&gt;')}</text>`;
  });
  svg.innerHTML=h;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  function syncMotion(){ motion.matches ? svg.pauseAnimations() : svg.unpauseAnimations(); }
  syncMotion();
  motion.addEventListener('change', syncMotion);
})();

go(-1);
