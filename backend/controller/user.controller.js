import User from "../model/user.model.js";
import bcrypt from 'bcrypt';


 export const signup = async(req, res) =>{

    try{

        const {fullname, email, password} = req.body;
           const user = await User.findOne({email});
           if(user){
            return res.status(400).json({message: "Sorry! user already exists."})
           }
           const hashedPassword = await bcrypt.hash(password, 10);
           const newUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword
           })
           await newUser.save();
           return res.status(200).json({message: "User created successfully", user:{
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
           }});


    } catch(error){
      console.log("ERROR" + error.message)
      return res.status(501).json({message: "Internal server error"});
    }

}


export const login = async(req, res) =>{
    try{

        const {email, password} = req.body;
        const user =await User.findOne({email});
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!user || !comparePassword){
            return res.status(201).json({message: "invalid username or password"});
        } else{
            return res.status(200).json({message: "Login successfull", user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }



    } catch(error){
        console.log(error.message);
        return res.status(501).json({message: "Internal server error"});
    }
}
