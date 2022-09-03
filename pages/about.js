import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <h2>About page</h2>
        <Link href="/">
            <a>Home Page</a>
        </Link>
    </Layout>
);

export default About;