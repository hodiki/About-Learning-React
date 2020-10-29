import React from 'react'
import {shallow , render ,mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Link from '../Link'

configure({
    adapter : new Adapter()
})

//shallow浅层渲染,一层dom
//mount，整个组件，生命周期都渲染
//render,通过类似于jq选择器的方式

test('Link 组件的文本应该等于传入的props.label',()=>{
    //shallow
    var link = shallow(<Link label='百毒不侵'></Link>)
    expect(
        // link.text()
        link.find('#label').text()
    ).toEqual('百毒不侵')

    //render
    var link_2 = render(<Link label='百毒不侵'></Link>)
    console.log(
        link_2.find('#label').text()
    )
})

test('点击Link的时候，其类名应该为‘active’',()=>{
    //shallow
    var link = shallow(<Link label="百毒不侵"></Link>)
    link.simulate('click')
    expect(
        link.props().className
    ).toEqual('active')

    //mount
    var link_2 = mount(<Link label="百毒不侵"></Link>)
    link_2.simulate('click')
    expect(
        link_2.getDOMNode().className
    ).toEqual('active')
})