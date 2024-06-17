import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-violet-400'>
      <div className='flex justify-between items-center
      max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-white'>Auth Application</h1>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li>  Home  </li>
            </Link>
           
           <Link to='/About'>
           <li>  About </li>
           </Link>
           
           <Link to='/SignIn'>
           <li>Sign In </li>
           </Link>
            
            <Link to='/SignUp'>
            <li>Sign Up </li>
            </Link>

        </ul>
      </div>
    </div>
  )
}
