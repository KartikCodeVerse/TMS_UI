import React from "react";
import "./SystemInfo.css";
import { VscChromeMinimize } from "react-icons/vsc";
import { RxBox } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const SystemInfo = () => {
  return (
    <div className="page_section  center">
      <div className="setting_container systemInfo_container">
        <div className="system_icons">
          <h5>System Information(Digital Key)</h5>
          <div className="system_optionIcons">
            <VscChromeMinimize />
            <RxBox />
            <RxCross2 />
          </div>
        </div>
        <div className="system_contentBox">
          <div className="system_headings">
            <div className="system_heading center">Demo(TMS)</div>
            <div className="system_heading center">Demo</div>
            <div className="system_heading center">
              Demo(TMS902342550), Email Demo@gmail.com
            </div>
            <div className="system_heading center">
              Demo Builtdate: 2/4/2022 & Reg. No: 223514
            </div>
          </div>
          <div className="info_content">
            <div className="info_detailBoxs">
              <div className="info_left">
                <p>Processor Details</p>
                <ul>
                  <li className="info_row">
                    <strong>ProcessorModel:</strong> Intel Core i7-10700K
                  </li>
                  <li className="info_row">
                    <strong>ProcessorCores:</strong> 8
                  </li>
                  <li className="info_row">
                    <strong>ProcessorThreads:</strong> 16
                  </li>
                  <li className="info_row">
                    <strong>ProcessorBaseClock:</strong> 3.80 GHz
                  </li>
                  <li className="info_row">
                    <strong>ProcessorMaxClock:</strong> 5.10 GHz
                  </li>
                  <li className="info_row">
                    <strong>ProcessorL3Cache:</strong> 16 MB
                  </li>
                  <li className="info_row">
                    <strong>ProcessorTechnology:</strong> 14nm SuperFin
                  </li>
                  <li className="info_row">
                    <strong>ProcessorSocket:</strong> LGA1200
                  </li>
                  <li className="info_row">
                    <strong>Hyper-Threading:</strong> Yes
                  </li>
                  <li className="info_row">
                    <strong>Integrated Graphics:</strong> Intel UHD Graphics 630
                  </li>
                  <li className="info_row">
                    <strong>GraphicsBaseClock:</strong> 350 MHz
                  </li>
                  <li className="info_row">
                    <strong>GraphicsMaxDynamicFrequency:</strong> 1.20 GHz
                  </li>
                </ul>
              </div>
              <div className="info_right">
                <p>OS Details</p>
                <ul>
                  <li className="info_row">
                    <strong> Name :</strong> Microsoft Windows 10 Pro
                  </li>
                  <li className="info_row">
                    <strong>BuildNumber:</strong> 15063
                  </li>
                  <li className="info_row">
                    <strong>Version:</strong> 20H2
                  </li>
                  <li className="info_row">
                    <strong>Architecture:</strong> 64-bit
                  </li>
                  <li className="info_row">
                    <strong>Manufacturer:</strong> Microsoft Corporation
                  </li>
                  <li className="info_row">
                    <strong>InstallationDate:</strong> 2022-01-01
                  </li>
                  <li className="info_row">
                    <strong>Processor:</strong> Intel Core i7
                  </li>
                  <li className="info_row">
                    <strong>Memory:</strong> 16 GB
                  </li>
                  <li className="info_row">
                    <strong>Storage:</strong> 512 GB SSD
                  </li>
                  <li className="info_row">
                    <strong>GraphicsCard:</strong> NVIDIA GeForce GTX 1660 Ti
                  </li>
                  <li className="info_row">
                    <strong>Network:</strong> Wi-Fi 6 (802.11ax)
                  </li>
                  <li className="info_row">
                    <strong> Ethernet:</strong> 1 Gbps
                  </li>
                  <li className="info_row">
                    <strong> Bluetooth:</strong> 5.1
                  </li>
                  <li className="info_row">
                    <strong> OperatingTemperature:</strong> 40°C - 80°C
                  </li>
                  <li className="info_row">
                    <strong> Battery:</strong> 6-cell Lithium-ion
                  </li>
                  <li className="info_row">
                    <strong> BatteryLife:</strong> 8 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="info_btn row">
            <div href="#">20-Dec-2022 08:12:12 PM</div>
            <div href="#">Mac Address-D0123FC123</div>
            <div className="copy_btn" href="#">
              Copy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
