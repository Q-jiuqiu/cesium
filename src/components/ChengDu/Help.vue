<!--
 * @Author: quling
 * @Date: 2022-09-05 15:07:49
 * @LastEditors: quling
 * @LastEditTime: 2022-09-05 16:01:49
 * @Description: 
-->
<template>
  <div class="help">
    <Dropdown trigger="click">
      <div class="help-block">
        <Icon type="md-help-circle" />
        <span>帮助文档</span>
        <i class="ivu-icon ivu-icon-md-arrow-dropdown arrow"></i>
      </div>
      <template #list>
        <DropdownMenu>
          <DropdownItem name="111"><a
              href="https://www.baidu.com/"
              target="_blank"
            >驴打滚</a></DropdownItem>
          <DropdownItem name="222"><a
              href="https://www.baidu.com/"
              target="_blank"
            >炸酱面</a></DropdownItem>
          <DropdownItem name="333">豆汁儿</DropdownItem>
          <DropdownItem name="444">冰糖葫芦</DropdownItem>
          <DropdownItem name="555">北京烤鸭</DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.help {
  &-block {
    cursor: pointer;
    color: #fff;
    .arrow {
      vertical-align: baseline;
    }
  }
}
.ivu-select-dropdown {
  max-height: 18rem;
  .ivu-dropdown-item {
    text-align: center;
    font-size: 1.083rem;
    a {
      color: inherit;
    }
    .NrSvgIcon {
      margin-right: 5px;
    }
    &:hover {
      color: #15b2ac;
    }
    &:last-child {
      &:hover {
        // color: $colorff181d;
      }
    }
  }
}
</style>