import React, { useEffect, useState } from 'react'
import { FaChevronDown ,FaChevronUp } from "react-icons/fa";
const RepoCard = ({repoDetails,isVisible,setIsVisible}) =>{
    return (
        <div className='flex flex-col w-full border-b border-neutral-400 '>
            <div className=' flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl m-2 font-bold'>{repoDetails?.name.charAt(0).toUpperCase()+repoDetails?.name.slice(1)}</h1>
                    <h1 className='ml-2 mb-2 text-indigo-800 text-sm'>{repoDetails.html_url}</h1>
                </div>
                {!isVisible?
                    <FaChevronDown  className="m-2" onClick={()=>{
                        setIsVisible(repoDetails?.name)
                    }}/>:
                    <FaChevronUp className="m-2" onClick={()=>
                        setIsVisible(null)
                    }/>}
            </div>
            <div className={`transition-all duration-400 overflow-hidden ${isVisible?"max-h-100 opacity-100":" max-h-0 opacity-0"}`}>
                <h1 className='m-2 '>{repoDetails.description}</h1>
            </div>
        </div>
    )
}

const Profile = () =>{
    const [userData,setUserData] = useState([])
    const [repos,setRepos] = useState([])
    const [isVisibleRepo,setIsVisibleRepo] = useState(null)
    useEffect(()=>{
        getProfileInfo();
        getRepos()
    },[])
    const getProfileInfo = async() =>{
        const data = await fetch("https://api.github.com/users/hemanthc438")
        const json = await data.json()
        setUserData(json)
    }
    const getRepos = async()=>{
        const repoData = await fetch("https://api.github.com/users/hemanthc438/repos")
        const json = await repoData.json()
        setRepos(json.filter((repo)=>{
            if(repo.description != undefined)
            return repo 
        }))
        setIsVisibleRepo(json[0]?.name || null)
    }
        return (
        <div className='flex h-svh'>
            <div className='grid grid-cols-12 '>
                <div className='flex flex-col col-span-2'>
                    <img className='mt-10 w-50 h-50 rounded-full' src={userData?.avatar_url}/>
                    <p className='text-center text-2xl m-2 font-bold'>{userData?.name}</p>
                </div>
                <div className='flex flex-col m-10 col-span-10'>
                    <h1 className='text-4xl font-bold m-2'>REPOSITORIES</h1>
                    {
                        repos?.map((repo)=>(
                            <div key={repo?.id} className='flex w-4xl'>
                            <RepoCard 
                                repoDetails={{
                                                name:repo?.name,
                                                description:repo?.description,
                                                html_url:repo?.html_url}} 
                                description={repo?.description} 
                                isVisible={isVisibleRepo===repo?.name}
                                setIsVisible={()=>{setIsVisibleRepo(prev => prev === repo.name ? null : repo.name)}}
                            />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        )
}
export default Profile;