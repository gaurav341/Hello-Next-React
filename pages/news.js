import { useState, useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';

const News = ({ news }) => {
    const [values, setValues] = useState({
        text: 'react'
    });
    const { text } = values;

    const handleChange = name => e => {
        setValues({...values, [name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        Router.push(`/news?queryTerm=${text}`)
    }

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange('text')} />
            <button type="submit">Submit</button>
        </form>
    );

    useEffect(() => {
        if (text) {
            
        }
        // return () => {
        //     cleanup
        // }
    }, [text])

    return (
        <Layout mainTitle="News">
            <div>
                <h2>List Of News</h2>
                <hr/>
                {searchForm()}
                <hr/>
                {news.map((n, index) => (
                    <p key={index}>
                        <a href={n.url} target="_blank">{n.title}</a>
                    </p>
                ))}
                {/* {JSON.stringify(news)} */}

<style jsx>{`
    p: {
        color: indigo;
    }
`}</style>
            </div>
        </Layout>
    )
};

News.getInitialProps = async ({query}) => {
    let news;
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.queryTerm}`);
        news = await res.json();
    } catch (ex) {
        console.log('ERROR', ex);
        news = [];
    }
    return { news: news.hits };
};

export default News;