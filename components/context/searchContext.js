import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
    const initialState = { search: '' }
    const [search, setSearch] = useState(initialState)
    const [photos, setPhotos] = useState()
    console.log(photos)

    const handleOnChange = ({ target: { name, value } }) => {
        setSearch({ ...search, [name]: value })
    }

    useEffect(async () => {
        const response = axios.get(`https://api.unsplash/search/photos/?query=girl`,
            {  
                headers: {
                    Authorization: 'Client-ID I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to'
                }
            })
        setPhotos(response.data)
        console.log(response.data);
    }, [search])

    const data = { photos, handleOnChange }
    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext
export {
    SearchProvider
}