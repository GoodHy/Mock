/**
 * Author   : Syan
 * Date     : 2018/5/2
 * Project [ yiautoERP ] Coded on WebStorm.
 * 配置所有静态的Type数据
 */

/*
表单的输入项分类:
0.未分类
1.文本输入(input)
2.数字输入(number)
3.单项选择框(select)
4.动态单项选择(ajaxSelect)
5.动态多项选择(ajaxMulselect)
6.动态级联选择(ajaxCascader)
7.多选勾选(checkbox)
8.开关选择(switch)
9.星级选择(rate)
10.颜色选择(color)
11.滑动条(slider)
12.单选勾选(radio)
13.时间选择(time)
14.日期选择(date)
15.上传控件(upload)
16.批量上传(uploadList)
17.文件上传(fileUpload)
18.员工选择(personSelect)
19.城市选择(cityCascader)
20.文本域(textarea)
21.多项选择框(multiSelect)
*/
  /**
   * 客户来源
   * customerFrom Types
   * @type {Array}
   */
  export const customerFrom = [
    { value: 0, label: '顾问端获取' },
    { value: 1, label: 'App获取' }
  ];
  
  /**
   * 是否筛选项
   * customerFrom Types
   * @type {Array}
   */
  export const localBoolEnum = [
    { value: 1, label: '是' },
    { value: 0, label: '否' }
  ];
  
  /**
   * 是否筛选项
   * customerFrom Types
   * @type {Array}
   */
  export const trueFalseEnum = [
    { value: true, label: '是' },
    { value: false, label: '否' }
  ];
  
  /**
   * 客户类型
   * customerTypes Types
   * @type {Array}
   */
  export const customerTypes = [
    { value: 0, label: '首单客户' },
    { value: 1, label: '忠实客户' },
    { value: 2, label: 'App客户' },
    { value: 3, label: '顾问端客户' }
  ];
  
  /**
   * 角色数据可见性策略 Types
   * @type {Array}
   */
  export const roleStrategyOptions = [
    {
      value: 0,
      label: '全部数据'
    },
    {
      value: 1,
      label: '主管部门及下属部门'
    },
    {
      value: 2,
      label: '主管部门数据'
    },
    {
      value: 3,
      label: '所在部门数据'
    },
    {
      value: 4,
      label: '个人数据'
    }
  ];
  
  /**
   * 客户快速筛选 Types
   * 新增客户时间纬度为：客户获取时间
   * @type {Array}
   */
  export const CustomerFilters = [
    { value: '0', label: '全部客户' },
    { value: '1', label: '我负责的客户' },
    { value: '2', label: '我协同的客户' },
    { value: '3', label: '下属负责的客户' },
    { value: '4', label: '下属协同的客户' },
    { value: '5', label: '今日新增客户' },
    { value: '6', label: '本周新增客户' }
  ];
  
  /**
   * 性别选项 Types
   * @type {Array}
   */
  export const sexOptions = [
    { value: 0, label: '未知' },
    { value: 1, label: '男' },
    { value: 2, label: '女' }
  ];
  
  export const orderTypeLocalOptions = [
    { value: 0, label: '零售' },
    { value: 5, label: '垫资' },
    { value: 7, label: '批售' },
    { value: 8, label: '保险' }
  ];
  
  /**
   * 新建线索业务类型 Types
   * @type {Array}
   */
  export const orderTypeNewOptions = [
    { value: 7, label: '批售业务' },
    { value: 5, label: '垫资业务' }
  ];
  
  /**
   * 车源类型 Types
   * @type {Array}
   */
  export const carSourceOptions = [
    { value: 0, label: '未售-集采' },
    { value: 1, label: '未售-零采' },
    { value: 2, label: '已售-垫资' },
    { value: 3, label: '已售-零采' },
    { value: 4, label: '展车-可售' },
    { value: 5, label: '展车-三方' },
    { value: 6, label: '集采' }
  ];
  /**
   * 发票类型 Types
   * @type {Array}
   */
  export const invoiceOptions = [
    { value: 0, label: '店票' },
    { value: 1, label: '汽车票' }
  ];
  /**
   * 物流方式
   * @type {Array}
   */
  export const logisticsTypes = [
    { value: 0, label: '不包物流' },
    { value: 1, label: '包物流' }
  ];
  /**
   * 字典类型
   * @type {*[]}
   */
  export const DictTypes = [
    { value: 0, label: '字符串' },
    { value: 1, label: 'Integer类型' },
    { value: 2, label: 'Long类型' },
    { value: 3, label: 'FLOAT类型' },
    { value: 4, label: 'DOUBLE类型' },
    { value: 5, label: 'BOOLEAN类型' },
    { value: 6, label: '日期类型' },
    { value: 7, label: 'Map对象' },
    { value: 8, label: 'json对象的字符串' },
    { value: 9, label: 'json数组的字符串' }
  ];
  
  export const CustomerEditOptions = [
    {
      label: '客户来源',
      key: 'origin',
      rules: [{ required: true, message: '请选择客户来源', trigger: 'blur' }],
      hide: false,
      readonly: false,
      input: {
        type: 'select',
        placeholder: '请选择客户来源',
        options: 'customerOrigin'
      }
    },
    {
      label: '客户类型',
      key: 'type',
      rules: [{ required: true, message: '请选择客户类型', trigger: 'blur' }],
      hide: false,
      readonly: false,
      input: {
        type: 'select',
        placeholder: '请选择客户类型',
        options: 'customerType'
      }
    },
    {
      label: '客户等级',
      key: 'level',
      rules: [{ required: true, message: '请选择客户等级', trigger: 'blur' }],
      hide: false,
      readonly: false,
      input: {
        type: 'select',
        placeholder: '请选择客户等级',
        options: 'customerLevel'
      }
    }
  ];
  
  export const orderColumns = {
    status: '订单状态',
    orderNo: '订单编号',
    receiptsNo: '单据编号',
    orderContractStatus: '单据状态',
    carName: '车型',
    areaName: '订单所在地区',
    orderType: '业务类型',
    belongStoreId: '负责门店',
    name: '客户名称',
    createTime: '订单创建时间',
    updateTime: '订单更新时间'
  };
  
  export const orderInfoKey = [
    { label: '客户姓名', click: true, key: 'name', drawerType: 0 },
    { label: '客户电话', click: false, key: 'mobile' },
    { label: '车型信息', click: false, key: 'carName' },
    { label: '外观', click: false, key: 'appearance' },
    { label: '内饰', click: false, key: 'interior' },
    { label: '订单编号', click: false, key: 'orderNo' },
    { label: '单据编号', click: false, key: 'receiptsNo' },
    { label: '单据负责人', click: false, key: 'responsible' },
    { label: '业务部门', click: false, key: 'businessDept' },
    { label: '业务类型', click: false, key: 'orderType' },
    { label: '关联线索', click: true, key: 'clueNo', drawerType: 3 },
    { label: '关联地推人', click: false, key: 'groundPromotionName' },
    { label: '关联经纪人', click: false, key: 'agentName' },
    { label: '订车方式', click: false, key: 'shoppingWay' },
    { label: '门店信息', click: false, key: 'groundStoreDTO' },
    { label: '订单生成时间', click: false, key: 'createTime' },
    { label: '订单更新时间', click: false, key: 'updateTime' },
    // { label: '实际交车时间', click: false, key: 'deliveryTime' },
    { label: '订单完成时间', click: false, key: 'finishTime' }
    // { label: '关联合并订单', click: false, key: 'dffdsf' }
  ];
  
  const retailKey = [
    { label: '经销商', click: false, key: 'distributorName' },
    { label: '联系地址', click: false, key: 'address' },
    { label: '统一社会信用代码', click: false, key: 'creditCode' },
    { label: '联系人', click: false, key: 'contactUser' },
    { label: '电话', click: false, key: 'phone' },
    ...orderInfoKey
  ];
  
  export const getOrderInfoArr = detailData => {
    let { orderType = {} } = detailData;
    let form = orderType.code === 5 ? retailKey : orderInfoKey;
    const arr = form.map(v => {
      let str =
        (!!detailData[v.key] && detailData[v.key].name) ||
        detailData[v.key] ||
        '';
      if (!!str && v.key === 'appearance') {
        console.log('str======>>>>', str);
        // try {
        //   let appearance = JSON.parse(str);
        //   str = appearance.name || '';
        // } catch (e) {
        //   str = '';
        // }
        let appearance = {};
        try {
          appearance = JSON.parse(str);
        } catch (error) {
          appearance = { name: str };
        }
        str = appearance.name || '';
      }
      if (!!str && v.key === 'interior') {
        // try {
        //   let interior = JSON.parse(str);
        //   if (interior.colors) {
        //     str = interior.colors.map(c => c.name).join('/');
        //   } else {
        //     str = '';
        //   }
        // } catch (e) {
        //   str = '';
        // }
        let interior = {};
        try {
          interior = JSON.parse(str);
        } catch (error) {
          interior = { colors: str };
        }
        if (interior.colors) {
          str = Array.isArray(interior.colors)
            ? interior.colors.map(c => c.name).join('/')
            : str;
        } else {
          str = '';
        }
      }
      if (!!str && v.key === 'groundStoreDTO') {
        str = str.storeName;
      }
      return {
        ...v,
        value: str
      };
    });
    return arr;
  };
  
  export const customerInfoKey = [
    { label: '客户名称', isClick: false, key: 'name' },
    { label: '名称备注', isClick: false, key: 'nickname' },
    { label: '客户编号', isClick: false, key: 'customerNo' },
    { label: '客户电话', isClick: false, key: 'mobile' },
    { label: '客户状态', isClick: false, key: 'followUpStatus' },
    { label: '客户来源', isClick: false, key: 'origin' },
    { label: '客户类型', isClick: false, key: 'type' },
    { label: '客户行业', isClick: false, key: 'industry' },
    { label: '客户等级', isClick: false, key: 'level' },
    { label: '客户地区', isClick: false, key: 'address' },
    { label: '客户生成时间', isClick: false, key: 'createdTime' },
    { label: '客户获取时间', isClick: false, key: 'obtainTime' },
    { label: '最后跟进时间', isClick: false, key: 'lastFollowUpTime' },
    { label: '下次跟进时间', isClick: false, key: 'nextFollowUpTime' },
    { label: '客户备注', isClick: false, key: 'remark', isEllipsis: true }
  ];
  
  export const getCustomerInfoArr = detailData => {
    const arr = customerInfoKey.map(v => {
      let str =
        (!!detailData[v.key] && detailData[v.key].name) ||
        detailData[v.key] ||
        '';
      return {
        ...v,
        value: str
      };
    });
    return arr;
  };
  
  export const logisticsInfoKey = [
    { label: '客户姓名', click: true, key: 'name', drawerType: 0 },
    { label: '客户电话', click: false, key: 'mobile' },
    { label: '车型信息', click: false, key: 'carName' },
    { label: '外观', click: false, key: 'appearance' },
    { label: '内饰', click: false, key: 'interior' },
    { label: '订单编号', click: true, key: 'orderNo', drawerType: 5 },
    { label: '订单负责人', click: false, key: 'orderResponsibleName' },
    { label: '单据编号', click: false, key: 'logisticsInfoNo' },
    { label: '单据负责人', click: false, key: 'responsibleName' },
    { label: '业务类型', click: false, key: 'orderType' },
    { label: '关联线索', click: true, key: 'clueNo', drawerType: 3 },
    { label: '关联经纪人', click: false, key: 'agentName' },
    { label: '关联地推', click: false, key: 'promotionName' },
    { label: '车源类型', click: false, key: 'shoppingWay' },
    { label: '门店信息', click: false, key: 'belongStore' },
    { label: '车源方', click: false, key: 'groundStoreDTO' },
    { label: '订单生成时间', click: false, key: 'createTime' },
    { label: '订单更新时间', click: false, key: 'updateTime' },
    { label: '订单完成时间', click: false, key: 'orderFinishTime' },
    { label: '单据生成时间', click: false, key: 'deliveryTime' },
    { label: '单据完成时间', click: false, key: 'finishTime' }
  ];
  
  export const generalMethod = (data, fields) =>
    fields.map(v => {
      let str =
        (!!data[v.key] && data[v.key].name) ||
        (typeof data[v.key] === 'string' ? data[v.key] : null) ||
        '';
      if (!!str && v.key === 'appearance') {
        try {
          let appearance = JSON.parse(str);
          str = appearance.name;
        } catch (e) {
          str = '';
        }
      }
      if (!!str && v.key === 'interior') {
        try {
          let interior = JSON.parse(str);
          if (interior.colors) {
            str = interior.colors.map(c => c.name).join('/');
          } else {
            str = '';
          }
        } catch (e) {
          str = '';
        }
      }
      return {
        ...v,
        value: str
      };
    });
  
  export const getLoanPlanInfoArr = data => generalMethod(data, loanPlanInfoKey);
  export const getSettlementInfoArr = data =>
    generalMethod(data, settlementInfoKey);
  
  
  export const getLoanOrderInfoArr = data =>
    generalMethod(data, loanOrderInfoKey);
  export const getLogisticsInfoArr = data => {
    const logisticsArr = logisticsInfoKey.map(v => {
      let str =
        (!!data[v.key] && data[v.key].name) ||
        (typeof data[v.key] === 'string' ? data[v.key] : null) ||
        '';
      if (!!str && v.key === 'appearance') {
        let appearance = {};
        try {
          appearance = JSON.parse(str);
        } catch (error) {
          appearance = { name: str };
        }
        str = appearance.name || '';
      }
      if (!!str && v.key === 'interior') {
        let interior = {};
        try {
          interior = JSON.parse(str);
        } catch (error) {
          interior = { colors: str };
        }
        if (interior.colors) {
          str = Array.isArray(interior.colors)
            ? interior.colors.map(c => c.name).join('/')
            : str;
        } else {
          str = '';
        }
      }
      return {
        ...v,
        value: str
      };
    });
    return logisticsArr;
  };
  
  
  export const getAgentInfoArr = detailData => {
    const arr = anentInfoKey.map(v => {
      let str =
        (!!detailData[v.key] && detailData[v.key].name) ||
        (typeof detailData[v.key] == 'string' ? detailData[v.key] : null) ||
        '';
      if (v.key === 'card') {
        str = detailData[v.key];
      }
      return {
        ...v,
        value: str
      };
    });
    return arr;
  };
  
  //根据clueInfoKey获取详情对象
  export const getClueInfoArr = (detailData, type, keys) => {
    console.log('线索数据 ==>', detailData, type, keys);
    let data = keys || (type === 'quote' ? quoteInfoKey : clueInfoKey);
    const arr = data.map(v => {
      let str = '暂无信息';
      if (detailData[v.key] !== null && detailData[v.key] !== undefined) {
        if (typeof detailData[v.key] == 'string') {
          str = detailData[v.key];
        } else if (
          typeof detailData[v.key] == 'object' &&
          !!detailData[v.key].name
        ) {
          str = detailData[v.key].name;
        } else if (typeof detailData[v.key] == 'boolean') {
          str = !!detailData[v.key] ? '是' : '否';
        }
      }
      if (!!str && v.key === 'appearance') {
        try {
          let appearance = JSON.parse(str);
          str = appearance.name || '';
        } catch (e) {
          str = '';
        }
      }
      if (!!str && v.key === 'interior') {
        try {
          let interior = JSON.parse(str);
          if (interior.colors) {
            str = interior.colors.map(c => c.name).join('/');
          } else {
            str = '';
          }
        } catch (e) {
          str = '';
        }
      }
      return {
        ...v,
        value: str
      };
    });
    return arr;
  };
  /**
   * 跟进目的
   * purpose
   * @type {Array}
   */
  export const purposeType = [{ value: 0, label: '满意度调查' }];
  export const storeStatus = [
    { value: 0, label: '开店' },
    { value: 1, label: '关店' }
  ];
  /**
   * 精品库-精品管理-类别 Types
   * shopingJpStatus
   * @type {Array}
   */
  export const shopingJpStatus = [
    { value: 0, label: '已下线' },
    { value: 1, label: '已上线' }
  ];
  /**
   * 精品库-订单管理-状态 Types
   * shopingJpStatus
   * @type {Array}
   */
  export const shopingOrderStatus = [
    { value: 1, label: '待发起订购' },
    { value: 2, label: '待签收' },
    { value: 3, label: '已完成' },
    { value: 4, label: '已取消' }
  ];
  