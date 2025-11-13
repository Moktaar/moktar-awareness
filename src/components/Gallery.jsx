export default function Gallery() {
  const images = [
    "jack (1).png",
    "jack (2).png",
    "jack (3).png",
    "jack (4).png",
    "jack (5).png",
    "jack (6).png",
    "jack (7).png",
    "jack (8).png"
  ];

  return (
    <section style={{
      padding: '2rem',
      backgroundColor: '#1e1e1e',
      color: '#b2f5ea',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Mythic Gallery</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={`/assets/${img}`}
            alt={`Mythic Image ${index + 1}`}
            style={{
              width: '200px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 0 10px #3182ce'
            }}
          />
        ))}
      </div>
    </section>
  );
}