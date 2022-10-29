- Bug #0: In the route auth/login missed the await when    
  User.authenticate was call.

     router.post('/login', async function(req, res, next) {
          const { username, password } = req.body;    
 fix B0// let user = await User.authenticate(username, password);
          const _token = createTokenForUser(username, user.admin);
          return res.json({_token});           
      }); // end

- Bug #1: In the route auth/login missed try and catch. to handel the error.

       router.post('/login', async function(req, res, next) {
fix B1// try{
           const { username, password } = req.body;
           let user = await User.authenticate(username, password);
           const _token = createTokenForUser(username, user.admin);
           return res.json({_token}); 
          } catch (err)      {
            return(err);
          }
       }); // end
   

- bug #2: In routes/auth.js the router.post('/login', async function(req, res, next) the variable "token" was misspelled.
   //Fixes bug #2  _token.

- bug #3: In the middleware/auth.js in the function authUser(req, res, next) to get the payload the jwt.decode(token) function was in use. It needs to have the token verification wich improve the sequirity. 
   //Fixes bug #2  let payload = jwt.verify(_token, SECRET_KEY)

- bug #4: In app.js the instruction module.exports = app; was writen two times;
