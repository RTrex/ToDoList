module.exports= getDate;
function getDate() {
let day = new Date();
let options = {
  weekday : "long",
  day: "numeric",
  month: "long" 
}
let oof = day.toLocaleDateString("en-US", options);
return oof;
}