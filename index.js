let userData = []
const getRandomUser = async () =>{
    try{
        let resData = await fetch ("https://randomuser.me/api/")
        let data = await resData.json()
        return data.results
    }catch(error){
        console.log(error);
    }
   
}



const addStorage = (addData) =>{
    localStorage.spending = JSON.stringify(addData)

}
const getStorage =() =>{
    if (localStorage?.user){
        return JSON.parse(localStorage?.user)
    }else {
        return []
    }
}
const setQS =((selector) =>{

})

getRandomUser.
then((res) => )

const addUser = (res) =>{
    userData.push({firstname:res.name.first,lastname:res.name.last,email:res.email,cell:res.cell,})
}