import NavMenu from './NavMenu';
import { ModeToggle } from '../mode-toggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-4 border-b border-border">
      <h1 className="text-2xl font-bold">Hammed Anuoluwapo Pelumi <span className="text-primary">(tgenericx)</span></h1>
      <div className="flex gap-4 items-center">
        <NavMenu />
        <ModeToggle />
      </div>
    </header>
  );
}
