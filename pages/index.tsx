// import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Homepage() {
    const router = useRouter();
    return (
        <ul>
            <li>
                <a
                    onClick={() => {
                        router.push('https://eshop.geef.cc');
                    }}
                    href='#'
                    data-text='Home'>
                    Eshop
                </a>
            </li>
            <li>
                <a
                    onClick={() => {
                        router.push('https://take.geef.cc');
                    }}
                    href='#'
                    data-text='Blogs'>
                    Take
                </a>
            </li>
            <li>
                <a
                    onClick={() => {
                        router.push('https://www.cypossystems.com.cy');
                    }}
                    href='#'
                    data-text='Coding'>
                    Cypos
                </a>
            </li>
        </ul>
    );
}
