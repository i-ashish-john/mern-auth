import User from "../models/user.model.js";

export const test = (req,res)=>{
    res.json({
        message:'API is working',
    })
}


//update user

export const updateUser = async (req,res,next)=>{
    if(req.user.id !== req.params.id){
        // return res.status(401).json("You can update only your account!");
        return next(errorHandler(401,'You can update only you'));
    }

    try{
     if(req.body.password){
        req.body.password = bcryptjs.hashSync(req.body.password,10);
     }
     const updateUser = await User.findByIdAndUpdate(
     req.params.id,
     {
        $set:{
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            profilePicture:req.body.profilePicture,
        } 

     },
     {new:true}
  );
  const {password,...rest}= updatedUser._doc;

  res.status(200).json(rest );
    }catch(error){
        next(error);
    }
}