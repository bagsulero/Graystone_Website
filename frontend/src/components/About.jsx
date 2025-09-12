import React from 'react';

const About = () => {
return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
        <section className="bg-white">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full" src="GIPPODUIM.jpg" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Graystone Institute of the Philippines</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam facere dicta enim nobis maxime, debitis culpa ab nostrum provident. Natus architecto labore blanditiis at cumque nulla dolorum porro fugit.</p>
                    <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>

        <section className="bg-gray-50">
            <div className="py-8 mx-auto max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">Organizational Chart</h2>
                    <p className="mt-2 text-lg text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae eveniet nulla quae harum eos quis dolor amet laboriosam eum illum, quam minus maxime. Sint quibusdam cum necessitatibus consequuntur totam!.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 px-4 py-8 mx-auto max-w-screen-xl sm:grid-cols-1 md:grid-cols-2'>
                <img className="w-24 rounded-full flex justify-self-center col-span-2 h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center col-span-2 h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
            </div>
        </section>

        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Contact Us</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form className="space-y-8 max-w-2xl mx-auto">
                    <div className="group">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 group-focus-within:text-red-600 transition-colors duration-300">Your email</label>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                className="shadow-sm bg-white border-2 border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-red-200 focus:border-red-500 hover:border-gray-300 block w-full p-4 transition-all duration-300 placeholder:text-gray-400" 
                                placeholder="name@company.com" 
                                required
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>
                    <div className="group">
                        <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 group-focus-within:text-blue-600 transition-colors duration-300">Subject</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="subject" 
                                className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl border-2 border-gray-200 shadow-sm focus:ring-4 focus:ring-blue-200 focus:border-blue-500 hover:border-gray-300 transition-all duration-300 placeholder:text-gray-400" 
                                placeholder="Let us know how we can help you" 
                                required
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>
                    <div className="group">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 group-focus-within:text-green-600 transition-colors duration-300">Your message</label>
                        <div className="relative">
                            <textarea 
                                id="message" 
                                rows="6" 
                                className="block p-4 w-full text-sm text-gray-900 bg-white rounded-xl shadow-sm border-2 border-gray-200 focus:ring-4 focus:ring-green-200 focus:border-green-500 hover:border-gray-300 transition-all duration-300 resize-none placeholder:text-gray-400" 
                                placeholder="Tell us about your educational goals and how we can help you achieve them..."
                            ></textarea>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 focus:ring-4 focus:ring-red-200"
                        >
                            <span className="relative z-10">Send Message</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <section>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Location</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4403.544470239085!2d120.33975957570546!3d16.04581818463032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167c88c69d88b%3A0xf0d58d0c0cbe59dd!2sGRAYSTONE%20INSTITUTE%20of%20the%20PHILIPPINES%20(TRAINING%20%26%20ASSESSMENT%20CENTER)%20INC.!5e1!3m2!1sen!2sph!4v1739931622880!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className='justify-self-center'
                ></iframe>
            </div>
        </section>

        <section>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Developer</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facere maiores excepturi iure voluptates reiciendis eos! Modi sapiente expedita, minus adipisci quam necessitatibus atque magnam hic, quod voluptate incidunt amet.</p>
                <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
};

export default About;