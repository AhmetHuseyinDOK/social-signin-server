const auth = require('../services/google-auth');
exports.verify = (req,res) => {
    let {token} = req.body;
    try{ 
        let info = auth.verify(token);
        res.send(info);
    }catch(err){
        console.log(err);   
        res.status(401).send("NOT_VALID_TOKEN");
    }
}