
module.exports.getDate = getDate;

function getDate(){
    const d = new Date();
   
    const options  = {
        weekday: "long" , 
        day : "numeric" ,
        month : "long"
    };
    
    let day = d.toLocaleString("en-US" , options);
    return day
}

module.exports.getDay = getDay;

function getDay(){
    const d = new Date();

    const options = {
        weekday : "long"
    }
    let day = d.toLocaleDateString("en-US" , options);
    return day;
}