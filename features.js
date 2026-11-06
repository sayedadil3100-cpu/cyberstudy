const certificationGuide=[
  {name:'ISC2 Certified in Cybersecurity (CC)',roles:['SOC Analyst','Security Consultant'],level:'Beginner',cost:'Check current official pricing',prerequisites:'No work experience required',tradeoff:'A broad entry-level credential. It does not replace hands-on practice.',url:'https://www.isc2.org/certifications/cc'},
  {name:'CompTIA Security+',roles:['SOC Analyst','Security Consultant','Security Engineer'],level:'Beginner to intermediate',cost:'Paid exam; regional pricing varies',prerequisites:'No formal prerequisite; networking knowledge helps',tradeoff:'Well-known coverage, but wider than any single job role.',url:'https://www.comptia.org/certifications/security'},
  {name:'Cisco Certified Support Technician Cybersecurity',roles:['SOC Analyst'],level:'Beginner',cost:'Paid exam; regional pricing varies',prerequisites:'No formal prerequisite',tradeoff:'Focused on junior analyst foundations and Cisco-aligned objectives.',url:'https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-cybersecurity.html'},
  {name:'PortSwigger Web Security Academy',roles:['Penetration Tester','Application Security Specialist'],level:'Beginner to advanced',cost:'Free learning and labs',prerequisites:'Basic HTTP and web concepts',tradeoff:'Excellent practical web-security training, but it is not an industry certification.',url:'https://portswigger.net/web-security'},
  {name:'Microsoft Applied Skills and Learn',roles:['Cloud Security Engineer','SOC Analyst'],level:'Beginner to intermediate',cost:'Many learning paths are free; credentials vary',prerequisites:'Basic cloud and identity concepts',tradeoff:'Useful for Microsoft environments; verify each credential and assessment separately.',url:'https://learn.microsoft.com/credentials/'},
  {name:'AWS Skill Builder Security Learning',roles:['Cloud Security Engineer'],level:'Beginner to intermediate',cost:'Free and paid options',prerequisites:'Basic AWS and networking concepts',tradeoff:'Good vendor-specific learning. Start after cloud fundamentals.',url:'https://skillbuilder.aws/'},
  {name:'TryHackMe learning paths',roles:['SOC Analyst','Penetration Tester','Digital Forensics Investigator'],level:'Beginner to intermediate',cost:'Free and paid access',prerequisites:'A safe lab mindset and basic technical foundations',tradeoff:'Hands-on practice and completion certificates are not the same as proctored certifications.',url:'https://tryhackme.com/paths'}
];

const socMilestones=[
  {stage:'1 · Foundations',skills:'Operating systems, Linux, networking, HTTP and security basics',evidence:'Explain one authentication event and trace a DNS request.',chapters:[0,1,2,3,4]},
  {stage:'2 · Defensive practice',skills:'Identity, logs, common attacks, alert triage and incident response',evidence:'Complete the three guided labs and write a short triage note.',chapters:[5,6,7,9]},
  {stage:'3 · Job evidence',skills:'Investigation notes, escalation decisions, clear communication and repeatable workflow',evidence:'Publish a sanitized incident report and a detection-learning journal.',chapters:[8,9,10,11]}
];

const miniLabs=[
  {id:'linux-auth',title:'Linux authentication log triage',skill:'Log analysis',time:'15 min',scenario:'A training server shows several failed SSH logins followed by one successful login.',evidence:['09:14 Failed password for invalid user admin from 203.0.113.24','09:15 Failed password for student from 203.0.113.24','09:17 Accepted password for student from 203.0.113.24'],question:'What is the safest first conclusion?',options:['The server is definitely compromised','The sequence is suspicious and needs account and source-IP investigation','All failed logins are harmless','Delete the log to prevent panic'],answer:1,feedback:'A success after repeated failures is suspicious, but one small log sample cannot prove compromise. Preserve evidence, check the account owner, review surrounding events and escalate using the approved process.'},
  {id:'web-access',title:'Web access log investigation',skill:'Web monitoring',time:'15 min',scenario:'A demo site receives repeated requests for a sensitive administration path.',evidence:['198.51.100.7 GET / 200','198.51.100.7 GET /admin 401','198.51.100.7 GET /admin 401','198.51.100.7 GET /admin 200'],question:'Which detail deserves immediate follow-up?',options:['The first home-page request','The successful /admin response after authentication failures','The use of HTTP GET alone','The repeated IP address alone proves an attacker'],answer:1,feedback:'The change from rejected to successful administration access is the strongest signal. Validate whether it belongs to an authorized administrator and correlate it with authentication and application logs.'},
  {id:'phishing',title:'Phishing message assessment',skill:'Email triage',time:'10 min',scenario:'A message claims your account expires today and asks you to sign in through a shortened link.',evidence:['From: IT Support <helpdesk@example-support.test>','Subject: URGENT: account expires today','Link text: University login','Destination: https://short.example/4n2Q'],question:'What should the learner do first?',options:['Open the link in a normal browser','Reply with a password to prove identity','Use a trusted contact method or official portal to verify the request','Forward it to friends for opinions'],answer:2,feedback:'Do not interact with the link. Verify through a known official portal or trusted contact route, then report the message using the organization’s process.'}
];

