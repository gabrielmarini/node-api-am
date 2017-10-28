export const success = (res, status) => (entity) =>{
    if(entity){
        res.status(status || 200).json(entity)
    }
    return null
}

export const notFound = (res) => (entity) =>{
    if(entity){
        return entity
    }
    res.status(400).end()
    return null
}