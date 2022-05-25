import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const SearchContext = createContext()
const SearchProvider = ({ children }) => {
    const initialState = { inputSearch: '' }
    const [search, setSearch] = useState(initialState)
    const { inputSearch } = search
    const [photos, setPhotos] = useState()
    const handleOnChange = ({ target: { name, value } }) => {
        setSearch({ ...search, [name]: value })
    }

    useEffect(async () => {
        const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=I22cKyDJTTGNBp_cNmTJ-syXQtbP5OVIwLtVY2eg2to&query=${search.inputSearch}`)
        setPhotos(response.data.results)
        if (search.inputSearch === '') {
            setPhotos([])
        }
    }, [search.inputSearch])

    const data = { inputSearch, photos, handleOnChange }
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