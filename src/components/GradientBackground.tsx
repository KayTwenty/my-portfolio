export const GradientBackground = () => {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 overflow-hidden h-screen w-screen'>
        <div
          className="h-full w-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat bg-cover opacity-[0.3]"
        ></div>
      </div>
    </>
  );
};