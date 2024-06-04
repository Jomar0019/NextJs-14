import Link from "next/link";


const usersData = async () => {
    try {
        const api = await fetch('http://dummyjson.com/users')
        const res = await api.json();

        return res.users

    } catch (error) {
        throw new Error(error)
    }
}

const ServerSideDataFetching = async () => {

    
const listOfUsers = await usersData();

// console.log(listOfUsers)


  return (
    <div>
      Server side data fetching List

      <ul>
        {
            listOfUsers && listOfUsers.length > 0 ?
            listOfUsers.map((user) => ( 
                <li key={user.id} className="p-4">
                    <Link href={`/server-data-fetching/${user.id}`}>{user.firstName}</Link>
                </li>
            ))
            : null
        }
      </ul>
    </div>
  )
}

export default ServerSideDataFetching
