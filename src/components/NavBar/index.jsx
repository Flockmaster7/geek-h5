/*
 * @Author: webcc
 * @Date: 2022-10-28 16:14:43
 * @LastEditTime: 2022-10-30 22:29:25
 * @email: webcc.coder@qq.com
 */
import React from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useHistory } from 'react-router-dom'
// withRouter高阶组件可以让非路由组件拥有history
// hooks： useHistory useParams useLocation
// import { withRouter } from 'react-router-dom'
const NavBar = function NavBar({ children, extra, className, onLeftClick }) {
    const history = useHistory()
    const back = () => {
        if (onLeftClick) {
            onLeftClick();
        } else {
            history.go(-1)
        }
    }
    return (
        <div className={classNames(styles.root, className)}>
            {/* 后退按钮 */}
            <div className="left" onClick={back}>
                <Icon type="iconfanhui" />
            </div>
            {/* 居中标题 */}
            <div className="title">{children}</div>

            {/* 右侧内容 */}
            <div className="right">{extra}</div>
        </div>
    )
}
export default NavBar
