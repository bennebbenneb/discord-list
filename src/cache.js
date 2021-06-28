(async function(){
bots = require("@models/bots.js");
users = require("@models/users.js");
servers = require("@models/servers.js");
globalThis.Cache = {};
Cache.AllBots = await bots.find();
Cache.AllUsers = await users.find();
Cache.AllServers = await servers.find();
Cache.models = {bots, users, servers};

Cache.Bots.findOneById = function (q){
 return Bots[Bots.findIndex(b=>b.id==q)];
}

Cache.Bots.findOneByCode = function (q){
 return Bots[Bots.findIndex(b=>b.code==q)];
}

Cache.clean = function(arg){
  const {_id, code, ...bot} = arg;
  return bot;
}

})();