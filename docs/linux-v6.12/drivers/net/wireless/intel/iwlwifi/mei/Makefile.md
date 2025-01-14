---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/intel/iwlwifi/mei/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_IWLMEI)	+= iwlmei.o
iwlmei-y += main.o
iwlmei-y += net.o
iwlmei-$(CONFIG_IWLWIFI_DEVICE_TRACING) += trace.o
CFLAGS_trace.o := -I$(src)

ccflags-y += -I $(src)/../

```
