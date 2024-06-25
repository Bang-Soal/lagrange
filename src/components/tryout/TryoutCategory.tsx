import { Category } from "./TryoutDetail";
import TryoutSetCard from "./TryoutSetCard";

interface TryoutCategoryProps {
    category: Category;
}

const extractCategory = (categories: Category) => {
    return {
        name: Object.keys(categories)[0],
        subjects: Object.values(categories)[0]
    }
}

/*
    This function is used to check whether a category is rendered inline or not.
    A category is rendered inline if it only has one subject and
    the subject name is the same as the category name.
*/
const isRenderedInline = (category: Category) => {
    return Object.values(category)[0].length === 1
        && Object.values(category)[0][0].subject_name === Object.keys(category)[0];
}

const TryoutCategory: React.FC<TryoutCategoryProps> = ({ category }) => {
    const categoryData = extractCategory(category);
    return (
        <div className="bg-gray-50 px-6 py-4 rounded-xl">
            {!isRenderedInline(category) && <h1 className="font-bold text-gray-700 mb-3">{categoryData.name}</h1>}
            {
                isRenderedInline(category) ? (
                    <TryoutSetCard
                        key={categoryData.subjects[0].id}
                        category={categoryData.name}
                        name={categoryData.subjects[0].subject_name}
                        duration={categoryData.subjects[0].duration}
                        amount={categoryData.subjects[0].total_questions}
                        inlined
                    />
                ) :
                    categoryData.subjects.map((subject) => (
                        <TryoutSetCard
                            key={subject.id}
                            category={categoryData.name}
                            name={subject.subject_name}
                            duration={subject.duration}
                            amount={subject.total_questions}
                        />
                    ))
            }
        </div>
    )
}

export default TryoutCategory;