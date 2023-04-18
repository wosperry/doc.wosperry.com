import React from "react";
import './styles.css';

export class CustomFooter extends React.Component {
    render = () =>
        <div className="custom-footer">
            <div className="custom-footer-beian">
                <a rel="noopener" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602007491">
                    粤公网安备 44030602007491号
                </a>
                <a rel="noopener" target="_blank"  href="https://beian.miit.gov.cn/">粤ICP备2022017951号-1</a>
            </div>
        </div>
}