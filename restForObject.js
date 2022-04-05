const man = {
    name: 'lumpen'
  };
  
const soloMan = {
    ...man,
    attribute: 'solo'
  };
  
const poorSoloMan= {
    ...soloMan,
    assets: 'poor'
  };
  
  
  var { assets, ...soloMan2 } = poorSoloMan;
  console.log(assets);
  console.log(soloMan2);
  
  var { assets, attribute, ...man2 } = poorSoloMan;
  console.log(assets);
  console.log(attribute);
  console.log(man2);