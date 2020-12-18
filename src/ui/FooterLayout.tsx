import Image from 'next/image';

export const FooterLayout = (): JSX.Element => {
  return (
    <footer className="border-t border-solid border-gray-300  items-center">
      <a
        href="https://github.com/yamakenji24/CardCreator"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        Created by yamakenji24
        <Image width="40" height="40" src="https://github.com/yamakenji24.png" alt="yamakenji24" />
      </a>
   </footer>
  )
}
