export default function PageHeader({title, subtitle, ...params}) {

    return(
        <div className="flex-col max-h-screen m-6 2xl:mx-0">
            
            <h1 className="text-3xl font-semibold">{title}</h1>
            {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
    )

};
