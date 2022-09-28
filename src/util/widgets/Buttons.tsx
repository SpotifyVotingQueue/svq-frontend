export function MenuButton(): JSX.Element {
    return <button style={{ height: '5vh', width: '5vh', margin: 'auto', marginLeft: '2.5vh', display: 'flex' }}
        className="text-primary fill-primary">
        <svg xmlns="http://www.w3.org/2000/svg"
            style={{ height: '5vh', width: '5vh', margin: 'auto' }}
            width="24" height="24"
            viewBox="0 0 24 24"
            >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
    </button>;
}