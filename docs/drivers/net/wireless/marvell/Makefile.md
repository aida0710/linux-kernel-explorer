---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/marvell/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_LIBERTAS)		+= libertas/

obj-$(CONFIG_LIBERTAS_THINFIRM)	+= libertas_tf/
obj-$(CONFIG_MWIFIEX)	+= mwifiex/

obj-$(CONFIG_MWL8K)	+= mwl8k.o

```
