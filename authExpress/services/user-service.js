export const protectedSignIn = (req, res)=>{
    console.log('Protected request');
    console.log(req.user);
    res.send('Protected Page')
}

export const unProtectedSignIn = (req, res)=>{
    console.log('UnProtected request');
    console.log(req.user);
    res.send('UnProtected Page')
}