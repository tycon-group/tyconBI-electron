<template>
  <div class="total">
    <div class="potential">
      <h4 style="margin: 16px 0">
        技能库：
      </h4>
      <div>
        <a-tag class="tags" color="#f50">
          office 精通
        </a-tag>
        <a-tag class="tags" color="#2db7f5">
          CAD 良好
        </a-tag>
        <a-tag class="tags" color="#87d068">
          Photoshop 精通
        </a-tag>
        <a-tag class="tags" color="#108ee9">
          AI 良好
        </a-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonPotential',
};
</script>

<style>
.total {
  width: 100%;
  height: 100%;
}

.potential {
  margin-top: 18px;
  width: 100%;
  height: 95%;
}

.tags {
  padding-top: 13px;
  text-align: center;
  font-size: medium;
  width: 150px;
  height: 50px;
}
</style>
