"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const skillsContainerRef = useRef(null);
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Carousel images
  const carouselImages = [
    {
      src: "/images/Profile.png",
      alt: "Profile picture 1"
    },
    {
      src: "/images/IMG_20240903_115025_182.jpg",
      alt: "Profile picture 2"
    },
    {
      src: "/images/IMG_20250220_171955_144.webp",
      alt: "Profile picture 3"
    }
  ];

  // Skill icons mapping
  const skillIcons = {
    HTML: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.93zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path fill="white" d="M22.67 47h99.67v73.67H22.67z" />
          <path
            data-name="original"
            fill="black"
            d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
          />
        </svg>
      </svg>
    ),
    Flutter: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
      </svg>
    ),
    PHP: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
        </svg>
      </svg>
    ),
    Photoshop: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-5 h-5 fill-current">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="black"
          d="M50.246 41.616c-3.682-.925-7.369-.628-11.26-.022 0 6.805-.014 13.427.037 20.05.002.339.511.929.841.974 4.243.573 8.463.619 12.431-1.315 4.105-2 6.196-6.182 5.654-11.092-.492-4.471-3.139-7.448-7.703-8.595zM127 63.963V3.285c0-2.096.023-2.285-2.012-2.285H3.479C1.5 1 1 1.19 1 3.186v121.509c0 2.018.252 2.021 2.209 2.021 40.555.001 81.231-.009 121.786.037 1.573.002 1.995-.417 1.991-1.959-.054-20.277.014-40.556.014-60.831zm-70.648 5.84C50.795 71.785 45 71.896 39 71.431V94H28v-1.402c0-18.895-.087-37.788-.14-56.682-.006-1.569.243-2.327 2.011-2.507 8.332-.852 16.617-1.81 24.902.133 8.906 2.087 14.041 7.975 14.431 16.11.483 10.074-3.944 16.974-12.852 20.151zm44.31 12.754c-.424 5.771-3.678 9.56-9.015 11.392-7.142 2.452-14.245 1.883-21.225-.891-1.143-.455-1.364-1.031-.987-2.196.687-2.126 1.19-4.312 1.72-6.286 2.951.866 5.757 1.947 8.664 2.458 2.053.361 4.272.149 6.359-.178 1.871-.294 3.217-1.564 3.524-3.572.312-2.041-.303-3.809-2.105-4.895-1.432-.862-3.01-1.479-4.523-2.202-2.433-1.163-5.026-2.075-7.27-3.53-8.831-5.727-5.956-16.383-.063-20.396 3.153-2.146 6.642-3.098 10.377-3.229 4.393-.154 8.623.604 12.778 2.623l-2.195 7.789c-1.74-.616-3.36-1.416-5.07-1.734-2.029-.378-4.157-.589-6.205-.422-2.746.225-4.354 2.12-4.354 4.47 0 1.392.528 2.57 1.689 3.245 1.666.969 3.434 1.768 5.186 2.579 1.896.877 3.898 1.551 5.723 2.552 4.87 2.67 7.405 6.8 6.992 12.423z"
        />
      </svg>
    ),
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-10 relative overflow-hidden bg-white">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-1000"></div>
      </div>

      {/* Main content container with fixed width and centering */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-16`}
        >
          {/* Profile image carousel */}
          <div className="relative group">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full flex-shrink-0 relative shadow-2xl border-4 border-white">
              <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container flex h-full">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                          className="object-cover object-center rounded-full"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-black-500/20 mix-blend-overlay rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-black rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Text content - enhanced typography and spacing */}
          <div className="text-center lg:text-left w-full max-w-2xl">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide">
                Hi Good Day, I&apos;m
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                Kyle <span className="inline-block animate-wave origin-bottom-right">Cervantes</span>
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600">
                Software Developer
              </h3>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I&apos;m a student who is interested in web and mobile development. I&apos;m also a person who is interested in learning new things.
              </p>

              {/* Enhanced "Get in Touch" button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:from-gray-800 hover:to-gray-700 text-base sm:text-lg font-medium relative group"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>
            </div>

            {/* Enhanced skills slider with better spacing and animations */}
            <div className="mt-12 w-full overflow-hidden bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 ">
              <div
                ref={skillsContainerRef}
                className="flex animate-scroll gap-4 sm:gap-5 md:gap-6 py-4 sm:py-5 md:py-6"
                style={{
                  width: "calc(110px * 12)",
                  animationDuration: "25s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear"
                }}
              >
                {/* First set of skills - enhanced pill design */}
                {["HTML", "React", "Python", "JavaScript", "TypeScript", "Flutter", "PHP", "Next.js", "Photoshop"].map((skill, i) => (
                  <div
                    key={`skill-${i}`}
                    className={`flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full bg-white/80 shadow-sm hover:shadow-md transition-all hover:scale-105 hover:bg-white whitespace-nowrap ${isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${i * 100 + 300}ms` }}
                  >
                    {skillIcons[skill as keyof typeof skillIcons]}
                    <span className="text-sm sm:text-base font-medium">{skill}</span>
                  </div>
                ))}

                {/* Duplicate for infinite scroll effect */}
                {["HTML", "React", "Python", "JavaScript", "Flutter", "PHP", "Next.js", "Photoshop"].map((skill, i) => (
                  <div
                    key={`skill-dup-${i}`}
                    className={`flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full bg-white/80 shadow-sm hover:shadow-md transition-all hover:scale-105 hover:bg-white whitespace-nowrap ${isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${i * 100 + 300}ms` }}
                  >
                    {skillIcons[skill as keyof typeof skillIcons]}
                    <span className="text-sm sm:text-base font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className={`absolute bottom-10 sm:bottom-12 md:bottom-14 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'
          }`}
      >
        <div className="animate-bounce">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <path
              d="M12 4V20M12 20L6 14M12 20L18 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
