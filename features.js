const addedCertifications=[
{id:'isc2-cc',name:'ISC2 Certified in Cybersecurity (CC)',level:'Start here',cost:'Check current regional offer',roles:['SOC analyst','Blue team','Incident responder','GRC analyst'],verdict:'Good first credential',why:'A broad, entry-level knowledge check with no work-experience requirement. Useful when you want a structured foundation before specialising.',learn:'Security principles, governance, access control, networking, cloud, operations and incident response.',before:'Finish the foundation chapters and explain the CIA triad, access control, network security and incident response in your own words.',url:'https://www.isc2.org/certifications/cc',checked:'Reviewed 6 Nov 2026'},
{id:'security-plus',name:'CompTIA Security+',level:'Foundation+',cost:'Paid exam; verify local price',roles:['SOC analyst','Blue team','Incident responder','Security engineer','GRC analyst'],verdict:'Consider after the basics',why:'A broad vendor-neutral option. It can support early-career applications, but it should sit beside labs and projects—not replace them.',learn:'Threats, secure architecture, security operations, identity, risk and incident response.',before:'Be comfortable with networking, Windows/Linux basics and the full CyberStudy foundation path.',url:'https://www.comptia.org/en-us/certifications/security/',checked:'Provider page needs re-verification'},
{id:'ccna',name:'Cisco CCNA',level:'Networking route',cost:'US$300 listed by Cisco',roles:['SOC analyst','Blue team','Security engineer'],verdict:'Choose when networking matters',why:'Strong networking depth for infrastructure-heavy roles. It is broader than cybersecurity, so skip it if networking is not central to your target role.',learn:'Network fundamentals, access, IP connectivity and services, security fundamentals and automation.',before:'Build and troubleshoot small networks; understand subnetting, routing, switching and common protocols.',url:'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',checked:'Reviewed 6 Nov 2026'},
{id:'cysa-plus',name:'CompTIA CySA+',level:'After foundation',cost:'Paid exam; verify local price',roles:['SOC analyst','Blue team','Incident responder'],verdict:'Later, not your first step',why:'Best considered after real log-analysis and incident-triage practice. Beginners gain more by building foundations and evidence of hands-on work first.',learn:'Security operations, vulnerability management, incident response and reporting.',before:'Complete investigation projects and be comfortable reading host, identity and network logs.',url:'https://www.comptia.org/en-us/certifications/cybersecurity-analyst/',checked:'Provider page needs re-verification'},
{id:'btl1',name:'Blue Team Level 1 (Centri)',level:'Practical blue team',cost:'Paid training and exam',roles:['SOC analyst','Blue team','Incident responder'],verdict:'Consider for hands-on defence',why:'A practical defensive path for learners who already know the fundamentals and want structured investigation practice.',learn:'Phishing analysis, threat intelligence, digital forensics, SIEM and incident response.',before:'Finish the SOC mini-labs, analyse logs without hints and write a short incident report.',url:'https://www.centri.org/certifications/blue-team-level-1',checked:'Reviewed 6 Nov 2026'},
{id:'oscp',name:'OffSec OSCP / OSCP+',level:'Advanced practical',cost:'From US$1,749 with training listed by OffSec',roles:['Penetration tester','Red team'],verdict:'Do not start here',why:'A demanding practical penetration-testing credential. It is expensive and assumes solid networking, Linux, Windows and scripting skills.',learn:'Enumeration, exploitation, privilege escalation, Active Directory and professional reporting.',before:'Build a legal home lab, complete multiple web/network projects and work confidently in Linux and Windows.',url:'https://www.offsec.com/courses/pen-200/',checked:'Reviewed 6 Nov 2026'}
];
const roleGuides={
'SOC analyst':{outcome:'Triage common alerts, investigate identity and endpoint evidence, and write a clear escalation note.',milestones:['Foundations — TCP/IP, DNS, HTTP, Windows/Linux and security basics.','Investigation — authentication, endpoint and network logs; alert triage and timelines.','Job proof — two incident reports and one detection-tuning case study.'],projects:['Investigate failed logins followed by a new-location success.','Build a timeline that separates facts, assumptions and next actions.'],ready:['Explain an alert without copying tool output.','Preserve evidence and escalate with useful context.','Show two readable investigation reports.'],certs:['isc2-cc','security-plus','cysa-plus','btl1']},
'Red team':{outcome:'Plan and document an authorised adversary simulation while respecting scope and safety.',milestones:['Foundations — networks, operating systems, web applications and scripting.','Method — threat modelling, attack paths, safety and rules of engagement.','Job proof — a scoped exercise plan and a defender-focused report.'],projects:['Write rules of engagement for a harmless lab exercise.','Map a test attack path to detection opportunities.'],ready:['Stop when an action is outside scope.','Explain business impact and remediation.','Produce a reproducible report.'],certs:['security-plus','oscp']},
'Blue team':{outcome:'Harden systems, improve useful detections and respond to suspicious activity.',milestones:['Foundations — systems, identity, networking and secure configuration.','Defence — logging, detection, vulnerability management and containment.','Job proof — a hardening baseline and an investigation case study.'],projects:['Create a Windows or Linux hardening checklist with reasons.','Turn suspicious logins into detection and response steps.'],ready:['Prioritise controls by risk.','Test whether a detection works.','Document recovery and lessons learned.'],certs:['isc2-cc','security-plus','cysa-plus','btl1']},
'Penetration tester':{outcome:'Assess authorised systems methodically and report reproducible, fixable findings.',milestones:['Foundations — networks, Linux, web protocols, scripting and app architecture.','Testing — scoping, enumeration, validation, evidence and cleanup.','Job proof — two lab reports with impact, evidence and remediation.'],projects:['Test access control in a deliberately vulnerable local app.','Write a finding another person can reproduce and fix.'],ready:['Always have written permission and scope.','Validate without unnecessary harm.','Include clear remediation in reports.'],certs:['security-plus','oscp']},
'Incident responder':{outcome:'Build a defensible timeline, contain damage and support clean recovery.',milestones:['Foundations — operating systems, networks, logs and attacks.','Response — triage, scoping, evidence, containment and recovery.','Job proof — a tabletop plan and documented incident timeline.'],projects:['Create a ransomware response checklist.','Build a timeline from an authentication log.'],ready:['Separate containment from eradication.','Record evidence sources and times.','Explain recovery validation.'],certs:['isc2-cc','security-plus','cysa-plus','btl1']},
'Security engineer':{outcome:'Design and maintain controls that are secure, observable and usable.',milestones:['Foundations — systems, networks, identity, programming and cloud.','Engineering — secure defaults, automation, secrets, logging and testing.','Job proof — one secure service with a documented threat model.'],projects:['Threat-model a student portal.','Add authentication, authorisation and audit logging to a small app.'],ready:['Explain security trade-offs.','Test failure cases and access boundaries.','Provide operational documentation.'],certs:['security-plus','ccna']},
'GRC analyst':{outcome:'Translate business needs into clear risks, controls, evidence and decisions.',milestones:['Foundations — principles, assets, threats, controls and business context.','Governance — risk, policy, evidence, third parties and reporting.','Job proof — a risk register and control-evidence map.'],projects:['Assess risks for a college portal and assign owners.','Map controls to evidence that proves they operate.'],ready:['Distinguish risk from a vulnerability.','Write policies people can follow.','Communicate residual risk clearly.'],certs:['isc2-cc','security-plus']}
};
const addedLabs=[
{id:'login-triage',title:'Suspicious login triage',role:'SOC analyst',time:'15 min',brief:'An account has 8 failed logins, then a success from a new country at 02:14. The user normally signs in locally during daytime.',prompt:'Choose the best first response.',options:['Delete the logs and reset every account','Verify with the user, preserve evidence, revoke suspicious sessions and investigate related activity','Assume the user travelled and close the alert'],answer:1,why:'The pattern is suspicious but not proof. Preserve evidence, verify the activity and contain the potentially compromised session while checking scope.',proof:'Write a five-line escalation note: facts, risk, actions, evidence and next step.'},
{id:'phishing-triage',title:'Phishing message triage',role:'Blue team',time:'12 min',brief:'A message says campus.example.edu, but its link points to campus-login.example.net.',prompt:'What is the strongest indicator?',options:['The message uses a logo','The destination domain does not match the trusted domain','The message arrived in the morning'],answer:1,why:'A mismatched destination is a concrete indicator. Do not open it; report it through a trusted route and preserve the message.',proof:'Record the sender, reply-to, destination domain, time and reporting action.'},
{id:'access-control',title:'Broken access control review',role:'Security engineer',time:'15 min',brief:'A student changes /records/104 to /records/105 and sees another student’s private record.',prompt:'Which fix addresses the root cause?',options:['Hide the ID with CSS','Use longer numeric IDs only','Check on every server request that the user may access the requested record'],answer:2,why:'This is object-level authorisation. Unpredictable IDs cannot replace a server-side permission check.',proof:'Write one positive and two negative authorisation test cases.'}
];

