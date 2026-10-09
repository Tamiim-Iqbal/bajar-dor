import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

import { toBanglaNumber } from '../ContextAPI';

interface Headline {
    id: number;
    nameBn: string;
    image: string;
    today: number;
    change: {
        dir: "up" | "down";
        pct: number;
    };
}


const Marquee = async () => {
    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache: 'force-cache',
        }
    )
    const headlines: Headline[] = await response.json();
    // console.log(headlines);
    // const {image, nameBn, today, change:{dir, pct}} = headlines;
    return (
        <div className="">
            <MarqueeText className="" direction="right" pauseOnHover={true} duration={8} >
            {
                headlines.map(headline => <span key={headline.id} className="flex items-center justify-center border border-l-0 border-t-0 border-gray-100 py-1 px-8">
                    <span>{headline.image}</span>
                    <span className="font-semibold ml-2">{headline.nameBn}</span>
                    <span className="ml-2">{toBanglaNumber(headline.today)}/কেজি</span>
                    {
                        headline.change.dir === "up"? <div>
                            <span className="text-red-600 ml-2">▲</span>
                            <span className="text-red-600 font-medium font-noto">{toBanglaNumber(headline.change.pct)}%</span>
                        </div> 
                        : 
                        <div>
                            <span className="text-green-600 ml-2">▼</span>
                            <span className="text-green-600 font-medium font-noto">{toBanglaNumber(Math.abs(headline.change.pct))}%</span>
                        </div>
                    }
                    
                </span>)
            }
            </MarqueeText>
        </div>
    );
};

export default Marquee;