import facebook from '../assets/imgs/trusted-bar/facebook.png';
import google from '../assets/imgs/trusted-bar/google.png';
import netflix from '../assets/imgs/trusted-bar/netflix.png';
import pg from '../assets/imgs/trusted-bar/pg.png';
import paypal from '../assets/imgs/trusted-bar/paypal.png';

export function TrustedBar() {

    return (

        <div className="trusted-bar flex align-center justify-center">
            <span>Trusted By:</span>
            <ul className='flex align-center'>
                <li><img src={facebook} alt="facebook" /></li>
                <li><img src={google} alt="google" /></li>
                <li><img src={netflix} alt="netflix" /></li>
                <li><img src={pg} alt="pg" /></li>
                <li><img src={paypal} alt="paypal" /></li>
            </ul>
        </div>
    )
}