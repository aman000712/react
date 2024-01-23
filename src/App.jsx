import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sidede from './assets/sideloks.jpg'
import stanad from './assets/stand.jpg'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const post = [
    {
      category: ["politics"],
      color: 'bg-black',
      title: "The Ai magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["nature"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      color: 'bg-green-500',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["travel"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["politics"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["nature"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["sports"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["nature"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["sports", "tech"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },
    {
      category: ["sports", "lifestyle"],
      title: "The ab magically removes moving objects from videos.",
      aurthor_date: 'by amanxtteri july 19,2019',
      image: stanad,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque iste accusamus earum quibusdam illo unde non exercitationem dignissimos repudiandae qui maxime et dolore placeat, quaerat modi, incidunt, ipsam molestias."
    },

  ]

  return (
    <>
      <div className='main  flex gap-10 flex-col px-8'>
        <div className='flex' >
          <div className='flex-1 text-3xl flex justify-start items-end capitalize text-start h-20 '>
            aman
          </div>
          <div className='flex-1 flex gap-7  capitalize boder-b-1 justify-center items-end'  >
            <div>
              home
            </div>
            <div>
              politics
            </div>
            <div>
              tech
            </div>
            <div>
              entertainment
            </div>
            <div>
              travel
            </div>
            <div>
              sports
            </div>
            <div>
              search
            </div>
          </div>
        </div>
        <div className='bg-gray-200 h-auto'>
          <div className='mt-5'>
            <div className='flex grid-cols-3 gap-6 p-5 wfull mx-auto w-50 h-4/5'>
              <div className='grid w-full gap-6'>
                <img src={stanad} className='h-44 w-full object-cover' />
                <img src={stanad} className='h-44 w-full object-cover' />

              </div>
              <img src={stanad} className='h-96 w-full object-cover' />
              <div className='grid w-full gap-6'>
                <img src={stanad} className='h-44 w-full object-cover' />
                <img src={stanad} className='h-44 w-full object-cover' />
              </div>
            </div>
          </div>
        </div>
        <div className='h-l w-full'>
          <div>
            <div className='bg-white  capitalize text-sm sm:text-xl lg:text-5xl'>
              <h2>recent post</h2>
            </div>
            <div className=' mt-4 grid sm:grid-cols-2 lg:grid-cols-3  gap-10  w-full mx-auto capitalize'>
              {
                post.map((val, i) => {
                  return (
                    <div key={i} className=' gap-4 h-fit flex bg-white flex-col w-full shadow-md'>
                      <img src={val.image} className='h-44 w-full object-cover' />
                      <div className='flex flex-col gap-4  px-4 '>
                        <div className='flex  flex-wrap gap-2'>
                          {
                            val.category.map((item, ind) => {
                              return (
                                <div className={`border-solid border-1 border-black rounded-md w-16 
                                ${val.color ? val.color : "bg-red-500"}
                                text-white text-center`}>
                                  {item}
                                </div>
                              )
                            })
                          }
                        </div>
                        <div>
                          {val.aurthor_date}
                        </div>
                        <div className='text-2xl'>
                          {val.title}
                        </div>
                        <div className='h-4/5 w-full'>
                          <p>
                            {val.description}
                          </p>
                        </div>
                      </div>
                      <div className='ml-4 text-blue-500 pb-4'>
                        <a href='#'>read more</a>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        <div className='flex gap-5 justify-center bg-slate-500'>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
          <div>
            5
          </div>
        </div>
        <div className='grid grid-cols-3 gap-11  h-screen bg-black '>
          <div className='col-span-2 grid  gap-7  h-full bg-yellow-300'>
            <div className='h-full w-full bg-cover bg-center' style={{
              backgroundImage: `url(${stanad})`
            }}>
              <div className='h-full w-full flex bg-gradient-to-t from-black opacity-70  '>
              </div>
            </div>
            <div className='grid grid-cols-2 h-full bg-red-500 gap-8'>
              <div style={{
                backgroundImage: `url(${stanad})`
              }} className='h-full bg-cover bg-green-500'></div>
              <div className='h-full bg-green-500'>
              </div>
            </div>
          </div>
          <div className='bg-green-500 flex h-full'>
            <img src={stanad} className='h-full  ' />
          </div>
        </div>
        <div className='b flex h-screen justify-center' >
          <div className='flex flex-col w-7/12 gap-5  justify-center capitalize'>
            <div className=' text-center text-3xl'>
              suscribe to our newsletter
            </div>
            <div className=' text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ipsam minus cumque minima odit veritatis qui accusantium quidem enim sunt, ea officia iste quas saepe necessitatibus, consectetur aut, amet alias.
            </div>
            <div className='flex w-11/12 mx-auto '>
              <input placeholder='email' className='bg-transparent px-4 placeholder:capitalize flex-1 rounded-l-md border outline-none  border-blue-500' /> <div>
                <div className='bg-blue-500  flex px-10 py-4 text-white'>
                  suscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-slate-600 h-lvh'>
          <div className='flex w-1/5 gap-20'>
            <div className='text-white'>
              <div>
                about us
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, libero labore vero blanditiis quidem accusamus aperiam officia deleniti obcaecati! Voluptatum, laudantium? Impedit voluptates voluptatibus magni et, eum ex amet nisi?
                </p>
              </div>
            </div>
            <div className='bg-red-500'>
              <div>
                about us
              </div>
              <div>
                advertise
              </div>
              <div>
                careers
              </div>
              <div>
                subscribes
              </div>
            </div>
            <div>
              <div>
                <div>
                  travel
                </div>
                <div>
                  lifestyle
                </div>
                <div>
                  sports
                </div>
                <div>
                  nature
                </div>
              </div>
              
            </div>
            <div className='bg-yellow-500'>
                <div>
                  connect with us
                </div>
                <div>
                  fb
                </div>
                <div>
                  twitter
                </div>
                <div>
                  insta
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
