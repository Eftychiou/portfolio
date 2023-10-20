import Link from 'next/link';
export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>3003 Home page</h1>
            <Link href={`https://test.nextjs-shop.com/one`}>
                Go to 3004 Home
            </Link>
            <Link href={`https://test.nextjs-shop.com/two`}>
                Go to 3005 Home
            </Link>
            <Link href={`https://test.nextjs-shop.com/about`}>
                Go to 3003 About
            </Link>
        </div>
    );
}
