export const editKey= (model)=>{
    return (req, res, next) => {
        const { id } = req.params;
        req.contentID=model+id;
        next();
    }
}