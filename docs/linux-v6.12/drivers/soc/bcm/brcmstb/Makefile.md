---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/bcm/brcmstb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y				+= common.o biuctrl.o
obj-$(CONFIG_BRCMSTB_PM)	+= pm/

```
