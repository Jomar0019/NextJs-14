
const singleUser = async (id) => {
    try {
        const api = await fetch(`http://dummyjson.com/users/${id}`);
        const res = await api.json();

        return res
    } catch (error) {
        throw new Error(error)
    }
}

const UserDetails = async ({ params }) => {
    // console.log(params.details)

    const data = await singleUser(params.details);

    console.log(data)

  return (
    <div>
      <p>This is user details page.</p>
      <p>{data.firstName + " " + data.lastName}</p>
      <p>{data.age}</p>
      <p>{data.gender}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.birthDate}</p>
    </div>
  )
}

export default UserDetails
