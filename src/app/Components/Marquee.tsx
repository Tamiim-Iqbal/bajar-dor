import React from 'react';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';

import { toBanglaNumber, toBanglaUnit, Product } from '../ContextAPI';

const Marquee = async () => {
    const response = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache: 'force-cache',
        }
    );

    const headlines: Product[] = await response.json();

    return (
        <div className="bg-white w-full overflow-hidden">
            <MarqueeText
                className="bg-white"
                direction="right"
                pauseOnHover={true}
                duration={8}
            >
                {headlines.map((headline) => (
                    <span
                        key={headline.id}
                        className="inline-flex items-center justify-center whitespace-nowrap border border-l-0 border-gray-100 py-2 px-3 sm:px-5 lg:px-8"
                    >
                        <span className="text-sm sm:text-base">
                            {headline.image}
                        </span>

                        <span className="font-noto font-medium text-xs sm:text-sm lg:text-base ml-1.5 sm:ml-2">
                            {headline.nameBn}
                        </span>

                        <span className="font-noto text-xs sm:text-sm lg:text-base ml-1.5 sm:ml-2">
                            {toBanglaNumber(headline.today)}/
                            {toBanglaUnit(headline.unit)}
                        </span>

                        {headline.change.dir === 'up' ? (
                            <span className="ml-1.5 sm:ml-2 whitespace-nowrap">
                                <span className="text-red-600">▲ </span>
                                <span className="text-red-600 font-medium font-noto text-xs sm:text-sm lg:text-base">
                                    {toBanglaNumber(headline.change.pct)}%
                                </span>
                            </span>
                        ) : (
                            <span className="ml-1.5 sm:ml-2 whitespace-nowrap">
                                <span className="text-green-600">▼ </span>
                                <span className="text-green-600 font-medium font-noto text-xs sm:text-sm lg:text-base">
                                    {toBanglaNumber(
                                        Math.abs(headline.change.pct)
                                    )}
                                    %
                                </span>
                            </span>
                        )}
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;

