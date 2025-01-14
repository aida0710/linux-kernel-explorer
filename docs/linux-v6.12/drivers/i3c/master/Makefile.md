---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/i3c/master/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CDNS_I3C_MASTER)		+= i3c-master-cdns.o
obj-$(CONFIG_DW_I3C_MASTER)		+= dw-i3c-master.o
obj-$(CONFIG_AST2600_I3C_MASTER)	+= ast2600-i3c-master.o
obj-$(CONFIG_SVC_I3C_MASTER)		+= svc-i3c-master.o
obj-$(CONFIG_MIPI_I3C_HCI)		+= mipi-i3c-hci/

```
