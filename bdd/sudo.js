const a13_0x482081=a13_0x4f94;(function(_0x1d3961,_0x14b399){const _0x12dae3=a13_0x4f94,_0x763284=_0x1d3961();while(!![]){try{const _0x5e4015=parseInt(_0x12dae3(0x198))/0x1+-parseInt(_0x12dae3(0x1b5))/0x2*(parseInt(_0x12dae3(0x1a3))/0x3)+-parseInt(_0x12dae3(0x1a6))/0x4*(parseInt(_0x12dae3(0x19e))/0x5)+-parseInt(_0x12dae3(0x1a1))/0x6*(parseInt(_0x12dae3(0x1a5))/0x7)+-parseInt(_0x12dae3(0x1b1))/0x8*(parseInt(_0x12dae3(0x19f))/0x9)+-parseInt(_0x12dae3(0x19b))/0xa+-parseInt(_0x12dae3(0x19d))/0xb*(-parseInt(_0x12dae3(0x1b7))/0xc);if(_0x5e4015===_0x14b399)break;else _0x763284['push'](_0x763284['shift']());}catch(_0x3fbe14){_0x763284['push'](_0x763284['shift']());}}}(a13_0x1148,0x468d3),require(a13_0x482081(0x1ae))['config']());const {Pool}=require('pg'),s=require(a13_0x482081(0x1b6));var dbUrl=s[a13_0x482081(0x19c)]?s[a13_0x482081(0x19c)]:a13_0x482081(0x1a9);function a13_0x4f94(_0x2fc9b4,_0xbed4df){const _0x11484f=a13_0x1148();return a13_0x4f94=function(_0x4f9497,_0xf8d6c0){_0x4f9497=_0x4f9497-0x194;let _0x1eccbc=_0x11484f[_0x4f9497];return _0x1eccbc;},a13_0x4f94(_0x2fc9b4,_0xbed4df);}const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createSudoTable(){const _0x1c6663=a13_0x482081,_0x134857=await pool[_0x1c6663(0x1a0)]();try{await _0x134857[_0x1c6663(0x1a2)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20sudo\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x1c6663(0x1b8)]('La\x20table\x20\x27sudo\x27\x20a\x20été\x20créée\x20avec\x20succès.');}catch(_0xfbdcec){console[_0x1c6663(0x1ab)](_0x1c6663(0x1ac),_0xfbdcec);}finally{_0x134857[_0x1c6663(0x1b2)]();}}function a13_0x1148(){const _0x436639=['6NvhuOY','query','181833iRVNRK','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20numéros\x20de\x20téléphone\x20autorisés\x20:','2540986HgcFXI','4scNMrc','rows','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1)','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:','error','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27sudo\x27:','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:','dotenv','\x20supprimé\x20de\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','INSERT\x20INTO\x20sudo\x20(jid)\x20VALUES\x20($1)','88ZLkuKn','release','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20la\x20table\x20\x22sudo\x22\x20:','DELETE\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1','2vNmggR','../set','984UDZmht','log','jid','count','exports','Numéro\x20de\x20téléphone\x20','Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:','exists','69001UHJRmm','SELECT\x20COUNT(*)\x20FROM\x20sudo','\x20ajouté\x20à\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','2592110UeOzoO','DATABASE_URL','202631Tcfpvd','441630ZtXRAn','424962lLbaDV','connect'];a13_0x1148=function(){return _0x436639;};return a13_0x1148();}createSudoTable();async function issudo(_0x27b526){const _0x499176=a13_0x482081,_0x3a56a5=await pool[_0x499176(0x1a0)]();try{const _0x4a3766=_0x499176(0x1a8),_0x41aefa=[_0x27b526],_0x32fbe6=await _0x3a56a5['query'](_0x4a3766,_0x41aefa);return _0x32fbe6[_0x499176(0x1a7)][0x0][_0x499176(0x197)];}catch(_0x415128){return console[_0x499176(0x1ab)](_0x499176(0x1ad),_0x415128),![];}finally{_0x3a56a5[_0x499176(0x1b2)]();}}async function removeSudoNumber(_0xb5aac0){const _0x17923f=a13_0x482081,_0x20be35=await pool[_0x17923f(0x1a0)]();try{const _0x311d8f=_0x17923f(0x1b4),_0x56ee8d=[_0xb5aac0];await _0x20be35[_0x17923f(0x1a2)](_0x311d8f,_0x56ee8d),console[_0x17923f(0x1b8)](_0x17923f(0x195)+_0xb5aac0+_0x17923f(0x1af));}catch(_0xd8f5d5){console['error'](_0x17923f(0x196),_0xd8f5d5);}finally{_0x20be35[_0x17923f(0x1b2)]();}}async function addSudoNumber(_0x2b3d7a){const _0x1835ae=a13_0x482081,_0x59ef26=await pool[_0x1835ae(0x1a0)]();try{const _0x3ffd8b=_0x1835ae(0x1b0),_0x309312=[_0x2b3d7a];await _0x59ef26['query'](_0x3ffd8b,_0x309312),console[_0x1835ae(0x1b8)](_0x1835ae(0x195)+_0x2b3d7a+_0x1835ae(0x19a));}catch(_0x1379ad){console[_0x1835ae(0x1ab)](_0x1835ae(0x1aa),_0x1379ad);}finally{_0x59ef26[_0x1835ae(0x1b2)]();}}async function getAllSudoNumbers(){const _0x4c9c1f=a13_0x482081,_0x4fbfef=await pool[_0x4c9c1f(0x1a0)]();try{const _0x363fc5='SELECT\x20jid\x20FROM\x20sudo',_0x43db26=await _0x4fbfef['query'](_0x363fc5),_0xf94961=_0x43db26[_0x4c9c1f(0x1a7)]['map'](_0x3346d8=>_0x3346d8[_0x4c9c1f(0x1b9)]);return _0xf94961;}catch(_0x5283f3){return console['error'](_0x4c9c1f(0x1a4),_0x5283f3),[];}finally{_0x4fbfef[_0x4c9c1f(0x1b2)]();}}async function isSudoTableNotEmpty(){const _0x4d5779=a13_0x482081,_0x5ebb57=await pool[_0x4d5779(0x1a0)]();try{const _0x335a51=await _0x5ebb57['query'](_0x4d5779(0x199)),_0x345609=parseInt(_0x335a51['rows'][0x0][_0x4d5779(0x1ba)]);return _0x345609>0x0;}catch(_0x12d968){return console['error'](_0x4d5779(0x1b3),_0x12d968),![];}finally{_0x5ebb57[_0x4d5779(0x1b2)]();}};module[a13_0x482081(0x194)]={'issudo':issudo,'addSudoNumber':addSudoNumber,'removeSudoNumber':removeSudoNumber,'getAllSudoNumbers':getAllSudoNumbers,'isSudoTableNotEmpty':isSudoTableNotEmpty};