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
  
  console.log(man);
  console.log(soloMan);
  console.log(poorSoloMan);