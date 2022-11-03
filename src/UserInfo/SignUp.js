
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const SignUp = () => {
    const {createUser}=useContext(AuthContext)

    const handleSignUp=event=>{
        event.preventDefault()
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>console.error(err))



    }
    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


      <form onSubmit={handleSignUp} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          
        </div>
      </form>


    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;