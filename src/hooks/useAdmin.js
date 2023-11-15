import { useEffect, useState } from "react"
// import useAuth from "./useAuth";


const useAdmin = (user) => {
 

    const [admin, setAdmin] = useState({})
    const [adminLoading, setAdminLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch(`https://shopping-zone-server.vercel.app/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdminLoading(false)
                console.log(data)
                setAdmin(data)
                
                // Move the conditional check inside useEffect
                if (data?.role === "admin") {
                    setIsAdmin(true)
                }
            })
    }, [user])
    
    return {isAdmin,admin, adminLoading}
}
export default useAdmin;

