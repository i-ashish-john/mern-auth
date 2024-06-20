import {Link,useNavigate } from 'react-router-dom';
import React from 'react';

export default function SignUp() {
  const[formData,setFormData] = React.useState({ });
  const [error,setError] = React.useState(false);
  const [loading,setLoading] = React.useState(false);
  const navigate = useNavigate(); 
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  console.log(formData);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);

      const res = await fetch('/api/auth/SignUp',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      setLoading(false);
      if(data.success===false){
        setError(true);
        return;
      }
      navigate('/SignIn')
    }catch(error){
      setLoading(false);
      setError(true)
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
        <input type="text"  placeholder='Username' id="username" className='bg bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="text"  placeholder='Email' id="email" className='bg bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="text"  placeholder='Password' id="password" className='bg bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' :'Sign Up'}</button>
      </form>        
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to ='/SignIn'> 
        <span className='text-blue-500'>sign in </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong'}</p>
    </div>
  )
}
