import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
   <header class="text-gray-600 body-font bg-red-500">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span class="ml-3 text-xl">Dietician</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-black hover:text-green-600">Experienced Nutrionists</a>
      <a class="mr-5 text-black hover:text-green-600">Free Registration</a>
      
    </nav>
    <Link className="inline-flex items-center bg-red-300 border-0 py-1 px-3 mr-5 focus:outline-none hover:bg-rose-600 hover:text-white rounded text-base mt-4 md:mt-0" to="/Signup">
                SignUp
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
              </Link>
    <Link className="inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-600 hover:text-white rounded text-base mt-4 md:mt-0" to="/Login">
                log In
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
              </Link>
  </div>
</header>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Health Club
                </h1>
                <br />
                <h2 className="text-2xl">Our Motive </h2>
                <br/>
                <h3>Everytime you invest in your health, you help someone in need.</h3>
<br/>
                <div className="h-1 mt-6  bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed font-semibold text-gray-500">
                Why protein should be included in your diet ? <br />
                While our bodies are capable of making certain amino acids, the
                building blocks of proteins, there are are others, called
                essential amino acids, that can only be obtained through food.
                Because our bodies are constantly turning over tissue, new
                proteins are needed to replace degraded existing proteins. Cell
                growth, repair, and maintenance all require protein.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://th.bing.com/th/id/OIP.gD7sy40XIElFqmj3OUi1oQHaE9?pid=ImgDet&rs=1"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Almonds
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    High protein food
                  </h2>
                  <p className="leading-relaxed text-base">
                    Protein : 21 grams , Calories : 579 <br /> Measurement : 1
                    ounce is equal to 6 grams protein
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://th.bing.com/th/id/R.ef1a3ac39758a488aa34cde4b574a4da?rik=saHdfCRrkxM1EA&riu=http%3a%2f%2fen.bcdn.biz%2fimages%2femails_source%2fec46c87f-8758-42ae-8844-8cdfc2b386ab.jpg&ehk=3%2bf530yKk5rcrGI1%2fHa9%2bgnI%2bGnSqfSwKS9zQyKNNOc%3d&risl=&pid=ImgRaw&r=0"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Boiled eggs
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    High protein food
                  </h2>
                  <p className="leading-relaxed text-base">
                    Protein : 13 grams , Calories : 143 <br /> Measurement : 1
                    Large is equal to 6 grams protein
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://th.bing.com/th/id/OIP.wjktGgLs9kA70OjoHY6btgHaE8?pid=ImgDet&rs=1"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Fish
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    High protein food
                  </h2>
                  <p className="leading-relaxed text-base">
                    Protein : 24 grams(cooked) , Calories : 178 <br />{" "}
                    Measurement : 3 ounce is equal to 21 grams protein
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://th.bing.com/th/id/OIP.mnbLgQx6wK751a3Gqg1tbwHaE7?pid=ImgDet&rs=1"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Peanut Butter
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    High protein food
                  </h2>
                  <p className="leading-relaxed text-base">
                    Protein : 22 grams , Calories : 598 <br /> Measurement : 2
                    table spoons is equal to 7 grams protein
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://th.bing.com/th/id/OIP.ixHSQAHxq146vRxlnS0QgQHaD4?pid=ImgDet&w=768&h=402&rs=1"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                A variety of fruits and vegetables
              </h2>
              <p class="leading-relaxed text-base">
                Strengthen a child’s immune system and help fight illnesses.
                There is strong evidence to show that the nutrients found in
                fruits and vegetables can prevent chronic diseases such as
                cardiovascular diseases.
              </p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://th.bing.com/th/id/R.2548f20f2fad137b51a03b49d1810d1c?rik=%2fzGAWTpOwkQ5jg&pid=ImgRaw&r=0&sres=1&sresct=1"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Fat-free and low-fat dairy products
              </h2>
              <p class="leading-relaxed text-base">
                {" "}
                Milk, yogurt, and cheese are great sources of protein, vitamins,
                and minerals that your body needs to build strong bones.
                Specifically, calcium and vitamin D are two nutrients found in
                dairy products that work to maintain bone mass.
              </p>
            </div>
            <br />
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://th.bing.com/th/id/R.2dc8251337fbf02e3e267adc7a359051?rik=v45zUGO%2fLjCLmw&pid=ImgRaw&r=0"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                A variety of protein foods
              </h2>
              <p class="leading-relaxed text-base">
                The Protein food group is made up of a variety of protein-rich
                foods, including meat, poultry, fish, beans and peas, eggs and
                nuts and seeds. In addition to protein, these nutrient-rich
                foods include B vitamins, zinc, iron, vitamin E and Fiber.
              </p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://th.bing.com/th/id/OIP.Utsdm7GUJAWbrBoaFz0GwwHaE7?pid=ImgDet&rs=1"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Grains
              </h2>
              <p class="leading-relaxed text-base">
                Whole grains contain fiber that may reduce the risk of coronary
                heart disease and constipation when included in a healthy eating
                pattern. High-fiber foods also give a feeling of fullness, which
                may help with weight maintenance. Iron is used to carry oxygen
                in the blood. Magnesium is a mineral used in building bones and
                releasing energy from muscles. Selenium is important for a
                healthy immune system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        
        <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            
            <h1 class="md:text-3xl text-2xl font-medium title-font text-blue-900">
              Health Counselling in Schools Benefits{" "}
            </h1>
            <br />
            <div className="p-15">
              <h2 class="md:text-3xl p-6 text-2xl font-medium title-font text-gray-900">
               1 : Schools are in a unique position to provide students with
                opportunities to learn about and practice healthy eating
                behaviors.
              </h2>
              <h2 class="md:text-3xl p-6 text-2xl font-medium title-font text-gray-900">
                2 : Eating a healthy breakfast is associated with improved cognitive
                function (especially memory), reduced absenteeism, and improved
                mood.
              </h2>
              <h2 class="md:text-3xl p-6 text-2xl font-medium title-font text-gray-900">
                3 : Adequate hydration may also improve cognitive function in
                children and adolescents, which is important for learning.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <>
        <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
          <img
            className="bg-cover opacity-90"
            style={{ width: "100vw", height: "100vh" }}
            src="https://th.bing.com/th/id/R.32b649c6349b0ba659cdebc84526108b?rik=TY6AW38FsE4gbQ&pid=ImgRaw&r=0"
          />
          <div className="font-extrabold text-2xl absolute pb-20"></div>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Log In Form
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Log In or Sign Up{" "}
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              LOG IN
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Don't have account ?{" "}
              <Link className="text-blue-900 font-bold" to="/signup">
                Sign Up now
              </Link>
            </p>
          </div>
          </div>
      </section>
      <br/>
        </>
     
      <footer class="text-gray-600 body-font bg-red-500 mt-36">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="https://th.bing.com/th/id/R.9dd7cc092e002c20daf4d2f495737b8e?rik=8YD%2ful9TaFiMKg&pid=ImgRaw&r=0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="https://th.bing.com/th/id/R.9dd7cc092e002c20daf4d2f495737b8e?rik=8YD%2ful9TaFiMKg&pid=ImgRaw&r=0"></path>
      </svg>
      <span class="ml-3 font-bold text-xl">Dietician</span>
    </a>
    <p class="text-sm text-black font-semibold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Dietician — All rights reserved
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Nutrionist</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>

</>

      
     

  );
}

export default Login;
