

const UserDetails = ({params}: {
    params: {
        id: string
    }
}) => {
  return (
    <div>
      user details {params.id}
    </div>
  )
}

export default UserDetails
