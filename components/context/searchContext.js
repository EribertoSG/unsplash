import { useState, createContext } from 'react'
import { useRouter } from 'next/router'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
    const initialState = { inputSearch: '' }
    const [search, setSearch] = useState(initialState)
    const { inputSearch } = search
    const { push } = useRouter()

    const handleOnChange = ({ target: { name, value } }) => {
        setSearch({ ...search, [name]: value })
    }

    const handleOnClick = () => {
        if (inputSearch == '') return
        inputSearch.replace(' ', '-')
        push(`/search/${inputSearch}`)
    }

    const data = { inputSearch, handleOnChange, handleOnClick }
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