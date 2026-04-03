export const GradientBackground = () => {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 overflow-hidden h-screen w-screen'>
        <div
          className="h-full w-full bg-linear-to-b from-zinc-950 via-black to-zinc-950 opacity-60"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.5) 0%, transparent 50%)' }}
        ></div>
      </div>
    </>
  );
};