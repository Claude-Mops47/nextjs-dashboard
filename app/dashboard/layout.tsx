import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ childern }: { childern: React.ReactNode }) {
  return (
    <div className="flex-co flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="md:p-&é flex-grow p-6 md:overflow-y-auto">{childern}</div>
    </div>
  );
}
