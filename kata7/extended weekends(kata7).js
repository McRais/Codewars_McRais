function solve(a, b, c = []){

    for (let year = a; year <= b; year++){
        for (let ms = 0; ms < 12; ms++){
            const first = new Date(year, ms, 1)
            const second = new Date(year, ms+1, 0);
            if (first.getDay() === 5 && !(second.getDay())){
              c.push(first.toString().match(/\w+/g)[1]);
            } 
        }
    }
    return [c[0], c.slice(-1)[0], c.length]
}