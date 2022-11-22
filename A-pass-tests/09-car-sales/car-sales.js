function sales(carsSold) {
    let obj={}
    for(let item of carsSold){
        if(obj[item.make]){
            obj[item.make]+=item.price
        }else obj[item.make]=item.price

    }
    return obj
}

module.exports = sales;
