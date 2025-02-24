import { getAllNewsItems } from "@/utils/news";

function Test () {

    const news = getAllNewsItems();
    console.log("NEws", news);

    return (
        <div>
            <h1>Test</h1>
        </div>
    )

}

export default Test;