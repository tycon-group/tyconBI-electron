<template>
  <div class="groupListNav">
    <a-tabs default-active-key="total" @change="callback">
      <a-tab-pane key="total" tab="总览">
        <GroupTotal />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>
      <a-tab-pane key="work" tab="工作能力">
        <GroupWork />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>
      <a-tab-pane key="attitude" tab="工作态度">
        <GroupAttitude />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>

      <a-tab-pane key="potential" tab="发展潜力">
        <GroupPotential />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>
      <a-tab-pane key="contribution" tab="突出贡献">
        <GroupContribution />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>
      <a-tab-pane key="law" tab="遵纪守法">
        <GroupLaw />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import GroupTotal from '../children/Groups/GroupTotal';
import GroupWork from '../children/Groups/GroupWork';
import GroupAttitude from '../children/Groups/GroupAttitude';
import GroupPotential from '../children/Groups/GroupPotential';
import GroupContribution from '../children/Groups/GroupContribution';
import GroupLaw from '../children/Groups/GroupLaw';

export default {
  name: 'GroupListNav',
  components: {
    GroupTotal,
    GroupWork,
    GroupAttitude,
    GroupPotential,
    GroupContribution,
    GroupLaw,
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style scoped>
.groupListNav{
  width: 100%;
  height: 100%;
}

</style>
