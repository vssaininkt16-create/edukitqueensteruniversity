import React from 'react';

const DynamicRenderer = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return <div>No content available</div>;
  }

  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return <HeroBlock key={index} {...block.data} />;
          case 'text':
            return <TextBlock key={index} {...block.data} />;
          case 'image':
            return <ImageBlock key={index} {...block.data} />;
          case 'cards':
            return <CardsBlock key={index} {...block.data} />;
          // Add more cases as needed
          default:
            return <div key={index}>Unknown block type: {block.type}</div>;
        }
      })}
    </div>
  );
};

// Example block components - customize based on actual API structure
const HeroBlock = ({ title, subtitle, backgroundImage }) => (
  <section
    className="relative min-h-[70vh] flex items-center"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative max-w-7xl mx-auto px-6 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4">{subtitle}</p>
    </div>
  </section>
);

const TextBlock = ({ content }) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
);

const ImageBlock = ({ src, alt }) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <img src={src} alt={alt} className="w-full" />
    </div>
  </section>
);

const CardsBlock = ({ cards }) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="border rounded-lg p-6">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default DynamicRenderer;
