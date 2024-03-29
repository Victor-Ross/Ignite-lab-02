import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-900">
      <Logo />
    </header>
  );
};
