import React from "react";
//Next
import Link from "next/link";
import { useRouter } from 'next/router'
//Loader
import Spinner from '../../../../components/ui/loaders/Spinner';
//Helper
import { orderTotal } from "../../../../helpers/ordersData";
//Library
import axios from 'axios';


const OrderGrid = ({order, token}) => {
    const {pathname} = useRouter();
    

    const [ orderData, setOrderData ] = React.useState({ sended:false, errorMessage:null });
    const [ checking, setChecking ] = React.useState(false);
    
    const sendOrder = async () => {
        setChecking(true)
        const data = await changeOrderStatus(token, order.id);
        if(data === true ){
            setOrderData({ sended: true, errorMessage: null })
            setChecking(false)
        } else {
            setOrderData({ sended: false, errorMessage: 'Hubo un error' })
            setChecking(false)
        }
    }


    return (
        <>
        <div
            className="flex flex-col sm:flex-row bg-gray-50 hover:bg-gray-100 px-2 sm:px-4 mt-4 rounded-3xl"
        >
            {/**acá va la decha de la orden */}
            <div className="flex items-center sm:items-start	 justify-between	sm:justify-start flex-row sm:flex-col w-full sm:w-1/6">
                <div>
                    <div className="flex flex-row items-center sm:items-start	  sm:flex-col mt-2 sm:mt-4">
                        <h5>Total: </h5>

                        <span className="my-4 text-xl  sm:text-3xl	 text-cyan-500">
                            ${ orderTotal(order) }
                        </span>
                    </div>

                    <span>{order.created_at.substring(0, 10)}</span>
                </div>


                { orderData.errorMessage && <div className="p-2 mt-0 sm:mt-2 border border-red-500 bg-white-500 "><p className="text-red-500">{orderData.errorMessage}</p></div> }

                
            {
                pathname === "/orders/admin/pending" ?

               
                orderData.sended === false
                    ?
                    <button 
                        disabled={checking === true}
                        className={`p-2 mt-0 sm:mt-2 text-white bg-cyan-500 hover:bg-cyan-600 cursor-pointer w-24 h-8 sm:h-10 flex justify-center items-center rounded-3xl`}
                        onClick={ () =>  sendOrder() }
                    >
                        {
                            ( checking === false)
                                ? "Ship order"
                                : <Spinner height={'4'} width={'4'} color={'gray'} tone={'50'} />
                        }
                    </button>
                    :
                    <div className={`p-2 mt-0 sm:mt-2 text-cyan-500 text-center border border-cyan-500 bg-white  h-12 flex justify-center items-center rounded-3xl`}>
                        
                        Shipped successfully!
                    </div>
                :
                null
            }
            </div>

            {/**Acá van los orders items */}
            <div className="mb-8 w-full sm:w-5/6">
                {order.order_item.map((order_item) => {
                    return (
                        <div
                            key={order_item.id}
                            className="flex justify-between sm:flex-row items-center py-4"
                        >
                            <div className="flex w-3/6 sm:w-2/5">
                                <Link href={``}>
                                    <div className="w-full sm:w-20 ">
                                        <img
                                            className="h-16 sm:h-24 cursor-pointer rounded-3xl"
                                            src={`${process.env.NEXT_PUBLIC_LARAVEL_IMG_LOCAL}${decodeURIComponent(
                                                order_item.product.img
                                            )}`}
                                            alt={`${order_item.product.name}`}
                                        />
                                    </div>
                                </Link>
                                <div className="flex flex-col justify-evenly ml-4 flex-grow">
                                    <Link href={``}>
                                        <a className="font-bold text-sm capitalize cursor-pointer">
                                            {order_item.product.name}
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-around w-3/6 sm:w-3/5">
                                <span className="text-right	 sm:text-center w-full sm:w-1/5 font-semibold text-sm">
                                    <div className="block sm:hidden">
                                        U: {order_item.quantity}{" "}
                                    </div>
                                    <div className="hidden sm:block">
                                        {order_item.quantity}
                                    </div>
                                </span>
                                <span className="text-right	 sm:text-center w-full sm:w-1/5 font-semibold text-sm">
                                    ${order_item.product.price}
                                </span>
                                <span className="text-right	 sm:text-center w-full sm:w-1/5  font-semibold text-sm">
                                    $
                                    {order_item.quantity *
                                        order_item.product.price}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
        </>
    );
};

export default OrderGrid;


/**
 * This function recives the admin token and the order id and
 * change the status so the order is sended to the client
 */
async function changeOrderStatus(token, orderId) {
    try {
        axios.defaults.withCredentials = true;
        //let csrfPath = process.env.NEXT_PUBLIC_LARAVEL_CSRF;
        //await axios.get(csrfPath);

        let req = await axios.post(process.env.NEXT_PUBLIC_LARAVEL_ORDER_ADMIN_SEND_ORDER, 
            { order_id: orderId },
            { headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
        });
        
        if( req.data.ok === true){
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log('error en catch', e);
        return false;
    }
}