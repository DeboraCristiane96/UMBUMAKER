import React from 'react';

import "./Menu.css";
import MenuItem from './MenuItem';
export default function Menu(){

    
    
    return(
        <div className="menu">
           <div className="logo">
                <a href='/'>
                    <img src="/logo.png" alt="Logo-UMBUMAKER"></img>
                </a>
           </div>
           <div className="butoes">
                <MenuItem label='DASHBOARDS'></MenuItem>

                <MenuItem  label='INSUMOS'></MenuItem>
                <MenuItem  id='bt' label="ZONAS" severity="secondary" text />
                <MenuItem id='bt' label="DISPOSITIVOS" severity="secondary" text />
                <MenuItem href='/associte'id='bt' label="ASSOCIADOS" severity="secondary" text />

           </div>
        </div>
    )
}

