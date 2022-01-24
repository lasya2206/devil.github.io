var url = "http://universities.hipolabs.com/search?country=india"
var data = fetch(url);
data.then(fulfill).then(secFull).catch(notFull);
function fulfill(arg){
    return arg.json();
}
function notFul(arg){
    console.log("hi")
}
function secFull(arg){
    document.write(arg[0].country);
    document.write(arg[0].name);
    document.write(arg[0].domains);
    document.write(arg[0]["state-province"]);
}