function featureState(){
  state.labResults=state.labResults||{};
  return state.labResults;
}
function featureShell(title,description,body){
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  document.getElementById('badge').textContent=state.wrong.length;
  document.getElementById('app').innerHTML=intro(title,description,'CAREER PRACTICE')+body;
}
function renderCertifications(){
  const roles=[...new Set(certificationGuide.flatMap(c=>c.roles))];
  featureShell('Choose credentials with a clear reason.','Compare legitimate certifications, practical learning alternatives and their tradeoffs. Always confirm current fees and exam rules on the official page.',`<div class="filter-note"><strong>How to use this guide</strong><p>Pick a target role, build the underlying skill, then decide whether a credential adds value for your location and job market. A course-completion certificate is not automatically an industry certification.</p></div><div class="cert-grid">${certificationGuide.map(c=>`<article class="card cert-card"><span class="pill">${c.level}</span><h2>${c.name}</h2><p><b>Useful for</b><br>${c.roles.join(' · ')}</p><p><b>Typical cost</b><br>${c.cost}</p><p><b>Before starting</b><br>${c.prerequisites}</p><p class="notice">${c.tradeoff}</p><a class="secondary" href="${c.url}" target="_blank" rel="noopener noreferrer">Official source ↗</a></article>`).join('')}</div><p class="notice">Roles covered: ${roles.join(', ')}. Prices, discounts and exam policies can change, so CyberStudy links to official sources instead of copying a fixed price.</p>`);
}
function renderLabs(){
  const results=featureState();
  featureShell('Practice safe investigation skills.','These guided exercises use fictional, reserved example data. They teach evidence-based reasoning without scanning or attacking real systems.',`<div class="lab-list">${miniLabs.map((lab,i)=>`<article class="card lab-card"><div class="lab-heading"><div><span class="pill">${lab.skill}</span><h2>${lab.title}</h2></div><small>${lab.time}</small></div><p>${lab.scenario}</p><pre aria-label="Evidence for ${lab.title}">${lab.evidence.join('\n')}</pre><fieldset><legend>${lab.question}</legend>${lab.options.map((o,n)=>`<label class="lab-option"><input type="radio" name="lab-${i}" value="${n}" ${results[lab.id]?.choice===n?'checked':''}> <span>${o}</span></label>`).join('')}</fieldset><div class="actions"><small>${results[lab.id]?results[lab.id].correct?'Completed correctly':'Try again after reading the feedback':'Your answer saves on this browser.'}</small>${btn(results[lab.id]?'Check again':'Check answer',`gradeLab(${i})`)}</div><div id="lab-feedback-${i}" class="lab-feedback ${results[lab.id]?'shown':''}" role="status">${results[lab.id]?`<strong>${results[lab.id].correct?'Good investigation reasoning.':'Not yet. Review the evidence.'}</strong><p>${lab.feedback}</p>`:''}</div></article>`).join('')}</div><section class="card"><h2>SOC Analyst milestones</h2><p class="notice">Use these as learning evidence, not a promise of employment.</p><div class="milestone-grid">${socMilestones.map(m=>`<div><span class="eyebrow">${m.stage}</span><h3>${m.skills}</h3><p>${m.evidence}</p><div class="chaptertopics">${m.chapters.map(i=>`<button class="secondary" onclick="openChapter(${i})">Chapter ${i+1}</button>`).join('')}</div></div>`).join('')}</div></section>`);
}
function gradeLab(index){
  const lab=miniLabs[index],selected=document.querySelector(`input[name="lab-${index}"]:checked`);
  const feedback=document.getElementById(`lab-feedback-${index}`);
  if(!selected){feedback.className='lab-feedback shown';feedback.innerHTML='<strong>Choose one answer first.</strong>';return}
  const choice=Number(selected.value),correct=choice===lab.answer;
  featureState()[lab.id]={choice,correct,completed:correct?today():null};
  save();
  feedback.className='lab-feedback shown';
  feedback.innerHTML=`<strong>${correct?'Good investigation reasoning.':'Not yet. Review the evidence.'}</strong><p>${lab.feedback}</p>`;
}

const featureBaseRender=render;
render=function(){
  if(page==='labs'){renderLabs();return}
  if(page==='certifications'){renderCertifications();return}
  featureBaseRender();
};
const featureBaseNavigate=navigate;
navigate=function(target){
  if(target==='labs'||target==='certifications'){
    page=target;review=null;render();window.scrollTo({top:0,behavior:'instant'});document.getElementById('app').focus({preventScroll:true});return;
  }
  featureBaseNavigate(target);
};

