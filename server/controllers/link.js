import Link from "./../models/Link.js"

const postLink =async(req,res)=>{

    const{target,slug,title}=req.body;

    const link = new Link({
        target,
        slug,
        title
    })

    const savedLink=await link.save();

    res.json({
        success:true,
        data:savedLink,
        message:"Link saved successfully"

    });
}

const getSlugRedirect =async(req,res)=>{
    
    const {slug}=req.params;
    const link = await Link.findOne({slug});
    if(!link){
        return res.status(404).json({
            success:false,
            message:"Link not found",
        })
    }
   
    link.views= link.views+1;
    await link.save();
    
    res.redirect(link.target);

};

const getLinks= async(req,res)=>{
    const allLinks =await Link.find()
    res.json({
        success:true,
        message:"All links fetched successfully",
        data:allLinks
    })
}


export {postLink,getSlugRedirect,getLinks};