function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `making ${kind} chai ...`
    }
    return `chai order : ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return `small cutting chai`
    }

    if(size === 'medium' || size === 'large'){
        return `make extra chai`
    }
    return `chai order ${size}`
}

class kulhadChai {
    server(){
        return `servind cutting chai`
    }
}

class Cutting {
    server(){
        return `servind cutting chai`
    }
}

function serve(chai: kulhadChai | Cutting){
    if(chai instanceof kulhadChai)
    {
        return chai.server()
    }
}

type ChaiOrder = {
    type:string
    sugar: number
}

function isChaiOrder(obj: any):obj is ChaiOrder{
    return (
        typeof obj ==="object" &&
        obj !== null &&
        typeof obj.type ==="string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} ${item.sugar}`
    }
    return `servind ${item}`
}

type masalachai = {
    type:"masala";
    special:number
}