import React from "react";

import { useSelector } from "react-redux";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import WithAuth from "../../../components/auth/withAuth";
import FullPageSpinner from "../../../components/ui/loaders/FullPageSpinner";
import { getOrders } from "../../../helpers/ordersData";

import OrderMenu from "../../../components/ui/orders/orderMenu";
import OrderGrid from "../../../components/ui/orders/admin/orderGrid";

const sended = () => {
    const router = useRouter();
    const { token, user } = useSelector((state) => state.auth);
    
    if(user === null || (user !==null && user.role.id === 2)) {
        router.replace('/');
    }

    const [ordersData, setOrdersData] = React.useState({
        ok: false,
        orders: null,
        checking: true,
        message: null
    });

    React.useEffect(async () => {
        let data = await getOrders(
            token,
            process.env.NEXT_PUBLIC_LARAVEL_ORDER_ADMIN_SENDED
        );
        
        if (data.ok === true) {
            setOrdersData({
                ok: data.ok,
                orders: data.orders,
                checking: false,
                message: null,
            });
        } else {
            setOrdersData({
                ok: data.ok,
                orders: null,
                checking: false,
                message: data.message
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Sended orders</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {ordersData.checking === true && <FullPageSpinner />}

            {ordersData.message  && (
                <div>
                    <p className="mb-8">{ordersData.message}</p>
                    <Link href="/">
                        <a className=" py-2 px-4 text-white bg-cyan-500 hover:bg-cyan-600">
                            Go to the home
                        </a>
                    </Link>
                </div>
            )}

            <div className="w-full bg-white">
                {ordersData.orders && (
                    <>
                        {/* Menu */}
                        <OrderMenu />

                        {
                            /*Order */
                            ordersData.orders.map((order) => {
                                return (
                                    <OrderGrid key={order.id} order={order} token={token} />
                                );
                            })
                        }
                    </>
                )}
            </div>
        </>
    );
};

export default WithAuth(sended);
