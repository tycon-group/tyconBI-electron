<template>
  <div class="personInfo" v-show="flagTS">
    <div class="personImages">
      <img class="personImage" v-bind:src="this.avatar"  alt="暂无头像"/>
    </div>

    <div class="manInfo">
      <div class="row">
        <div class="row_left">姓名：{{ zhName }}  {{ enName }}</div>
        <div class="row_right">性别：{{ gender }}</div>
      </div>
      <div class="row">
        <div class="row_left">工号：{{ empID }}</div>
        <div class="row_right">学历：{{ education }}</div>
      </div>
      <div class="row">
        <div class="row_left">职位：{{ zhPosition }}</div>
        <div class="row_right">入职日期：{{ dateOfHire }}</div>
      </div>
      <div class="row">
        <div class="row_left">连续工龄：{{ yearForWork }}</div>
        <div class="row_right">在职工龄：{{ yearInCompany }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Bus from './bus';

export default {
  name: 'PersonInfo',
  data() {
    return {
      flagTS: false,
      itemUrl: [],
      itemData: [],
      zhName: '',
      enName: '',
      gender: '',
      zhPosition: '',
      education: '',
      empID: '',
      dateOfHire: '',
      yearForWork: '',
      yearInCompany: '',
      avatar: '',
    };
  },
  created() {
    const vm = this;
    // 用$on事件来接收参数
    Bus.$on('itemUrl', (data) => {
      vm.itemUrl = data;
      console.log(this.itemUrl, '测试'); // 这里取到了被点击的列表所对应的人员的信息链接
      const url = this.itemUrl;
      this.$http.get(url)
        .then((res) => {
          this.itemData = res.data;
          this.zhName = this.itemData.name;
          this.enName = this.itemData.enName;
          // 职位数组变为只取第一个元素的值
          const zhPositions = this.itemData.roles[0];
          console.log(zhPositions);
          this.zhPosition = zhPositions;
          // 判断性别
          const sex = this.itemData.gender;
          if (sex === 'M') {
            this.gender = '男';
          } else {
            this.gender = '女';
          }
          // 学历
          const educations = this.itemData.education;
          if (educations !== null) {
            this.education = this.itemData.education;
          } else {
            this.education = '暂无学历信息';
          }
          // 生日
          const empIDs = this.itemData.empID;
          if (empIDs !== null) {
            this.empID = this.itemData.empID;
          } else {
            this.empID = '暂无工号信息';
          }
          // 入职时间
          const dateOfHires = this.itemData.dateOfHire;
          if (dateOfHires !== null) {
            this.dateOfHire = this.itemData.dateOfHire;
          } else {
            this.dateOfHire = '暂无入职时间信息';
          }
          this.avatar = this.itemData.avatar;
          // 获取当前时间
          const date1 = new Date();
          // 获取开始工作日期，（工作年限）
          // eslint-disable-next-line prefer-destructuring
          const dateOfStartWork = this.itemData.dateOfStartWork;
          if (dateOfStartWork !== null) {
            const date2 = new Date(dateOfStartWork);
            // eslint-disable-next-line radix,no-mixed-operators,max-len
            const monthCount = parseInt(date1.getFullYear() - date2.getFullYear()) * 12 - date2.getMonth() + date1.getMonth();
            const resM = monthCount % 12;
            // eslint-disable-next-line radix
            const resY = parseInt(monthCount / 12);
            if (resY === 0 && resM === 0) {
              this.yearForWork = '不足一个月';
            } else {
              this.yearForWork = `${resY}年${resM}月`;
            }
          } else {
            this.yearForWork = '无开始工作信息';
          }
          // 最新入职太江日期
          if (dateOfHires !== null) {
            const date2 = new Date(dateOfHires);
            // eslint-disable-next-line radix,no-mixed-operators,max-len
            const monthCount = parseInt(date1.getFullYear() - date2.getFullYear()) * 12 - date2.getMonth() + date1.getMonth();
            const resM = monthCount % 12;
            // eslint-disable-next-line radix
            const resY = parseInt(monthCount / 12);
            if (resY === 0 && resM === 0) {
              this.yearInCompany = '不足一个月';
            } else {
              this.yearInCompany = `${resY}年${resM}月`;
            }
          } else {
            this.yearInCompany = '无入职时间信息';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    Bus.$on('flagTS', (data) => {
      vm.flagTS = data;
      console.log(this.flagTS, '测试2'); // 这里取到了被点击的列表所对应的人员的信息链接
    });
    // 此处写的方法专门为了测试突出贡献中的人员姓名写，后期需要删除
    Bus.$emit('test_name', this.zhName);
    console.log(this.zhName, 'dsadjasdasdjlasjdljadjla21312310938831098132093821');
  },
};
</script>

<style scoped>
.personInfo {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dddddd;
}

.personImages {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  text-align: center;
  float: left;
}
.personImage {
  margin-top: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
}

.manInfo {
  width: 80%;
  height: 100%;
  float: left;
  padding: 20px;
}
.row {
  width: 100%;
  height: 25%;
  float: left;
}
.row_left {
  width: 58%;
  height: 100%;
  float: left;
  margin-left: 2%;
}
.row_right {
  width: 37%;
  height: 100%;
  margin-left: 3%;
  float: left;
}
</style>
