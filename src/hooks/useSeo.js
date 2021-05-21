import {useEffect} from 'react'
export default function useSeo({title}) {
    
    const description="Apuntes de los cursos que hice y que hago del "+title
    const author="@Zitrojj"
    useEffect(() => {
        document.title=title
        
        return () => {
            
        }
    }, [title])
    useEffect(() => {
        
        document.querySelector('meta[name="description"]').setAttribute('content', description)
        return () => {
            
        }
    }, [description])
    useEffect(() => {
        
        document.querySelector('meta[name="author"]').setAttribute('content', author)
        return () => {
            
        }
    }, [author])
}
