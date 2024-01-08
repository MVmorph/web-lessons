export default function Container(){
    return (
        <div className="container content-container bordered-b">
            <slot />
        </div>
    )
}