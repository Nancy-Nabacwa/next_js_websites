import Link from 'next/link'
import SectionAtom from './Atoms/SectionAtom'
import SectionTwoAtom from './Atoms/SectionTwoAtom';
import SectionThreeAtom from './Atoms/SectionThreeAtom';
import SectionFourAtom from './Atoms/SectionFourAtom';
import SectionFiveAtom from './Atoms/SectionFiveAtom';
import SectionSixAtom from './Atoms/SectionSixAtom';
import SectionSevenAtom from './Atoms/SectionSevenAtom';
import SectionEightAtom from './Atoms/SectionEightAtom';
import SectionNineAtom from './Atoms/SectionNineAtom';

export default function Home() {
  return (
    <main>
      <div className='flex gap-[350px] text-[25px] mt-10 ml-[100px]'>
      <img src="images/logo.png" />

      <div >
      <ul className='flex gap-[50px] mt-5'>
      <li className='mt-[-10px]'>
        <Link href="/">HOME</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/about">RESTURANT</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/blog">SERVICES</Link>
      </li>
      <li className='mt-[-10px]'>
        <Link href="/blog">SERVICES</Link>
      </li>
      </ul>
      </div>

      <div className='mt-[10px] ml-[100px]'>
        <Link href="/">Sign In</Link>
      </div>
      </div>

      <SectionAtom content_one={
        <div className='flex gap-[100px] mt-[100px]'>
          <div className='ml-[100px]'>
            <div className='w-[550px]'>
            <h2 className='text-[60px]'>
            Enjoy Delicious Food in <span className='text-[#FFC625] '>Healthy Life</span>
            </h2>

            </div>
          
          <div className='w-[850px] mt-[50px]'>
            <p className='text-[35px] font-extralight text-gray-500'>
              Tandori masala is an indian spice blend consisting of a
              variety of spices Tandoori masala is an indian spice blend
              consisting of a variety of spices.
            </p>
          </div>

          <button className='p-[20px] bg-[#FFC625] text-white text-[25px] rounded-xl w-[250px] mt-[150px]'>ORDER NOW</button>
          </div>
          <img src="/images/landingImage.png" alt="Tandoori Image" className='w-[650px] mt-[40px]'/>
          
        </div>
      } 
      />

      <SectionTwoAtom content_two={
        <div className='mt-[150px]'>
          <div className='ml-[42%]'>
          <p className='text-[30px]'>Online Store</p>
          <h1 className='text-[50px]'>Popular Foods</h1>
          <img src='/images/sectiontwocurve.png' alt='curve'/>
          </div>
         

          <div className='flex gap-[190px] p-[100px]'>
            <div className=''>
            <img src='images/FruitDish.png' alt='fruit dish one pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            {/* <img src='images/Stars.png' className='ml-[85px]'/> */}
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[25px]  rounded-[35px] ml-[50px] '><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/FruitDishtwo.png' alt='fruit dish two pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px]  rounded-[35px] ml-[50px] '><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/FRuitDishThree.png' alt='fruit dish three pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px]  rounded-[35px] ml-[50px]'><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            <div className=''>
            <img src='images/FruitDishFour.png' alt='fruit dish four pic'/>
            <p className='text-[30px] text-center'>Fruit dish</p>
            <p className='text-[20px] font-extralight text-center'>Dinko Food</p>
            <p className="ml-[85px]">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className='flex gap-[15px] bg-[#FFC625] text-white p-[20px] rounded-[35px] ml-[50px]'><p>Add to Cart</p> <p>$696</p> </button>
            </div>
            
            
          </div>

        </div>
      }/>

      <SectionThreeAtom content_three={
        
          <div className='flex justify-between p-[180px]'>
            <div>
            <button className='bg-[#F8C257] text-white p-[10px] rounded-[10px] w-[80px]'>-50%</button>
            <h1 className='text-[70px]'>Our Special Offer</h1>
            <div className='w-[470px]'>
              <p className='text-[20px]'>
                Best cooks and best delivery guys all
                at your service. Hot tasty food wiil reach
                you in 60 minutes.
              </p>

              <button className='bg-[#FFC625] text-white text-[20px] p-[18px] rounded-[10px] w-[180px] mt-[100px]'>See All Menu </button>

            </div>
              
            </div>
            

            <img src='images/ThirdsectionImg.png'/>
           
          </div>
        
      }/>      

      <SectionFourAtom content_four={
        <div>
          <p className='text-[25px] ml-[42%]'>Quality Food 👌</p>
          <h1 className='text-[50px] ml-[34%]'>Get The Best Offers</h1>
          <p className='text-[25px] ml-[25%] text-center w-[800px]'>The food at you doorstep. Why starve when you have us.
            Your hunger partner. Straight out of oven to you doorstep.
          </p>
          <div className='flex gap-[50px] p-[200px]'>
            <div className='flex'>
              <div>
                <h1 className='text-[30px] w-[150px]'>Any day offers</h1>
                <p className='text-[20px] w-[250px]'>New phenomenon Burger taste</p>
                <p>$12.90</p>
                <button className='bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '> .</button>
              </div>
              <img src='images/burger.png'/>
            </div>
            <div className='flex gap-[10px]'>
              <div>
                <h1 className='text-[30px] w-[150px]'>Other Flavors</h1>
                <p className='text-[20px] w-[250px]'>Save room. We made salads</p>
                <p>$12.90</p>
                <button className='bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '> .</button>
              </div>
              <img src='images/salad.png'/>
            </div>
            <div className='flex'>
              <div>
                <h1 className='text-[30px] w-[150px]'>Find a poco store near you</h1>
                <button className='bg-[#F8C257] w-[35px] h-[10px] rounded-[10px] mt-[20px] '> .</button>
              </div>
              <img src='images/location.png'/>
            </div>
          </div>
        </div>
      }/>


      <SectionFiveAtom content_five={
        <div>
          <h1 className='text-[35px] ml-[42%]'>Our Service</h1>
          <div className='flex gap-[200px] p-[200px]'>
            <div className='items-center'>
              <img src="images/restaurants.png" alt="restaurant image" />
              <h3 className='text-[25px]'>55+ Restaurants</h3>
            </div>
            <div className='items-center'>
              <img src="images/Goodquality.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Good Quality</h3>
            </div>
            <div className='items-center'>
              <img src="images/Discountsystem.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Discount System</h3>
            </div>
            <div className='items-center'>
              <img src="images/fastdelivery.png" alt="restaurant image" />
              <h3 className='text-[25px]'>Fast Delivery</h3>
            </div>
          </div>
        </div>
      }/>


      <SectionSixAtom 
      paragraph='Testimonial'
      heading='What Our Clients Say'
      contentsix_one={
        <div>
          <img src='images/quotes.png' className='ml-[47%]'/>
          <p className='text-[20px] text-[grey] w-[830px] text-center ml-[28%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi aliquip ex ea commodo
          </p>

          <div className='flex gap-[20px] ml-[31%] p-[50px]'>
            <img src='images/woman.png' className='w-[110px]'/>
            <img src='images/manblueshirt.png'/>
            <img src="images/manorangebackground.png" />
            <img src="images/mannobeard.png"/>
            <img src="images/manwhiteshirt.png"/>
          </div>

          <h2 className='text-center font-bold text-[30px]'>Mitchell Marsh</h2>
          <p className='text-center text-[grey] text-[20px]'>CEO, Bexon Agency</p>
          <div className='flex ml-[46%] gap-[30px]'>
            <img src='images/arrowgrey.png' className='mt-[-8px]'/>
            <img src='images/arroworange.png'/>
          </div>
          
        </div>
      }/>

      <SectionSevenAtom content_seven={
        <div className='flex gap-[100px] ml-[22%] p-[100px]'>
          <img src='images/phone.png'/>
          <div className='p-[100px]'>
            <p className='text-[#FF8C01] text-[25px]'>Download Our App</p>
            <h2 className='w-[250px] font-bold text-[40px]'>It's all here. All in one app.</h2>
            <p className='w-[500px] text-[grey] text-[20px]'>
              Discover local, on-demand delivery or pickup from restaurants, nearby
              grocery and convinience stores, and more.
            </p>
            <div className='flex'>
              <img src='images/applestore.png'/>
              <img src='images/googleplay.png'/>
            </div>
          </div>
        </div>
      }/>


      
      <SectionEightAtom content_eight={
        <div className='flex gap-[200px] p-[200px] ml-[10%]'>
          <div >
          <h1 className='w-[550px] font-bold text-[40px]'>Subscribe To Our Newsletter</h1>
          <p className='text-[20px] text-[grey]'>Subscribe on our newsletter to get our news</p>
          </div>
          <div className='relative'>
            <input type="text" placeholder='Your email address...' className='p-[20px]'/>
            <button className='flex bg-[#FF8C01] text-[white] absolute top-0 left-[200px] p-[20px] gap-[10px] rounded-[3px]'>Subscribe<span className='bg-[white] text-[#FF8C01] p-[5px] rounded-[3px] w-[30px]'>&#8594;</span></button>
          </div>
          
        </div>
      }/>


      <SectionNineAtom content_nine={
        <div>
          <div className='flex bg-[#180606] text-[white] p-[100px] gap-[480px]'>
          <div>         
            <h1 className='text-[40px]'>FoodHouse <span className='text-[#FEC61C]'>.</span></h1>
            <p className='text-[20px] w-[400px]'>Best cooks and best delivery guys all
              at you service. Hot tasty food will reach you in 60 minutes
            </p><br/>
            <div className='flex gap-[10px]'>
              <button className=' bg-[white] p-[15px] rounded-[8px] w-[50px] h-[50px]'><img src="images/icons8-f-48.png" alt="facebook icon" className='w-[16px] ' /></button>
              <button className=' bg-[white]  p-[15px] rounded-[8px] w-[50px] h-[50px] '><img src="images/icons8-twitter-50.png" alt="twitter icon" className='w-[16px]'/></button>
              <button className=' bg-[white] text-[#FEC61C] p-[15px] rounded-[8px] w-[50px] h-[50px]  '>in</button>
            </div>
          </div>

          <div className='flex gap-[180px]'>
          <div>
            <h1 className='text-[30px]'>Company</h1><br/>
            <p className='text-[20px]'>Career</p>
            <p className='text-[20px]'>About Us</p>
            <p className='text-[20px]'>Blog</p>
            <p className='text-[20px]'>Press Info</p>
            <p className='text-[20px]'>Features</p>
          </div>

          <div>
            <h1 className='text-[30px]'>Fudo</h1><br/>
            <p className='text-[20px]'>Why Fudo</p>
            <p className='text-[20px]'>How it Works</p>
            <p className='text-[20px]'>Why Choose Us</p>
            <p className='text-[20px]'>Client Stories</p>
            <p className='text-[20px]'>Gallery</p>
          </div>

          <div>
            <h1 className='text-[30px]'>Menu</h1><br/>
            <p className='text-[20px]'>Breakfast</p>
            <p className='text-[20px]'>Lunch</p>
            <p className='text-[20px]'>Dinner</p>
            <p className='text-[20px]'>Fast Foods</p>
            <p className='text-[20px]'>Drinks</p>
          </div>

          </div>

          
          </div>

          <div className='bg-[#F9C428] text-[white] flex gap-[200px] text-[20px] p-[20px]'>
            <p className='ml-[40%]'>Copyright 2021 Besnik All Rights Reserved</p>
            <div className='flex gap-[80px]'>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
          
        </div>
      }/>


      
      
     

    </main>
  );
}
