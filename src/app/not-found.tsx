import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <h2 className='text-red-700 font-bold'>Not found page</h2>
      <Link href="/">Back to home</Link>
    </>
  )
}

export default NotFound
