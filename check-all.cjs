const {spawnSync}=require('node:child_process');
for(const script of ['check.cjs','check-chapters.cjs','check-roadmap.cjs','check-v2.cjs','check-features.cjs']){
 const result=spawnSync(process.execPath,[script],{cwd:__dirname,stdio:'inherit'});
 if(result.error||result.status!==0)process.exit(result.status||1);
}
