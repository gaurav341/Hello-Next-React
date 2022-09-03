import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
    <Layout mainTitle="Hello Next React JS">
        <Link href="/about">
            <a>About Page</a>
        </Link>
    </Layout>
);

export default Index;