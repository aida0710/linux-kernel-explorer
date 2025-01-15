---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/intel/iwlwifi/mvm/tests/Makefile`

### コンテンツ

```txt
iwlmvm-tests-y += module.o links.o scan.o

obj-$(CONFIG_IWLWIFI_KUNIT_TESTS) += iwlmvm-tests.o

```
