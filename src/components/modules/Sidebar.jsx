import React from 'react'
import SidebarLayout from '../layouts/SidebarLayout'
import { HiOutlineBars3BottomLeft, HiOutlineHome } from 'react-icons/hi2'
import { TiUploadOutline } from 'react-icons/ti'
import { PiFilmScript } from 'react-icons/pi'
import { LuBookOpenCheck } from 'react-icons/lu'
import { FaCopyright } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import { TbReportSearch } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
    return (
        <SidebarLayout>
            <ul className='flex flex-col gap-2 text-xl'>
                <li>
                    <button>
                        <HiOutlineBars3BottomLeft
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <HiOutlineHome
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <TiUploadOutline
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <PiFilmScript
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <LuBookOpenCheck
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <FaCopyright
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <GrMoney
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <TbReportSearch
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <GiReceiveMoney
                            size={25}
                        />
                    </button>
                </li>
                <li>
                    <button>
                        <CgProfile
                            size={25}
                        />
                    </button>
                </li>
            </ul>
        </SidebarLayout>
    )
}

export default Sidebar
