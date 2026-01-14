import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-10'>
      <h2 className='text-5xl text-red-600 font-bold'>Not Found</h2>
      <p className='text-neutral-600'>Could not find requested resource</p>
      <Link className='py-4 px-4 bg-blue-600 text-white font-bold rounded-xl' href="/">Return Home</Link>
    </div>
  )
}