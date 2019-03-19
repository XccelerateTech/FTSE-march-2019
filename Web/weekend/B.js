const drippingTap = setInterval(()=>{
    console.log('drip')
}, 1000);

drippingTap;

const turnOffTap = setTimeout(()=>{
    clearInterval(drippingTap)
}, 4000);

turnOffTap;