const Hero = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;


// const Hero = () => {
//   return (
//     <div className="hero bg-base-200 h-2/3 w-2/3 sm:h-1/3 sm:w-1/3 mx-auto rounded-md">
//       <div className="hero-content text-center">
//         <div className="max-w-lg">
//           <h1 className="text-5xl font-bold">Hello there</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <button className="btn btn-primary rounded-md">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
