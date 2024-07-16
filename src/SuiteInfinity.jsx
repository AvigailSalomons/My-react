// import React, { useEffect } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel';

// const SuiteInfinity = () => {
//     useEffect(() => {
//         if ($ && $.fn && $.fn.owlCarousel) {
//             $(".tab-carousel").owlCarousel({
//                 rtl: true,
//                 items: 1,
//                 loop: true,
//                 nav: true,
//                 dots: false
//             });

//             $(".owl-thumbs .thumb").on("click", function () {
//                 const index = $(this).index();
//                 $(".tab-carousel").trigger('to.owl.carousel', [index, 100, true]);
//             });
//         }
//     }, []);

//     return (
//         <div className="content">
//             <h2 className="title">סוויטת אינפיניטי</h2>
//             <div className="tab-carousel owl-carousel owl-rtl" data-slider-id="1">
//                 {/* פריטי הקרוסלה נכנסים כאן */}
//             </div>
//             <div className="owl-thumbs owl-carousel hidemobile owl-rtl" data-slider-id="1">
//                 {/* פריטי התמונות הממוזערות נכנסים כאן */}
//             </div>
//         </div>
//     );
// };

// export default SuiteInfinity;
