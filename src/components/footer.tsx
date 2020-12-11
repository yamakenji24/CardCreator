
export const FooterLayout = (): JSX.Element => {
  return (
    <footer className="w-full h-full border border-solid border-gray-300  items-center">
      <a
        href="https://github.com/yamakenji24/CardCreator"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        Created by yamakenji24
        <img className="m-2 h-8" src="https://github.com/yamakenji24.png" alt="yamakenji24" />
      </a>
   </footer>
  )
}
