import React, { useEffect, useState } from 'react'

import Axios from 'axios'
import UserCard from './UserCard';



const Main = () => {
  const [person, setPerson] = useState({})
  const [addPerson, setAddPerson] = useState(0)

  
  const fetchData = async () => {
    const {data} = await Axios.get('https://randomuser.me/api/')
    const person = data.results[0]
    setPerson(person)
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  


  

  



  return (
    <>
      <div className="block" style={{backgroundColor:'purple'}}>
      </div>
      <div className="block">
        <UserCard person={person} />
      </div>
      <div className="btn-group">
				<button onClick={fetchData} className="btn" type="button">
					new user
				</button>
				<button className="btn" type="button">
					add user
				</button>
			</div>

			<table className="table">
				<thead>
					<tr className="head-tr">
						<th className="th">First Name</th>
						<th className="th">Email</th>
						<th className="th">Phone</th>
						<th className="th">Age</th>
					</tr>
				</thead>
				<tbody>
					<tr className="body-tr"></tr>
				</tbody>
			</table>
    </>
  )
}

export default Main
