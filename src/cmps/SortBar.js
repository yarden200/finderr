import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const SortBar = () => {


    return (
        <div className="sort-bar">

            <div className="sort-bar-menu">
                <div className='menu-title flex align-center'>
                    <p>Budget</p>
                    <span className='arrow-container'><KeyboardArrowDownIcon fontSize='small' /></span>
                </div>
                <div className='menu-content'>
                    <div className='budget-filter flex'>
                        <div className='input-wrapper'>
                            <label>
                                MIN.
                                <input placeholder='Any'></input>
                            </label>
                        </div>
                        <div className='input-wrapper'>
                            <label>
                                MAX.
                                <input placeholder='Any'></input>
                            </label>
                        </div>
                    </div>
                    <div className='btns-row flex space-between'>
                        <button>Clear All</button>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}