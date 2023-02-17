import { memo, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


function footer() {
   
    return(
        <footer className="footer items-end pb-8 pt-10">
            <div className="flex flex-col justify-between px-4 sm:px-4 lg:px-8">
                
                <p>Built by Solteria</p>
                <p>v1.0.0</p>
                
                </div> 

                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end sm:px-4">
                <a href='https://twitter.com/eduscan_xyz'
                target="_blank"
                rel="noopener noreferrer">
                    <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937" fill="#1DA1F2"/>
                    </svg>
                </a> 
                <a href='https://github.com/willschneider15/eduScan'
                target="_blank"
                rel="noopener noreferrer">
                    <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_910_21)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z" fill="#191717"/>
                    <path d="M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z" fill="#191717"/>
                    <path d="M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z" fill="#191717"/>
                    <path d="M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z" fill="#191717"/>
                    <path d="M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z" fill="#191717"/>
                    <path d="M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z" fill="#191717"/>
                    <path d="M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z" fill="#191717"/>
                    <path d="M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z" fill="#191717"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_910_21">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </a>
                <a href='https://discord.gg/3vKJjMnFXt'
                target="_blank"
                rel="noopener noreferrer">
                    <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1008_2)">
                        <path d="M40.634 8.31118C37.5747 6.90741 34.294 5.87318 30.8638 5.28084C30.8013 5.2694 30.7389 5.29797 30.7067 5.35511C30.2848 6.10554 29.8175 7.08454 29.4902 7.85403C25.8008 7.30169 22.1304 7.30169 18.5166 7.85403C18.1893 7.06744 17.705 6.10554 17.2811 5.35511C17.249 5.29988 17.1866 5.27131 17.1241 5.28084C13.6958 5.87129 10.4151 6.90552 7.35387 8.31118C7.32737 8.3226 7.30465 8.34167 7.28958 8.36641C1.06678 17.6631 -0.6379 26.7313 0.19836 35.6871C0.202144 35.7309 0.22674 35.7729 0.260796 35.7995C4.36642 38.8146 8.34341 40.645 12.2466 41.8582C12.309 41.8773 12.3752 41.8545 12.415 41.803C13.3383 40.5422 14.1613 39.2127 14.867 37.8146C14.9086 37.7327 14.8688 37.6356 14.7837 37.6032C13.4783 37.108 12.2352 36.5042 11.0395 35.8186C10.9449 35.7633 10.9373 35.628 11.0243 35.5633C11.2759 35.3747 11.5276 35.1785 11.7679 34.9805C11.8114 34.9443 11.872 34.9366 11.9231 34.9595C19.7786 38.546 28.2831 38.546 36.0459 34.9595C36.097 34.9348 36.1576 34.9424 36.203 34.9786C36.4433 35.1766 36.6949 35.3747 36.9484 35.5633C37.0354 35.628 37.0298 35.7633 36.9352 35.8186C35.7394 36.5175 34.4964 37.108 33.189 37.6013C33.1039 37.6337 33.0661 37.7327 33.1077 37.8146C33.8285 39.2107 34.6515 40.5402 35.5578 41.8011C35.5957 41.8545 35.6637 41.8773 35.7262 41.8582C39.6483 40.645 43.6252 38.8146 47.7309 35.7995C47.7668 35.7729 47.7895 35.7328 47.7933 35.689C48.7942 25.3352 46.117 16.3413 40.6964 8.3683C40.6832 8.34167 40.6605 8.3226 40.634 8.31118ZM16.04 30.234C13.675 30.234 11.7263 28.0627 11.7263 25.3961C11.7263 22.7296 13.6372 20.5583 16.04 20.5583C18.4617 20.5583 20.3916 22.7486 20.3538 25.3961C20.3538 28.0627 18.4428 30.234 16.04 30.234ZM31.9895 30.234C29.6245 30.234 27.6758 28.0627 27.6758 25.3961C27.6758 22.7296 29.5867 20.5583 31.9895 20.5583C34.4113 20.5583 36.3411 22.7486 36.3033 25.3961C36.3033 28.0627 34.4113 30.234 31.9895 30.234Z" fill="#5865F2"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1008_2">
                        <rect width="48" height="48" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </a>
            </div>
      </footer>
    );
}


export default memo(footer);