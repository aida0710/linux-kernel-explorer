---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/qlogic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the QLogic network device drivers.
#

obj-$(CONFIG_QLA3XXX) += qla3xxx.o
obj-$(CONFIG_QLCNIC) += qlcnic/
obj-$(CONFIG_NETXEN_NIC) += netxen/
obj-$(CONFIG_QED) += qed/
obj-$(CONFIG_QEDE)+= qede/

```
