const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto xl:px-20 ">
      {children}
    </div>
  );
}

export default Container
