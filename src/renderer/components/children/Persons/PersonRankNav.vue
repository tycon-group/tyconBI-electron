<template>
  <div class="personListNav">
    <a-tabs default-active-key="work" @change="callback">
      <a-tab-pane key="work" tab="工作能力">
        <WorkRank />
      </a-tab-pane>
      <a-tab-pane key="attitude" tab="工作态度">
        <AttitudeRank />
      </a-tab-pane>

      <a-tab-pane key="potential" tab="发展潜力">
        <PotentialRank />
      </a-tab-pane>
      <a-tab-pane key="contribution" tab="突出贡献">
        <ContributionRank />
      </a-tab-pane>
      <a-tab-pane key="law" tab="遵纪守法">
        <LawRank />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>

import WorkRank from './ranking/WorkRank';
import AttitudeRank from './ranking/AttitudeRank';
import PotentialRank from './ranking/PotentialRank';
import ContributionRank from './ranking/ContributionRank';
import LawRank from './ranking/LawRank';

export default {
  name: 'PersonListNav',
  components: {
    WorkRank,
    AttitudeRank,
    PotentialRank,
    ContributionRank,
    LawRank,
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
.personListNav{
  width: 100%;
  height: 100%;
}

</style>
