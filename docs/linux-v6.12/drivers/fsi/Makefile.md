---
sidebar_position: 16
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/fsi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_FSI) += fsi-core.o
obj-$(CONFIG_FSI_MASTER_HUB) += fsi-master-hub.o
obj-$(CONFIG_FSI_MASTER_ASPEED) += fsi-master-aspeed.o
obj-$(CONFIG_FSI_MASTER_GPIO) += fsi-master-gpio.o
obj-$(CONFIG_FSI_MASTER_I2CR) += fsi-master-i2cr.o
obj-$(CONFIG_FSI_MASTER_AST_CF) += fsi-master-ast-cf.o
obj-$(CONFIG_FSI_SCOM) += fsi-scom.o
obj-$(CONFIG_FSI_SBEFIFO) += fsi-sbefifo.o
obj-$(CONFIG_FSI_OCC) += fsi-occ.o
obj-$(CONFIG_I2CR_SCOM) += i2cr-scom.o

```
