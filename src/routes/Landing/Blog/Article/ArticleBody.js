import React from "react";

import PostImage from "../../../../assets/imgLanding/post-image.png";

export const ArticleBody = () => {
    return (
        <div className="container container-md">
            <div className="text-content">
                <div className="mb-80">
                    <h2 className="mb-30">What is the best GPU for mining crypto?</h2>
                    <p className="mb-30">Just like picking out any other gear, finding the best mining GPU can be tough,
                        especially since the requirements for cryptocurrency are a little different than something like
                        gaming.</p>
                    <p className="mb-30">The ideal graphics cards need power and adequate memory to keep up with the
                        demands of mining. But, they can’t be too expensive, which is why a card like the Nvidia GeForce
                        RTX 3060 Ti and its sibling, the Nvidia RTX 3060, are great picks. Minimizing costs is just as
                        important if you’re mining with one computer, since you won’t be yielding a lot of
                        cryptocurrency at a time.</p>
                    <p>The world of cryptocurrency has been explosive in the recent past, which is why there’s so much
                        attention on it. Bitcoin, Ethereum and altcoins are gaining more traction, which has led to
                        quite a bit of demand for mining graphics cards.</p>
                </div>
                <div className="mb-80">
                    <h2 className="mb-30">Is GPU mining still profitable in 2022?</h2>
                    <p className="mb-30">GPU mining remains viable even though the majority of coins are mined using
                        ASICs, and only a few can be mined using GPUs. This is because, in contrast to ASICs, graphics
                        cards are capable of mining algorithms of any complexity. Plus, switching between coins is
                        simple and does not necessitate the purchase of a new machine.</p>
                    <p className="mb-30">The longer answer adds a few extra considerations to this.</p>
                    <p className="mb-30">Looking back to the peak of mining profitability, from April to May of 2021,
                        profits have fallen by roughly 40%. A complete return on investment took only about two to three
                        months which meant in this same period of time, you’d have been able to pay off the price of the
                        GPU.</p>
                    <p className="mb-30">Let’s look at some stats: Every day in 2021, a miner would earn roughly 0.0006
                        BTC at a time when 1 BTC was equivalent to around $50k. That would work out to about $30 per day
                        per miner.</p>
                    <p>However, you must consider that profits were extraordinarily high in 2021, especially compared to
                        previous years. Think about it this way: back in 2018, GPUs would barely break even. Sometimes
                        the GPU would be unable to generate any revenue at all.</p>
                </div>
                <img src={PostImage} className="mb-80" alt="" style={{width: "100%"}} />
                    <div className="mb-50">
                        <h2 className="mb-30">What is the most profitable coin to mine with GPU?</h2>
                        <p className="mb-30">For now, you should concentrate on mining Ethereum (ETH) as the stable coin
                            is currently the most profitable cryptocurrency to mine with a GPU due to its current
                            price.</p>
                        <p className="mb-30">ETH is one of the ten most profitable cryptocurrencies to mine using a
                            graphics card, with the cryptocurrency itself coming only second in size to Bitcoin
                            (BTC).</p>
                        <p className="mb-30">However, this is only for now. At least for 2022.</p>
                        <p className="mb-30">Why? As Ethereum is transitioning to ETH 2.0 in the future, which will
                            bring ETH’s Proof of Work (PoW) system to an end, which also affects GPU mining, meaning you
                            will no longer be able to mine ETH using your graphics card. ETH 2.0 will use a Proof of
                            Stake (PoS) system instead, which will be a watershed moment for the status of GPU crypto
                            mining.</p>
                        <p className="mb-30">As a GPU miner, you should continue to mine ETH until the PoW ends, as this
                            type of mining isn’t going away until at least ETH 2.0. Plus, it should be noted that not
                            even the Ethereum developers are sure when precisely the PoW phase will come to an end.</p>
                        <p className="mb-30">According to developer tweets, the transition will not occur in June as
                            initially announced. Maybe it’ll happen by September, but this is still speculative. The
                            most likely time frame for completion is 2023.</p>
                        <p className="mb-30">After ETH 2.0, plan to redirect your mining machines to something else. You
                            won’t completely lose access to ETH as a cryptocurrency, as you’ll be able to mine other
                            coins with your GPU and exchange them for ETH. </p>
                        <p>As ETH is such a popular choice for GPU mining, be prepared for the process of mining
                            different altcoins to become increasingly difficult after ETH 2.0, as more and more people
                            with GPU mining rigs flock to them.</p>
                    </div>
            </div>
        </div>
    )
}
