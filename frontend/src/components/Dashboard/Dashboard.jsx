import React , { useState } from 'react'
import add from '../../assets/images/dashboard_icons/add_icon.svg'
import active_icon from '../../assets/images/dashboard_icons/1st_icon.svg'
import project_icon from '../../assets/images/dashboard_icons/projects_icon.svg'
import task_icon from '../../assets/images/dashboard_icons/tasks_icon.svg'
import dashboard_icon from '../../assets/images/dashboard_icons/dashboard_icon.svg'
import time_icon from '../../assets/images/dashboard_icons/time_icon.svg'
import resource_icon from '../../assets/images/dashboard_icons/resource_icon.svg'
import employee_icon from '../../assets/images/dashboard_icons/team_icon.svg'
import template_icon from '../../assets/images/dashboard_icons/template_icon.svg'
import settings_icon from '../../assets/images/dashboard_icons/settings_icon.svg'
import query_icon from '../../assets/images/dashboard_icons/query_icon.svg'
import dash_rev_icon from '../../assets/images/dashboard_icons/dashboard_data_icons/revenue_icon.svg'
import dash_time_icon from '../../assets/images/dashboard_icons/dashboard_data_icons/time_icon.svg'
import dash_empl_icon from '../../assets/images/dashboard_icons/dashboard_data_icons/employee_icon.svg'
import map from '../../assets/images/map.png'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

