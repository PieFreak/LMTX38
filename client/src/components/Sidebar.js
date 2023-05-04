import { useEffect, useState } from 'react';


export default function Sidebar({ sideItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [rounds, setRounds] = useState();
    const [completeRounds, setCompleteRounds] = useState();

    return (
        <div className="d-flex position-absolute">
            <div className={`ps-5 pt-3 bg-light pe-5 vh-100 ${isOpen && 'd-none'}`}>
                <ul className='text-black d-flex flex-column pt-5 gap-3 list-unstyled'>
                    {sideItems.map((sideItem) => (
                        <li key={sideItem.id} className="d-flex align-items-center justify-content-start">
                            <a className="text-black" href={`#${sideItem.id}`}>
                                {sideItem.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`flex-1 bg-light ${isOpen && "rounded"}`}>
                <button
                    className="bg-light px-2 py-3 rounded border-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="gg-menu-left" />
                </button>
            </div>
        </div>
    )
}