const originalResources=[
  {
    "name": "ISC2 Certified in Cybersecurity (CC)",
    "roles": [
      "SOC Analyst",
      "Security Consultant"
    ],
    "level": "Beginner",
    "cost": "Check current official pricing",
    "prerequisites": "No work experience required",
    "tradeoff": "A broad entry-level credential. It does not replace hands-on practice.",
    "url": "https://www.isc2.org/certifications/cc"
  },
  {
    "name": "CompTIA Security+",
    "roles": [
      "SOC Analyst",
      "Security Consultant",
      "Security Engineer"
    ],
    "level": "Beginner to intermediate",
    "cost": "Paid exam; regional pricing varies",
    "prerequisites": "No formal prerequisite; networking knowledge helps",
    "tradeoff": "Well-known coverage, but wider than any single job role.",
    "url": "https://www.comptia.org/certifications/security"
  },
  {
    "name": "Cisco Certified Support Technician Cybersecurity",
    "roles": [
      "SOC Analyst"
    ],
    "level": "Beginner",
    "cost": "Paid exam; regional pricing varies",
    "prerequisites": "No formal prerequisite",
    "tradeoff": "Focused on junior analyst foundations and Cisco-aligned objectives.",
    "url": "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-cybersecurity.html"
  },
  {
    "name": "PortSwigger Web Security Academy",
    "roles": [
      "Penetration Tester",
      "Application Security Specialist"
    ],
    "level": "Beginner to advanced",
    "cost": "Free learning and labs",
    "prerequisites": "Basic HTTP and web concepts",
    "tradeoff": "Excellent practical web-security training, but it is not an industry certification.",
    "url": "https://portswigger.net/web-security"
  },
  {
    "name": "Microsoft Applied Skills and Learn",
    "roles": [
      "Cloud Security Engineer",
      "SOC Analyst"
    ],
    "level": "Beginner to intermediate",
    "cost": "Many learning paths are free; credentials vary",
    "prerequisites": "Basic cloud and identity concepts",
    "tradeoff": "Useful for Microsoft environments; verify each credential and assessment separately.",
    "url": "https://learn.microsoft.com/credentials/"
  },
  {
    "name": "AWS Skill Builder Security Learning",
    "roles": [
      "Cloud Security Engineer"
    ],
    "level": "Beginner to intermediate",
    "cost": "Free and paid options",
    "prerequisites": "Basic AWS and networking concepts",
    "tradeoff": "Good vendor-specific learning. Start after cloud fundamentals.",
    "url": "https://skillbuilder.aws/"
  },
  {
    "name": "TryHackMe learning paths",
    "roles": [
      "SOC Analyst",
      "Penetration Tester",
      "Digital Forensics Investigator"
    ],
    "level": "Beginner to intermediate",
    "cost": "Free and paid access",
    "prerequisites": "A safe lab mindset and basic technical foundations",
    "tradeoff": "Hands-on practice and completion certificates are not the same as proctored certifications.",
    "url": "https://tryhackme.com/paths"
  }
];
const socMilestones=[
  {
    "stage": "1 · Foundations",
    "skills": "Operating systems, Linux, networking, HTTP and security basics",
    "evidence": "Explain one authentication event and trace a DNS request.",
    "chapters": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "stage": "2 · Defensive practice",
    "skills": "Identity, logs, common attacks, alert triage and incident response",
    "evidence": "Complete the three guided labs and write a short triage note.",
    "chapters": [
      5,
      6,
      7,
      9
    ]
  },
  {
    "stage": "3 · Job evidence",
    "skills": "Investigation notes, escalation decisions, clear communication and repeatable workflow",
    "evidence": "Publish a sanitized incident report and a detection-learning journal.",
    "chapters": [
      8,
      9,
      10,
      11
    ]
  }
];
const originalLabs=[
  {
    "id": "linux-auth",
    "title": "Linux authentication log triage",
    "skill": "Log analysis",
    "time": "15 min",
    "scenario": "A training server shows several failed SSH logins followed by one successful login.",
    "evidence": [
      "09:14 Failed password for invalid user admin from 203.0.113.24",
      "09:15 Failed password for student from 203.0.113.24",
      "09:17 Accepted password for student from 203.0.113.24"
    ],
    "question": "What is the safest first conclusion?",
    "options": [
      "The server is definitely compromised",
      "The sequence is suspicious and needs account and source-IP investigation",
      "All failed logins are harmless",
      "Delete the log to prevent panic"
    ],
    "answer": 1,
    "feedback": "A success after repeated failures is suspicious, but one small log sample cannot prove compromise. Preserve evidence, check the account owner, review surrounding events and escalate using the approved process."
  },
  {
    "id": "web-access",
    "title": "Web access log investigation",
    "skill": "Web monitoring",
    "time": "15 min",
    "scenario": "A demo site receives repeated requests for a sensitive administration path.",
    "evidence": [
      "198.51.100.7 GET / 200",
      "198.51.100.7 GET /admin 401",
      "198.51.100.7 GET /admin 401",
      "198.51.100.7 GET /admin 200"
    ],
    "question": "Which detail deserves immediate follow-up?",
    "options": [
      "The first home-page request",
      "The successful /admin response after authentication failures",
      "The use of HTTP GET alone",
      "The repeated IP address alone proves an attacker"
    ],
    "answer": 1,
    "feedback": "The change from rejected to successful administration access is the strongest signal. Validate whether it belongs to an authorized administrator and correlate it with authentication and application logs."
  },
  {
    "id": "phishing",
    "title": "Phishing message assessment",
    "skill": "Email triage",
    "time": "10 min",
    "scenario": "A message claims your account expires today and asks you to sign in through a shortened link.",
    "evidence": [
      "From: IT Support <helpdesk@example-support.test>",
      "Subject: URGENT: account expires today",
      "Link text: University login",
      "Destination: https://short.example/4n2Q"
    ],
    "question": "What should the learner do first?",
    "options": [
      "Open the link in a normal browser",
      "Reply with a password to prove identity",
      "Use a trusted contact method or official portal to verify the request",
      "Forward it to friends for opinions"
    ],
    "answer": 2,
    "feedback": "Do not interact with the link. Verify through a known official portal or trusted contact route, then report the message using the organization’s process."
  }
];
const certificationGuide=addedCertifications.map(c=>{const r=originalResources.find(x=>x.name===c.name);return r?{...c,roles:[...new Set([...c.roles,...r.roles])],prerequisites:r.prerequisites,tradeoff:r.tradeoff}:c;});
originalResources.filter(r=>!certificationGuide.some(c=>c.name===r.name)).forEach((r,i)=>certificationGuide.push({...r,id:'original-'+i,kind:r.name.startsWith('Cisco')?'certification':'learning',verdict:r.name.startsWith('Cisco')?'Junior security credential':'Learning alternative',why:r.tradeoff,before:r.prerequisites,learn:r.name.startsWith('Cisco')?'Junior cybersecurity foundations.':'Follow the official learning paths; verify each credential separately.',checked:'Official source; verify current terms'}));
const miniLabs=[...addedLabs,...originalLabs.map(l=>({...l,role:'SOC analyst',brief:l.scenario,prompt:l.question,why:l.feedback,proof:'Write a triage note: facts, missing evidence, next investigation steps and escalation rationale.'}))];
function labComplete(id){const r=state.labResults[id];return typeof r==='string'?/^\d{4}-\d{2}-\d{2}$/.test(r):!!(r&&r.correct===true)}
function featureState(){return state.labResults}
function storageNotice(){return storageError?'<p class="notice" role="alert">Browser storage is unavailable. Progress lasts only while this page stays open. Copy your notes before closing it.</p>':''}
function socMilestonePanel(){return '<section class="card"><h2>SOC Analyst milestones</h2><p class="notice">Use these as learning evidence, not a promise of employment.</p><div class="milestones">'+socMilestones.map(m=>'<section><h3>'+m.stage+'</h3><p>'+m.skills+'</p><p>'+m.evidence+'</p><div class="rolechapters">'+m.chapters.map(i=>btn('Chapter '+(i+1),'openChapter('+i+')','secondary')).join('')+'</div></section>').join('')+'</div></section>'}

