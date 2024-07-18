import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Satrio", lastName: "Utomo", email: "satrio.utomo130799@gmail.com" }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1000000}
                    />
                </header>

                RECENT TRANSCATION
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1000000 }, { currentBalance: 2000000 }]}
            />
        </section>
    )
}

export default Home
