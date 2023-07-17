import React, { useState } from 'react'

const ToggleableTab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(tabs[0]);

    console.log(tabs)

  return (
    <>
    
    <div style={{display:'flex', width:'400px', justifyContent:'space-around'}}>
    {
        tabs.map(tab=>(
            <p onClick={()=>setActiveTab(tab)} className={activeTab.label===tab.label ? "active" : ''}>{tab.label}</p>
        ))
    }
    </div>

    {
        activeTab.value
    }

    </>
    )
}

export default ToggleableTab