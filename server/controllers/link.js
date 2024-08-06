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
        return res.json({
            sucess:false,
            message:"Link not found",
        })
    }
   
    link.views= link.views+1;
    await link.save();
    
    res.redirect(link.target);

};


export {postLink,getSlugRedirect};