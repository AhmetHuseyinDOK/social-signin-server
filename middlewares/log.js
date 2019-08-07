exports.start = (req,res,next) => {
    console.log('||********** Request Started ****************||');
    console.log(req.body);
    res.on('finish',()=>{
        console.log('**********************************************');
        console.log(res.body);
        console.log('||********** Request Ended *****************||');
    })
    next();
}
