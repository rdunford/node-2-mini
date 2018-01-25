module.exports = {

    getPlanes: (req, res, next) =>{
        req.app.get('db').get_planes([25]).then(resp =>{
            res.status(200).send(resp)
        }).catch(err => console.log(err));
    }
}