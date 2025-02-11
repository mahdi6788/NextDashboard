import SideNav from "../ui/dashboard/sidenav";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="flex-none w-full md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>

        // the pages inside/dashboard will automatically be nested inside a <Layout />
    )
}