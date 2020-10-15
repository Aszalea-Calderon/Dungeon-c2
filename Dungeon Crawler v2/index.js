const makeTaunt ={
  item:'',
  useItem:function(adj){
    randomNum = Math.floor(Math.random()*3);
  }
}



const me = {
  item:"Aszalea",
  gpronouns:"her",
  name:'Aszalea',
  instr:"banjo",
  taunts:[
    'Your mother was a hamster',
    'Your father smelt of elder berries',
    'You are a son of a silly person'
]}
makeTaunt.useItem(me, "happily");