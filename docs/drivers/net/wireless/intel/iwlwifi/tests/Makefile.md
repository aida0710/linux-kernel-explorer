---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/intel/iwlwifi/tests/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause

iwlwifi-tests-y += module.o devinfo.o

ccflags-y += -I$(src)/../

obj-$(CONFIG_IWLWIFI_KUNIT_TESTS) += iwlwifi-tests.o

```
