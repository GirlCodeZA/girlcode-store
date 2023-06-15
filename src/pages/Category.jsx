import { useParams} from "react-router-dom"
import MainLayout from '../layouts/MainLayout'

const Category = () => {
    let { catName } = useParams()
    return (
        <MainLayout>
            Category Page: {catName}
        </MainLayout>
    )
}

export default Category
