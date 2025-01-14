---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/broadcom/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_BCM47XX_NVRAM)		+= bcm47xx_nvram.o
obj-$(CONFIG_BCM47XX_SPROM)		+= bcm47xx_sprom.o
obj-$(CONFIG_TEE_BNXT_FW)		+= tee_bnxt_fw.o

```
