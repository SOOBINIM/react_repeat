import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <Link to="/counter">카운터</Link>
            <br />
            <Link to="/todo">투두리스트</Link>
        </div>
    )
}

export default Home;