state.labResults=state.labResults && typeof state.labResults==='object' && !Array.isArray(state.labResults)?state.labResults:{};let certRole='all',activeLab=null;
const basicRoleDetail=roleDetail;
roleDetail=function(){const r=careerRoles[selectedRole],g=roleGuides[r.name];if(!g)return basicRoleDetail();return basicRoleDetail()+`<div class="role-outcome"><b>PRACTICE TARGET</b><p>${g.outcome}</p></div><h4>Your three milestones</h4><div class="milestones">${g.milestones.map((m,i)=>`<div><b>${i+1}</b><p>${m}</p></div>`).join('')}</div><h4>Portfolio proof</h4><ul>${g.projects.map(x=>`<li>${x}</li>`).join('')}</ul><h4>Readiness check</h4><ul class="checklist">${g.ready.map(x=>`<li>${x}</li>`).join('')}</ul><h4>Relevant chapters</h4><div class="rolechapters">${r.route.map(i=>`<button class="secondary" onclick="openChapter(${i})">${String(i+1).padStart(2,'0')} · ${chapters[i].title}</button>`).join('')}</div><div class="actions">${btn('Matched certifications →',`showRoleCerts('${r.name}')`,'secondary')}${btn('Try a mini-lab →',"navigate('labs')")}</div>`};
function certificationPage(){const allRoles=[...careerRoles.map(r=>r.name),...certificationGuide.flatMap(c=>c.roles)],roles=['all',...allRoles.filter((r,i)=>allRoles.findIndex(x=>x.toLowerCase()===r.toLowerCase())===i)],items=certificationGuide.filter(c=>certRole==='all'||c.roles.some(r=>r.toLowerCase()===certRole.toLowerCase()));return intro('Credentials with a purpose.','Choose a certification only when it supports your target role, skills and budget. Projects still matter.','HONEST CERTIFICATION GUIDE')+`<section class="card cert-principle"><div><span class="eyebrow">THE RULE</span><h2>Skill first. Certificate second.</h2></div><p>Compare certifications with learning alternatives. A course-completion certificate is not an industry certification. Prices and exam versions change; use the official provider link before paying.</p></section><div class="filterbar">${roles.map(r=>`<button class="secondary ${certRole===r?'selected':''}" onclick="filterCerts('${r}')">${r==='all'?'All options':r}</button>`).join('')}</div><div class="cert-grid">${items.map(c=>`<article class="card cert-card"><div class="sessionhead"><span class="pill green">${c.kind==='learning'?'Learning alternative':c.level}</span><small>${c.checked}</small></div><h2>${c.name}</h2><strong class="verdict">${c.verdict}</strong><p>${c.why}</p><dl><dt>What it covers</dt><dd>${c.learn}</dd><dt>Before you pay</dt><dd>${c.before}</dd>${c.prerequisites?'<dt>Entry requirements</dt><dd>'+c.prerequisites+'</dd>':''}${c.tradeoff&&c.tradeoff!==c.why?'<dt>Tradeoff</dt><dd>'+c.tradeoff+'</dd>':''}<dt>Useful for</dt><dd>${[...new Set(c.roles.map(r=>r.toLowerCase()))].join(' · ')}</dd><dt>Cost note</dt><dd>${c.cost}</dd></dl><div class="actions"><a class="secondary buttonlink" href="${c.url}" target="_blank" rel="noopener noreferrer">Official page ↗</a></div></article>`).join('')}</div><p class="notice">CyberStudy is independent and receives no commission. Cost notes may exclude taxes, exchange rates, memberships, training and retakes.</p>`}
function filterCerts(role){certRole=role;render()}function showRoleCerts(role){certRole=role;navigate('certifications')}
function labPage(){if(activeLab!==null)return labDetail(activeLab);const complete=miniLabs.filter(l=>labComplete(l.id)).length;return intro('Practise the decision, not the tool name.','Short, safe scenarios that build investigation and security-thinking habits.','PRACTICAL MINI-LABS')+`<section class="card lab-summary"><div><span class="eyebrow">YOUR LAB RECORD</span><h2>${complete} / ${miniLabs.length} completed</h2><p>Saved only in this browser.</p></div><div class="lab-ring">${Math.round(complete/miniLabs.length*100)}%</div></section><div class="lab-grid">${miniLabs.map((l,i)=>`<article class="card lab-card"><div class="sessionhead"><span class="pill">${l.role}</span><small>${l.time}</small></div><h2>${l.title}</h2><p>${l.brief}</p><div class="actions"><span class="${labComplete(l.id)?'lab-done':''}">${labComplete(l.id)?'✓ Completed':'Guided scenario'}</span>${btn(state.labResults[l.id]?'Revisit →':'Start lab →',`openLab(${i})`,'secondary')}</div></article>`).join('')}</div>${socMilestonePanel()}<section class="card safe-note"><b>Safe practice only</b><p>Use systems you own or have explicit permission to test. These labs teach defensive reasoning and never target real services.</p></section>`}
function openLab(i){activeLab=i;render();window.scrollTo({top:0,behavior:'instant'})}function closeLab(){activeLab=null;render()}
function labDetail(i){const l=miniLabs[i],saved=state.labResults[l.id],complete=labComplete(l.id);return `<div class="lab-back">${btn('← All mini-labs','closeLab()','secondary')}</div>`+intro(l.title,l.brief,`${l.role.toUpperCase()} · ${l.time.toUpperCase()}`)+`<section class="card lab-work"><div class="eyebrow">MAKE THE CALL</div><h2>${l.prompt}</h2>${l.options.map((o,n)=>`<button class="option ${complete&&n===l.answer?'correct':''} ${saved?.choice===n?'chosen':''}" onclick="gradeLab(${i},${n})" ><span>${'ABCD'[n]}</span>${o}</button>`).join('')}<div id="lab-feedback" role="status" aria-live="polite">${saved?labFeedback(l,complete):''}</div></section>`}
function gradeLab(i,choice){const l=miniLabs[i];if(!l||!Number.isInteger(choice)||choice<0||choice>=l.options.length)return;if(typeof captureLabDraft==='function')captureLabDraft(i);const ok=choice===l.answer;state.labResults[l.id]={choice,correct:ok,completed:ok?today():null};save();render()}
function labFeedback(l,ok){return `<div class="lab-feedback ${ok?'success':'retry'}"><b>${ok?'Good decision.':'Not yet—choose the action that preserves evidence and fixes the root problem.'}</b><p>${l.why}</p>${ok?`<div class="examnote"><b>PORTFOLIO PROOF</b><p>${l.proof}</p></div>`:''}</div>`}
const featureRender=render;
render=function(){if(page==='certifications'||page==='labs'){document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));document.getElementById('badge').textContent=state.wrong.length;document.getElementById('app').innerHTML=(page==='certifications'?certificationPage():labPage())+storageNotice();return}featureRender();if(page==='home'){const n=nextBestStep();document.getElementById('app').insertAdjacentHTML('beforeend',`<section class="next-step"><div><span class="eyebrow">YOUR NEXT BEST STEP</span><h2>${n.title}</h2><p>${n.reason}</p></div>${btn(n.cta,n.action)}</section>`)}}
function nextBestStep(){if(!state.chaptersDone.length)return{title:'Start with how computers and operating systems work.',reason:'A strong security path begins with the systems you will protect.',cta:'Open chapter 1 →',action:'openChapter(0)'};if(!labComplete('login-triage')&&state.chaptersDone.length>=4)return{title:'Turn your foundations into an investigation.',reason:'You have enough chapter progress to practise a suspicious-login decision.',cta:'Start the login lab →',action:'openLabFromHome(0)'};if(state.wrong.length)return{title:`Revisit ${state.wrong.length} missed concept${state.wrong.length===1?'':'s'}.`,reason:'Your mistakes show what to strengthen next.',cta:'Open review →',action:"navigate('review')"};return{title:'Keep the habit with four focused questions.',reason:'Retrieval practice turns reading into usable knowledge.',cta:'Start daily practice →',action:"navigate('daily')"}}
function openLabFromHome(i){page='labs';activeLab=i;render();window.scrollTo({top:0,behavior:'instant'})}
function renderCertifications(){page='certifications';render()}
function renderLabs(){page='labs';render()}
page='home';render();