function Dashboard() {

    const Dashboard = () => {
        // State for all elements
        const [totalRevenue, setTotalRevenue] = useState(1230000);
        const [timeSpent, setTimeSpent] = useState(1500);
        const [activeEmployees, setActiveEmployees] = useState(45);
        const [projectSummary, setProjectSummary] = useState({
            total: 20,
            completed: 15,
            pending: 5
        });
        const [projectsStatus, setProjectsStatus] = useState({
            ongoing: 3,
            delayed: 2
        });
        const [companies, setCompanies] = useState(10);

    }


    const projects = {
        one: {
            totalRevenue: 100000,  
            timeSpent: 150,        
            employees: 100,
            Project_manager: 'Rohit Yadav',
            due_date: '06/11/2025',
            status: 'Completed',
            progress: '84%'          
        },
        two: {
            totalRevenue: 250000,  
            timeSpent: 300,        
            employees: 96,
            Project_manager: 'Ankur Dwivedi',
            due_date: '11/09/2025',
            status: 'in progress',
            progress: '54%'     
        },
        three: {
            totalRevenue: 50000,   
            timeSpent: 80,         
            employees: 102,
            Project_manager: 'Abhay Shukla',
            due_date: '06/08/2026',
            status: 'delayed',
            progress: '10%'
        }
    };

    return (
        <>
            <div className='bg-[#030E19] text-white w-[20vw] h-screen fixed py-[100px] px-[36px]'>
                <div className='mb-[4rem] bg-white text-black h-[57.6px] w-[220.8px] rounded-[28.8px] flex gap-[12px] cursor-pointer items-center px-2'>
                    <img src={add} alt="" />
                    <p>Create new project</p>
                </div>
                <div className='grid gap-2'>
                    <div id='abcd' className='border-[1.2px] text-[#19A64C] rounded-[19.2px] h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] border-[#19A64C] cursor-pointer'>
                        <img src={active_icon} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={project_icon} alt="" />
                        <p>Projects</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={task_icon} alt="" />
                        <p>Tasks</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={dashboard_icon} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={time_icon} alt="" />
                        <p>Timelog</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={resource_icon} alt="" />
                        <p>Resources</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={employee_icon} alt="" />
                        <p>Employees</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={template_icon} alt="" />
                        <p>Project template</p>
                    </div>
                    <div className='h-[57.6] w-[220.8px] flex gap-[19.2px] px-4 py-[15.6px] cursor-pointer border-transparent border-[1px] hover:border-[#19A64C] rounded-[19.2px]'>
                        <img src={settings_icon} alt="" />
                        <p>Menu settings</p>
                    </div>
                </div>
                <div className='mt-[2rem]'>
                    <img src={query_icon} alt="" />
                </div>
            </div>

            <div className='text-white h-screen  w-[80vw] fixed right-0 p-6'>
                <div className='text-white flex justify-between items-center'>
                    <div className='font-semibold text-3xl'>
                        Dashboard
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex border-[#1889DF] justify-start items-center gap-2 border-[1px] rounded-[16px] w-[407px] h-[57.6px] px-4'>
                            <div className='text-[#1889DF] text-2xl'>
                            <CiSearch />
                            </div>
                            Search for anything....
                        </div>
                        <div className='border-[1px] border-[#1889DF] flex justify-center text-[#1889DF] items-center text-2xl rounded-[16px] h-[57.6px] w-[57.6px]'>
                            <IoIosNotificationsOutline />
                        </div>
                        <select className='w-[230.2px] h-[57.6px]  px-2 rounded-[16px] bg-transparent border-[1px] border-[#1889DF]' id="options" name="options">
                                <option value="option1" className='text-black'>Admin 1</option>
                                <option value="option2" className='text-black'>Admin 2</option>
                                <option value="option3" className='text-black'>Admin 3</option>
                                <option value="option4" className='text-black'>Admin 4</option>
                        </select>
                    </div>
                </div>
                <div className='flex px-2 justify-between mt-6'>
                    <div className='font-medium text-lg'>Overview</div>
                    <div>
                        <label  for="options"></label>
                            <select className='w-[128.8px] h-[40.8px] text-white bg-[#1889DF] px-2 rounded-full' id="options" name="options">
                                <option value="option1">Project 1</option>
                                <option value="option2">Project 2</option>
                                <option value="option3">Project 3</option>
                            </select>
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6">
                        <div>
                            <img src={dash_rev_icon} alt="" />
                        </div>
                        <h2 className="text-xl  mb-4 mt-4">Total Revenue</h2>
                        <p className="text-2xl font-bold">{`Rs ${projects.one.totalRevenue}`}</p>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6">
                        <div>
                            <img src={dash_time_icon} alt="" />
                        </div>
                        <h2 className="text-xl  mb-4 mt-4">Time spent</h2>
                        <p className="text-2xl font-bold">{` ${projects.one.timeSpent}/200 days`}</p>
                        <p className="text-md">58 days remaining</p>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6">
                        <div>
                            <img src={dash_empl_icon} alt="" />
                        </div>
                        <h2 className="text-xl  mb-4 mt-4">Active employees</h2>
                        <p className="text-2xl font-bold">{` ${projects.one.employees}`}</p>
                        <p className="text-md">84% on work</p>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6 lg:col-span-2">
                        <div className='text-center font-semibold text-lg flex justify-between'>
                            <div>
                                Project summary
                            </div>
                            <select className='w-[110px] h-[40.8px] text-white bg-transparent border-[1px] border-[#1889DF]  px-2 rounded-full' id="options" name="options">
                                    <option value="option1" className='bg-black'>Status</option>
                                    <option value="option2" className='bg-black'>Completed</option>
                                    <option value="option3" className='bg-black'>Delayed</option>
                                    <option value="option4" className='bg-black'>In progress</option>
                            </select>
                        </div>
                        <div className=''>
                            <div className='flex justify-between font-semibold mb-6 mt-6'>
                                <div>Name</div>
                                <div className='flex gap-12'>
                                    <div>Project manager</div>
                                    <div>Due date</div>
                                    <div>Status</div>
                                    <div>Progress</div>
                                </div>
                            </div>

                            <div className='grid gap-8'>
                            <div className='flex justify-between'>
                                <div>Project one</div>
                                <div className='flex gap-12'>
                                    <div>{projects.one.Project_manager}</div>
                                    <div>{projects.one.due_date}</div>
                                    <div>{projects.one.status}</div>
                                    <div>{projects.one.progress}</div>
                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <div>Project two</div>
                                <div className='flex gap-12'>
                                    <div>{projects.two.Project_manager}</div>
                                    <div>{projects.two.due_date}</div>
                                    <div>{projects.two.status}</div>
                                    <div>{projects.two.progress}</div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>Project three</div>
                                <div className='flex gap-12'>
                                    <div>{projects.three.Project_manager}</div>
                                    <div>{projects.three.due_date}</div>
                                    <div>{projects.three.status}</div>
                                    <div>{projects.three.progress}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <div className='font-semibold text-lg'>
                                Projects
                            </div>
                            <div>
                                <select className='w-[87px] h-[40.8px] text-white bg-transparent border-[1px] border-[#1889DF]  px-2 rounded-full' id="options" name="options">
                                    <option value="option1" className='bg-black'>All</option>
                                    <option value="option2" className='bg-black'>Project 1</option>
                                    <option value="option3" className='bg-black'>Project 2</option>
                                    <option value="option4" className='bg-black'>Project 3</option>
                                    <option value="option4" className='bg-black'>Project 4</option>
                                    <option value="option4" className='bg-black'>Project 5</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-[20px] place-items-center'>
                            <div className='grid place-items-center gap-4'>
                                <div>
                                    Total projects
                                </div>
                                <div className='border-[1px] rounded-full aspect-[1/1] flex justify-center items-center text-white h-[50px] border-white'>
                                    100
                                </div>
                            </div>
                            <div className='grid place-items-center gap-4'>
                                <div>
                                    Completed
                                </div>
                                <div className='border-[1px] h-[50px] rounded-full aspect-[1/1] flex justify-center items-center text-green-500 border-green-500'>
                                    30
                                </div>
                            </div>
                            <div className='grid place-items-center gap-4'>
                                <div>
                                    Delayed
                                </div>
                                <div className='border-[1px] h-[50px] rounded-full aspect-[1/1] flex justify-center items-center text-red-500 border-red-500'>
                                    25
                                </div>
                            </div>
                            <div className='grid place-items-center gap-4'>
                                <div>
                                    On going
                                </div>
                                <div className='border-[1px] h-[50px] rounded-full aspect-[1/1] flex justify-center items-center text-yellow-500 border-yellow-500'>
                                    45
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6 lg:col-span-2">
                        <div className='flex justify-between font-semibold text-lg'>
                            <div>

                            Map based tracking
                            </div>
                            <div>View in map</div>
                        </div>
                        <div className='mt-6 border-[1px] h-[120px] rounded-[19.2px] flex justify-center items-center relative overflow-hidden z-[2]'>
                            <a href="abcd.html" target='_blank' className='text-black border-[2px] border-[#1889DF]'>
                            <img src={map} alt=""  className='h-[inherit]'/>
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#04101E] text-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                                <div className='font-semibold text-lg'>
                                    Complaints
                                </div>
                                <div>
                                    <select className='w-[150px] h-[40.8px] text-white bg-transparent border-[1px] border-[#1889DF]  px-2 rounded-full' id="options" name="options">
                                        <option value="option1" className='bg-black'>Last month</option>
                                        <option value="option2" className='bg-black'>Last 3 months</option>
                                        <option value="option3" className='bg-black'>Last 6 months</option>
                                        <option value="option4" className='bg-black'>Last year</option>
                                    </select>
                                </div>
                        </div>
                        <div className='flex justify-evenly mt-4'>
                            <div className='grid place-items-center gap-4'>
                                <div className='font-semibold text-lg'>Raised</div>
                                <div className='border-[1px] h-[50px] rounded-full aspect-[1/1] flex justify-center items-center text-red-500 border-red-500'>1000</div>
                            </div>
                            <div className='grid place-items-center gap-4'>
                                <div className='font-semibold text-lg'>Resolved</div>
                                <div className='border-[1px] h-[50px] rounded-full aspect-[1/1] flex justify-center items-center text-green-500 border-green-500'>990</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}


export default Dashboard
