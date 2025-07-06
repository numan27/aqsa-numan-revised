import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate array of gallery image paths
    const galleryImages = Array.from(
      { length: 40 },
      (_, i) => `/gallery/gallery-${i + 1}.jpeg`
    );
    setImages(galleryImages);
  }, []);

  // Helper function to get images for each column (10 images each)
  const getColumnImages = (startIndex: number) => {
    return images.slice(startIndex, startIndex + 10);
  };

  // Helper function to create duplicated array for seamless looping
  const createLoopArray = (images: string[], duplicates: number = 3) => {
    return Array.from({ length: duplicates }, () => images).flat();
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of moments, projects, and experiences from my journey
            in design and technology.
          </p>
        </div>

        {/* Vertical Slider Container */}
        <div className="relative h-[600px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 h-full w-full">
            {/* Column 1 - slides down (images 1-10) */}
            <motion.div
              className="flex flex-col gap-4 w-full"
              animate={{
                y: [0, -1200],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {createLoopArray(getColumnImages(0), 4).map((image, index) => (
                <div
                  key={`col1-${index}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group w-full"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>

            {/* Column 2 - slides up (images 11-20) */}
            <motion.div
              className="flex flex-col gap-4 w-full"
              animate={{
                y: [-1200, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {createLoopArray(getColumnImages(10), 4).map((image, index) => (
                <div
                  key={`col2-${index}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group w-full"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 11}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>

            {/* Column 3 - slides down (images 21-30) */}
            <motion.div
              className="flex flex-col gap-4 w-full"
              animate={{
                y: [0, -1200],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {createLoopArray(getColumnImages(20), 4).map((image, index) => (
                <div
                  key={`col3-${index}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group w-full"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 21}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>

            {/* Column 4 - slides up (images 31-40) - desktop only */}
            <motion.div
              className="hidden xl:flex flex-col gap-4 w-full"
              animate={{
                y: [-1200, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {createLoopArray(getColumnImages(30), 4).map((image, index) => (
                <div
                  key={`col4-${index}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg group w-full"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 31}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/20 to-transparent pointer-events-none" />
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">40+</div>
              <div className="text-muted-foreground">Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Columns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">∞</div>
              <div className="text-muted-foreground">Continuous Loop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
