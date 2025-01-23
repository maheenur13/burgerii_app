'use client'

import { Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'



const RouteChange:FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        // Cleanup the event listeners on unmount
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]);
  return (
    <div>
        
        {loading && <Spin />}
        </div>
  )
}

export default RouteChange